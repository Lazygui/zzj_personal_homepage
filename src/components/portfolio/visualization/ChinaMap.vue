<script setup lang="ts">
import chinaMapParams from "@/libs/china";
import {onMounted, ref, computed, watch} from 'vue'
import * as echarts from "echarts"
import {useEventListener} from "@vueuse/core";
import provincialCapital from '@/libs/provincialCapital'

const props = withDefaults(defineProps<{
  showAdress: ((typeof provincialCapital)[number])[],
  adressFun?: () => void
}>(), {
  showAdress: () => {
    return []
  }
})
const echartInstance = ref<echarts.EChartsType>()
const chartRef = ref<HTMLElement>()
const options = computed(() => {
  return {
    series: [
      {
        type: 'map',
        map: 'china',
        layoutCenter: ['50%', '70%'],
        layoutSize: '110%',
        selectedMode: false,
        itemStyle: {
          areaColor: 'rgba(255,255,255,0.3)',
        },
        emphasis: {
          itemStyle: {
            areaColor: 'rgba(255,255,255,1)',
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowBlur: 20,
            borderWidth: 0,
            shadowColor: 'rgba(122,122,255,1)'
          }
        },
        data: props.showAdress.length > 0 ?
            provincialCapital.map((c: string) => {
              return {
                name: c,
                label: {
                  show: true,
                  color: 'rgba(255,255,255,1)',
                  formatter: c
                },
                itemStyle: {
                  areaColor: 'rgba(0,210,200,1)',
                }
              }
            }) : []
      }
    ]
  }
})
const obj = {
  value: 'object value',
  method: function () {
    console.log(this.value); // 使用obj的value
    return () => {
      console.log(this.value); // 这里的this不指向obj，可能会引发错误
    }
  },

};
obj.method()()

function isEmptyFunction(fn: Function | undefined | (() => void)) {
  // 如果fn不是函数，返回false
  if (typeof fn !== 'function') {
    return false;
  }
  // 转换为字符串并去除前后的空格和换行符
  const functionString = fn.toString().trim()
  //正则匹配
  let regex: RegExp = functionString.includes('function') ? /\s*\)\s*\{/ : /\s*\>\s*\{/
  const matching = functionString.split(regex)[1].trim()
  const result = matching.charAt(0)
  // 如果函数体为空，则认为是空函数
  return result === '}';
}

onMounted(() => {
  if (chartRef.value !== undefined && echarts !== undefined) {
    if (echartInstance.value === undefined) {
      echartInstance.value = echarts?.init(chartRef.value)
    }
    echarts?.registerMap('china', chinaMapParams as any)
    echartInstance.value.setOption(options.value)
    if (!isEmptyFunction(props.adressFun)) {
      echartInstance.value.on('click', (p) => {
        props.adressFun?.()
      })
    }
  }
  watch(
      options,
      (newVal, oldVal) => {
        if (chartRef.value !== undefined && echarts !== undefined) {
          if (echartInstance.value === undefined) {
            echartInstance.value = echarts?.init(chartRef.value);
          }
          echartInstance.value.setOption(options.value);
        }
      },
      {deep: true}
  );
})
useEventListener("resize", () => {
  if (echartInstance.value !== undefined) {
    echartInstance.value.resize();
  }
});
</script>

<template>
  <div class="ChinaMap">
    <div ref="chartRef" class="chart"></div>
  </div>
</template>

<style scoped lang="scss">
.ChinaMap {
  position: relative;
  width: 100%;
  height: 100%;

  .chart {
    width: 100%;
    height: 100%;
  }
}
</style>

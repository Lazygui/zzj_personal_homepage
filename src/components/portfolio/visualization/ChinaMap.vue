<script setup lang="ts">
import chinaMapParams from "@/libs/china";
import { onMounted, ref, computed, watch } from 'vue'
import * as echarts from "echarts"
import { useEventListener } from "@vueuse/core";
import provincialCapital from '@/libs/provincialCapital'
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
        data:
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
          })
      }
    ]
  }
})
onMounted(() => {
  if (chartRef.value !== undefined && echarts !== undefined) {
    if (echartInstance.value === undefined) {
      echartInstance.value = echarts?.init(chartRef.value)
    }
    echarts?.registerMap('china', chinaMapParams as any)
    echartInstance.value.setOption(options.value)
    // echartInstance.value.on('click', (p) => {
    //   if (hasProCitys.includes(p.name)) {  
    //   }
    // })
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
    { deep: true }
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

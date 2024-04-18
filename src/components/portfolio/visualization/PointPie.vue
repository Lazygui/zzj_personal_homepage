<script setup lang="ts">
import chinaMapParams from "@/libs/china";
import {computed, onMounted, ref, watch} from 'vue'
import * as echarts from "echarts"
import {useEventListener} from "@vueuse/core";
import {getRandomProvince} from "@/utils/tools";
import {randomInt} from "@/utils/randomDates";

const getEachartData = () => {
  const address = getRandomProvince(10)
  return address.map((item: string) => {
    return {value: randomInt(1, 20), name: item}
  })
}
const echartInstance = ref<echarts.EChartsType>()
const chartRef = ref<HTMLElement>()
const options = computed(() => {
  return {
    legend: {
      show: false,
    },
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: [10, 80],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: getEachartData()
      }
    ]
  }
})

onMounted(() => {
  if (chartRef.value !== undefined) {
    if (echartInstance.value === undefined) {
      echartInstance.value = echarts?.init(chartRef.value)
    }
    echarts?.registerMap('china', chinaMapParams as any)
    echartInstance.value.setOption(options.value)
  }
  watch(
      options,
      (newVal, oldVal) => {
        if (chartRef.value !== undefined) {
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
  <div class="PointPie">
    <div ref="chartRef" class="chart"></div>
  </div>
</template>

<style scoped lang="scss">
.PointPie {
  position: relative;
  width: 100%;
  height: 100%;

  .chart {
    width: 100%;
    height: 100%;
    pointer-events: all;
  }
}
</style>

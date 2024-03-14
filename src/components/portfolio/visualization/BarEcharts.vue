<script setup lang="ts">

import {onMounted, ref, computed, watch} from 'vue'
import * as echarts from "echarts"
import chinaMapParams from "@/libs/china.ts";
import {useEventListener} from "@vueuse/core";
import {provincialCapital} from '@/libs/provincialCapital'
import {randomInt} from "@/utils/randomDates";
import {EChartsOption} from "echarts";

const echartInstance = ref<echarts.EChartsType>()
const chartRef = ref<HTMLElement>()
const dataFun = () => {
  const returnData = provincialCapital.map(item => {
    let name = item.replace('省', '')
    if (name.length > 3) {
      name = name.slice(0, 3)
      name += '...'
    }
    return {
      name: name,
      value: randomInt(0, 2500)
    }
  })
  return returnData.sort((a, b) => b.value - a.value)
}
const options = computed((): EChartsOption => {
  return {
    grid: {
      left: '3%',
      right: '1%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: dataFun().map(item => item.name),
      axisLabel: {
        interval: 2,
        color: '#018FD9'
      },
      axisTick: {
        alignWithLabel: true
      },
    }],
    yAxis: {
      type: 'value',
      axisLabel: {
        color: '#018FD9'
      },
    },
    series: [
      {
        type: 'bar',
        data: dataFun().map(item => item.value),
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {offset: 0, color: '#02EEF4'},
            {offset: 0.5, color: '#02AFE4'},
            {offset: 1, color: '#0171D1'}
          ])
        },
      }
    ],
    // dataZoom: [
    //   {
    //     type: 'inside',
    //     start: 40,
    //     end: 100
    //   },
    // ]
  }
})


onMounted(() => {
  if (chartRef.value !== undefined) {
    if (echartInstance.value === undefined) {
      echartInstance.value = echarts?.init(chartRef.value)
    }
    echarts?.registerMap('china', chinaMapParams as any)
    echartInstance.value.setOption(options.value)
    if (echartInstance.value) {
      echartInstance.value.on('click', (params: any) => {
        console.log(params)
      })

    }
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
  <div class="BarEcharts">
    <div ref="chartRef" class="chart"></div>
  </div>
</template>

<style scoped lang="scss">
.BarEcharts {
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

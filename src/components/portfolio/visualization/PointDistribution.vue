<script setup lang="ts">
import TitleBar from "@/components/portfolio/visualization/TitleBar.vue";
import PointPie from "@/components/portfolio/visualization/PointPie.vue";
import CardInfo from "@/components/portfolio/visualization/CardInfo.vue";
import {randomInt} from "@/utils/randomDates.ts";

const firstRow =
    {
      title: '点位总数',
      num: randomInt(1, 4000)
    }
const secondRow =
    {
      title: '本月新增',
      num: randomInt(1, 1000)
    }
</script>

<template>
  <div class="PointDistribution">
    <TitleBar title="点位分布"></TitleBar>
    <div class="pointInformation">
      <div class="pieChart">
        <PointPie></PointPie>
      </div>
      <div class="info">
        <CardInfo :first-row="firstRow" :second-row="secondRow"></CardInfo>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
.PointDistribution {
  position: relative;
  width: 100%;

  .pointInformation {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;


    .pieChart {
      width: 55%;
      height: 27rem;
    }

    .info {
      width: 40%;
      height: 27rem;
    }
  }
}
</style>

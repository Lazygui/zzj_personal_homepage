<script setup lang="ts">
import TitleBar from "@/components/portfolio/visualization/TitleBar.vue";
import PointPie from "@/components/portfolio/visualization/PointPie.vue";

</script>

<template>
  <div class="PointDistribution">
    <TitleBar title="点位分布"></TitleBar>
    <div class="pointInformation">
      <div class="pieChart">
        <PointPie></PointPie>
      </div>
      <div class="pieCard">
        <div class="item-card">
          <div v-thousand>32011</div>
          <div>点位总数</div>
        </div>
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
    justify-content: space-between;


    .pieChart {
      border: 1px solid red;
      width: 60%;
      height: 35rem;
    }

    .pieCard {
      width: 40%;
      border: 1px solid yellow;
      background-color: rgba(15, 27, 70, 1);

      .item-card {

      }
    }
  }
}
</style>

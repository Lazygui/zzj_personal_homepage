<script setup lang="ts">
import { IAdress } from "@/libs/provincialCapital";
import ChinaMap from "@/components/portfolio/visualization/ChinaMap.vue";
import { onMounted, onUnmounted } from "vue";
import { EquipmentInfo } from "@/store/equipmentIInfo";
import DeviceInformation from "@/components/portfolio/visualization/DeviceInformation.vue";
import Monitor from "@/components/portfolio/visualization/Monitor.vue";
import PointDistribution from "@/components/portfolio/visualization/PointDistribution.vue";
import BarEcharts from "@/components/portfolio/visualization/BarEcharts.vue";
import CardInfo from "@/components/portfolio/visualization/CardInfo.vue";
import { randomInt } from "@/utils/randomDates.ts";

const firstRow = {
       title: "用户总量",
       num: randomInt(1, 40000)
};
const secondRow = {
       title: "本月新增",
       num: randomInt(1, 1000)
};
const equipmentInfo = EquipmentInfo();
const address: IAdress[] = ["辽宁省"];

onMounted(() => {
       equipmentInfo.isBackImg = false;
});
onUnmounted(() => {
       equipmentInfo.isBackImg = true;
});
</script>

<template>
       <div class="EchartsView">
              <div class="panelLeft">
                     <DeviceInformation></DeviceInformation>
                     <Monitor></Monitor>
                     <PointDistribution></PointDistribution>
              </div>
              <div class="map">
                     <div class="china">
                            <ChinaMap :showAddress="address"></ChinaMap>
                     </div>
                     <div class="statistics">
                            <div class="bar">
                                   <BarEcharts></BarEcharts>
                            </div>
                            <div class="barInfo">
                                   <CardInfo :first-row="firstRow" :second-row="secondRow"></CardInfo>
                            </div>
                     </div>
              </div>
              <div class="panelRight"></div>
       </div>
</template>

<style scoped lang="scss">
.EchartsView {
       width: 100%;
       height: 100%;
       background-image: url("@/assets/showBackImg.png");
       background-size: 100% 100%;
       background-repeat: no-repeat;
       display: flex;
       align-content: center;
       justify-content: center;

       .panelLeft {
              width: 30%;
              height: 90%;
              padding: 3% 0 0 3%;
              box-sizing: border-box;

              //border: 1px solid yellow;
       }

       .panelRight {
              width: 30%;
              height: 100%;
              //padding: 3% 0 0 3%;
       }

       .map {
              width: 40%;
              height: 90%;
              display: flex;
              flex-direction: column;

              .china {
                     width: 100%;
                     height: 62%;
              }

              .statistics {
                     width: 100%;
                     height: 40%;
                     display: flex;
                     align-items: center;
                     justify-content: center;

                     .bar {
                            width: 70%;
                            height: 100%;
                     }

                     .barInfo {
                            width: 30%;
                            height: 90%;
                     }
              }
       }
}
</style>

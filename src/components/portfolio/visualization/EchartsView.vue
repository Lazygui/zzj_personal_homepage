<script setup lang="ts">
import {IAdress} from '@/libs/provincialCapital'
import ChinaMap from '@/components/portfolio/visualization/ChinaMap.vue';
import {onMounted, onUnmounted} from "vue";
import {EquipmentInfo} from '@/store/equipmentIInfo'
import DeviceInformation from "@/components/portfolio/visualization/DeviceInformation.vue";
import Monitor from "@/components/portfolio/visualization/Monitor.vue";
import PointDistribution from "@/components/portfolio/visualization/PointDistribution.vue";

const equipmentInfo = EquipmentInfo()
const adress: IAdress[] = ['辽宁省'];

onMounted(() => {
  equipmentInfo.isBackImg = false
});
onUnmounted(() => {
  equipmentInfo.isBackImg = true
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
        <ChinaMap :show-adress="adress"></ChinaMap>
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
    height: 100%;
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
    height: 50%;

    .china {
      border: 1px solid red;
      width: 100%;
      height: 100%;
    }
  }

}
</style>

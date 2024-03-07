<script setup lang="ts">
import provincialCapital from '@/libs/provincialCapital'
import ChinaMap from '@/components/portfolio/visualization/ChinaMap.vue';

type IAdress = (typeof provincialCapital)[number];
const adress: IAdress[] = ['辽宁省'];
</script>

<template>
  <div class="EchartsView">
    <ChinaMap :show-adress="adress"></ChinaMap>
  </div>
</template>

<style scoped lang="scss">
.EchartsView {
  width: 100%;
  height: 100%;
}
</style>

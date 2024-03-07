<script setup lang="ts">
import ChinaMap from '@/components/portfolio/visualization/ChinaMap.vue';

const adress = ['辽宁'];
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

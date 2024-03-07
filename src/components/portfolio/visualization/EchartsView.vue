<script setup lang="ts">
import ChinaMap from '@/components/portfolio/visualization/ChinaMap.vue';
</script>

<template>
  <div class="EchartsView">
    <ChinaMap :show-adress="[]"></ChinaMap>
  </div>
</template>

<style scoped lang="less">
.EchartsView {
  width: 100%;
  height: 100%;
}
</style>

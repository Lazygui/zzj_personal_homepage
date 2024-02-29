<script setup lang="ts">
import ContactMe from '@/components/ContactMe.vue'
</script>

<template>
  <div class="homepage">
    <ContactMe></ContactMe>
    <div style="width: 50%;"></div>
  </div>
</template>

<style scoped lang="less">
.homepage {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

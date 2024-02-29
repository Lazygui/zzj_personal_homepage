<script setup lang="ts">
import ContactMe from '@/components/ContactMe.vue'
import RelatedInfo from '@/components/RelatedInfo.vue'
</script>

<template>
  <div class="homepage">
    <ContactMe></ContactMe>
    <RelatedInfo></RelatedInfo>
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

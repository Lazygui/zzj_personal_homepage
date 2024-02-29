<script setup lang="ts">
import { useWindowSize } from '@vueuse/core';
import { computed } from 'vue';
const { width } = useWindowSize()
const scallRatio = computed(() => {
  return width.value / 1920
})
// const userLanguage = localStorage.getItem('vueuse-lang') || navigator.language;
// console.log("🚀 ~ userLanguage:", userLanguage)
</script>

<template>
  <div class="container">
    <router-view>
    </router-view>
  </div>
</template>

<style scoped>
.container {
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
  width: 100%;
  height: 100%;
  pointer-events: none;
  transform-origin: 0 0;
  transform: scale(v-bind(scallRatio));
  background-image: url('@/assets/bg0.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>

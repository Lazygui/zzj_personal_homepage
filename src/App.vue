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
  <div class="bg-img">
    <img src="@/assets/bg0.jpg" alt="">
  </div>
  <div class="container">
    <router-view>
    </router-view>
  </div>
</template>

<style scoped>
.bg-img {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.bg-img::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
}

.bg-img img {
  position: relative;
  z-index: 0;
}

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
  /* background-image: url('@/assets/bg0.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%; */
}
</style>

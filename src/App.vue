<script setup lang="ts">
import {onMounted} from 'vue';
import {EquipmentInfo} from '@/store/equipmentIInfo'

const router = window.location.href.split('/')
const routerName = router[router.length - 1]
const equipmentInfo = EquipmentInfo()
const ua = navigator.userAgent.toLowerCase();
onMounted(() => {
  equipmentInfo.isIos = /mobi/i.test(ua);
  //阻止F12调试
  document.addEventListener("keydown", function (e: KeyboardEvent) {
    if (e.key == "F12") {
      e.preventDefault();
    }
  });
  //阻止右键菜单
  document.addEventListener("contextmenu", function (e: MouseEvent) {
    e.preventDefault()
  });
})
</script>

<template>
  <div class="bg-img" v-if="equipmentInfo.isBackImg">
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
  /* transform: scale(v-bind(scallRatio)); */
  /* border: 1px solid red; */
  /* background-image: url('@/assets/bg0.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%; */
}
</style>

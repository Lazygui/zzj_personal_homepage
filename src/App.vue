<script setup lang="ts">
import {onMounted} from 'vue';
import {EquipmentInfo} from '@/store/equipmentIInfo'

const router = window.location.href.split('/')
const routerName = router[router.length - 1]
const equipmentInfo = EquipmentInfo()
const ua = navigator.userAgent.toLowerCase();

/**
 * @description 是否显示背景图片
 * @type boolean
 * @defaultvalue true
 */
const isShowList = ['underMaintenance', 'echartsView']
const IsShowBgImg = () => {
  if (routerName != '/' && routerName != '#') {
    for (let index = 0; index < isShowList.length; index++) {
      const element = isShowList[index];
      if (element === routerName) {
        return false
      }
    }
  }
  return true
}
onMounted(() => {
  if (/mobi/i.test(ua)) {
    // 手机浏览器
    equipmentInfo.isIos = true
  } else {
    // 非手机浏览器
    equipmentInfo.isIos = false
  }
})
</script>

<template>
  <div class="bg-img" v-if="IsShowBgImg()">
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

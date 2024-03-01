<script setup lang="ts">
import Countdown from '@/components/Countdown.vue'
</script>

<template>
  <div class="UnderMaintenance">
    <div class="masking"></div>
    <div class="baseMap">
      <div class="map">
        <div class="logo">
        </div>
        <div class="words">
          Our <span class="red">N</span>ew <span class="red">A</span>wesome <span class="red">W</span>ebsite is <span
            class="red">C</span>oming <span class="red">S</span>oon
        </div>
        <div class="countdown">
          <Countdown :days="60"></Countdown>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.UnderMaintenance {
  width: 100%;
  height: 100%;

  .masking {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }

  .baseMap {
    width: 100%;
    height: 100%;
    background-image: url('@/assets/underMaintenance.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .logo {
      width: 10rem;
      height: 10rem;
      background-image: url('@/assets/icon/github.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }

    .map {
      height: 50%;
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      .words {
        word-spacing: 10px;
        color: #fff;
        font-size: 26px;

        .red {
          color: red;
        }
      }
    }

  }
}
</style>

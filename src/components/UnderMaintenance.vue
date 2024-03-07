<script setup lang="ts">
import Countdown from '@/components/Countdown.vue'
import {EquipmentInfo} from '@/store/equipmentIInfo'

const equipmentInfo = EquipmentInfo()
</script>

<template>
  <div class="UnderMaintenancePc" v-if="!equipmentInfo.isIos">
    <div class="maskingPc"></div>
    <div class="baseMapPc">
      <div class="mapPc">
        <div class="logoPc">
        </div>
        <div class="wordsPc">
          Our <span class="red">N</span>ew <span class="red">A</span>wesome <span class="red">W</span>ebsite is <span
            class="red">C</span>oming <span class="red">S</span>oon
        </div>
        <div class="countdownPc">
          <Countdown :days="60"></Countdown>
        </div>
      </div>
    </div>
  </div>
  <div class="UnderMaintenanceIos" v-else>
    <div class="maskingIos"></div>
    <div class="baseMapIos">
      <div class="mapIos">
        <div class="logoIos">
        </div>
        <div class="wordsIos">
          Our <span class="red">N</span>ew <span class="red">A</span>wesome <span class="red">W</span>ebsite is <span
            class="red">C</span>oming <span class="red">S</span>oon
        </div>
        <div class="countdownIos">
          <Countdown :days="60"></Countdown>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.UnderMaintenancePc {
  width: 100%;
  height: 100%;

  .red {
    color: red;
  }

  .maskingPc {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }

  .baseMapPc {
    width: 100%;
    height: 100%;
    background-image: url('@/assets/underMaintenance.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .mapPc {
      height: 50%;
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      .logoPc {
        width: 10rem;
        height: 10rem;
        background-image: url('@/assets/icon/github.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }

      .wordsPc {
        word-spacing: 10px;
        color: #fff;
        font-size: 26px;
      }

      .countdownPc {
        width: 100%;
      }
    }

  }
}

.UnderMaintenanceIos {
  width: 100%;
  height: 100%;

  .red {
    color: red;
  }

  .maskingIos {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }

  .baseMapIos {
    width: 100%;
    height: 100%;
    background-image: url('@/assets/underMaintenance.jpg');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }


  .mapIos {
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    .logoIos {
      width: 10rem;
      height: 10rem;
      background-image: url('@/assets/icon/github.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }

    .wordsIos {
      word-spacing: 1rem;
      color: #fff;
      font-size: 1.6rem;
    }

    .countdownIos {
      width: 100%;
    }
  }
}
</style>

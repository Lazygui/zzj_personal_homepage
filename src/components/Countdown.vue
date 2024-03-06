<script setup lang="ts">
import { watchEffect, computed, ref, watch, onMounted } from 'vue';
import { getTimeRemaining, setTargetDate } from '@/utils/updateCountdown'
import { useDateFormat, useNow } from '@vueuse/core'
import { EquipmentInfo } from '@/store/equipmentIInfo'
const equipmentInfo = EquipmentInfo()
console.log("🚀 ~ equipmentInfo:", equipmentInfo)
const now = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss');

interface IData {
  days: number | string
  hours: number | string
  minutes: number | string
  seconds: number | string
}
/**
 * @param days 倒计时天数-number
 */
const props = withDefaults(defineProps<{

  /**
   * @description 倒计时天数
   * @type  {number}
   */
  days?: number
}>(), {
  days: 1
})
const startUp = ref<boolean>(false)
const resetTime = ref<boolean>(false)
const classification = ref<IData>({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
})
/**
 * @description 时间每变化一秒则
 * @param  {*}
 * @defaultvalue 
 */
const dateTarget = computed(() => {
  return [
    {
      text: 'Days',
      value: classification.value.days,
    },
    {
      text: 'Hours',
      value: classification.value.hours,
    },
    {
      text: 'Minutes',
      value: classification.value.minutes,
    },
    {
      text: 'Seconds',
      value: classification.value.seconds,

    },
  ]
})
const countdown = () => {
  const timestamp = Math.floor(new Date(now.value).getTime() / 1000);
  const { days: d, hours: h, minutes: m, seconds: s } = getTimeRemaining(timestamp);
  if (d === 0 && h === 0 && m === 0 && s === 0) {
    resetTime.value = true
  } else {
    resetTime.value = false
  }
  classification.value.days = d < 10 ? '0' + d : d
  classification.value.hours = h < 10 ? '0' + h : h
  classification.value.minutes = m < 10 ? '0' + m : m
  classification.value.seconds = s < 10 ? '0' + s : s
}
onMounted(() => {
  setTargetDate(props.days)
  startUp.value = true
})
watchEffect(() => {
  if (startUp.value) {
    countdown()
  }
});
watch(() => resetTime.value, (newVal: boolean) => {
  if (newVal) {
    startUp.value = false
    setTargetDate(props.days)
    startUp.value = true
    countdown()
  }
})
</script>

<template>
  <div class="Countdown">
    <div class="itemdown" v-for="item in dateTarget">
      <div :class="`${!equipmentInfo.isIos ? 'numPc' : 'numIos'}`">{{ item.value }}</div>
      <div :class="`${!equipmentInfo.isIos ? 'textPc' : 'textIos'}`">{{ item.text }}</div>
    </div>
  </div>
</template>

<style scoped lang="less">
.Countdown {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .itemdown {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0rem 2rem;
    box-sizing: border-box;

    .numPc {
      color: rgba(255, 255, 255, 0.9);
      font-size: 5.6rem;
      z-index: 0;
    }

    .numIos {
      color: rgba(255, 255, 255, 0.9);
      font-size: 3.6rem;
      z-index: 0;
    }

    .textPc {
      color: rgba(255, 255, 255, 0.8);
      font-size: 2.6rem;
      z-index: 0;
    }

    .textIos {
      color: rgba(255, 255, 255, 0.8);
      font-size: 1.8rem;
      z-index: 0;
    }
  }
}
</style>

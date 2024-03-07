<script setup lang="ts">
import TitleBar from "@/components/portfolio/visualization/TitleBar.vue";

/**
 * @description 随机生成一个一位~四位的数字
 * @returns {number} 返回一个一位~四位的数字
 */
const randomNum = (): number => {
  return Math.floor(Math.random() * 10000)
}

/**
 * @description 随机生成一个true或false
 * @returns {number} 返回true或false
 */
const randomZeroOrOne = (): boolean => {
  return Math.floor(Math.random() * 2) === 0
}


const infoList = [
  {
    nums: randomNum(),
    text: '设备总数',
    direct: randomZeroOrOne()
  },
  {
    nums: randomNum(),
    text: '季度新增',
    direct: randomZeroOrOne()
  },
  {
    nums: randomNum(),
    text: '运营设备',
    direct: randomZeroOrOne()
  },
  {
    nums: randomNum(),
    text: '异常设备',
    direct: randomZeroOrOne()
  }
]
</script>

<template>
  <div class="DeviceInformation">
    <TitleBar title="设备数量"></TitleBar>
    <div class="quantityInformation">
      <div class="info" v-for="item in infoList">
        <div class="num" v-thousand>{{ item.nums }}</div>
        <div class="iconName">
          <div class="arrowhead" :style="`background-color:${item.direct?'#6ACBA8':'#EC4036'}`"></div>
          <div class="name">{{ item.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.DeviceInformation {
  position: relative;
  width: 100%;

  .quantityInformation {
    margin: 1.5rem 0;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: space-around;

    .info {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .num {
        font-size: 1.6rem;
      }

      .iconName {
        display: flex;
        align-items: center;

        .arrowhead {
          width: 0.5rem;
          height: 1rem;
          border-radius: 50%;
          margin-right: 0.5rem;
          box-sizing: border-box;
        }

        .name {
          color: #56a1f3;
        }
      }
    }
  }
}
</style>

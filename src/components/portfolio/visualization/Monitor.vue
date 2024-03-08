<script setup lang="ts">
import TitleBar from "@/components/portfolio/visualization/TitleBar.vue";
import {randomDates, randomInt} from "@/utils/randomDates";

/**
 * @description 设备监控列表
 * @interface IMonitorList
 * @param date 故障时间 {string}
 * @param address 设备地址 {string}
 * @param code 异常代码 {string}
 */
interface IMonitorList {
  /**
   * @description 故障时间
   * @type {string}
   */
  date: string;


  /**
   * @description 设备地址
   * @type {string}
   */
  address: string;


  /**
   * @description 异常代码
   * @type {string}
   */
  code: string;
}

const currentYear = new Date().getFullYear()
const randomList = (len: number): IMonitorList[] => {
  const arr: IMonitorList[] = []
  for (let i = 0; i < len; i++) {
    arr.push({
      date: randomDates(currentYear),
      address: `设备${i + 1}`,
      code: `位置${i + 1}`
    })
  }
  return arr
}
</script>

<template>
  <div class="Monitor">
    <TitleBar title="设备监控"></TitleBar>
    <div class="monitorInformation">
      <div class="tableDiv" v-scroll.mouse="1">
        <table ref="table">
          <tr>
            <td>故障时间</td>
            <td>设备地址</td>
            <td>异常代码</td>
          </tr>
          <tr v-for="item in randomList(randomInt(1,50))">
            <td>{{ item.date }}</td>
            <td>{{ item.address }}</td>
            <td>{{ item.code }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
.Monitor {
  position: relative;
  width: 100%;

  .monitorInformation {
    margin: 1.5rem 0;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: center;

    .tableDiv {
      width: 95%;
      height: 35rem;
      font-size: 1.8rem;
      pointer-events: all;
      overflow-y: hidden;
      overflow-x: hidden;
      //scrollbar-gutter: stable;

      table {
        width: 100%;
        font-weight: bold;
        border-collapse: collapse;

        tr {
          color: #4370B1;
          width: 100%;

          td {
            height: 4rem;
          }

          td:first-child {
            padding-left: 2rem;
          }

          td:last-child {
            text-align: center;
          }
        }

        tr:first-child {
          color: #30A5CD;
          position: sticky;
          top: 0;
          background-color: rgb(40, 41, 62);
        }
      }
    }

    .tableDiv::-webkit-scrollbar-thumb {
      background-color: rgb(0, 162, 255, 0.5);
      border-radius: 2em;
      height: 0.1rem;
    }

    .tableDiv::-webkit-scrollbar {
      width: 0.5rem;
    }

    .tableDiv::-webkit-scrollbar-track {
      background-color: transparent;
      border-radius: 5em;
      border: 0.01rem solid rgb(255, 255, 255);
    }
  }
}
</style>

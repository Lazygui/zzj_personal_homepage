<script setup lang="ts">
interface InterfaceList {
  title: string,
  num: number
}

const props = defineProps<{
  firstRow: InterfaceList,
  secondRow: InterfaceList
}>()
</script>

<template>
  <div class="CardInfo">
    <div class="pieCard">
      <div class="item-card">
        <div v-thousand class="item-num">{{ props.firstRow.num }}</div>
        <div class="item-info">
          <div class="item-block red"></div>
          <div class="item-text">{{ props.firstRow.title }}</div>
        </div>
      </div>
      <div class="item-card">
        <div v-thousand class="item-num">{{ props.secondRow.num }}</div>
        <div class="item-info">
          <div class="item-block yellow"></div>
          <div class="item-text">{{ props.secondRow.title }}</div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
.CardInfo {
  position: relative;
  width: 100%;
  height: 100%;
  //border: 1px solid red;

  .pieCard {
    width: 100%;
    border-radius: 10%;
    background-color: rgba(15, 27, 70, 1);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    .item-card {
      width: 60%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .item-num {
        font-size: 3.6rem;
      }

      .item-info {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .item-block {
          width: 0.5rem;
          height: 60%;
          border-radius: 30%;
        }

        .red {
          background-color: red;
        }

        .yellow {
          background-color: yellow;
        }

        .item-text {
          margin-left: 1rem;
          box-sizing: border-box;
          font-size: 2rem;
          color: rgb(55, 137, 215);
        }
      }
    }
  }
}
</style>

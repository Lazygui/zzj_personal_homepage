<script setup lang="ts">
import router from '@/routes/index'
const works = [
  {
    url: 'echartsView'
  },
]
const goNewLabel = (url: string) => {
  router.push({
    name: url,
  });
}
</script>

<template>
  <div class="Portfolio">
    <div class="masking">
      <div class="card item" @click="goNewLabel(item.url)" v-for="item in works">
        <img src="@/assets/jianli.png" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.Portfolio {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .masking {
    width: 80%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;

    .item {
      padding: 0rem 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .item>img {
      display: block;
      height: 95%;
      width: 95%;
    }
  }
}
</style>

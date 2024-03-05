<script setup lang="ts">
</script>

<template>
  <div class="Portfolio">
    <div class="masking">
      <div class="card ">
        <div class="item">

        </div>
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
    width: 70%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;

    .item {
      border: 1px solid red;
      width: 2rem;
      height: 20rem;
    }
  }
}
</style>

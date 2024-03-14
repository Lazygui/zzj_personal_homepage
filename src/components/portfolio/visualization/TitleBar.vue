<script setup lang="ts">
import {computed} from "vue";

const props = withDefaults(defineProps<{
  title: string,
  textColor?: string
}>(), {
  title: '',
  textColor: '#FFFFFF'
})
const textColor = computed(() => props.textColor)
</script>

<template>
  <div class="TitleBar">
    <div class="text">{{ props.title }}</div>
  </div>
</template>

<style scoped lang="scss">
.TitleBar {
  position: relative;
  width: 75%;
  height: 3.6rem;
  border-left: 3px solid #00B5FF;
  background-image: url("@/assets/titlebar.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  color: v-bind(textColor);
  font-size: 1.6rem;
  margin: 1rem 0;
  padding: 0 1rem;
  box-sizing: border-box;

  .text {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>

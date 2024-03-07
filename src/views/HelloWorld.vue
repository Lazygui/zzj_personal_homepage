<script setup lang="ts">
import ContactMe from '@/components/ContactMe.vue'
import RelatedInfo from '@/components/RelatedInfo.vue'
import {EquipmentInfo} from '@/store/equipmentIInfo'

const equipmentInfo = EquipmentInfo()
</script>

<template>
  <div class="homepagePc" v-if="!equipmentInfo.isIos">
    <ContactMe></ContactMe>
    <RelatedInfo></RelatedInfo>
  </div>
  <div class="homepageIos" v-else>
    <div class="HomeContactMeIos">
      <ContactMe></ContactMe>
    </div>
    <div class="HomeRelatedInfoIos">
      <RelatedInfo></RelatedInfo>
    </div>
  </div>
</template>

<style scoped lang="scss">
.homepagePc {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.homepageIos {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow-y: auto;

  .HomeContactMeIos,
  .HomeRelatedInfoIos {
    width: 100%;
    height: 50%;
  }
}
</style>

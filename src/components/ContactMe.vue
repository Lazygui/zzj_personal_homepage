<script setup lang="ts">
import { ref } from 'vue'
import i18n from '@/lang/index.js'
import emailIcon from '@/assets/icon/email.png'
import qqIcon from '@/assets/icon/qq.png'

/**
 * @param imgUrl 图标路径 {string}
 * @param iconText 图标文字枚举
 * @param href a标签跳转地址
 */
interface IaIcon {
  /**
   * @description 图标路径
   * @type string
   */
  imgUrl: string,
  /**
   * @description 图标路径
   * @type string
   */
  iconText: string,

  /**
   * @description a标签跳转地址
   * @type string
   */
  href: string
}
const aIcon: IaIcon[] = [
  {
    imgUrl: qqIcon,
    iconText: 'qq',
    href: 'https://qm.qq.com/q/BLYrRURiDg'
  },
  {
    imgUrl: emailIcon,
    iconText: 'email',
    href: 'mailto:15642532452@163.com'
  }
]

/**
 * @description icon标题
 * @type string
 * @defaultvalue ''
 */
const iconText = ref<string>(i18n.global.t('contactMe.iconText.weclome'));
const iconMouseover = (text: string) => {
  iconText.value = i18n.global.t('contactMe.iconText.' + text);
}
</script>

<template>
  <div class="ContactMe">
    <div class="cotDiv">
      <div class="titles">Hello World!</div>
      <div class="joking card">{{ $t('contactMe.jok') }}</div>
      <div class="cicon card">
        <div class="icon">
          <a :href="item.href" v-for="item in aIcon" target="_blank">
            <img :src="item.imgUrl" class="icons-item" @mouseover="iconMouseover(item.iconText)"
              @mouseout="iconMouseover('weclome')" />
          </a>
        </div>
        <div class="iconText">
          <span>{{ iconText }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.ContactMe {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  .cotDiv {
    width: 70%;
    padding-right: 10%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .titles {
      font-family: 'Pacifico', cursive;
      font-size: 5rem;
    }

    .joking {
      width: 90%;
    }

    .cicon {
      margin-top: 1rem;
      width: 90%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 0rem;
      box-sizing: border-box;
      background: rgba(0, 0, 0, 0);
      backdrop-filter: blur(0px);

      .icon {
        width: 50%;
        display: flex;
        align-items: center;
        padding-left: 1rem;
        box-sizing: border-box;

        .icons-item {
          padding: 0rem 1rem;
          width: 1.5rem;
          height: 1.5rem;
        }
      }

      .iconText {
        padding-right: 2rem;
        box-sizing: border-box;
        text-align: end;
        width: 50%;
        color: rgba(0, 0, 0, 0);
      }
    }

    .cicon:hover {
      background: rgba(0, 0, 0, 0.35);
      backdrop-filter: blur(10px);

      .iconText {
        color: #fff;
      }
    }
  }
}
</style>
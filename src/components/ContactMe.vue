<script setup lang="ts">
import { ref } from 'vue'
import i18n from '@/lang/index.js'
import emailIcon from '@/assets/icon/email.png'
import qqIcon from '@/assets/icon/qq.png'
import { EquipmentInfo } from '@/store/equipmentIInfo'
const equipmentInfo = EquipmentInfo()

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
  <div class="ContactMePC" v-if="!equipmentInfo.isIos">
    <div class="cotDivPC">
      <div class="titlesPC">Hello World!</div>
      <div class="jokingPC card">{{ $t('contactMe.jok') }}</div>
      <div class="ciconPC card">
        <div class="iconPC">
          <a :href="item.href" v-for="item in aIcon" target="_blank">
            <img :src="item.imgUrl" class="icons-itemPC" @mouseover="iconMouseover(item.iconText)"
              @mouseout="iconMouseover('weclome')" />
          </a>
        </div>
        <div class="iconTextPC">
          <span>{{ iconText }}</span>
        </div>
      </div>
    </div>
  </div>
  <div class="ContactMeIos" v-else>
    <div class="cotDivIos">
      <div class="titlesIos">Hello World!</div>
      <div class="jokingIos card">{{ $t('contactMe.jok') }}</div>
      <div class="ciconIos card">
        <div class="iconIos">
          <a :href="item.href" v-for="item in aIcon" target="_blank">
            <img :src="item.imgUrl" class="icons-itemIos" @mouseover="iconMouseover(item.iconText)"
              @mouseout="iconMouseover('weclome')" />
          </a>
        </div>
        <div class="iconTextIos">
          <span>{{ iconText }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.ContactMePC {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  .cotDivPC {
    width: 70%;
    padding-right: 10%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .titlesPC {
      font-family: 'Pacifico', cursive;
      font-size: 8rem;
    }

    .jokingPC {
      font-size: 1.6rem;
      width: 90%;
    }

    .ciconPC {
      margin-top: 1rem;
      width: 90%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 0rem;
      box-sizing: border-box;
      background: rgba(0, 0, 0, 0);
      backdrop-filter: blur(0px);

      .iconPC {
        width: 50%;
        display: flex;
        align-items: center;
        padding-left: 1rem;
        box-sizing: border-box;

        .icons-itemPC {
          padding: 0rem 1rem;
          width: 2.4rem;
          height: 2.4rem;
        }
      }

      .iconTextPC {
        font-size: 1.6rem;
        padding-right: 2rem;
        box-sizing: border-box;
        text-align: end;
        width: 50%;
        color: rgba(0, 0, 0, 0);
      }
    }

    .ciconPC:hover {
      background: rgba(0, 0, 0, 0.35);
      backdrop-filter: blur(10px);

      .iconTextPC {
        color: #fff;
      }
    }
  }
}

.ContactMeIos {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .cotDivIos {
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    .titlesIos {
      font-family: 'Pacifico', cursive;
      font-size: 5.5rem;
    }

    .jokingIos {
      font-size: 1.4rem;
      width: 95%;

    }

    .ciconIos {
      width: 100%;
      display: flex;
      align-items: center;
      background: rgba(0, 0, 0, 0);
      backdrop-filter: blur(0px);

      .iconIos {
        width: 50%;
        display: flex;
        align-items: center;

        .icons-itemIos {
          padding: 0rem 1rem;
          width: 3rem;
          height: 3rem;
        }
      }

      .iconTextIos {
        font-size: 1.4rem;
        text-align: end;
        width: 50%;
        color: rgba(0, 0, 0, 0);
      }
    }

    .ciconIos:hover {
      background: rgba(0, 0, 0, 0.35);
      backdrop-filter: blur(10px);

      .iconTextIos {
        color: #fff;
      }
    }
  }
}
</style>
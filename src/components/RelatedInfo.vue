<script setup lang="ts">
import { ref } from 'vue'
import GetAWord from '@/api/httpRequest'
import { onMounted } from 'vue';
// import boke from '@/assets/icon/blog.svg'
import homepage from '@/assets/icon/homepage.svg'

/**
 * @description 名言
 * @type string
 * @defaultvalue ''
 */
const sentence = ref<string>('三尺书生，一介微命')
/**
 * @description 出处
 * @type string
 * @defaultvalue ''
 */
const source = ref<string>('滕王阁序')
const getAWord = () => {
  GetAWord((ok: any) => {
    sentence.value = ok.hitokoto
    source.value = ok.from
  })
}
//在新页面打开网页
const openNewPage = (url: string) => {
  window.open(url)
}
const iconlinkList = [
  {
    linkUrl: '/public/国网吉林超高压公司500kV延吉变远程智能巡视系统建设竣工图.pdf',
    titel: '个人简介',
    iconUrl: homepage,
    enumerationText: 'briefIntroduction'
  },
  // {
  //   linkUrl: 'https://blog.ccrui.cn/',
  //   titel: '博客',
  //   iconUrl: boke,
  // enumerationText: 'boke'
  // },
]
const getEnum = (enumStr: string) => {
  return `relatedInfo.${enumStr}`
}
onMounted(() => {
  //立即执行
  getAWord()
})
</script>

<template>
  <div class="RelatedInfo">
    <div class="famousQuotesDiv">
      <div class="titles">
        <div class="famousQuotes card" @click="getAWord">
          <div class="famous">
            {{ sentence }}
          </div>
          <div class="from">-[{{ source }}]</div>
        </div>
        <div class="timeDiv card">
          <div class="date">2024-02-29</div>
          <div class="time">13:52:53</div>
        </div>
      </div>
      <div class="list">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"
          data-v-6b5f55f6="" class="separate-svg">
          <path
            d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59c-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0c-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606c.648 17.722 3.826 35.527 9.69 52.721c1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96c28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83c-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37c-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569c-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51c27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612c5.864 17.194 9.042 34.999 9.69 52.721c.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"
            fill="currentColor"></path>
        </svg>
        <span style="margin-left: 10px;">{{ '网站列表' }}</span>
      </div>
      <div class="iconlinkList">
        <div class="itemDiv card" @click="openNewPage(item.linkUrl)" v-for="item in iconlinkList">
          <img :src="item.iconUrl" class="item-icon">
          <span>
            {{ $t(getEnum(item.enumerationText)) }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.RelatedInfo {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 6%;
  box-sizing: border-box;

  .famousQuotesDiv {
    width: 64%;
    height: 50%;

    .titles {
      width: 100%;
      height: 40%;
      display: flex;
      align-items: center;
      justify-content: center;

      .famousQuotes {
        width: 50%;
        height: 100%;
        margin-right: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .famous {
          width: 100%;
          font-size: 16px;
        }

        .from {
          display: flex;
          justify-content: right;
          width: 100%;
          font-size: 12px;
        }
      }

      .timeDiv {
        margin-left: 10px;
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .date {
          text-align: center;
          width: 100%;
          font-size: 1rem;
        }

        .time {
          text-align: center;
          width: 100%;
          font-size: 3rem;
          font-family: UniDream LED, cursive;
        }
      }
    }

    .list {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 1rem 0rem;
      box-sizing: border-box;

      .separate-svg {
        width: 18px;
        height: 18px;
      }
    }

    .iconlinkList {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 10px;
      text-align: center;


      .itemDiv {

        .item-icon {
          width: 32px;
          height: 32px;
          margin: 0 auto 5px;
          display: block;
        }
      }


    }
  }
}
</style>

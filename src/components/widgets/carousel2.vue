<template>
  <Carousel
    id="gallery"
    :items-to-show="1"
    :autoplay="5555000"
    :wrap-around="true"
    v-model="currentSlide"
  >
    <Slide v-for="slide in slides" :key="slide.id">
      <div class="carousel__item">
        <div class="full-card">
          <div class="font-card">
            <img :src="getImageUrl(slide.pic1)" alt="" />
            <h3 class="font-card-title">{{ slide.pic1Title }}</h3>
            <p class="font-card-text"></p>
            <a href="#" class="explore-button" onclick="return false">zoom</a>
          </div>

          <div class="font-card">
            <img :src="getImageUrl(slide.pic2)" alt="" />
            <h3 class="font-card-title">{{ slide.pic2Title }}</h3>
            <p class="font-card-text"></p>
            <a href="#" class="explore-button" onclick="return false">zoom</a>
          </div>

          <div class="font-description">
            <h2 class="font--robotoslab">
              <!-- Ruby<span class="font--roboto">+Ruby on Rails</span> -->
              {{ slide.subtitle }}
            </h2>
            <p class="font--roboto">
              {{ slide.context }}
            </p>
          </div>
        </div>
      </div>
    </Slide>
  </Carousel>

  <Carousel
    id="thumbnails"
    :items-to-show="3"
    :wrap-around="true"
    v-model="currentSlide"
    ref="carousel"
  >
    <Slide v-for="slide in slides" :key="slide.id">
      <div class="carousel__item" @click="slideTo(slide.id)">
        {{ slide.id }} {{ slide.title }}
      </div>
    </Slide>
  </Carousel>
</template>

<script>
import { defineComponent, reactive, ref } from "vue";
import { Carousel, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Gallery",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  setup() {
    const slides = reactive([
      {
        id: 0,
        title: "Line 醫療查詢機器人",
        subtitle: "Ruby + Ruby on Rails",
        pic1: "linebot01.jpg",
        pic2: "linebot02.jpg",
        pic1Title: "Line 醫療查詢機器人",
        pic2Title: "顯示地圖位置v",
        context:
          '一開始的想法是說，現在人主要溝通訊息都是用LINE，那如果把一些查詢功能結合到LINE上面，是不是會比下載APP或是網頁搜尋還來的直覺，然後我們一開始是參考"卡米狗"的LINE機器人去做參考的。',
      },
      {
        id: 1,
        title: "SDM 問卷機器人",
        subtitle: "Python + Django",
        pic1: "linebot1.PNG",
        pic2: "linebot2.PNG",
        pic1Title: "關鍵字查詢機器人",
        pic2Title: "SDM 問卷機器人",
        context:
          "大三下學期的專題使用的是Python來撰寫機器人，因為發現Python有許多方便之處， 結合Django 與 MicroSoft QnAMaker 做一個問答型機器人， 最後搭配Google試算表，讓使用者輸入的話都記錄下來， 以便後台人員觀看及分析。",
      },
      {
        id: 2,
        title: "Line 醫療查詢機器人3",
        subtitle: "C# +jQuery+SQL",
        pic1: "skh-project1.PNG",
        pic2: "skh-project2.PNG",
        pic1Title: "新光醫院介面維護",
        pic2Title: "新光醫院介面統計",
        context:
          "這個專案是我在新光醫院當實習生接到的案子，內容是要做出一個可以針對使用著提出的問題或是BUG進行篩選與分類，第一次接觸到比較大的專案，藉由同事稍講解一些架構，我也可以很快地把頁面及需求完成。",
      },
    ]);

    // let currentSlide = reactive({
    //   id: 1,
    //   title: "Line 醫療查詢機器人",
    //   subtitle: "Ruby + +Ruby on Rails",
    //   pic1: "../../assets/linebot01.jpg",
    //   pic2: "../../assets/linebot02.jpg",
    //   context:
    //     '一開始的想法是說，現在人主要溝通訊息都是用LINE，那如果把一些查詢功能結合到LINE上面，是不是會比下載APP或是網頁搜尋還來的直覺，然後我們一開始是參考"卡米狗"的LINE機器人去做參考的。',
    // });
    let currentSlide = ref(0);

    const slideTo = (page) => {
      console.log("slideTo", page);
      console.log(slides[page]);
      console.log("currentSlide", currentSlide);
      currentSlide.value = page;
    };

    const getImageUrl = (name) => {
        return new URL(`../../assets/${name}`, import.meta.url).href
    }

    return {
      slides,
      currentSlide,
      slideTo,
      getImageUrl,
    };
  },
});
</script>

<template>
  <Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide">
    <Slide v-for="slide in test" :key="slide">
      <div class="carousel__item">{{ slide }}</div>
    </Slide>
  </Carousel>

  <Carousel
    id="thumbnails"
    :items-to-show="4"
    :wrap-around="true"
    v-model="currentSlide"
    ref="carousel"
  >
    <Slide v-for="slide in test" :key="slide">
      <div class="carousel__item" @click="slideTo(slide - 1)">{{ slide }}</div>
    </Slide>
  </Carousel>
</template>

<script>
import { ref, defineComponent, reactive } from "vue";
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
    const test = reactive(["1", "2", "3", "4", "5", "6", "7", "8"])
    const slides = reactive([
      {
        id: 1,
        title: "Line 醫療查詢機器人",
        subtitle: "Ruby + +Ruby on Rails",
        pic1: "../../assets/linebot01.jpg",
        pic2: "../../assets/linebot02.jpg",
        context:
          '一開始的想法是說，現在人主要溝通訊息都是用LINE，那如果把一些查詢功能結合到LINE上面，是不是會比下載APP或是網頁搜尋還來的直覺，然後我們一開始是參考"卡米狗"的LINE機器人去做參考的。',
      },
      {
        id: 2,
        title: "SDM 問卷機器人",
        subtitle: "Ruby + +Ruby on Rails",
        pic1: "../../assets/linebot01.PNG",
        pic2: "../../assets/linebot02.PNG",
        context:
          '一開始的想法是說，現在人主要溝通訊息都是用LINE，那如果把一些查詢功能結合到LINE上面，是不是會比下載APP或是網頁搜尋還來的直覺，然後我們一開始是參考"卡米狗"的LINE機器人去做參考的。',
      },
      {
        id: 3,
        title: "Line 醫療查詢機器人3",
        subtitle: "Ruby + +Ruby on Rails",
        pic1: "../../assets/skh-project1.PNG",
        pic2: "../../assets/skh-project2.PNG",
        context:
          '一開始的想法是說，現在人主要溝通訊息都是用LINE，那如果把一些查詢功能結合到LINE上面，是不是會比下載APP或是網頁搜尋還來的直覺，然後我們一開始是參考"卡米狗"的LINE機器人去做參考的。',
      },
    ]);

    let currentSlide = ref("5");

    const slideTo = (val) => {
      currentSlide.value = String(val)
    };

    return {
      test,
      slides,
      currentSlide,
      slideTo,
    };
  },
});
</script>

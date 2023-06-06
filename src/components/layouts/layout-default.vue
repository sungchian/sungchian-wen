<template>
  <modal />
  <the-nav :class="{ sticky: isSticky,  '-top-20': isScrollUp}" />

  <!--Home Section-->
  <section class="home" id="home">
    <div class="max-width">
      <div class="home-content">
        <!-- <div class="title first-title">
                    Hello, My Name is
                </div>
                <div class="title second-title">
                    Sung Chian Wen
                </div> -->
        <div>Hello, My Name is<br /></div>
        <div class="second-title">Sung Chian Wen</div>
        <div class="scroll">
          <a href="#about">
            <i class="fal fa-chevron-circle-down"></i>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!--About Section-->
  <section class="about" id="about">
    <div class="max-width">
      <h2 class="title"><div class="text">About me</div></h2>
      <div class="about-content">
        <div class="column left">
          <img src="../../assets/selfie.jpg" alt="" />
        </div>
        <div class="column right">
          <!-- <div class="text">
            I'm SungChian and I'm a <span class="typing"></span>.
          </div> -->
          <div class="text">
            I'm SungChian and I'm a
            <vue-typer
              :text="[
                'Business Analyst',
                'Developer',
                'Blogger',
                'Designer',
                'Freelancer',
              ]"
              :repeat="Infinity"
              :shuffle="false"
              initial-action="typing"
              :pre-type-delay="70"
              :type-delay="70"
              :pre-erase-delay="2000"
              :erase-delay="50"
              erase-style="backspace"
              :erase-on-complete="false"
              caret-animation="blink"
            ></vue-typer
            >.
          </div>
          <p>
            I am a passionate and quick learning software engineer with one and
            a half years of internship experience and one and a half years
            full-time job in computer science and software developing for wide
            range of projects and industries along with excellent problem
            solving and communication skills.
          </p>
          <a href="./files/resume.pdf" download="resume.pdf">Download</a>
        </div>
      </div>
    </div>
  </section>

  <!--Skill Section-->
  <section class="skill" id="skill">
    <div class="w2">
      <div class="skill-content">
        <h2 class="title"><div class="text">Skill</div></h2>
      </div>
    </div>
    <div class="max-width">
      <ul class="skill-group">
        <li class="skill-list">
          <div class="skill-item item1">
            <div class="skill-group">
              <img
                src="../../assets/gold-circle.png"
                alt=""
                class="skill-img"
              />
              <img src="../../assets/ui.png" alt="" class="skill-subImg" />
            </div>
            <h3 class="skill-name white-t">Front-end</h3>
            <div class="skill-p white-t">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>jQuery</li>
                <li>Vue</li>
              </ul>
            </div>
          </div>
        </li>
        <li class="skill-list">
          <div class="skill-item item2">
            <div class="skill-group">
              <img
                src="../../assets/gold-circle.png"
                alt=""
                class="skill-img"
              />
              <img src="../../assets/coding.png" alt="" class="skill-subImg" />
            </div>
            <h3 class="skill-name white-t">Back-end</h3>
            <div class="skill-p white-t">
              <ul>
                <li>C#</li>
                <li>JAVA</li>
                <li>Python</li>
                <li>Ruby</li>
                <li>Python</li>
              </ul>
            </div>
          </div>
        </li>
        <li class="skill-list">
          <div class="skill-item item3">
            <div class="skill-group">
              <img
                src="../../assets/gold-circle.png"
                alt=""
                class="skill-img"
              />
              <img
                src="../../assets/database.png"
                alt=""
                class="skill-subImg"
              />
            </div>
            <h3 class="skill-name white-t">DataBase</h3>
            <div class="skill-p white-t">
              <ul>
                <li>MSSQL</li>
                <li>Oracle</li>
                <li>SQLite</li>
              </ul>
            </div>
          </div>
        </li>
        <!-- <li class="skill-list">
                    <div class="skill-item item4">
                        <img src="../../assets/gold-circle.png" alt="" class="skill-img">
                        <h3 class="skill-name white-t">Git</h3>
                        <p class="skill-p white-t">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea iusto culpa recusandae, suscipit aspernatur dolor quo nisi praesentium, nihil nesciunt et eos totam, ipsam nulla repudiandae. Eius optio excepturi totam!</p>
                    </div>
                </li>
                <li class="skill-list">
                    <div class="skill-item item5">
                        <img src="../../assets/gold-circle.png" alt="" class="skill-img">
                        <h3 class="skill-name white-t">Vue.js</h3>
                        <p class="skill-p white-t">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, saepe sequi ad at dignissimos debitis consequatur? Nesciunt pariatur minima cum, eligendi sed provident doloremque magni quod illo commodi quas quisquam.</p>
                    </div>
                </li> -->
      </ul>
    </div>
  </section>

  <!--Experience Section-->
  <section class="exp" id="exp">
    <div class="max-width">
      <div class="exp-content">
        <h2 class="title"><div class="text">Experience</div></h2>
        <div class="main-line">
          <svg
            class="exp-main"
            width="19"
            height="875"
            viewBox="0 0 19 875"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.5 0.339746L0.839746 9L9.5 17.6603L18.1603 9L9.5 0.339746ZM9.5 874.66L18.1603 866L9.5 857.34L0.839746 866L9.5 874.66ZM8 9L8 866H11L11 9H8Z"
              fill="black"
            />
          </svg>
        </div>
        <div class="exp-inner">
          <ul class="exp-list">
            <li class="exp-item">
              <div class="exp-item-content">
                <div class="exp-item-card">
                  <h4 class="exp-content-time">Feb. 2022 – Aug. 2022</h4>
                  <img src="../../assets/trillions.jpg" alt="" />
                </div>
                <h3 class="exp-content-title">
                  Trillions Digital Co. Ltd., Taiwan
                </h3>
                <p class="exp-content-p">
                  Leveraged knowledge:<br /><br />Vue 3, Vite, Vuex, Axios,
                  Tailwind CSS, Ramda.js, CKEditor5, Vuelidate, Apache ECharts
                </p>
              </div>
            </li>
            <li class="exp-item">
              <div class="exp-item-content">
                <div class="exp-item-card">
                  <h4 class="exp-content-time">
                    May. 2020 – Oct. 2020 (Intern)<br />
                    Mar. 2021 – Feb. 2022
                  </h4>
                  <img
                    src="../../assets/logo.svg"
                    style="background-color: white"
                    alt=""
                  />
                </div>
                <h3 class="exp-content-title">
                  Shin Kong Wu Ho-Su Memorial Hospital, Taiwan
                </h3>
                <p class="exp-content-p">
                  Leveraged knowledge:<br /><br />C#, MSSQL, jQuery, .net core,
                  Bootstrap5
                </p>
              </div>
            </li>
            <li class="exp-item">
              <div class="exp-item-content">
                <div class="exp-item-card">
                  <h4 class="exp-content-time">
                    Mar. 2020 – May. 2020 (Intern)
                  </h4>
                  <img src="../../assets/fju.jpg" alt="" />
                </div>
                <h3 class="exp-content-title">
                  Fu Jen Catholic University Hospital, Taiwan
                </h3>
                <p class="exp-content-p">
                  Leveraged knowledge:<br /><br />C#, MSSQL, jQuery, .net core,
                  Kendo UI
                </p>
              </div>
            </li>
            <li class="exp-item">
              <div class="exp-item-content">
                <div class="exp-item-card">
                  <h4 class="exp-content-time">
                    Jul. 2019 – Feb. 2020 (Intern)
                  </h4>
                  <img src="../../assets/hash_school.png" alt="" />
                </div>
                <h3 class="exp-content-title">
                  Hash Programming School, Taiwan
                </h3>
                <p class="exp-content-p">
                  Leveraged knowledge:<br /><br />Python, WebSocket,
                  BeautifulSoup, Facebook advertising
                </p>
              </div>
            </li>
            <li class="exp-item">
              <div class="exp-item-content">
                <div class="exp-item-card">
                  <h4 class="exp-content-time">Mar. 2020- Jun. 2020</h4>
                  <!-- <img src="../../assets/tea3.jpg" alt="" /> -->
                </div>
                <h3 class="exp-content-title">Part-time Math tutor</h3>
                <p class="exp-content-p"></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!--Project Section-->
  <section class="project" id="project">
    <div class="max-width">
      <div class="project-content">
        <h2 class="title"><div class="text">Project</div></h2>
      </div>
      <!-- <div class="slick-slider">
        <li>
          <div class="full-card">
            <div class="font-card robotoslab-card">
              <h3 class="font-card-title">Line 醫療查詢機器人</h3>
              <p class="font-card-text"></p>
              <a href="#" class="explore-button" onclick="return false">zoom</a>
            </div>

            <div class="font-card roboto-card">
              <h3 class="font-card-title">顯示地圖位置</h3>
              <p class="font-card-text"></p>
              <a href="#" class="explore-button" onclick="return false">zoom</a>
            </div>

            <div class="font-description">
              <h2 class="font--robotoslab">
                Ruby<span class="font--roboto">+Ruby on Rails</span>
              </h2>
              <p class="font--roboto">
                一開始的想法是說，現在人主要溝通訊息都是用LINE，
                那如果把一些查詢功能結合到LINE上面，
                是不是會比下載APP或是網頁搜尋還來的直覺，
                然後我們一開始是參考"卡米狗"的LINE機器人去做參考的。
              </p>
            </div>
          </div>
        </li>

        <li>
          <div class="full-card">
            <div class="font-card lobster-card">
              <h3 class="font-card-title">關鍵字查詢機器人</h3>
              <p class="font-card-text"></p>
              <a href="#" class="explore-button" onclick="return false">zoom</a>
            </div>

            <div class="font-card cabin-card">
              <h3 class="font-card-title">SDM 問卷機器人</h3>
              <p class="font-card-text"></p>
              <a href="#" class="explore-button" onclick="return false">zoom</a>
            </div>

            <div class="font-description">
              <h2 class="font--lobster">
                Python<span class="font--cabin">+Django</span>
              </h2>
              <p class="font--cabin">
                大三下學期的專題使用的是Python來撰寫機器人，
                因為發現Python有許多方便之處， 結合Django 與 MicroSoft QnA Maker
                做一個問答型機器人， 最後搭配Google
                試算表，讓使用者輸入的話都記錄下來， 以便後台人員觀看及分析。
              </p>
            </div>
          </div>
        </li>

        <li>
          <div class="full-card">
            <div class="font-card eczar-card">
              <h3 class="font-card-title">新光醫院介面維護</h3>
              <p class="font-card-text"></p>
              <a href="#" class="explore-button" onclick="return false">zoom</a>
            </div>

            <div class="font-card gentium-card">
              <h3 class="font-card-title">新光醫院介面統計</h3>
              <p class="font-card-text"></p>
              <a href="#" class="explore-button" onclick="return false">zoom</a>
            </div>

            <div class="font-description">
              <h2 class="font--eczar">
                C#<span class="font--gentium">+jQuery+SQL</span>
              </h2>
              <p class="font--gentium">
                這個專案是我在新光醫院當實習生接到的案子，
                內容是要做出一個可以針對使用著提出的問題或是BUG進行篩選與分類，
                第一次接觸到比較大的專案，
                藉由同事稍講解一些架構，我也可以很快地把頁面及需求完成。
              </p>
            </div>
          </div>
        </li>
      </div> -->
      <Carousel3 />
    </div>
  </section>

  <!--Contect Section-->
  <section class="contect" id="contect">
    <div class="max-width">
      <div class="contect-content">
        <h2 class="title"><div class="text">Contect Me</div></h2>
      </div>
      <div class="contect-info">
        <h4 class="contect-title my-24">Your Name</h4>
        <input class="contect-input" type="text" />
        <textarea
          name="content"
          cols="20"
          rows="3"
          class="contect-context"
          style="display: none"
        ></textarea>
        <div class="submit my-24" onclick="sendEmail()">
          <i class="fal fa-chevron-circle-right"></i>
        </div>
      </div>
    </div>
    <div class="contect-social">
      <div class="box">
        <ul class="social-list">
          <li class="social-item">
            <a
              href="https://www.facebook.com/profile.php?id=100000554334429"
              target="_blank"
            >
              <i class="fab fa-facebook"></i>
            </a>
          </li>
          <li class="social-item">
            <a href="https://www.instagram.com/sungchian_w/" target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li class="social-item">
            <a href="https://github.com/sungchian" target="_blank">
              <i class="fab fa-github"></i>
            </a>
          </li>
          <li class="social-item">
            <a
              href="https://www.linkedin.com/in/sungchianwen-kelsey/"
              target="_blank"
            >
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <!-- <footer class="footer">
      <input type="button" class="goTop">
    </footer> -->
  <footer>
    <div class="scroll">
      <a href="#home">
        <i class="fal fa-chevron-circle-up"></i>
      </a>
    </div>
  </footer>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
import VueTyper from "vue3-typer";
import "vue3-typer/dist/vue-typer.css";
import Carousel3 from "../widgets/carousel3.vue";
import Carousel2 from "../widgets/carousel2.vue";
// import { useRoute } from "vue-router";
// import { useAuthStore } from "@/store/auth/store";

export default {
  name: "LayoutDefault",
  components: { VueTyper, Carousel3, Carousel2 },
  setup() {
    const isSticky = ref(false);
    const isScrollUp = ref(false);
    const lastPos = ref(0);
    const scrollHandler = (e) => {
      if (window.scrollY > 50) {
        isSticky.value = true;
        let currentPos = window.scrollY;
        if (currentPos > lastPos.value) {
          isScrollUp.value = true
        } else {
          isScrollUp.value = false;
        }
        lastPos.value = currentPos; //再記住現在位置，跟未來的位置做比較
      } else {
        isSticky.value = false;
      }
    };
    onMounted(() => {
      window.addEventListener("scroll", scrollHandler);
    }),
    onUnmounted(() => {
      window.removeEventListener("scroll", scrollHandler, true);
    });

    return {
      lastPos,
      isSticky,
      isScrollUp,
    };
  },
};
</script>

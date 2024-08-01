<template>
  <section class="project" id="project">
    <div class="max-width">
      <div class="project-content">
        <h2 class="title"><div class="text">Projects</div></h2>
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
      <Carousel2 />
    </div>
  </section>
</template>

<style>
.project {
  background: var(--black);
  /* background: var(--white); */
  justify-content: center;
  align-items: center;
  font-size: 14px;
  display: flex;
}

.project-content .title .text {
  background-color: var(--black);
}

.project .carousel__viewport {
  color: white;
}

.bx-viewport {
  overflow: hidden;
}

.bx-pager {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.bx-wrapper .bx-pager.bx-default-pager a {
  background: rgb(172, 69, 69);
  text-indent: -9999px;
  display: block;
  width: 15px;
  height: 15px;
  margin: 0 10px;
  outline: 0;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(255, 255, 255, 0.3);
}

.bx-wrapper .bx-pager.bx-default-pager a:hover,
.bx-wrapper .bx-pager.bx-default-pager a.active {
  background: rgba(0, 0, 0, 0.7);
}

.full-card {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: stretch;
  padding: 20px;
  /* new */
  height: auto;
  /* height: 80vh; */
  /* max-height: 600px; */
  background: var(--black);
  width: 90%;
  height: 50vh;
  max-width: 1300px;
  box-shadow: 0px 10px 10px -10px rgba(255, 255, 255, 0.9),
    0px 10px 10px -10px rgba(255, 255, 255, 0.3),
    0 10px 0px -10px rgba(255, 255, 255, 0.1);
}

.font-card {
  position: relative;
  width: 28%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background: linear-gradient(45deg, #9fbee6 0%, #dfeaee 100%);
  padding: 20px 20px;
  margin: 0 15px;
  text-align: center;
  box-shadow: 0 15px 20px -15px rgba(255, 255, 255, 0.3),
    0 55px 50px -35px rgba(255, 255, 255, 0.3);
  transition: box-shadow 0.3s, transform 0.3s;
  transition-delay: 0.15s;
}

.font-card.hovered-card {
  box-shadow: 0 5px 3px -5px rgba(0, 0, 0, 0.3),
    0 2px 8px -5px rgba(0, 0, 0, 0.3);
  transform: translateY(-2px);
}

.font-card img {
  overflow: hidden;
}

.font-card .font-card-title {
  opacity: 0;
  width: 100%;
  transition: all 0.3s ease-in-out;
  border-radius: 5px;
  color: var(--white);
  background-color: var(--gold);
}

.font-card .font-card-text {
  line-height: 1.4;
}

.font-description {
  padding: 0 30px;
  margin: 15px;
  margin-left: 3rem;
  width: 44%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.font-description h2 {
  color: var(--gold);
}

.font-description h2::before {
  content: "";
  display: none;
}

.font-description h2 span {
  color: var(--gold_light);
}
.font-description p {
  padding-left: 15px;
  color: var(--white);
  line-height: 1.8;
}
.font-description p:before {
  content: "—";
  margin-left: -15px;
  margin-right: 4px;
}

.explore-button {
  font-size: 0.1em;
  background: var(--gold);
  /* width: 30%; */
  color: var(--white);
  display: inline-block;
  padding: 1em;
  margin-top: 2em;
  border: solid 3px var(--gold);
  border-radius: 5em;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 1em;
  box-shadow: 0 15px 20px -10px rgba(0, 0, 0, 0.3);
  transition: color 0.6s, box-shadow 0.3s, transform 0.3s;
}
.explore-button:hover {
  box-shadow: 0 3px 5px -5px rgba(0, 0, 0, 0.3);
  transform: translateY(-1px);
  color: #6f6f6f;
}

.font-description {
  user-select: none;
}
</style>

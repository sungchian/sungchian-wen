<template>
  <!--Contact Section-->
  <section class="Contact" id="Contact">
    <div class="max-width">
      <div class="Contact-content">
        <h2 class="title"><div class="text">Contact Me</div></h2>
      </div>
      <div class="Contact-info">
        <h4 class="Contact-title my-24">Your Name</h4>
        <input class="Contact-input" type="text" />
        <textarea
          name="content"
          cols="20"
          rows="3"
          class="Contact-context"
          style="display: none"
        ></textarea>
        <div class="submit my-24" onclick="sendEmail()">
          <i class="fal fa-chevron-circle-right"></i>
        </div>
      </div>
    </div>
    <div class="Contact-social">
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
</template>

<style>
.Contact {
  height: 1000px;
  background: var(--black_light);
  background-image: url("./assets/Contact-circle.svg");
  background-repeat: no-repeat;
  background-position: 50% 80%;
  text-align: center;
  position: relative;
}

.Contact .title .text {
  background-color: var(--black_light);
}

.Contact .Contact-info {
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  transition: all 0.3s ease;
}

.Contact .Contact-info .Contact-title {
  font-size: 30px;
  font-weight: 400;
  color: var(--gold);
}

.Contact .Contact-info input,
.Contact .Contact-info textarea {
  margin-top: 100px;
  font-size: 25px;
  border: 0; /* 去除未選中狀態邊框 */
  outline: none; /* 去除選中狀態邊框 */
  background-color: rgba(0, 0, 0, 0); /* 透明背景 */
  border-bottom: 1px solid var(--white);
  color: var(--white);
  text-align: center;
}

.Contact .Contact-info .submit i {
  font-size: 40px;
  color: var(--white);
  cursor: pointer;
}

.robotoslab-card {
  background: url("./assets/linebot01.jpg") no-repeat center center;
  background-size: cover;
}

.roboto-card {
  background: url("./assets/linebot02.jpg") no-repeat center center;
  background-size: cover;
}

.lobster-card {
  background: url("./assets/linebot1.PNG") no-repeat center center;
  background-size: cover;
}

.cabin-card {
  background: url("./assets/linebot2.PNG") no-repeat center center;
  background-size: cover;
}

.eczar-card {
  background: url("./assets/skh-project1.PNG") no-repeat center center;
  background-size: cover;
}

.gentium-card {
  background: url("./assets/skh-project2.PNG") no-repeat center center;
  background-size: cover;
}

.Contact-social {
  background-color: gray;
  background-size: cover;
  position: fixed;
  left: 10px;
  top: 30%;
  width: 50px;
  font-size: 30px;
  overflow: hidden;
  box-shadow: 0 0 30px 30px gray;
}

.Contact-social::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background-color: rgba(255, 255, 255, 0.1); */
  z-index: -1;
  background-attachment: fixed;
  -webkit-filter: blur(20px);
  -moz-filter: blur(20px);
  -ms-filter: blur(20px);
  -o-filter: blur(20px);
  filter: blur(50px);
  /* margin: -10px; */
}

.social-item:nth-child(n + 2) {
  margin-top: 20px;
}

.Contact-social .social-item i {
  color: var(--white);
}
</style>

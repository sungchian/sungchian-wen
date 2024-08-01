<template>
  <!--Skill Section-->
  <section class="skill" id="skill">
    <div class="w2">
      <div class="skill-content">
        <h2 class="title"><div class="text">Skills</div></h2>
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
</template>

<style>
.skill{
    padding-top: 0;
    background: var(--black);
    /* 左右位置，上下位置(放大)，縮放 */
    /* background-size: cover; */
    
}

.w2{
    height: 200px;
    background: url('./assets/artiom-vallat-TxUw6dXzhyA-unsplash.jpg') 10% no-repeat, var(--black);
    /* 左右位置，上下位置(放大)，縮放 */
    background-size: 200px;
    background-position: 90% 30%;
    padding: 50px;
}

.skill-group{
    display: flex;
    justify-content: space-between;
}

/* .skill-content{
    background: url('skill_bg.jpg');
} */

.skill-group .skill-list{
    flex: 1;
    display: inline-block;
    margin: 0 auto;
    padding: 20px 50px;
    width: 20%;
}

.skill-content .title .text{
    /* background-color: rgba(0, 0, 0, .3); */
    background-color: black;
}

.skill-item .skill-name, .skill-item .skill-p{
    /* display: block; */
    text-align: center;
    flex-wrap: nowrap;
}

.skill-item .skill-name, .skill-item .skill-p ul li{
    padding: 10px 0;
    font-size: 20px;
}


.skill-item .skill-name{
    position: relative;
}

.skill-item .skill-name::after{
    content: "";
    position: absolute;
    width: 80%;
    height: 3px;
    background-color: var(--gold);
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
}

.skill-item .skill-group{
    position: relative;
}

.skill-item .skill-img{
    position: relative;
    width: 150px;
    height: 150px;
    left: 50%;
    transform: translateX(-50%);
}

.skill-item .skill-subImg{
    position: absolute;
    width: 80px;
    height: 80px;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
}
</style>

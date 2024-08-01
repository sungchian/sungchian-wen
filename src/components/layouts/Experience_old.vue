<template>
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
</template>

<style>
.exp{
    background: var(--black_light);
    /* display: flex; */
    position: relative;
    color: var(--white);
    /* height: 1050px; */
}

.exp-inner .exp-list{
    display: flex;
    flex-wrap: wrap;
}

.exp-inner .exp-list .exp-item{
    width: 50%;
    padding: 0 10px;
    /* margin-bottom: -100px ; */
}

.exp-inner .exp-list .exp-item:nth-child(2n){
    margin-top: 150px;
    text-align: right;
    justify-content: flex-start !important;
}

.exp-item-content{
    background: var(--black_light);
    box-shadow: 15px 15px 30px 1px rgba(0, 0, 0, 0.3);
}

.exp-inner .exp-list .exp-item:nth-child(2n) .exp-item-card {
    justify-content: end;
}

.exp-content .title .text{
    background-color: var(--black_light);
}

.exp-content .main-line{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}

.exp-item-content h4{
    display: inline-block;
}

.exp-item-content img{
    position: relative;
    display: inline-block;
    max-width: 50%;
    max-height: 65px;
    margin-left: 5%;
    top: 20px;
}

.exp-content .exp-content-title{
    margin: 0;
    font-size: 25px;
    color: var(--gold_light);
}

.exp-content .exp-item-card{
    padding: 30px 0;
    display: flex;
    align-items: baseline;
}
</style>
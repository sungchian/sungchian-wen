<template>
  <!-- <modal /> -->
  <the-nav :class="{ sticky: isSticky, '-top-20': isScrollUp }" />

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
      <h2 class="title"><div class="text">ABOUT ME</div></h2>
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
          <p class="intro-text">
            {{ intro }}
          </p>
          <a
            href="./files/SungChain_Wen_RESUME.pdf"
            download="SungChain_Wen_RESUME.pdf"
            >Download</a
          >
        </div>
      </div>
    </div>
  </section>

  <!--Certificates Section-->
  <section class="certificates" id="certificates">
    <div class="max-width">
      <div class="certificates-content">
        <h2 class="title"><div class="text">CERTIFICATES</div></h2>
      </div>
      <div class="certificates-row">
        <div
          v-for="(cert, index) in certificates"
          :key="index"
          class="certificate-item"
        >
          <a :href="cert.href" target="_blank">
            <div class="certificate-image-container">
              <img :src="cert.imgSrc" :alt="cert.alt" class="certificate-img" />
              <div class="certificate-overlay flex flex-col">
                <p
                  v-for="(skill, skillIndex) in cert.skills"
                  :key="skillIndex"
                  class="certificate-skill"
                >
                  {{ skill }}
                </p>
              </div>
            </div>
            <h3 class="certificate-name">{{ cert.name }}</h3>
          </a>
        </div>
      </div>
    </div>
  </section>

  <!--Skill Section-->
  <section class="skill" id="skill">
    <div class="w2">
      <div class="skill-content">
        <h2 class="title"><div class="text">SKILLS</div></h2>
      </div>
    </div>
    <div class="max-width">
      <skillComponent />
    </div>
  </section>

  <!--Experience Section-->
  <section class="exp" id="exp">
    <div class="max-width">
      <div class="exp-content">
        <h2 class="title"><div class="text">EXPERIENCE</div></h2>
        <div class="card-container">
          <div
            v-for="(job, index) in jobs"
            :key="index"
            class="card-sub-container"
          >
            <button
              class="card btn btn-link btn-block text-left"
              type="button"
              :class="{
                collapsed: !isJobOpen(index),
                'focus-exp': isJobOpen(index),
              }"
              @click="toggleJob(index)"
              :aria-expanded="isJobOpen(index)"
              :aria-controls="'collapse' + index"
            >
              <div class="card-header" :id="'heading' + index">
                <h3 class="mb-0 flex justify-between">
                  <div>{{ job.company }}</div>
                  <div>{{ job.location }}</div>
                </h3>
                <div class="block">
                  {{ job.position }}
                </div>
              </div>
            </button>
            <div
              :id="'collapse' + index"
              class="collapse-content"
              :style="{
                maxHeight: isJobOpen(index) ? getMaxHeight(index) : '0px',
              }"
              :aria-labelledby="'heading' + index"
              data-parent="#experienceAccordion"
            >
              <div class="card-body">
                <p class="text-muted">{{ job.duration }}</p>
                <ul class="list-unstyled">
                  <li
                    v-for="(responsibility, rIndex) in job.responsibilities"
                    :key="rIndex"
                    class="mb-2"
                  >
                    {{ responsibility }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!--Project Section-->
  <section class="project" id="project">
    <div class="max-width">
      <h2 class="title"><div class="text">PROJECTS</div></h2>
      <div class="project-content">
        <!-- 選單 -->
        <div class="text-center my-8">
          <ul class="list-inline flex">
            <li
              class="list-inline-item flex-1"
              v-for="category in categories"
              :key="category"
              @click="selectCategory(category)"
            >
              <button
                class="btn btn-primary focus-style category-button relative overflow-hidden"
                :class="{ active: category === selectCategory }"
              >
                {{ category }}
                <span class="underline absolute w-full h-0.5"></span>
              </button>
            </li>
          </ul>
        </div>

        <!-- 項目列表 -->
        <div :class="gridClass">
          <div
            class="mb-4 p-4 text-center"
            v-for="project in filteredProjects"
            :key="project.id"
          >
            <a :href="project.href" target="_blank">
              <div class="project-card p-8">
                <img
                  :src="project.thumbnail"
                  class="card-img-top w-full object-cover h-48"
                  alt="Project Thumbnail"
                />
                <div class="card-body">
                  <h5 class="card-title font-bold font-robert mt-0.5">
                    {{ project.title }}
                  </h5>
                  <p class="card-text text-gray-700">
                    {{ project.description }}
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section class="Contact" id="Contact">
    <div class="max-width">
      <h2 class="title"><div class="text">CONTACT</div></h2>
      <div class="mt-8 flex justify-around shadow-lg rounded-lg">
        <!-- Phone -->
        <div class="flex items-center space-x-4">
          <div class="flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
          </div>
          <div>
            <p class="phone">+1 949-599-5656</p>
            <p class="phone-time">Mon-Fri, PDT 9am-9pm</p>
          </div>
        </div>
        <!-- Email -->
        <div class="flex items-center space-x-4">
          <div class="flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div>
            <p class="email">
              <a href="mailto: bnbn870829@gmail.com">bnbn870829@gmail.com</a>
            </p>
            <p class="email-text">Email</p>
          </div>
        </div>
        <!-- Address -->
        <div class="flex items-center space-x-4">
          <div class="flex-shrink-0">
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z"
              ></path>
            </svg>
          </div>
          <div>
            <p class="location">Irvine, CA 92614, US</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- <footer class="footer">
      <input type="button" class="goTop">
    </footer> -->
  <footer>
    <div class="copyright text-center">
      <p class="copyright-text">
        &copy; Copyright 2024 SungChian Wen | Created by SungChian Wen
      </p>
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
    <div class="scroll">
      <a href="#home">
        <i class="fal fa-chevron-circle-up"></i>
      </a>
    </div>
  </footer>
</template>

<script>
import { ref, computed, onMounted, onUnmounted, nextTick } from "vue";
import VueTyper from "vue3-typer";
import "vue3-typer/dist/vue-typer.css";
import Carousel3 from "../widgets/carousel3.vue";
import Carousel2 from "../widgets/carousel2.vue";
import skillComponent from "../widgets/skill-component.vue";
// import { useRoute } from "vue-router";
// import { useAuthStore } from "@/store/auth/store";

export default {
  name: "LayoutDefault",
  components: { VueTyper, Carousel3, Carousel2, skillComponent },
  setup() {
    const isSticky = ref(false);
    const isScrollUp = ref(false);
    const lastPos = ref(0);

    const intro = ref(
      "As a natural leader and problem-solving expert, I've guided a team to a top-five finish in a graduate project competition. I excel at resolving team conflicts and inspiring each member to reach their full potential, ensuring smooth project completion. I believe my unique combination of skills and cross-domain experience will bring fresh perspectives and innovative thinking to your team. I'm eager to align my analytical prowess with your business objectives, fostering a data-driven decision-making culture that propels growth and innovation. Together, we can transform data into insights, and insights into action, unlocking new opportunities for your enterprise."
    );

    // 使用 Vite 的动态导入功能
    const images_certificate = import.meta.glob(
      "@/assets/certificate/*.{png,jpg,jpeg,svg}",
      { eager: true }
    );
    const images_project = import.meta.glob(
      "@/assets/project/*.{png,jpg,jpeg,svg}",
      { eager: true } //取消懶加載
    );

    const certificates = ref([
      {
        href: "https://www.coursera.org/account/accomplishments/verify/J4KT926GJSYV",
        // imgSrc: "certificate/CERTIFICATE_sql_for_datascience.jpeg",
        imgSrc: "",
        alt: "Certificate 1",
        name: "SQL for DataScience",
        skills: ["SQLite", "Data Science", "Data Analysis"],
        keywordForMatching: "sql_for_datascience", // 用于匹配图片文件名的关键词
      },
      {
        href: "https://www.coursera.org/account/accomplishments/verify/3A4HNSM5XRQ4",
        // imgSrc: "certificate/CERTIFICATE_Data_Wrangling.jpeg",
        imgSrc: "",
        alt: "Certificate 2",
        name: "Data Wrangling, Analysis and AB Testing with SQL",
        skills: [
          "A/B Testing",
          "Predictive Analytics",
          "Query String",
          "Data Analysis",
          "SQL",
        ],
        keywordForMatching: "Data_Wrangling", // 用于匹配图片文件名的关键词
      },
      {
        href: "https://www.coursera.org/account/accomplishments/verify/46UWAUXD9T4D",
        // imgSrc: "../../assets/certificate/CERTIFICATE_Capstone.jpeg",
        imgSrc: "",
        alt: "Certificate 3",
        name: "SQL for Data Science Capstone Project",
        skills: [
          "Creating metrics",
          "Exploratory Data Analysis",
          "Data Analysis",
          "Presentation Skills",
          "SQL",
        ],
        keywordForMatching: "Capstone",
      },
      {
        href: "https://www.coursera.org/account/accomplishments/verify/ZN9DCJA2CVV8",
        imgSrc: "",
        alt: "Certificate 4",
        name: "Distributed Computing with Spark SQL",
        skills: ["Apache Spark", "Delta Lake", "Data Science", "SQL"],
        keywordForMatching: "Distributed_Computing_with_Spark_SQL",
      },
      {
        href: "https://www.coursera.org/account/accomplishments/verify/SA2576JX2YXB",
        imgSrc: "",
        alt: "Certificate 5",
        name: "Customer Analytics",
        skills: [
          "Customer Analytics",
          "Predictive Analytics",
          "Marketing Performance Measurement And Management",
          "Regression Analysis",
        ],
        keywordForMatching: "Customer_Analytics",
      },
      {
        href: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/PwC%20US/N9wYyLnaWpizw8Yjy_PwC%20US_S3mMctR253k4zMKHG_1719428303519_completion_certificate.pdf",
        imgSrc: "",
        alt: "Certificate 6",
        name: "PwC Audit Simulation",
        skills: [
          "Compliance Analysis",
          "Quality Control Documentation",
          "Issue Identification",
          "Policy Interpretation",
          "Process Flow Documentation",
        ],
        keywordForMatching: "PwC_Audit",
      },
      {
        href: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/PwC%20Switzerland/a87GpgE6tiku7q3gu_PwC%20Switzerland_S3mMctR253k4zMKHG_1722988045499_completion_certificate.pdf",
        imgSrc: "",
        alt: "Certificate 6",
        name: "Power BI Job Simulation",
        skills: [
          "Microsoft Power BI",
          "Insight and Actions",
          "Defining KPIs",
          "Self-Reflection",
          "Calculating Measures",
        ],
        keywordForMatching: "PwC_powerbi",
      },
    ]);

    const jobs = ref([
      {
        company: "Society for the Promotion of Japanese Animation (SPJA)",
        location: "Corona, CA",
        position: " Jr. Financial/Business Analyst",
        duration: "10/2024 – 11/2024",
        responsibilities: [
          "Created Power BI dashboards with DAX to track Netflix and Hulu's top-performing anime and series, resulting in a 20% increase in vendor participation and improved title selection for Anime Expo.",
          "Coordinated with Operations, Entertainment, and Marketing teams to analyze and streamline expenses, leading to a 15% reduction in budget variances and improved financial transparency.",
          "Improved forecast reliability and resource allocation by developing Time Series budget forecasting models, enabling more precise financial planning and reducing projected variances.",
        ],
      },
      {
        company: "Avanath Real Estate",
        location: "Irvine, CA",
        position: "Student Data Analyst",
        duration: "01/2024 – 06/2024",
        responsibilities: [
          "Built quantitative models for 100+ assets using Python, converting 20+ market signals into measurable scores to serve as factors in the evaluation process.",
          "Accelerated financial analysis and budgeting processes by 25% by crafting robust Python scripts for data cleansing and transformation.",
          "Empowered stakeholders to make data-driven investment decisions and capitalize on macroeconomic trends by constructing interactive Tableau dashboards to visualize key metrics.",
          "Improved forecasting accuracy by 20% through engineering predictive analytics models utilizing historical data and enabling proactive responses to market fluctuations.",
          "Reduced reporting time by 30% by streamlining data processing workflows with advanced Excel functions and PivotTable.",
        ],
      },
      {
        company: "Trillions digital co., ltd.",
        location: "Taichung, TW",
        position: "Frontend Developer",
        duration: "02/2022 – 08/2022",
        responsibilities: [
          "Increased organic traffic by 25% through executing comprehensive web analytics to enhance site visibility and search engine performance(SEO).",
          "Enabled real-time KPI monitoring by creating a dynamic data visualization dashboard using Apache ECharts.",
          "Achieved a 15%improvement in project outcomes by leading cross-functional teams in developing websites, utilizing Agile methodologies and Jira for efficient project tracking and collaboration.",
        ],
      },
      {
        company: "Shin Kong Wu Ho-Su Memorial Hospital",
        location: "Taipei, TW",
        position: "Data Engineer",
        duration: "05/2020 – 02/2022",
        responsibilities: [
          "Enhanced data accessibility and analysis speed by 40% through architecting and deploying ETL processes using MSSQL for expansive healthcare datasets.",
          "Improved resource allocation and care strategies by 20% through performing in-depth analyses of patient information to uncover trends",
          "Coordinated with medical professionals to translate complex healthcare requirements into actionable data collection and analysis plans, accelerating project implementation by 25%",
        ],
      },
    ]);

    const openJobIndex = ref(null);

    const isJobOpen = computed(() => (index) => openJobIndex.value === index);

    const toggleJob = (index) => {
      openJobIndex.value = openJobIndex.value === index ? null : index;
    };

    const scrollHandler = (e) => {
      if (window.scrollY > 50) {
        isSticky.value = true;
        let currentPos = window.scrollY;
        if (currentPos > lastPos.value) {
          isScrollUp.value = true;
        } else {
          isScrollUp.value = false;
        }
        lastPos.value = currentPos; //再記住現在位置，跟未來的位置做比較
      } else {
        isSticky.value = false;
      }
    };

    const getMaxHeight = (index) => {
      if (!contentHeights.value[index]) {
        nextTick(() => {
          const element = document.getElementById(`collapse${index}`);
          if (element) {
            contentHeights.value[index] = `${element.scrollHeight}px`;
          }
        });
        return "auto";
      }
      return contentHeights.value[index];
    };

    const contentHeights = ref({});

    const categories = ref([
      "All",
      "Business Analysis",
      "Data Analysis",
      "Machine Learning",
      "Data Visualization",
    ]);
    const selectedCategory = ref("All");
    // for focus
    const projects = ref([
      {
        id: 1,
        category: ["All", "Business Analysis", "Data Visualization"],
        href: "https://public.tableau.com/app/profile/sung.chian.wen/viz/VisualizationofInsuranceCompanysDividendRatesvs_InterestRates/InsuranceCompanysDividendRatesvsInterestRates?publish=yes",
        // thumbnail: "src/assets/project/tableau-dividend-rates.jpg",
        thumbnail: "",
        keywordForMatching: "tableau-dividend-rates",
        title: "Insurance Company's Dividend Rates vs. Interest Rates",
        description: "Description 1",
      },
      {
        id: 2,
        category: ["All", "Deep Learning", "Machine Learning"],
        href: "https://github.com/sungchian/DeepLearning-Ruined-Fruit-Detection",
        thumbnail: "",
        keywordForMatching: "Fresh-and-Rotten-Classification",
        title: "Fresh and Rotten Classification",
        description: "Description 2",
      },
      {
        id: 3,
        category: [
          "All",
          "Machine Learning",
          "Business Analysis",
          "Data Analysis",
        ],
        href: "https://github.com/sungchian/Alzheimer-prediction",
        thumbnail: "",
        keywordForMatching: "alzheimer",
        title: "Alzheimer Prediction",
        description: "Description 3",
      },
      {
        id: 4,
        category: [
          "All",
          "Machine Learning",
          "Business Analysis",
          "Data Analysis",
        ],
        href: "https://github.com/sungchian/loan-approval-prediction",
        thumbnail: "",
        keywordForMatching: "loan-prediction",
        title: "Loan-approval Prediction",
        description: "Description 4",
      },
      {
        id: 5,
        category: [
          "All",
          "Business Analysis",
          "Data Analysis",
          "Data Visualization",
        ],
        href: "https://github.com/sungchian/collision-analysis",
        thumbnail: "",
        keywordForMatching: "collision",
        title: "Collision Analysis",
        description: "Description 5",
      },
      {
        id: 6,
        category: ["All", "Data Visualization"],
        href: "https://github.com/sungchian/Diversity-and-Inclusion/tree/master",
        thumbnail: "",
        keywordForMatching: "power-bi",
        title: "Diversity & Inclusion",
        description: "Description 6",
      },
    ]);

    const filteredProjects = computed(() => {
      return projects.value.filter((project) =>
        project.category.includes(selectedCategory.value)
      );
    });

    const gridClass = computed(() => {
      const projectCount = filteredProjects.value.length;
      const rows = Math.ceil(projectCount / 3); // 每行3個項目
      return `grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-${rows}`;
    });

    const selectCategory = (category) => {
      selectedCategory.value = category;
    };

    onMounted(async () => {
      window.addEventListener("scroll", scrollHandler);
      // certificate
      const imageModules = await Promise.all(
        Object.values(images_certificate).map((importFunc) => importFunc)
      );

      const imageMap = Object.fromEntries(
        Object.keys(images_certificate).map((path, index) => [
          path,
          imageModules[index].default,
        ])
      );

      for (const cert of certificates.value) {
        const matchingImagePath = Object.keys(imageMap).find((path) =>
          path.toLowerCase().includes(cert.keywordForMatching.toLowerCase())
        );

        if (matchingImagePath) {
          cert.imgSrc = imageMap[matchingImagePath];
        } else {
          console.warn(`No matching image found for ${cert.name}`);
        }
      }
      // project
      const imageModules_ = await Promise.all(
        Object.values(images_project).map((importFunc) => importFunc)
      );

      const imageMap_ = Object.fromEntries(
        Object.keys(images_project).map((path, index) => [
          path,
          imageModules_[index].default,
        ])
      );
      for (const project of projects.value) {
        const matchingImagePath = Object.keys(imageMap_).find((path) =>
          path.toLowerCase().includes(project.keywordForMatching.toLowerCase())
        );

        if (matchingImagePath) {
          project.thumbnail = imageMap_[matchingImagePath];
        } else {
          console.warn(`No matching image found for ${project.name}`);
        }
      }
    }),
      onUnmounted(() => {
        window.removeEventListener("scroll", scrollHandler, true);
      });

    return {
      lastPos,
      isSticky,
      isScrollUp,
      //intro
      intro,
      images_certificate,
      // certification
      certificates,
      // experience
      jobs,
      openJobIndex,
      isJobOpen,
      toggleJob,
      getMaxHeight,
      contentHeights,
      // projects
      categories,
      selectedCategory,
      images_project,
      projects,
      filteredProjects,
      selectCategory,
      gridClass,
    };
  },
};
</script>

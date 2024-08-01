<template>
  <div class="skill-sections">
    <section
      v-for="(skill, index) in skills"
      :key="index"
      class="skill-section"
    >
      <div :class="['skill-content', { 'reverse-layout': index === 1 }]">
        <div class="skill-info w-3/5">
          <h3 class="section-title justify-center">
            {{ skill.name }}
          </h3>
          <ul class="skill-list flex text-center">
            <li
              v-for="(category, catIndex) in skill.categories"
              :key="catIndex"
              class="skill-category"
            >
              <h3 class="h-16 flex justify-center items-center">{{ category.name }}</h3>
              <ul class="skill-items">
                <li
                  v-for="(item, itemIndex) in category.items"
                  :key="itemIndex"
                >
                  {{ item }}
                </li>
              </ul>
            </li>
          </ul>
          <button class="work-samples-btn">Work Samples</button>
        </div>
        <div class="skill-image w-2/5">
          <img :src="skill.image" :alt="`${skill.name} illustration`" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const skills = ref([
      {
        name: "Data Analytics & Data Science",
        image: "src/assets/data-analysis_ill.png",
        categories: [
          {
            name: "Data Science",
            items: [
              "Statistics",
              "Probability",
              "Hypothesis Testing",
              "A/B Testings",
              "Data-driven Decision Making",
              "Metrics Design",
              "Root Cause Analysis",
              "Predictive Analytics",
              "Time Series Analytics",
            ],
          },
          {
            name: "Business Intelligence",
            items: ["Tableau", "Power BI", "Google Sheets", "MS Excel"],
          },
          {
            name: "Programming",
            items: ["Python", "SQL", "R", "Alteryx"],
          },
          {
            name: "Tools & Libraries",
            items: [
              "Jupyter",
              "Databricks",
              "PySpark",
              "SQLAlchemy",
              "pandas",
              "NumPy",
              "SciPy",
              "Plotly",
              "Seaborn",
              "Matplotlib",
              "Anaconda",
            ],
          },
        ],
      },
      {
        name: "Artificial Intelligence & Machine Learning",
        image: "src/assets/predictive_ill.png",
        categories: [
          {
            name: "Machine Learning",
            items: [
              "Supervised Learning",
              "Unsupervised Learning",
              "Regression",
              "Classification",
              "Clustering",
              "Dimensionality Reduction",
            ],
          },
          {
            name: "Deep Learning",
            items: [
              "Natural Language Processing (NLP)",
              "Generative Adversarial Network (GAN)",
              "Neural Network",
            ],
          },
          {
            name: "Programming",
            items: [
              "Python",
              "SQL",
              "Model Containerization",
              "API Development",
              "Flask",
              "Flask-RESTful",
            ],
          },
          {
            name: "Tools & Libraries",
            items: [
              "Scikit-learn",
              "XGBoost",
              "CatBoost",
              "Keras",
              "TensorFlow",
              "MLflow",
              "MLOps",
            ],
          },
        ],
      },
      {
        name: "Computer Science & Developing",
        image: "src/assets/real-time-analysis_ill.png",
        categories: [
          {
            name: "Programming",
            items: [
              "Python",
              "R",
              "C#",
              "JAVA",
              "HTML",
              "JavaScript",
              "CSS",
              "Vue.js",
              "Markdown",
              "Shell Scripting",
              "Flask",
              "API Development",
              "Data Structures & Algorithms",
            ],
          },
          {
            name: "Cloud Computing",
            items: ["AWS", "Azure", "Heroku"],
          },
          {
            name: "DevOps",
            items: [
              "Linux",
              "Git",
              "Swagger",
              "Agile Development",
              "CI/CD",
            ],
          },
        ],
      },
    ]);

    return {
      skills,
    };
  },
};
</script>

<style scoped>
.skill-sections {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.skill-section {
  width: 100%;
}

.skill-content {
  display: flex;
  background-color: #f0f0f0;
  border-radius: 10px;
  overflow: hidden;
}
.skill-content.reverse-layout {
  flex-direction: row-reverse;
}

.skill-info {
  flex: 0 0 auto;
  padding: 2rem;
}

.skill-image {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e0e0e0;
}

.skill-image img {
  max-width: 100%;
  height: 100%;
  object-fit: cover;
}

.section-title {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
}

.skill-icon {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

.skill-list {
  list-style-type: none;
  padding: 0;
}

.skill-category {
  margin-bottom: 1rem;
  flex: 1 1 25%;
}

.skill-category h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  letter-spacing: 0.2rem;
}

.skill-items li {
  font-size: 0.9rem;
  line-height: 1.4;
  letter-spacing: 0.1rem;
  padding: 0.1rem 0;
}

.work-samples-btn {
  background-color: var(--gold_light);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .skill-content {
    flex-direction: column;
  }

  .skill-image {
    height: 200px;
  }
}
</style>

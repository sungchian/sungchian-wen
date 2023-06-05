import { createApp } from 'vue'
import './style.css'
import './bxslider.css'
import "./assets/css/tailwind.css";
import App from './App.vue'
import components from "@/_app/components";

const app = createApp(App);
app.use(components);
app.mount("#app");

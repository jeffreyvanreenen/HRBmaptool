import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './main.css'
import VueAxios from "vue-axios";
import axios from 'axios'


import OpenLayersMap from 'vue3-openlayers'
import 'vue3-openlayers/dist/vue3-openlayers.css'

createApp(App).use(router).use(OpenLayersMap).use(VueAxios, axios).mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from "./router"

//Importing Custom Styles
import  "./assets/fontawesome/css/all.min.css"
import  "./assets/fontawesome/css/v4-shims.min.css"
import  "./assets/fontawesome/css/fontawesome.min.css"

//Importing ALL MY STYLEs
import "./assets/styles/general.css"
import "./assets/styles/responsive.css"

//External Scripts
import "./assets/script/animations"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

import Vue from 'vue'
import App from './KbbApp'
import router from './router'
import { kbbAppHtmlId } from './constants/configurations'
import { store } from './data/store'
import 'primeflex/primeflex.css';
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primevue/resources/themes/saga-blue/theme.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount(kbbAppHtmlId)

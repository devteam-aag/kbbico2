import Vue from 'vue'
import Router from 'vue-router'

import Start from './components/steps/initial/Start'

Vue.use(Router)

import { 
  endpointHome
} from './constants/endponts'

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: endpointHome,
      component: Start
    }
  ]
})
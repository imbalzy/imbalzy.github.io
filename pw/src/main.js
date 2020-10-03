import Vue from 'vue'
import App from '@/App.vue'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.productionTip = false
const routes = [
  {
    path: '/',
    component: () => import('@/home.vue'),
    name: 'home',
    children: [
      { name: 'project', path: '/project/' }
    ]
  },
]
const router = new VueRouter({
  mode: 'history',
  routes: routes
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')

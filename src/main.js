import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import * as fb from 'firebase'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyC0caNmZ8tx35-VdaAjBmQApb_xughtxP8',
      authDomain: 'itc-ads-58139.firebaseapp.com',
      databaseURL: 'https://itc-ads-58139.firebaseio.com',
      projectId: 'itc-ads-58139',
      storageBucket: 'itc-ads-58139.appspot.com',
      messagingSenderId: '653197828994'
    })
  }
})

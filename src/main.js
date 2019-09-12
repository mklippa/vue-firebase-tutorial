import Vue from 'vue'
import firebase from 'firebase'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyBrIde-g4mZsLqqjIeysXvpu2MSCmxpZ6E',
  authDomain: 'vue-firebase-tutorial-41978.firebaseapp.com',
  databaseURL: 'https://vue-firebase-tutorial-41978.firebaseio.com',
  projectId: 'vue-firebase-tutorial-41978',
  storageBucket: '',
  messagingSenderId: '371766639690',
  appId: '1:371766639690:web:25ce9e08fa13f3da8f7ab3'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

let app = ''

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})

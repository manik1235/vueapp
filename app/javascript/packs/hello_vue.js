import Vue from 'vue/dist/vue.esm'

document.addEventListener('DOMContentLoaded', () => {
  // first app
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  })

  // v-bind
  var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    }
  })

  // v-if
  var app3 = new Vue({
    el: '#app-3',
    data: {
      seen: true
    }
  })
})

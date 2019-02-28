import Vue from 'vue'
import App from './App.vue'

import Library from 'wovn-icons'

Vue.config.productionTip = false

Vue.use(Library)

new Vue({
  render: h => h(App),
}).$mount('#app')

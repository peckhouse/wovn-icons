import WovnIcon from './components/WovnIcon'

const icons = require.context('!svg-sprite-loader!./svg', false, /\.svg$/)
icons.keys().forEach(icons)

export default {
  install (Vue) {
    Vue.component('WovnIcon', WovnIcon)
  }
}

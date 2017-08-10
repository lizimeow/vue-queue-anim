import vueQueueAnim from './components/vueQueueAnim.vue'

const vueQueueAnimPlugin = {
  install: function (Vue, options) {
    Vue.component(vueQueueAnim.name, vueQueueAnim)
  }
}

export default vueQueueAnimPlugin

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vueQueueAnimPlugin)
}

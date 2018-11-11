import Vue from 'vue'
import Router from 'vue-router'
import imgShow from '@/components/imgShow'
import css from '@/page/css'
import transform from '@/page/transform'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'imgShow',
      component: imgShow
    },
    {
      path: '/css',
      name: 'css',
      component: css
    },
    {
      path: '/transform',
      name: 'transform',
      component: transform
    }
  ]
})

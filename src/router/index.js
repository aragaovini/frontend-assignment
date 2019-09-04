import Vue from 'vue'
import Router from 'vue-router'
import routes from 'Router/routes'
import store from 'Store'

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  routes
})

router.beforeEach((to, from, next) => {
    store.commit('SET_SELECTED_MENU', {
        label: to.name,
        path: to.path
    })
    next()
})

export default router
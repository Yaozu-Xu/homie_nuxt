import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f8c8090e = () => interopDefault(import('../pages/publish.vue' /* webpackChunkName: "pages/publish" */))
const _bf2d29a8 = () => interopDefault(import('../pages/user/_name.vue' /* webpackChunkName: "pages/user/_name" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/publish",
    component: _f8c8090e,
    name: "publish"
  }, {
    path: "/user/:name?",
    component: _bf2d29a8,
    name: "user-name"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

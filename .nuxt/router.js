import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5ba28dc4 = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _5e839fd3 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _7228a2f5 = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _63b28a35 = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _b84265d2 = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _7340413e = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _4a7ccd82 = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

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
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _5ba28dc4,
    children: [{
      path: "",
      component: _5e839fd3,
      name: "home"
    }, {
      path: "/login",
      component: _7228a2f5,
      name: "login"
    }, {
      path: "/register",
      component: _7228a2f5,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _63b28a35,
      name: "profile"
    }, {
      path: "/settings",
      component: _b84265d2,
      name: "settings"
    }, {
      path: "/editor",
      component: _7340413e,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _4a7ccd82,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

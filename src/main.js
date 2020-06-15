import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from "./store"

import "./plugins/element"
import "./plugins/selfCom"

import "normalize.css"
import "./index.less"

// 审查AST
// const Compiler = require('vue-template-compiler');
// const template =`<template>
//     <div>
//         <div>.lazy</div></div></template>`;
// const result = Compiler.compile(template);
// console.info(result);


// 错误捕获
// Vue.config.errorHandler = function (err, vm, info) {
//   // #处理错误信息, 进行错误上报
//   // #err错误对象
//   // #vm Vue实例
//   // #`info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子
//   // #只在 2.2.0+ 可用
//
//   let {
//     message, // 异常信息
//     name, // 异常名称
//     stack  // 异常堆栈信息
//   } = err;
//
//   console.log(message, name);
//
//   console.log('----1111----', name);
//   console.log('----1111----', message);
//   console.log('----1111----', stack);
//   console.log(err, vm, info);
//   // fetch("https://www.jing999.cn/api/article-categories/5ea280a9580801552640323b").then((e) => e.json()).then((res) => {
//   //   console.log(`%c store`, `color:#42b983`, 'aaaaa', res);
//   // })
//
//   // vm为抛出异常的 Vue 实例
//   // info为 Vue 特定的错误信息，比如错误所在的生命周期钩子
// };

// 全局的指令
// Vue.directive('hasPermission', {
//   bind(el, binding, vnode) {
//     el.parentNode ? el.parentNode.removeChild(el) : el.style.display = 'none';
//
//     const permissions = vnode.context.$store.state.account.permissions; // 存放在vuex
//     if (binding.value === '') return;
//     const value = binding.value.split(',')
//     let flag = true
//     for (const v of value) {
//       if (!permissions.includes(v)) {
//         flag = false
//       }
//     }
//     if (!flag) {
//     }
//   }
// });

// 路由守卫
// router.afterEach((to, from) => {
//   if (from.name && from.name !== 'table-detail' && to.name === 'table-list') {
//     let isRefresh = sessionStorage.getItem('isRefresh')
//     if (isRefresh === '0') {
//       setTimeout(() => {
//         window.location.reload()
//       })
//       sessionStorage.setItem('isRefresh', null)
//     } else {
//       sessionStorage.setItem('isRefresh', '0')
//     }
//   } else if (from.name === 'table-list' && to.name === 'table-detail') {
//     sessionStorage.setItem('isRefresh', null)
//   } else {
//     sessionStorage.setItem('isRefresh', '0')
//   }
// })

// 全局mixins
// const mixin = {
//   methods: {
//     formatDate(dateTime) {
//       return dateTime
//     }
//   }
// };
// Vue.mixin(mixin);


Vue.config.productionTip = false;
Vue.config.silent = true;

/**
 * $fetch
 * @param  {string} url 请求地址
 * @param  {object} options 额外的参数
 */

//  全局的方法
Vue.prototype.$fetch = (url, options) => {
  return fetch(url, options).then(e => e.json()).then(val => {
    return val
  });
};

// 全局自定义指令
Vue.directive('gFocus', {
  inserted: function (el) {
    el.focus()
  }
});
// vuex
window._store = store

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

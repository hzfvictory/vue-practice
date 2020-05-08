import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"
import "normalize.css"

import "./plugins/element"
import About from "./views/About"

import "./index.less"

const Compiler = require('vue-template-compiler');
const template =`<template>
    <div>
        <div>.lazy</div></div></template>`;


const result = Compiler.compile(template);
console.info(result);


//
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
//
//   console.log('----12121----', err);
//   console.log('----2222----', vm,);
//   console.log('----3333----', info);
//
//   console.log(err, vm, info);
//
//
//   // fetch("https://www.jing999.cn/api/article-categories/5ea280a9580801552640323b").then((e) => e.json()).then((res) => {
//   //   console.log(`%c store`, `color:#42b983`, 'aaaaa', res);
//   // })
//
//   // vm为抛出异常的 Vue 实例
//   // info为 Vue 特定的错误信息，比如错误所在的生命周期钩子
// };

Vue.config.productionTip = false;
Vue.config.silent = true;

//  全局的方法
Vue.prototype.$fetch = (url, optios) => {
  return fetch(url, optios).then(e => e.json()).then(val => {
    return val
  });
};

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


// 全局自定义指令
Vue.directive('gFocus', {
  inserted: function (el) {
    el.focus()
  }
});
// 全局组件
Vue.component("counter", About);

// 全局mixins
const mixin = {
  methods: {
    formatDate(dateTime) {
      return dateTime
    }
  }
};
Vue.mixin(mixin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"
import "normalize.css"

import "./index.less"


//
// const Compiler = require('vue-template-compiler');
// const template = `<template>
//     <div>
//         <div>.lazy</div></div></template>`;
// const result = Compiler.compile(template);
// console.info(result);

// Vue.config.productionTip = false;
// Vue.config.silent = true;


// //  全局的方法
// Vue.prototype.$fetch = (url, optios) => {
//   return fetch(url, optios).then(e => e.json()).then(val => {
//     return val
//   });
// };

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

//
// // 全局自定义指令
// Vue.directive('gFocus', {
//   inserted: function (el) {
//     el.focus()
//   }
// });
// // 全局组件
// Vue.component("counter", About);
//
// // 全局mixins
// const mixin = {
//   methods: {
//     formatDate(dateTime) {
//       return dateTime
//     }
//   }
// };
// Vue.mixin(mixin);


createApp(App).use(router).use(store).mount('#app');

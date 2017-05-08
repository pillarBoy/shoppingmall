// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import router from './router';
import remConfig from './styles/config';

remConfig();

Vue.config.productionTip = false;

// access 认证
// router.beforeEach(({meta, path}, from, next) => {
//     var { auth = true } = meta;
//     var isLogin = Boolean(store.state.user.accesstoken); //true用户已登录， false用户未登录
//     if (auth && !isLogin && path !== '/login') {
//       return next({ path: '/login' });
//     }
//     next();
// })

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h('router-view'),
}).$mount('#app');

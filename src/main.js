// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'flex.css';
import 'mint-ui/lib/style.css';
import 'normalize.css';
import Vue from 'vue';
import MintUI from 'mint-ui';
import router from './router';
import remConfig from './styles/config';
import components from './components';

import './font/style.css';
import './styles/resetMint.scss';

remConfig();
Vue.use(MintUI);

Vue.config.productionTip = false;

// 注册 components
Object.keys(components).forEach(item => (Vue.component(`v${item}`, components[item])));

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

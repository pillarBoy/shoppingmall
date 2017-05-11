import Vue from 'vue';
import Router from 'vue-router';
import App from '@/App';
// import Hello from '@/components/Hello';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '',
          name: 'default',
          // 此处 eslint-disable 两行注释 莫要删除，会报错
          /* eslint-disable */
          component: resolve => require(['@/pages/StorePage'], resolve),
          /* eslint-enable */
        },
      ],
    },
  ],
});

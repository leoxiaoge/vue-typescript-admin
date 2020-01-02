import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/views/home').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});

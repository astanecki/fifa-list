import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/pages/main/Main';
import Edit from '@/pages/edit/Edit';

Vue.use(Router);

export const ROUTES = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/edit',
    name: 'Edit',
    component: Edit
  },
];

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: ROUTES,
});

import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StringView from '../views/StringView.vue'
import BooleanView from '../views/BooleanView.vue'
import ObjectView from '../views/ObjectView.vue'
import ArrayView from '../views/ArrayView.vue'
import AutoCompleteView from '../views/AutoCompleteView.vue'
import CheckboxView from '../views/CheckboxView.vue';
import DateView from '../views/DateView.vue';
import NumberView from '../views/NumberView.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/string',
    name: 'string',
    component: StringView
  },
  {
    path: '/boolean',
    name: 'boolean',
    component: BooleanView
  },
  {
    path: '/object',
    name: 'object',
    component:ObjectView
  },
  {
    path: '/array',
    name: 'array',
    component: ArrayView
  },
  {
    path: '/autoComplete',
    name: 'autoComplete',
    component: AutoCompleteView
  },
  {
    path: '/checkbox',
    name: 'checkbox',
    component: CheckboxView
  },
  {
    path: '/date',
    name: 'date',
    component: DateView
  },
  {
    path: '/number',
    name: 'number',
    component: NumberView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import StringView from "../views/StringView.vue";
import BooleanView from "../views/BooleanView.vue";
import ObjectView from "../views/ObjectView.vue";
import ArrayView from "../views/ArrayView.vue";
import AutoCompleteView from "../views/AutoCompleteView.vue";
import CheckboxView from "../views/CheckboxView.vue";
import DateView from "../views/DateView.vue";
import NumberView from "../views/NumberView.vue";
import TimeView from "../views/TimeView.vue";
import TextView from "../views/TextView.vue";
import RadioView from "../views/RadioView.vue";
import TextareaView from "../views/TextareaView.vue";
import SliderView from "../views/SliderView.vue";
import RateView from "../views/RateView.vue";
import TagView from "../views/TagView.vue";
import SelectView from "../views/SelectView.vue";
import LayoutView from "../views/LayoutView.vue";
import PasswordView from "../views/PasswordView.vue";
import ChkInputView from "../views/ChkInputView.vue";
import VisibleIfView from "../views/VisibleIfView.vue";

import CustomValidatorView from "../views/CustomValidatorView.vue";
import SubmitButtonView from '../views/SubmitButtonView.vue';
import redirect from "../layout/components/redirect.vue";

/* Layout */
import BasicLayout from "../layout/BasicLayout.vue";
import EmptyLayout from "../layout/EmptyLayout.vue";

Vue.use(VueRouter);

// 参考 https://pro.antdv.com/docs/router-and-nav
export const routes = [
  {
    path: "/redirect",
    component: EmptyLayout,
    children: [
      {
        path: "/redirect/:path(.*)",
        component: redirect,
      },
    ],
  },
  {
    path: "/",
    name: "index",
    component: BasicLayout,
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "home",
        component: HomeView,
        meta: { title: "Home 首页", icon: "dashboard" },
      },
      {
        path: "form",
        component: EmptyLayout,
        redirect: "string",
        name: "form",
        meta: { title: "Components 组件", icon: "form" },
        children: [
          {
            path: "string",
            name: "string",
            component: StringView,
            meta: { title: "String 文本框" },
          },
          {
            path: "boolean",
            name: "boolean",
            component: BooleanView,
            meta: { title: "Boolean 开关" },
          },
          {
            path: "object",
            name: "object",
            component: ObjectView,
            meta: { title: "Object 对象" },
          },
          {
            path: "array",
            name: "array",
            component: ArrayView,
            meta: { title: "Array 数组" },
          },
          {
            path: "autoComplete",
            name: "autoComplete",
            component: AutoCompleteView,
            meta: { title: "AutoComplete 自动完成" },
          },
          {
            path: "checkbox",
            name: "checkbox",
            component: CheckboxView,
            meta: { title: "Checkbox 多选框" },
          },
          {
            path: "date",
            name: "date",
            component: DateView,
            meta: { title: "Date 日期" },
          },
          {
            path: "number",
            name: "number",
            component: NumberView,
            meta: { title: "Number 数字" },
          },
          {
            path: "time",
            name: "time",
            component: TimeView,
            meta: { title: "Time 时间" },
          },
          {
            path: "text",
            name: "text",
            component: TextView,
            meta: { title: "Text 文本" },
          },
          {
            path: "radio",
            name: "radio",
            component: RadioView,
            meta: { title: "Radio 单选框" },
          },
          {
            path: "textarea",
            name: "textarea",
            component: TextareaView,
            meta: { title: "Textarea 多行文本框" },
          },
          {
            path: "slider",
            name: "slider",
            component: SliderView,
            meta: { title: "Slider 滑动输入条" },
          },
          {
            path: "rate",
            name: "rate",
            component: RateView,
            meta: { title: "Rate 评分" },
          },
          {
            path: "select",
            name: "select",
            component: SelectView,
            meta: { title: "Select 选择器" },
          },
          {
            path: "tag",
            name: "tag",
            component: TagView,
            meta: { title: "Tag 标签" },
          },
        ],
      },
      {
        path: "function",
        component: EmptyLayout,
        redirect: "custom-validator",
        name: "function",
        meta: { title: "Functional 功能性", icon: "control" },
        children: [
          {
            path: "custom-validator",
            name: "custom-validator",
            component: CustomValidatorView,
            meta: { title: "自定义校验" },
          },
          {
            path: "custom-submit-button",
            name: "custom-submit-button",
            component: SubmitButtonView,
            meta: { title: "自定义提交按钮" },
          },
          {
            path: "layout",
            name: "layout",
            component: LayoutView,
            meta: { title: "表单布局" },
          },
          {
            path: "password",
            name: "password",
            component: PasswordView,
            meta: { title: "自定义密码框组件" },
          },
          {
            path: "chkinput",
            name: "chkinput",
            component: ChkInputView,
            meta: { title: "自定义选择输入框组件" },
          },
          {
            path: "visible-if",
            name: "visible-if",
            component: VisibleIfView,
            meta: { title: "visibleIf动态设置表单项是否可见" },
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

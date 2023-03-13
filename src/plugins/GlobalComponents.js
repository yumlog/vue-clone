// @/plugins/GlobalComponents.js
import BaseButton from "@/components/BaseButton";
import TextField from "@/components/Forms/TextField";
import Vue from "vue";
import { Column, Hidden, Row } from "vue-grid-responsive";

Vue.component("Row", Row);
Vue.component("Column", Column);
Vue.component("Hidden", Hidden);
Vue.component("base-button", BaseButton)
Vue.component("text-field", TextField)

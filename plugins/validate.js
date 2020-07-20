import Vue from 'vue'
import { ValidationProvider, extend } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules.umd'

extend('email', {
  ...email,
  message: '邮箱不合法'
})

extend('required', {
  ...required,
  message: '不能为空'
})

Vue.component('ValidationProvider', ValidationProvider)
import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules.umd'

extend('email', {
  ...email,
  message: '邮箱不合法'
})

extend('required', {
  ...required,
  message: 'This field is required'
})

extend('articleName', (value) => {
  if(value.length >= 1 && value.length <= 20) {
    return true
  }
  return '文章名长度不得>20'
})

extend('user', (value) => {
  if(value.length >= 3 && value.length <= 10) {
    return true
  }
  return '用户名长度必须在3-10之间'
})

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules.umd'

extend('email', {
  ...email,
  message: 'The email is illeagl'
})

extend('required', {
  ...required,
  message: 'This field is required'
})

extend('articleName', (value) => {
  if(value.length >= 1 && value.length <= 20) {
    return true
  }
  return 'length should less than 20'
})

extend('user', (value) => {
  if(value.length >= 3 && value.length <= 10) {
    return true
  }
  return 'length should between 3 and 10'
})

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
<template>
  <b-container class="main" fluid>
    <b-container class="login-wrapper">
      <header>Login</header>
      <ValidationObserver v-slot="{ handleSubmit }">
        <b-form @submit.prevent="handleSubmit(onSubmit)">
          <InputField
            place-holder="Email"
            type="email"
            rules="email|required"
          />
          <InputField place-holder="Email" type="text" rules="email|required" />
          <button class="button mt-4 mb-5">Login</button>
        </b-form>
      </ValidationObserver>
      <div class="login-msg">
        Don't have an account?
        <a href="#" class="pl-1">Sign up</a>
      </div>
    </b-container>
  </b-container>
</template>

<script>
import InputField from '~/components/common/InputField'
// import { UserApi } from '~/apis'
export default {
  components: {
    InputField
  },
  meta: {
    authLevel: 0
  },
  methods: {
    async onSubmit({ $axios }) {
      // await UserApi.sendLogin()
      alert('aa')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/variable.scss';
.main {
  background: linear-gradient(to right, $soft-pink, $soft-blue);
  height: 100vh;
  .login-wrapper {
    position: relative;
    background: #fff;
    max-width: 350px;
    height: 500px;
    border-radius: 1rem;
    opacity: 50%;
    top: 50%;
    transform: translateY(-50%);
    header {
      font-size: 2rem;
      font-weight: bold;
      line-height: 200px;
      text-align: center;
    }
    button {
      text-align: center;
      border: 0;
      width: 100%;
      padding: 10px;
      background: linear-gradient(to right, $soft-blue, $soft-pink);
    }
    .login-msg {
      text-align: center;
    }
  }
}
</style>

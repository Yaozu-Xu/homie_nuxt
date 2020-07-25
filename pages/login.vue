<template>
  <b-container class="main" fluid>
      <b-container class="login-wrapper">
          <header>Login</header>
          <ValidationObserver>
            <b-form>
                <InputField place-holder="Email" type="email" rules="email|required"/>
                <InputField place-holder="Email" type="text" rules="email|required"/>
            </b-form>
          </ValidationObserver>
          <div class="msg">
                Don't have an account?
                <a href="#">Sign up</a>
          </div>
      </b-container>
  </b-container>
</template>

<script>
import InputField from "~/components/common/InputField";
export default {
    components: {
        InputField
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/style/variable.scss";
.main {
    background: linear-gradient(to right, $soft-pink, $soft-blue);
    height: 100vh;
    .login-wrapper {
        background: #fff;
        position: relative;
        height: 500px;
        left: 50%;
        top: 50%;
        border-radius: 1rem;
        transform: translate(-50%, -50%);
        opacity: 50%;
        header {
            font-size: 2rem;
            font-weight: bold;
            line-height: 200px;
            text-align: center;
        }
        form {
            input {
                margin-bottom: 1rem;
            }
            
        }
    }
}
</style>
<template>
  <ValidationProvider v-slot="{ errors, valid }">
    <input v-model="value" :class="{ 'error': !valid}" :type="type" :placeholder="placeHolder" />
    <span :class="{'d-none': valid }">{{ errors[0] }}</span>
  </ValidationProvider>
</template>

<script>
export default {
  props: {
    placeHolder: String,
    type: String
  },
  data() {
    return {
      value: ""
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/style/variable.scss";
input {
  display: block;
  width: 100%;
  border: 0;
  padding: 0.1rem;
  outline: none;
  border-bottom: 1px solid;
  border-bottom-color: #ccc;
}

input:focus {
  border-bottom: 2px solid;
  border-bottom-color: $light-blue;
}

span {
  color: crimson;
}

.error {
  border-bottom-color: crimson !important;
}
</style>
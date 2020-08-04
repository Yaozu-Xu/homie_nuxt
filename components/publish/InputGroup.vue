<template>
  <b-container class="input-area">
    <ValidationObserver v-slot="{ handleSubmit }">
      <b-form @submit.prevent="handleSubmit(onSubmit)">
        <InputField
          place-holder="文章标题1"
          type="text"
          rules="articleName|required"
        />
        <button type="submit">submit</button>
      </b-form>
    </ValidationObserver>
  </b-container>
</template>

<script>
import InputField from '~/components/common/InputField'
export default {
  components: {
    InputField
  },
  data: () => ({
    email: ''
  }),
  methods: {
    onSubmit() {
      alert('aa')
    }
  }
}
</script>

<style lang="scss" scoped>
.input-area {
  margin-bottom: 1rem;
}
</style>

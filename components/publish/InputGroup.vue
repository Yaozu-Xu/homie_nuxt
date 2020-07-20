<template>
  <b-container class="input-area">
    <InputField placeHolder="文章标题" type="text" rules="articleName"/>
  </b-container>
</template>

<script>
import InputField from '~/components/common/InputField'
export default {
    components: {
        InputField
    }
};
</script>

<style lang="scss" scoped>
.input-area {
  margin-bottom: 1rem;
}
</style>
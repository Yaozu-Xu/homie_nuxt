<template>
  <input />
</template>

<style lang="scss" scoped>
@import '~/assets/style/mixin.scss';
input {
  display: block;
  width: 100%;
  border: 0;
  padding: .10rem;
  outline: none;
  border-bottom: 1px solid;
  @include border-bottom-color();
}
</style>
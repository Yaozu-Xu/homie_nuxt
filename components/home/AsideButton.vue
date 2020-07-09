<template>
  <button class="d-md-none" @click="asideShowClicked">
    <fa :icon="['fa', 'bars']" />
  </button>
</template>

<script>
export default {
  methods: {
    asideShowClicked() {
      this.$store.commit('ui/TOGGLE_ASIDE')
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  position: absolute;
  z-index: 999;
  left: 0;
  margin-top: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  border: 1px;
  border-radius: 0 9999px 9999px 0;
  background-color: #edf2f7;
  box-shadow: 4px 2px 4px rgba(0, 0, 0, 0.101562);
}
</style>

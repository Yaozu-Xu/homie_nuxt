<template>
  <b-navbar class="d-block d-md-none">
    <b-navbar-nav>
      <b-nav-item class="menu-item">
        <fa :icon="['fa', 'home']" />
        Home
      </b-nav-item>
      <b-nav-item class="menu-item">
        <fa :icon="['fa', 'info']" />
        About
      </b-nav-item>
      <b-nav-item class="menu-item">
        <fa :icon="['fa', 'user']" />
        Login
      </b-nav-item>
      <!-- <b-nav-item>Publish</b-nav-item> -->
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '~/assets/style/base.scss';
nav {
  z-index: 20;
  border-top: 1px solid $border-shadow;
  position: fixed;
  background: white;
  bottom: 0;
  right: 0;
  left: 0;
  ul {
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
  }
}
</style>

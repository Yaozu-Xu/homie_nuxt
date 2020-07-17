<template>
  <b-navbar class="nav-header">
    <b-navbar-brand class="pl-md-4 flex-grow-1">homiepub</b-navbar-brand>
    <b-navbar-nav class="d-none d-md-flex nav-menu flex-grow-1">
      <b-nav-item class="pl-md-3">Home</b-nav-item>
      <b-nav-item class="pl-md-3">About</b-nav-item>
      <b-nav-item class="pl-md-3">Login</b-nav-item>
      <b-nav-item class="pl-md-3">Publish</b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav class="avatar pr-md-3">
      <b-nav-item>
        <img src="~/assets/image/avatar.jpg" />
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/mixin.scss';
@import '~/assets/style/base.scss';
.nav-header {
  display: flex;
  background: #fff;
  box-shadow: 0 5px 4px -4px $border-shadow;
  .navbar-brand {
    font-weight: 300;
    font-family: 'Sakura';
    text-shadow: 1px 1px 1px rgba(179, 225, 247, 0.5);
  }
  .nav-menu {
    font-size: 1rem;
  }
  .avatar {
    @include avatar-mixin(28px, 28px);
  }
}
</style>

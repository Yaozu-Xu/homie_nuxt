<template>
  <b-navbar
    :class="[
      { 'aside-bar-on-sm': getAsideShow },
      'aside-bar',
      'align-items-md-start',
      'd-md-flex',
      'flex-md-row'
    ]"
  >
    <b-navbar-nav>
      <div
        v-for="(category, index1) in categories"
        :key="index1"
        class="category-li"
        @click="show(index1)"
      >
        <b-nav-item>
          {{ category.cName }}
          <span>
            ({{
            category.hasOwnProperty('publish') ? category.publish.length : 0
            }})
          </span>
        </b-nav-item>
        <b-navbar-nav
          v-if="category.hasOwnProperty('publish')"
          :class="{ 'd-none': currentLi !== index1 }"
        >
          <b-nav-item
            v-for="(article, index2) in category.publish"
            :key="index2"
            :href="`#item-${article.aid}`"
            class="article-li pl-md-3"
          >{{ article.aName }}</b-nav-item>
        </b-navbar-nav>
      </div>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentLi: undefined
    };
  },
  computed: {
    getAsideShow() {
      return this.$store.state.ui.isAsideShow;
    }
  },
  methods: {
    show(index) {
      this.currentLi = this.currentLi === index ? undefined : index;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/style/base.scss";

.aside-bar-on-sm {
  background-color: #f8fafc;
  margin-top: 1px;
  display: flex !important;
  flex: 1;
  flex-direction: column;
  align-items: center;
}
.aside-bar {
  display: none;
  ul {
    display: flex;
    flex-direction: column;
    li {
      font-size: 0.9rem;
    }
    .category-li span {
      font-size: 0.8rem;
      color: $light-grey;
    }
    .article-li {
      font-size: 0.8rem;
      color: $light-grey;
    }
  }
}
</style>

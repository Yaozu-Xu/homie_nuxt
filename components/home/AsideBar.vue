<template>
  <b-navbar
    :class="[
      { 'aside-bar-mobile': getAsideShow },
      'aside-bar',
      'mt-md-3',
      'visible-lg'
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
            >{{ article.aName }}</b-nav-item
          >
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
    }
  },
  computed: {
    getAsideShow() {
      return this.$store.state.ui.isAsideShow
    }
  },
  methods: {
    show(index) {
      this.currentLi = this.currentLi === index ? undefined : index
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/base.scss';
.aside-bar-mobile {
  background-color: #f8fafc;
  margin-top: 1px;
  width: 100% !important;
  visibility: visible !important;
  flex-direction: column;
  align-items: center;
}
.aside-bar {
  z-index: 21;
  visibility: hidden;
  width: 20%;
  transition: width 0.5s, background-color 0.5s;
  position: absolute;
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

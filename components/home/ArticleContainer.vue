<template>
  <b-container class="article-area mt-5 pr-0">
    <b-container class="article-container pr-0" v-for="(article, index1) in articles" :key="index1">
      <h1>{{ article.articleName }}</h1>
      <b-row class="w-100 pt-2 pb-4">
        <b-col>
          <fa :icon="['fa', 'tag']"/> 
          <span>{{ article.category.cName }}</span>
        </b-col>
        <b-col>
          <fa :icon="['fa', 'trash']" />
          <span>删除</span>
        </b-col>
        <b-col>
          <fa :icon="['fa', 'pen']" />
          <span>编辑</span>
        </b-col>
      </b-row>
      <b-container class="pl-0 article-content" v-html="article.content"></b-container>
    </b-container>
  </b-container>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
      required: false
    }
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/style/base.scss";
@import "~/assets/style/mixin.scss";
.article-area {
  z-index: 1;
  @include w-md(60%);
  .article-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 3rem;
    h1 {
      color: $ink-blue;
    }
    h1:after {
      content: " ";
      width: 80%;
      display: block;
      border-width: 2px;
      border-color: $light-green;
      margin-top: 0.5rem;
      margin-bottom: 0.25rem;
      border-radius: 0.25rem;
    }
    .row {
      .col {
        svg {
          color: $light-grey;
        }
      }
    }
  }
}
</style>
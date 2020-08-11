<template>
  <b-container fluid class="p-0">
    <Header :user="user" />
    <BottomMenu />
    <b-container fluid class="main flex-md-row">
      <AsideButton />
      <AsideBar :categories="category" />
      <ArticleContainer :articles="articles" />
    </b-container>
  </b-container>
</template>

<script>
import { UserApi, CategoryApi, PublishApi } from '~/apis'
import Header from '~/components/common/Header'
import BottomMenu from '~/components/common/BottomMenu'
import AsideBar from '~/components/home/AsideBar'
import AsideButton from '~/components/home/AsideButton'
import ArticleContainer from '~/components/home/ArticleContainer'

export default {
  components: {
    Header,
    BottomMenu,
    AsideBar,
    AsideButton,
    ArticleContainer
  },
  meta: {
    authLevel: 1
  },
  async asyncData({ $axios, params, redirect }) {
    const axios = $axios
    const userName = params.name
    const user = await UserApi.getUser(axios, userName)
    if (!user) {
      redirect({ path: '/login' })
    } else {
      const category = await CategoryApi.getOnesCategory(axios, user._id)
      const articles = await PublishApi.getOnesAriticles(axios, user._id)
      return { user, category: category.data, articles: articles.data }
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
}
</style>

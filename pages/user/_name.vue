<template>
  <b-container fluid>
    <Header :user="user"></Header>
    <BottomMenu />
    <b-container fluid class="d-flex">
      <AsideButton />
      <AsideBar :categories="category"></AsideBar>
    </b-container>
  </b-container>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { UserApi, CategoryApi, PublishApi } from '~/apis'
import Header from '~/components/common/Header'
import BottomMenu from '~/components/common/BottomMenu'
import AsideBar from '~/components/home/AsideBar'
import AsideButton from '~/components/home/AsideButton'

export default {
  components: {
    Header,
    BottomMenu,
    AsideBar,
    AsideButton
  },

  async asyncData(context) {
    const axios = context.$axios
    const userName = context.params.name
    const user = await UserApi.getUser(axios, userName)
    const category = await CategoryApi.getOnesCategory(axios, user._id)
    // const articles = await PublishApi.getOnesAriticles(axios, user._id)
    // eslint-disable-next-line no-console
    // console.log(articles)
    return { user, category: category.data }
  }
}
</script>

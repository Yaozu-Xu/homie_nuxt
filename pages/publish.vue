<template>
  <b-container>
    <InputGroup />
    <Editor :raw="rawContent" v-on:func="updateRaw"></Editor>
  </b-container>
</template>

<script>
import Editor from '~/components/publish/Editor'
import InputGroup from '~/components/publish/InputGroup'
export default {
  data() {
    return {
      rawContent: ''
    }
  },
  components: {
    Editor,
    InputGroup
  },
  meta: {
    authLevel: 2
  },
  methods: {
    updateRaw(newContent) {
      this.raw = newContent
      console.log(this.raw)
    }
  }
}
</script>

<template>
  <div>
    <button @click="this.publish">提交</button>
    <vue-editor
      class="article-content"
      v-if="isClient"
      v-model="content"
      :editorToolbar="customToolbar"
    />
  </div>
</template>

<script>
export default {
  props: {
    raw: {
      type: String
    }
  },
  mounted() {
    if (process.client) {
      const { VueEditor } = require("vue2-editor");
      this.$options.components = { VueEditor };
      this.isClient = true;
    }
    this.content = this.raw;
  },
  data() {
    return {
      customToolbar: [
        [{ header: [false, 1, 2, 3] }],
        // 列表、有序、多选列表
        [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
        ["link", "image", "video"],
        // 代码、代码块
        ["code", "code-block"],
        ["clean"]
      ],
      isClient: false
    };
  },
  methods: {
    publish() {
      console.log(this.content);
    }
  }
};
</script>

<style lang="scss">

pre {
  background-color: #f6f6f6 !important;
  color: #68747f !important;
}
</style>


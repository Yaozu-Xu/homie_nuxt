<template>
  <div>
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
  },
  computed : {
    content: {
      get: function(){
        return this.raw
      },
      set: function(newContent){
        this.$emit('func', newContent)
      }
    }
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
};
</script>

<style lang="scss">
pre {
  background-color: #f6f6f6 !important;
  color: #68747f !important;
}
</style>


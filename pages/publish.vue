<template>
  <b-container>
    <Editor :raw="rawContent"></Editor>
  </b-container>
</template>

<script>
import Editor from "~/components/publish/Editor";
export default {
  data() {
    return {
      rawContent: ''
    }
  },
  components: {
    Editor
  }
};
</script>
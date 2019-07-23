<template>
  <el-badge class="tag" :value="correct_tag.name" :type="correct_tag.type"></el-badge>
</template>

<script>
export default {
  props: ["tags"],
  computed: {
    correct_tag: function() {
      if (!this.tags) return {name: "das", type: "danger"};
      if (this.tags[0].name == "News") {
        if (!this.tags[1]) return "";
        if (this.tags[1].name == "IF") {
          return { name: "von der IOTA Foundation", type: "primary" };
        } else if (this.tags[1].name == "Ecosystem") {
          return { name: "aus dem IOTA Ökosystem", type: "success" };
        }
      }
      return "";
    }
  }
};
</script>

<style>
.tag .el-badge__content--primary {
  background-color: #22b1ab;
}
.tag .el-badge__content--success {
  background-color: #06e89d;
}
</style>

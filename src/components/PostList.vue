<template>
  <div>
    <el-row :gutter="12">
      <el-col :span="12" v-for="post in posts" :key="post.id">
        <div @click="openPost(post)">
          <el-card v-bind:style="{ 'background-image': 'url(' + post.feature_image + ')' }">
            <div class="card-heading" style="padding: 14px;">
              <h3>{{post.title}}</h3>
              <p>Zum Artikel</p>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page="current_page"
      :page-size="per_page"
      background
      layout="prev, pager, next"
      hide-on-single-page
      :total="total"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: "PostList",
  props: ["posts", "current_page", "per_page", "total"],
  methods: {
    handleCurrentChange(val) {
      this.$emit("handleCurrentChange", val);
    },
    openPost(post) {
      this.$store.dispatch("savePost", post);
      this.$router.push({ name: "post", params: { slug: post.slug } });
    }
  }
};
</script>

<style lang="scss">
.card-heading {
  cursor: pointer;
}
</style>

<template>
  <div class="container">
    <div class="row">
      <PostCard :post="post" v-for="post in  posts" v-bind:key="post.id"/>
    </div>
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
import PostCard from '@/components/PostCard.vue'

export default {
  name: "PostList",
  props: ["posts", "current_page", "per_page", "total"],
  components: {PostCard},
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

<style lang="scss" scoped>

.row {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 30px -25px 0;
}

.card {
  width: calc((100% - 150px) / 3);
  margin-bottom: 30px;
  .image {
    height: 400px;
    width: 100%;
    min-width: 400px;
    display: block;
    background-size: cover;
    background-position: center;
  }
  .card-body {
      height: 130px;
      cursor: pointer;
    &:hover {
      color: var(--secondary-2);
    }
  }
}

.el-pagination.is-background {
  display: flex;
  justify-content: center;
}


  @media only screen and (max-width: 740px)  {
      .card {
          margin-bottom: 50px;
          width: 100%;
          .image-wrapper {
              height: 2s50px;
          }
      }
  }

</style>

<template>
  <el-carousel :interval="4000" type="card">
    <el-carousel-item  class="slider_item" v-for="post in posts" :key="post.id">
      <el-card @click="openPost(post)">
        <div class="image" v-bind:style="{ 'background-image': 'url(' + post.feature_image + ')' }"></div>

        <div class="card-body" @click="openPost(post)">
          <h3>{{post.title}}</h3>
          <div class="bottom clearfix">
            <p>Zum Artikel</p>
          </div>
        </div>
      </el-card>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  props: ["posts"],
  methods: {
    openPost(post) {
      this.$store.dispatch("savePost", post);
      this.$router.push({ name: "post", params: { slug: post.slug } });
    }
  }
};
</script>

<style lang="scss" scoped>
.image {
  min-height: 300px;
  width: 100%;
  display: block;
  background-size: cover;
  background-position: center;
}
.card-body {
  position: absolute;
  top: 20px;
  left: 30px;
  width: calc(100% - 90px);
  padding: 14px;
  color: var(--white);
  &:hover {
    color: var(--secondary-2);
  }
}

</style>
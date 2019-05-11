<template>
  <el-carousel :interval="4000" type="card">
    <el-carousel-item  class="slider_item" v-for="post in posts" :key="post.id">
      <el-card @click="openPost(post)">
        <div class="image" v-bind:style="{ 'background-image': 'url(' + post.feature_image + ')' }"></div>

        <div class="card-body">
          <h3 @click="openPost(post)">{{post.title}}</h3>
          <el-button type="primary" @click="openPost(post)">Zum Artikel</el-button>
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
  text-align: left; 
  position: absolute;
  top: 20px;
  left: 30px;
  width: calc(100% - 90px);
  padding: 15px;
  color: var(--white);
  margin-top: 15px;
  h3 {
    cursor: pointer;
    padding: 5px 10px;
    background-color: var(--primary);
    margin-bottom: 10px;

    &:hover {
      transform: scale(1.05);
    }
  }
}

.is-in-stage {
  cursor: auto !important;
}

</style>
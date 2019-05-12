<template>
  <div>
    <div class="header">
      <h1 class="header__title">{{post.title}}</h1>
      <div class="divider"></div>
      <div class="image-wrapper">
        <div class="image" v-bind:style="{ 'background-image': 'url(' + post.feature_image + ')' }"></div>
      </div>
    </div>
    <Content :content="post.html" />
  </div>
</template>

<script>
import GhostContentAPI from "@tryghost/content-api";
import Content from "@/components/Content";

const api = new GhostContentAPI({
  url: "https://www.einfachiota.de",
  key: process.env.VUE_APP_API_KEY,
  version: "v2"
});

export default {
  name: "post",
  params: ["slug"],
  components: { Content },
  data() {
    return {
      post: {}
    };
  },
  methods: {
    fetchPost() {
      api.posts
        .read({ slug: this.$route.params.slug })
        .then(post => {
          this.post = post;
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  created() {
    this.fetchPost();
  }
};
</script>

<style lang="scss">
.header {
  text-align: center;
  &__title {
    margin: 60px 40px 20px 40px;
  }
  .divider {
    margin: 0 auto;
  }
  .image-wrapper {
    margin: 20px auto;
    height: 550px;
    width: 100%;
    max-width: 1080px;
    overflow: hidden;
    margin-bottom: 20px;
    .image {
      height: inherit;
      width: inherit;
      background-size: cover;
      background-position: center center;
      transition: all 300ms ease-in-out;
    }
  }
}

</style>


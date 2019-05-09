<template>
  <div>
    <h1>{{post.title}}</h1>
    <span v-html="post.html"></span>
  </div>
</template>

<script>
import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: "https://www.einfachiota.de",
  key: process.env.VUE_APP_API_KEY,
  version: "v2"
});

export default {
  name: "post",
  params: ["slug"],
  data() {
    return{
        post: {}
    } 
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
      this.fetchPost()
  }
};
</script>

<style>
</style>

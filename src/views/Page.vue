<template>
  <div>
    <h1>{{page.title}}</h1>
    <span v-html="page.html"></span>
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
  name: "page",
  params: ["slug"],
  data() {
    return{
        page: {}
    } 
  },
  methods: {
    fetchPost() {
      api.pages
        .read({ slug: this.$route.params.slug })
        .then(page => {
            this.page = page;
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

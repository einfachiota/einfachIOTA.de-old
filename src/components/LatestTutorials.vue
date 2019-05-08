<template>
  <el-row>
    <PostCarousel :posts="posts"/>
  </el-row>
</template>

<script>

import PostCarousel from '@/components/PostCarousel.vue'

import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: "https://www.einfachiota.de",
  key: process.env.VUE_APP_API_KEY,
  version: "v2"
});

export default {
  name: "latestTutorials",
  components: {
    PostCarousel
  },
  data() {
    return {
      posts: []
    };
  },
  methods: {
    loadData() {
      // fetch 5 posts, including related tags and authors
      api.posts
        .browse({ limit: 5, include: "tags,authors", filter: 'tag:tutorials' })
        .then(posts => {
          this.posts = posts;
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  created() {
    this.loadData();
  }
};
</script>

<style>
.time {
  font-size: 13px;
  color: #999;
}
.image {
  width: 100%;
  display: block;
}
</style>

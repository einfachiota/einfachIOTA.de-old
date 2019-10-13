<template>
  <div class="row">
    <PostCard :post="post" v-for="post in  posts" v-bind:key="post.id"/>
  </div>
</template>

<script>

import PostCard from '@/components/PostCard.vue'

import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: process.env.VUE_APP_API_URL,
  key: process.env.VUE_APP_API_KEY,
  version: "v2"
});

export default {
  name: "latestNews",
  components: {
    PostCard
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
        .browse({ limit: 3, include: "tags,authors", filter: 'tag:news' })
        .then(posts => {
          this.posts = posts;
          console.log("posts", posts)
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

<style lang="scss" scoped>
  .row {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    margin: 30px -25px 0;
  }
  @media only screen and (max-width: 920px) {
    .row {
      flex-wrap: wrap;
    }
  }
</style>

<template>
  <el-row>
    <el-col :span="12" v-for="post in posts" :key="post.id">
      <el-card>
        <img :src="post.feature_image" class="image">
        <div style="padding: 14px;">
          <span>{{post.title}}</span>
          <div class="bottom clearfix">
            <p>{{ post.authors[0].name }}</p>
            <time class="time">{{ post.published_at }}</time>
            <el-button type="text" class="button">Operating</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: "https://www.einfachiota.de",
  key: process.env.VUE_APP_API_KEY,
  version: "v2"
});

export default {
  name: "latestNews",
  components: {},
  data() {
    return {
      posts: []
    };
  },
  methods: {
    loadData() {
      // fetch 5 posts, including related tags and authors
      api.posts
        .browse({ limit: 5, include: "tags,authors" })
        .then(posts => {
          this.posts = posts;
          console.log("posts", posts);
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

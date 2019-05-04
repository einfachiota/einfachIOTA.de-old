<template>
  <div class="projects">
    <h1>Projekte der Woche</h1>
    <pre>{{posts}}</pre>
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
  name: "projects",
  components: {},
  data() {
    return {
      posts: []
    };
  },
  methods: {
    loadData: () => {
      console.log("Load data");
      // fetch 5 posts, including related tags and authors
      api.posts
        .browse({ limit: 5, include: "tags,authors" })
        .then(posts => {
          posts.forEach(post => {
            console.log(post.title);
          });
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

<template>
  <div class="news">
    <div class="hero">
      <div class="container">
        <h1 class="heading">Alle Neuigkeiten</h1>
        <div class="divider"></div>
      </div>
    </div>
    <PostList
      :posts="posts"
      :per_page="per_page"
      :current_page="current_page"
      :total="total"
       v-on:handleCurrentChange="handleCurrentChange"
    />
  </div>
</template>

<script>
import GhostContentAPI from "@tryghost/content-api";
import PostList from "@/components/PostList.vue";

const api = new GhostContentAPI({
  url: process.env.VUE_APP_API_URL,
  key: process.env.VUE_APP_API_KEY,
  version: "v2"
});

export default {
  name: "news",
  components: {PostList},
  data() {
    return {
      posts: [],
      per_page: 12,
      current_page: 1,
      total: 1,
    };
  },
  methods: {
    loadData(page) {
      api.posts
        .browse({
          limit: 12,
          page: page,
          include: "tags,authors",
          filter: "tag:news+tag:de"
        })
        .then(posts => {
          this.current_page = posts.meta.pagination.page
          this.total = posts.meta.pagination.total
          this.posts = posts;
          window.scrollTo(0,0);

        })
        .catch(err => {
          console.error(err);
        });
    },
    handleCurrentChange(val) {
        this.currentPage = val;
        this.loadData(val);

    }
  },
  created() {
    this.loadData(this.current_page);
  }
};
</script>

<style lang="scss" scoped>

.news {
  padding-bottom: 100px;
}

h1.heading {
  text-align: left !important;
}

</style>



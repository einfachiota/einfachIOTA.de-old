<template>
  <div class="projects">
    <div class="hero">
      <div class="container">
        <h1 class="heading">Projekte der Woche</h1>
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
  name: "projects",
  components: { PostList },
  data() {
    return {
      posts: [],
      loading: true,
      per_page: 12,
      current_page: 1,
      total: 1
    };
  },
  methods: {
    loadData(page) {
      api.posts
        .browse({
          limit: this.per_page,
          page: page,
          include: "tags,authors",
          filter: "tag:projekt-der-woche+tag:de"
        })
        .then(posts => {
          this.current_page = posts.meta.pagination.page;
          this.total = posts.meta.pagination.total;
          this.posts = posts;
          window.scrollTo(0, 0);
          this.loading = false;
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

.projects {
  padding-bottom: 100px;
}

h1.heading {
  text-align: left !important;
}

</style>

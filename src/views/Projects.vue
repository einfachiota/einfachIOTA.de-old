<template>
  <div class="projects">
    <h1>Projekte der Woche</h1>
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
  url: "https://www.einfachiota.de",
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
          filter: "tag:projekt-der-woche"
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
    },
    openPost(post) {
      this.$store.dispatch("savePost", post);
      this.$router.push({ name: "post", params: { slug: post.slug } });
    }
  },
  created() {
    this.loadData(this.current_page);
  }
};
</script>

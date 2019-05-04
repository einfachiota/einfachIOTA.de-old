<template>
  <div class="projects">
    <h1>Projekte der Woche</h1>
    <el-row :gutter="12">
      <el-col :span="12" v-for="post in posts" :key="post.id">
        <el-card v-bind:style="{ 'background-image': 'url(' + post.feature_image + ')' }">
          <div style="padding: 14px;">
            <h3>{{post.title}}</h3>
            <div class="bottom clearfix">
              <el-button type="text" class="button" @click="openPost(post)">zum Artikel</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <br>
    <hr>
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page="current_page"
      :page-size="per_page"
      background
      layout="prev, pager, next"
      hide-on-single-page
      :total="total"
    ></el-pagination>
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
          this.current_page = posts.meta.pagination.page
          this.total = posts.meta.pagination.total
          this.posts = posts;
          window.scrollTo(0,0);
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
      this.$store.dispatch('savePost', post)
      this.$router.push({ name: 'post', params: { slug: post.slug } })
    }
  },
  created() {
    this.loadData(this.current_page);
  }
};
</script>

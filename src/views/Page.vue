<template>
  <div>
    <div class="header">
      <h1 class="header__title">{{page.title}}</h1>
      <div class="divider"></div>
    </div>
    <Content :content="page.html" />
  </div>
</template>

<script>
import GhostContentAPI from "@tryghost/content-api";
import Content from "@/components/Content";

const api = new GhostContentAPI({
  url: "https://www.einfachiota.de",
  key: process.env.VUE_APP_API_KEY,
  version: "v2"
});

export default {
  name: "page",
  params: ["slug"],
  components: { Content },
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

<style lang="scss">
.header {
  text-align: center;
  &__title {
    margin: 60px 40px 20px 40px;
  }
  .divider {
    margin: 0 auto;
  }
}

.content {
  margin: auto auto;
  padding: 0 10%;
  max-width: 860px;

  img.kg-image {
    display: block;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-size: cover;
  }
}
</style>

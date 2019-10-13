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
  url: process.env.VUE_APP_API_URL,
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
    margin: 25px auto;
  }
  .image-wrapper {
    border-radius: 10px;
  }
}

.content {
  margin: auto auto;
  padding: 0 10% 100px;
  max-width: 860px;
  h1, h2, h3, p, blockquote {
    word-break: break-word;
  }
  blockquote {
    background: var(--light);
    margin: 15px 0;
    padding: 15px 30px;
    border-radius: 10px;
    border-left: 5px solid var(--primary);
    line-height: 2;
    font-style: italic;
    code {
      font-style: initial;
      background-color: var(--dark);
      color: var(--white);
      padding: 5px;
      border-radius: 5px;
      margin: 0 5px;
    }
  }
  a {
    word-break: break-word;
  }
  ol, ul {
    line-height: 1.5;
    li {
      margin-bottom: 10px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  pre {
    padding: 10px 20px;
    background-color: var(--dark);
    color: var(--white);
    border-radius: 10px;
    line-height: 1.5;
    overflow-x: auto;
  }
  h2, h3 {
    margin-top: 30px;
  }
  figure.kg-card {
    margin: 30px 0;
  }
  figure.kg-card.kg-embed-card {
    display: flex;
    justify-content: center;
  }
  img.kg-image {
    display: block;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-size: cover;
    border: 2px solid var(--light);
    border-radius: 10px;
    margin-bottom: 10px;
  }
  figcaption {
    font-size: 12px;
    text-align: center;
  }
  hr {
    opacity: .25;
  }
  
}
@media only screen and (max-width: 1140px) {
  .header {
    .image-wrapper {
      margin-left: 0;
      margin-right: 0;
      border-radius: 0;
      max-width: 100%;
    }
  }
}
@media only screen and (max-width: 624px) {
  .header .image-wrapper {
    height: 350px;
  }
}
@media only screen and (max-width: 420px) {
  .header .image-wrapper {
    height: 280px;
  }
}
</style>

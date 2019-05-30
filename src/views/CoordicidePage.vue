<template>
  <div>
    <div class="header">
      <h1 class="header__title">Coordicide</h1>
      <div class="divider"></div>
    </div>
    <vue-markdown class="content" v-if="markdown">{{markdown}}</vue-markdown>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";
import githubContent from "github-content";

var options = {
  owner: "einfachIOTA",
  repo: "coordicide",
  branch: "master" // defaults to master
};

export default {
  data() {
    return {
      markdown: "",
      page: this.$route.params.page
    };
  },
  components: {
    VueMarkdown
  },
  methods: {
    async fetchData() {
      let self = this;
      let gc = new githubContent(options);
      let file_path = "";
      if (this.page == undefined) {
        file_path = "README.md";
      } else {
        file_path = this.page;
      }
      await gc.file(file_path, function(err, file) {
        if (err) return console.log(err);
        self.markdown = new TextDecoder("utf-8").decode(file.contents);
      });
    }
  },
  created() {
    this.fetchData();
  },
  mounted() {
    window.addEventListener("click", event => {
      let target = event.target;
      if (
        target.matches("a:not([href*='://'])") &&
        !target.matches("a:not([href*='./'])") &&
        target.href
      ) {
        this.$router.push({
          name: "CoordicidePage",
          params: { page: target.pathname }
        });
        event.preventDefault();
        this.fetchData();
      }
    });
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
  h1,
  h2,
  h3,
  p,
  blockquote {
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
  ol,
  ul {
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
  h2,
  h3 {
    margin-top: 30px;
  }
  figure.kg-card {
    margin: 30px 0;
  }
  figure.kg-card.kg-embed-card {
    display: flex;
    justify-content: center;
  }
  img {
    max-width: 100%;
    max-height: 100%;

    border: 2px solid var(--light);
    border-radius: 10px;
    margin-bottom: 10px;
  }
  img.kg-image {
    display: block;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-size: cover;
  }
  figcaption {
    font-size: 12px;
    text-align: center;
  }
  hr {
    opacity: 0.25;
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

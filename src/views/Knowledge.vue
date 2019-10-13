<template>
  <div class="knowledge">
    <div class="hero">
      <div class="container">
        <h1 class="heading">Wissen wie IOTA funktioniert</h1>
        <div class="divider"></div>
        <p class="sub-heading">IOTA in einfacher Sprache erkärt.</p>
        <div class="description">
          <p>Hier finder ihr eine Reihe von Erklärungen.</p>
          <p>Einen kompletten Guide hat <a href="https://twitter.com/Schmucklos_" target="_blank">Schmucklos</a> für euch zusammengestellt:</p>
          <a href="https://www.iota-einsteiger-guide.de/index.html" target="_blank">
            <img class="logo_guide" src="@/assets/logo-guide.jpg" />
          </a>
        </div>
      </div>
    </div>
    <div class="container">
      <h2 class="category_heading">Allgemeines</h2>
      <div class="divider"></div>
      <ul>
        <li
          v-for="page in general_pages"
          v-bind:key="page.id"
          @click="openPage(page)"
          class="page-link"
        >{{page.title}}</li>
      </ul>
      <h2 class="category_heading">Tangle</h2>
      <div class="divider"></div>
      <ul>
        <li
          v-for="page in tangle_pages"
          v-bind:key="page.id"
          @click="openPage(page)"
          class="page-link"
        >{{page.title}}</li>
      </ul>
      <h2 class="category_heading">Qubic</h2>
      <div class="divider"></div>
      <ul>
        <li
          v-for="page in qubic_pages"
          v-bind:key="page.id"
          @click="openPage(page)"
          class="page-link"
        >{{page.title}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: process.env.VUE_APP_API_URL,
  key: process.env.VUE_APP_API_KEY,
  version: "v2"
});

export default {
  name: "post",
  params: ["slug"],
  components: {},
  data() {
    return {
      general_pages: [],
      tangle_pages: [],
      qubic_pages: []
    };
  },
  methods: {
    fetchPost() {
      api.pages
        .browse({ include: "tags,authors", filter: "tag:IOTA+tag:general" })
        .then(pages => {
          pages.map(page => (page.feature_image = "/einfachiotatangle.jpg"));
          this.general_pages = pages;
        })
        .catch(err => {
          console.error(err);
        });
      api.pages
        .browse({ include: "tags,authors", filter: "tag:IOTA+tag:Tangle" })
        .then(pages => {
          pages.map(page => (page.feature_image = "/einfachiotatangle.jpg"));
          this.tangle_pages = pages;
        })
        .catch(err => {
          console.error(err);
        });
      api.pages
        .browse({ include: "tags,authors", filter: "tag:IOTA+tag:Qubic" })
        .then(pages => {
          pages.map(page => (page.feature_image = "/einfachiotatangle.jpg"));
          this.qubic_pages = pages;
        })
        .catch(err => {
          console.error(err);
        });
    },
    openPage(page) {
      console.log("page", page);
      this.$store.dispatch("savePage", page);
      this.$router.push({ name: "page", params: { slug: page.slug } });
    }
  },
  created() {
    this.fetchPost();
  }
};
</script>

<style lang="scss" scoped>
.heading {
  text-align: left !important;
}
.sub-heading {
  text-align: left !important;
}
.knowledge {
  padding-bottom: 100px;
}
.container {
  margin-bottom: 50px;

  .category_heading {
    padding: 50px 10px 0 0;
  }

  .page-link {
    cursor: pointer;
    margin-bottom: 10px;
    font-size: 1.5em;
    &:hover {
      color: var(--secondary-2);
    }
  }
  .description {
    text-align: left;
    .logo_guide {
      height: 2%;
    }
  }
}
</style>
<template>
  <div class="knowledge">
    <div class="hero">
      <h1 class="heading">Wissen wie IOTA funktioniert</h1>
      <p class="sub-heading">IOTA in einfacher Sprache erkärt.</p>
    </div>
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
</template>

<script>
import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: "https://www.einfachiota.de",
  key: process.env.VUE_APP_API_KEY,
  version: "v2"
});

export default {
  name: "post",
  params: ["slug"],
  components: {  },
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

.category_heading {
  padding: 50px 10px 0 10px;
}
.page-link {
  cursor: pointer;
  font-size: 1.5em;
  &:hover {
    color: var(--secondary-2);
  }
}
</style>
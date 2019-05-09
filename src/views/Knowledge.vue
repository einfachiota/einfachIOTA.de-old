<template>
  <div>
    <h1>Wissen wie IOTA funktioniert</h1>
    <h2>Allgemeines</h2>
    <ul>
      <li
        v-for="page in general_pages"
        v-bind:key="page.id"
        @click="openPage(page)"
        class="page-link"
      >{{page.title}}</li>
    </ul>
    <h2>Tangle</h2>
    <ul>
      <li
        v-for="page in tangle_pages"
        v-bind:key="page.id"
        @click="openPage(page)"
        class="page-link"
      >{{page.title}}</li>
    </ul>
    <h2>Qubic</h2>
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
import PostCarousel from "@/components/PostCarousel.vue";

const api = new GhostContentAPI({
  url: "https://www.einfachiota.de",
  key: process.env.VUE_APP_API_KEY,
  version: "v2"
});

export default {
  name: "post",
  params: ["slug"],
  components: { PostCarousel },
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

<style lang="scss">
.page-link {
  cursor: pointer;
  &:hover {
    color: var(--secondary-2);
  }
}
</style>
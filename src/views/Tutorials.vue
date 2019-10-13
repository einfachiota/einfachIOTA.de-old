<template>
  <div class="knowledge">
    <div class="hero">
      <div class="container">
        <h1 class="heading">Tutorials</h1>
        <div class="divider"></div>
        <p class="sub-heading">Einfach nachmachen - vom Einsteiger bis Experte!</p>
      </div>
    </div>
    <div class="container">
      <h2 class="category_heading">Allgemeines</h2>
      <div class="divider"></div>
      <ul>
        <li
          v-for="tutorial in general_tutorials"
          v-bind:key="tutorial.id"
          @click="openTutorial(tutorial)"
          class="page-link"
        >{{tutorial.title}}</li>
      </ul>
      <h2 class="category_heading">Tangle</h2>
      <div class="divider"></div>
      <ul>
        <li
          v-for="tutorial in tangle_tutorials"
          v-bind:key="tutorial.id"
          @click="openTutorial(tutorial)"
          class="page-link"
        >{{tutorial.title}}</li>
      </ul>
      <h2 class="category_heading">IOTA controlled Agent (Ict)</h2>
      <div class="divider"></div>
      <ul>
        <li
          v-for="tutorial in ict_tutorials"
          v-bind:key="tutorial.id"
          @click="openTutorial(tutorial)"
          class="page-link"
        >{{tutorial.title}}</li>
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
      general_tutorials: [],
      tangle_tutorials: [],
      ict_tutorials: []
    };
  },
  methods: {
    fetchPost() {
      api.posts
        .browse({ include: "tags,authors", filter: "tag:Tutorials+tag:general" })
        .then(tutorials => {
          this.general_tutorials = tutorials;
        })
        .catch(err => {
          console.error(err);
        });
        api.posts
        .browse({ include: "tags,authors", filter: "tag:Tutorials+tag:Ict" })
        .then(tutorials => {
          this.ict_tutorials = tutorials;
        })
        .catch(err => {
          console.error(err);
        });
           api.posts
        .browse({ include: "tags,authors", filter: "tag:Tutorials+tag:Tangle" })
        .then(tutorials => {
          this.tangle_tutorials = tutorials;
        })
        .catch(err => {
          console.error(err);
        });
      
    },
    openTutorial(tutorial) {
      console.log("tutorial", tutorial);
      this.$router.push({ name: "post", params: { slug: tutorial.slug } });
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
}
</style>
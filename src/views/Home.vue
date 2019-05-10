<template>
  <div class="home">
    <div class="hero">
      <h1 class="heading">Willkommen bei einfachIOTA.de</h1>
      <p class="sub-heading">Die Seite, die IOTA einfach erklärt!</p>
    </div>
    <div class="section news">
      <div class="headline-wrapper">
        <h2>Neuigkeiten</h2>
        <router-link to="/news" tag="button" class="el-button el-button--primary">Alle Neuigkeiten</router-link>
      </div>
      <div class="divider"></div>
      <p style="margin-bottom: 50px">Wir liefern euch die neusten Informationen aus der IOTA Foundation. Die Orginal Blogeintrage für euch übersetzt!</p>
      <LatestNews/>
    </div>
    <div class="section section-background knowledge">
      <h2>Du bist neu? Was ist IOTA?</h2>
      <router-link
        to="/knowledge"
        tag="button"
        class="el-button el-button--primary"
      >Entdecke die Grundlagen</router-link>
    </div>
    <div class="section projects">
      <div class="headline-wrapper">
        <h2>Projekte der Woche</h2>
        <router-link
          to="/projects"
          tag="button"
          class="el-button el-button--primary"
        >Entdecke mehr Projekte</router-link>
      </div>

      <p>So sehen echte IOTA Projekte aus.</p>
      <div class="divider"></div>
      <LatestProjects/>
    </div>

    <div class="section section-background knowledge">
      <h2>Bleib auf dem neusten Stand oder mach mit bei der Community!</h2>
      <a
        href="https://twitter.com/einfachIOTA"
        target="_blank"
        tag="button"
        class="el-button el-button--primary"
      >Twitter</a>
      <a
        href="https://discord.gg/rV3TMSU"
        target="_blank"
        tag="button"
        class="el-button el-button--primary"
      >Discord</a>
      <a
        href="https://github.com/einfachiota"
        target="_blank"
        tag="button"
        class="el-button el-button--primary"
      >Github</a>
    </div>
    <div class="section tutorials">
      <h2>Tutorials</h2>
      <p>Hier könnt ihr Experimente mit dem Tangle nachmachen!</p>
      <LatestTutorials/>
      <router-link to="/tutorials" tag="button" class="el-button el-button--primary">Alle Projekte</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LatestNews from "@/components/LatestNews.vue";
import LatestProjects from "@/components/LatestProjects.vue";
import LatestTutorials from "@/components/LatestTutorials.vue";

export default {
  name: "home",
  components: {
    LatestNews,
    LatestProjects,
    LatestTutorials
  }
};
</script>

<style lang="scss">
.home {
  text-align: center;
}
.hero {
  padding-top: 120px;
  .heading {
  }
  .sub-heading {
    margin-top: 0px;
    font-size: 2.5em;
  }
}

.section {
  padding: 80px 5%;
  &-background {
    background-color: var(--gray);
  }
  .divider {
    height: 5px;
    width: 100px;
    background-color: var(--primary);
    margin: 20px 0;
  }
  &.news {
    text-align: left;
    padding: 100px 0 200px;
  }
  .headline-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>

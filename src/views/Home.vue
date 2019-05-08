<template>
  <div class="home">
    <div class="hero">
      <h1 class="heading">Willkommen bei einfachIOTA.de</h1>
      <p class="sub-heading">Die Seite, die IOTA einfach erklärt!</p>
    </div>
    <div class="news">
      <h2>Neuigkeiten</h2>
      <p>Wir liefern euch die neusten Informationen aus der IOTA Foundation.</p>
      <p>Die Orginal Blogeintrage für euch übersetzt!</p>
      <LatestNews/>
      <router-link to="/news" tag="button" class="el-button el-button--primary">Alle Neuigkeiten</router-link>
    </div>
    <div class="projects">
      <h2>Projekte der Woche</h2>
      <p>So sehen echte IOTA Projekte aus.</p>
      <LatestProjects/>
      <router-link to="/projects" tag="button" class="el-button el-button--primary">Alle Projekte</router-link>
    </div>
    <div class="tutorials">
      <h2>Tutorials</h2>
      <p>Hier könnt ihr Experimente mit dem Tangle nachmachen!</p>
      <LatestTutorials/>
      <router-link to="/tutorials" tag="button" class="el-button el-button--primary">Alle Projekte</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LatestNews from '@/components/LatestNews.vue'
import LatestProjects from '@/components/LatestProjects.vue'
import LatestTutorials from '@/components/LatestTutorials.vue'

export default {
  name: 'home',
  components: {
    LatestNews, LatestProjects, LatestTutorials
  }
}
</script>

<style lang="scss">
.hero {
  padding-top: 120px;
  .heading {

  }
  .sub-heading {
    margin-top: 0px;
    font-size: 2.5em;
  }
}
</style>

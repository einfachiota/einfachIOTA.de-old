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
      <router-link to="/news" tag="button" class="el-button">Alle Neuigkeiten</router-link>
    </div>
    <div class="projects">
      <h2>Projekt der Woche</h2>
      <p>Jeden Donnerstag stellen wir euch ein neues Projekt aus dem Ökosystem vor!</p>
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3 class="medium">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
      <router-link to="/news" tag="button" class="el-button">Alle Projekte</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LatestNews from '@/components/LatestNews.vue'

export default {
  name: 'home',
  components: {
    LatestNews
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
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>

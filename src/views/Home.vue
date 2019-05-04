<template>
  <div class="home">
    <h2>Neuigkeiten</h2>
    <LatestNews/>
    <router-link to="/news" tag="button" class="el-button">Mehr Neuigkeiten</router-link>

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

<template>
  <div class="home">
    <LatestNews/>
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

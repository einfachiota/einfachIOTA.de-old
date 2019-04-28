<template>
  <div class="home">
    <img alt="einfachiotatangle" src="../assets/einfachiotatangle.jpg">
    <HelloWorld msg="Willkommen bei einfachIOTA"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

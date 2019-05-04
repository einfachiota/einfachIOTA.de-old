<template>
  <div id="app">
    <NavBar />
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
    components: {NavBar},
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Nunito');

body {
 margin: 0;
} 
#app {
  font-family: 'Nunito', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
}
h1, h2, h3, h4 {
  margin: 0;
  font-weight: 700;
}
h1 {
  font-size: 62px;
  line-height: 1.25;
}
h2 {
  font-size: 42px;
}
h3 {
  font-size: 30px;
}
h4 {
  margin-bottom: 10px;
  font-size: 24px;
}
p {
  font-size: 16px;
  line-height: 1.5;
}
.main {
  margin-top: 70px;
  padding-top: 24px;
}
:root {
  --primary: #139B48;
  --primary-2: #A2CF6F;
  --secondary: #0B5D9E;
  --secondary-2: #5AB0B2;
  --dark: #081C1D;
  --darker: #0F3535;
  --light: #E2E2E2;
  --white: #FFFFFF;
  --white_5: rgba(255,255,255,.05);
  --white_10: rgba(255,255,255,.1);
  --white_25: rgba(255,255,255,.25);
  --white_50: rgba(255,255,255,.5);
  --red: #F16465;
  --orange: #E69255;
  --yellow: #E6BE54;
  --purple: #8F60A8;
  --border-radius: 10px;
  --border-radius-sm: 5px;
  --box-shadow: 0 3px 6px rgba(0,0,0,.15);
  --transition-in-out: all 0.3s ease-in-out;
}
</style>
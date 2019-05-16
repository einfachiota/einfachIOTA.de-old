<template>
  <el-container>
    <el-header> 
      <NavBar />
      </el-header>
    <el-main>
      <router-view/>
    </el-main>
    <el-footer>
      <Footer />
    </el-footer>
  </el-container>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
    components: {NavBar, Footer},
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400|Roboto+Slab:700');

body {
 margin: 0;
 font-family: 'Open Sans', sans-serif;
 -webkit-font-smoothing: antialiased;
 -moz-osx-font-smoothing: grayscale;
 color: var(--dark);
} 

h1, h2, h3, h4 {
  margin: 0;
  font-weight: 700;
  font-family: 'Roboto Slab', serif;

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
:root {
  --primary: #00B7C5;
  --primary-darken: #03a3af;
  --secondary: #0B5D9E;
  --secondary-2: #5AB0B2;
  --dark: #3D4449;
  --darker: #0F3535;
  --gray: #E2E2E2;
  --light: #EFEFEF;
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
.el-footer {
  padding: 0 0 !important;
}

.el-button {
  font-family: "Roboto Slab" !important;
  font-weight: bold !important;
  text-transform: uppercase !important;
  letter-spacing: 0.1em !important;
  border-radius: 10px !important ;
  padding: 15px 30px !important;
  transition: all 200ms ease-in-out !important;
  border: none !important;
}
.el-button--primary {
    background-color: var(--primary) !important;
    color: var(--white) !important;
    &:hover {
      background-color: var(--primary-darken) !important;
    }
}
button.el-button.el-button--light {
  background-color: var(--light) !important;
  color: var(--dark) !important;
  &:hover {
    background-color: grey !important;
  }
}

.el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li {
  &:hover {
    color: var(--primary) !important;
  }
}

.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: var(--primary) !important;
  &:hover {
    color: var(--white) !important;
  }
}

.hero {
  text-align: center;
  padding-top: 80px;
  .sub-heading {
    margin-top: 0px;
    font-size: 2.5em;
  }
}

.divider {
  height: 5px;
  width: 100px;
  background-color: var(--primary);
  margin: 20px 0;
}

.container {
  margin: 0 auto;
  width: 1200px;
}

@media only screen and (max-width: 1260px) {
  .container {
    margin: 0 auto;
    width: 100%;
    padding: 0 30px;
    box-sizing: border-box;
  }
  h1 {
  font-size: 42px;
  line-height: 1.25;
  }
  h2 {
    font-size: 32px;
  }
  h3 {
    font-size: 20px;
  }
  h4 {
    margin-bottom: 10px;
    font-size: 18px;
  }
  p {
    font-size: 16px;
    line-height: 1.5;
  }
}

</style>
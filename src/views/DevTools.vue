<template>
  <div>
    <div class="header">
      <h1 class="header__title">Developer Tools</h1>
      <div class="divider"></div>
    </div>
    <div class="content">
        <h2>Generate Developer Seed</h2>
        <p>Use this seed only for development!</p>
        <pre>{{seed}}</pre>
        <button type="button" @click="generateNewSeed" class="el-button el-button--primary">Neuen Seed generieren</button>
    </div>
  </div>
</template>

<script>

import generateSeed from '../utils/generateSeed.js'
export default {
    data() {
        return {
            seed: ''
        }
    },
    methods: {
        generateNewSeed() {
            this.seed = generateSeed()
        }
    },
    created() {
        this.seed = generateSeed()
    }
}
</script>


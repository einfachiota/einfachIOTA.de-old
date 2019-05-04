<template>
    <el-carousel :interval="4000" type="card">
        <el-carousel-item v-for="post in posts" :key="post.id">
            <el-card v-bind:style="{ 'background-image': 'url(' + post.feature_image + ')' }">
                <div style="padding: 14px;">
                    <h3>{{post.title}}</h3>
                    <div class="bottom clearfix">
                    <el-button type="text" class="button" @click="openPost(post)">zum Artikel</el-button>
                    </div>
                </div>
            </el-card>
        </el-carousel-item>
    </el-carousel>
</template>

<script>
export default {
  props: ['posts'],
  methods: {
      openPost(post) {
        this.$store.dispatch('savePost', post)
        this.$router.push({ name: 'post', params: { slug: post.slug } })
      }
  }
}
</script>

<style>

.el-card {
    height: 400px;
}
</style>

<template>
  <div>
    <el-row :gutter="12">
      <el-col :span="12" v-for="post in posts" :key="post.id">
        <el-card v-bind:style="{ 'background-image': 'url(' + post.feature_image + ')' }">
          <div style="padding: 14px;">
            <h3>{{post.title}}</h3>
            <div class="bottom clearfix">
              <el-button type="text" class="button" @click="openPost(post)">zum Artikel</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page="current_page"
      :page-size="per_page"
      background
      layout="prev, pager, next"
      hide-on-single-page
      :total="total"
    ></el-pagination>
  </div>
</template>

<script>
export default {
    name: "PostList",
    props: ['posts', 'current_page', 'per_page', 'total'],
    methods: {
        handleCurrentChange(val) {
            this.$emit('handleCurrentChange', val)
        }
    }
}
</script>


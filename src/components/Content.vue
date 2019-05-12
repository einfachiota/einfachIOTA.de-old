<template>
  <div class="content">
    <span v-html="content"></span>
  </div>
</template>

<script>
export default {
  name: "Content",
  props: ["content"]
};
</script>

<style lang="scss">
.content {
  margin: auto auto;
  padding: 0 10%;
  max-width: 860px;

  a {
    color: var(--primary-darken);

    &:hover {
      color: var(--primary);
    }
  }

  img.kg-image {
    display: block;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-size: cover;
  }
}
</style>

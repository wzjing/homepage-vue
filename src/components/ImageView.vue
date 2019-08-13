<template>
  <div class="image-view">
    <img :src="src" alt="IMG"/>
  </div>
</template>

<script>
  export default {
    name: "ImageView",
    props: {
      src: String,
    }
  }
</script>

<style scoped lang="scss">

  .image-view {
    background-color: #DFDFDF;

    img {
      width: 100%;
      height: 100%;
    }
  }

</style>
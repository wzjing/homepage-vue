<template>
  <div id="editor">

    <textarea id="source">

    </textarea>

    <div id="preview">
      preview
    </div>

  </div>
</template>

<script>
  export default {
    name: "Editor"
  }
</script>

<style scoped>

  #editor {
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: calc(100vh - 64px);
  }

  #source {
    flex: 1 1 auto;
    border: none;
    stroke: none;
  }

  #preview {
    flex: 1 1 auto;
    background-color: #feffe9;
  }

</style>
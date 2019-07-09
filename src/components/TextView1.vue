<template>
  <div class="text-view" @click="onClick">
    value: {{index}}
  </div>
</template>

<script>
  export default {
    name: "TextView1",
    data() {
      return {
        index: 0
      }
    },
    methods: {
      onClick() {
        this.index++
        console.log(`clicked: ${this.index}`)
      }
    }
  }
</script>

<style scoped lang="scss">
  .text-view {
    color: #000;
    font-size: 14px;
    background: #ffffff;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
    user-select: none;

    &:hover {
      background: #eeeeee;
    }
  }
</style>
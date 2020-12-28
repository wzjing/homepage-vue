<template>
  <div id="publish">
    <input class="search-bar" placeholder="Search for Templates">

    <div class="template-list">
      <div class="template-item" v-for="(key, value) in templatesList">
        {{value}}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Publish",
    data() {
      return {
        templatesList: [
          "1",
          "2",
          "3",
          "4",
          "5"
        ]
      }
    },
    mounted() {
      document.querySelector(".search-bar").addEventListener("focus", () => {
        console.log("input focus changed")
      }, true)
    }
  }
</script>

<style scoped lang="scss">
  @import "../styles/theme.scss";

  #publish {
    background-color: #f8f8f8;
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
  }

  input.search-bar {
    display: inline-block;
    width: 32rem;
    height: 3rem;
    box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.08);
    border: 0;
    margin-top: 40vh;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 5px 30px;
    outline: none;
    @include font();
    animation: raise-reverse 220ms;
    transition: all .2s;
    text-transform: uppercase;

    &:focus {
      border: 0;
      margin-top: 20vh;
      box-shadow: 0 40px 40px 0 rgba(0, 0, 0, 0.08);
      animation: raise 0.2s normal;
    }

    &:not(:focus) {
      animation: raise 120ms reverse;
    }

    @media screen and(max-width: 40rem) {
      min-width: 0;
      width: 80%;
    }

  }

  @keyframes raise {
    0% {
      margin-top: 0;
      box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.08);
    }

    100% {
      margin-top: 20vh;
      box-shadow: 0 40px 40px 0 rgba(0, 0, 0, 0.08);
    }
  }

  .template-list {
    margin-top: 24px;
    width: 40rem;
  }

  .template-item {
    background-color: white;
    box-shadow: 0 40px 40px 0 rgba(0, 0, 0, 0.08);
    box-sizing: border-box;
    alignment: center;
    border-radius: 4px;
    min-height: 6rem;
    margin: 10px 0;
  }
</style>
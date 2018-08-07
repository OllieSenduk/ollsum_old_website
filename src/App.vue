<template>
  <div id="app">
      <appLoading v-if="isLoading"></appLoading>
      <appHeader v-else></appHeader>
      <appAbout></appAbout>
      <appPandaChat></appPandaChat>
  </div>
</template>

<script>
import PandaChat from './components/PandaChat'
import Header from './components/Header'
import About from './components/About'
import Loading from './components/Loading'
import Vue from 'vue';

export default {
  name: 'App',
  components: {
    appPandaChat: PandaChat,
    appHeader: Header,
    appAbout: About,
    appLoading: Loading
  },
  data: function () {
    return {
      isLoading: true
    };
  },
  mounted () {
    setTimeout(() => {
      this.isLoading = false
    }, 3000)
  },
  methods: {
  },
  computed: {

  },
  watch: {
 }
}
</script>

<style lang="less">

* { padding: 0; margin: 0; }
html, body, #fullheight {
    min-height: 100% !important;
    height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}


// FONTS

@font-face {
  font-family: 'LeagueGothic-Regular';
  src: url('./assets/fonts/LeagueGothic-Regular.otf');
  // src: url('./assets/fonts/CircularStd-Book.eot?#iefix') format('embedded-opentype'),
  //   url('./assets/fonts/CircularStd-Book.woff') format('woff'),
  //   url('./assets/fonts/CircularStd-Book.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@import (css) url('https://fonts.googleapis.com/css?family=Open+Sans');

</style>

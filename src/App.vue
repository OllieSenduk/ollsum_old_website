<template>
  <div id="app">
    <appHeader></appHeader>
    <appPandaChat></appPandaChat>
  </div>
</template>

<script>
import PandaChat from './components/PandaChat'
import Header from './components/Header'
import Vue from 'vue';

export default {
  name: 'App',
  components: {
    appPandaChat: PandaChat,
    appHeader: Header
  },
  data: {
  },
  computed: {
  },
  watch: {
   // Here we specifify that we're watching the value data object, and setting a timer to reset it
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
  height: 100%;
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

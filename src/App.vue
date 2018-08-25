<template>
  <div id="app">
      <!-- <appTransitionText></TransitionText> -->
      <div v-if="isLoading">
        <appLoading v-if="isLoading"></appLoading>
      </div>
      <div v-else>
        <appHeader></appHeader>
        <appAbout></appAbout>
        <appPandaChat></appPandaChat>
        <!-- <appPandaChat></appPandaChat> -->
      </div>

  </div>
</template>

<script>
import PandaChat from './components/PandaChat'
import Header from './components/Header'
import About from './components/About'
import Loading from './components/Loading'
import TransitionText from './components/TransitionText'
import Vue from 'vue';

export default {
  name: 'App',
  components: {
    appPandaChat: PandaChat,
    appHeader: Header,
    appAbout: About,
    appLoading: Loading,
    appTransitionText: TransitionText
  },
  data: function () {
    return {
      isLoading: false
    };
  },
  mounted () {
    setTimeout(() => {
      this.isLoading = false
    }, 7500)
  },
  methods: {
  },
  computed: {

  },
  watch: {
 }
}
</script>

<style lang="scss">


$yellow: #fc3;

$grey: #393939;

body {
    min-height: 100% !important;
    height: 100%;
}

a {
  text-decoration: none;
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}

// GLOBAL CSS

.container {
  padding-top: 30%;
}

.tagline__underline {
  height: 3px;
  margin: 0;
  width:  30px;
  border: none;
  text-align: left;
  -webkit-transition: width .2s;
  transition: width .2s;

  &_large {
    width: 125px;
  }

  &_yellow {
   background: $yellow;
  }

  &_grey {
    background: $grey;
  }
}

.yellow {
  color: $yellow
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

@font-face {
font-family: 'Sifonn-Basic';
font-style: normal;
font-weight: normal;
src: url('./assets/fonts/SIFONN_BASIC.otf');
}

@font-face {
  font-family: 'TungstenNarrow-bold';
  font-style: normal;
  font-weight: normal;
  src: url('./assets/fonts/TungstenNarrow-bold.otf');
}

@font-face {
  font-family: 'TungstenNarrow-Semibold';
  font-style: normal;
  font-weight: normal;
  src: url('./assets/fonts/TungstenNarrow-Semibold.otf');
}

@import url('https://fonts.googleapis.com/css?family=Open+Sans');
@import url('https://fonts.googleapis.com/css?family=Lobster|Pacifico');
@import url('https://fonts.googleapis.com/css?family=Montserrat:700|Source+Sans+Pro');
</style>

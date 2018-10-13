<template>
  <div id="app">
    <appNavbar></appNavbar>
    <!-- <router-view></router-view> -->
      <div v-if="isLoading">
        <appLoading ></appLoading>
        <!-- <transition
        v-on:enter="enter"
        v-on:leave="leave"
        v-bind:css="false"
        appear
        > -->
        <appIntro></appIntro>
      <!-- </transition> -->
      </div>
      <div v-else>
        <transition
        v-on:enter="enterUp"
        v-on:leave="leaveUp"
        v-bind:css="false"
        appear
        >
          <appHeader></appHeader>
        </transition>
        <appHomepage></appHomepage>

      </div>

  </div>
</template>

<script>
import EmailForm from './components/Form'
import Header from './components/Header'
import Loading from './components/Loading'
import TransitionText from './components/TransitionText'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Homepage from './components/Homepage'

import Vue from 'vue';

export default {
  name: 'App',
  components: {
    appIntro: Intro,
    appHeader: Header,
    appNavbar: Navbar,
    appTestimonials: Testimonials,
    appLoading: Loading,
    appTransitionText: TransitionText,
    appEmailForm: EmailForm,
    appServices: Services,
    appTestimonials: Testimonials,
    appHomepage: Homepage
  },
  data: function () {
    return {
      isLoading: true,
    };
  },
  mounted () {
    setTimeout(() => {
      this.isLoading = false
    }, 9300)
  },
  methods: {
    enter(el, done) {
        const tl = new TimelineMax({
            onComplete: done
        })

        tl.set(el, {
            autoAlpha: 0,
            scale: 2,
            transformOrigin: '50% 50%'
        })

        tl.to(el, 1, {
            autoAlpha: 1,
            scale: 1,
            ease: Power4.easeOut
        })
    },
    leave(el, done) {
        TweenMax.to(el, 1, {
            scale: 0,
            ease: Power4.easeOut,
            onComplete: done
        });
    },
    enterUp(el, done) {
      const tl = new TimelineMax({
          onComplete: done
      })

      tl.set(el, {
          y: window.innerWidth * 1.5,
          scale: 0.8,
          transformOrigin: '50% 50%'
      })

      tl.to(el, 0.5, {
          y: 0,
          ease: Power4.easeOut
      });

      tl.to(el, 1, {
          scale: 1,
          ease: Power4.easeOut
      });
    },
    leaveUp(el, done) {
      TweenMax.to(el, 1, {
         y: window.innerHeight * -1.5,
         ease: Power4.easeOut,
         onComplete: done
     });
    }
  },
  computed: {

  },
  watch: {
 }
}
</script>

<style lang="scss">


$yellow: #fc3;

$grey: #989898;

html,body {
    margin:0;
    padding:0;
}

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
  padding-top: 20%;
}

.content__container {
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 20px;
  margin-bottom: 60px;
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

  &_black {
    background: black;
  }
}

.yellow {
  color: $yellow
}

.line_height_text {
  line-height: 30px;
}

.page_link {
  margin: 20px 0 10px;
  font-size: 16px;
}

.main_message {
  font-size: 17px;
}

@media only screen and (min-width : 800px) {
  .main_message {
    font-size: 15px;
  }
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

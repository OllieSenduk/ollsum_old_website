<template>
  <div id="app" class="app">
    <!-- <appNavbar></appNavbar> -->
    <!-- <router-view></router-view> -->
      <div v-if="isLoading">
        <!-- <transition
       v-on:leave="enterUp"
       v-bind:css="false"
       appear
       > -->
        <appLoading ></appLoading>
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

<style lang="scss" scoped>

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    position: relative;
  }

</style>

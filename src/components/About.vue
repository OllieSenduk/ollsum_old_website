<template lang="html">

  <section section id="about" class="about">
    <div class="container">

      <div class="about__tagline">
        <h2>hello world</h2>
      </div>
      <div class="about__message">
        <div class="about__message_">

        </div>
      </div>
      <div class="about__message">

      </div>
      <div class="about__message">

      </div>
      <div class="about__message">

      </div>
    </div>

  </section>

</template>

<script>

import Steps from './Steps'

export default {
  components: {
    appSteps: Steps,
  },

  data: function () {
    return {
    };
  },
}
</script>

<style lang="scss" scoped>

  h2 {
    margin-top: 0px;
  }

  .about{
    height: 100vh;
    width: 100vw;
    background-color: pink;
  }

  .about__tagline {
    color: black;
  }
</style>

<template lang="html">
  <section class="services" id="services">
    <div class="services__container">

    <blockquote class="quote" >
      <span data-aos="zoom-in-up">WE BUILD JAW-DROPPING <span style="color: white;">END-TO-END CAMPAIGNS</span> WITH BRANDS WE LOVE.</span>
    </blockquote>
  </div>

  </section>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
/* Some vars */
$background-color: hsl(50, 5, 97);
$black: hsl(200, 40, 10);
$white: $background-color;
$base-font-size: 2.4em;
$base-line-height: 1.5em;

.services {
  background-color: rgb(255, 204, 51);
  z-index: -2;
  position: relative;
}

.services__container {
  margin-left: 10%;
  margin-right: 10%;

  padding-top: 10%;
  padding-bottom: 10%;

}

.quote {
  font-family: TungstenNarrow-Semibold;
    /* letter-spacing: 3px; */
  font-weight: 500;
  font-size: 42px;
  margin-bottom: 20px;
  line-height: 64px;
  margin-top: 5px;
  margin-bottom: 10px;
  font-style: italic;
  color: black;
  margin-left: 3px;
  z-index: 1;
  margin-right: 30px;
  word-spacing: 5px;

  &:before {
    content: '\201C';
    position: absolute;
    top: 0.3em;
    left: 2px;
    color: #e7e6e4;
    font-size: 8em;
    z-index: -1;
   }
}

@media only screen and (min-width : 700px) {

  .services {
    height: 50vh;
  }
  .services__container {
    margin-left: 50px;
    margin-right: 50px;
  }

  .quote {

      &:before {
      top: 0.4em;
      left: 2px;
      color: #e7e6e4;
      font-size: 19em;
    }
  }
}

@media only screen and (max-width : 860px) {
  .services__container {
  }
}


blockquote {
  margin-bottom: 3em;
}
</style>

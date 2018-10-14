<template lang="html">
  <div class="content__container">
    <div class="testimonial__tagline">
      <h2>TESTIMONIALS</h2>
      <span class="testimonial__quote">
        THE
        <br>
        <b style="color: #fc3">PRAISES</b>
      </span>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>

$yellow: #fc3;

.testimonial__header_container {
  background-size: cover;
  background-color: white;
  height: 100%;
  margin-right: 10%;
  margin-left: 10%;
  margin-top: 80px;
}



  h2 {
    margin-top: 0px;
    margin-bottom: 5px;
    opacity: 0.7;
    font-size: 20px;
    font-family: TungstenNarrow-Semibold;
    letter-spacing: 2px;
    font-weight: 100;
    color: #989898;
  }

  .testimonial{
    width: 100vw;
    background-color: white;
    text-align: left;
  }

  .testimonial__tagline {
    color: black;

    span {
      // font-family: TungstenNarrow-Semibold;
/* letter-spacing: 3px; */
      font-weight: 500;
      font-size: 80px;
      margin-bottom: 20px;
      line-height: 64px;
      margin-top: 5px;
      margin-bottom: 10px;
    }
  }

  @media (max-width: 900px) {
    span {
      // font-family: TungstenNarrow-Semibold;
/* letter-spacing: 3px; */
      font-size: 70px;
      line-height: 75px;
      text-align: left;
    }
    .testimonial__title {
      font-size: 70px;
      line-height: 75px;
      text-align: left;
    }
  }

</style>

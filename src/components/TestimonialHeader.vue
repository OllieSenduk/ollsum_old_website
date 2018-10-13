<template lang="html">
  <div class="testimonial__header_container">
    <div class="testimonial__header">
      <div class="testimonial__title">
        PRAISE FOR THE<span style="color: black">BERRIES</span>
        <hr class="tagline__underline tagline__underline_yellow tagline__underline">
      </div>
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


.testimonial__title {
  text-align: left;
  font-family: TungstenNarrow-Semibold;
/* letter-spacing: 3px; */
  font-weight: 200;
  font-size: 80px;
  line-height: 64px;
  margin-top: 5px;
  color: $yellow;
  max-width: 40px;
}

</style>

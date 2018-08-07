<template lang="html">
  <section class="about">
    <div class="about__container">
      <h1>Hello world</h1>
    </div>
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      show: true,
      panel: 1
    };
  },
}
</script>

<style scoped lang="less">

  .about__container {
    height: 100vh;
    width: 100vw;
    background-color: #414789;
  }
</style>

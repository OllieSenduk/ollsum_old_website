<template lang="html">
  <section class="header">
    <div class="header__container">
      <div class="header__operations" id="strategy">

        <div class="balloon_1">
          <p>Growth & Marketing</p>
        </div>
        <div class="header__block">
          Strategy
        </div>
        <div class="balloon_2">
          <p>Branding & UX </p>
        </div>
      </div>
      <div class="header__content">
        <h1>GUERILLA <br>STRAWBERRY</h1>
        <p>digital product development <br> & <br> Growth Strategy </p>
      </div>
      <div class="header__operations" id="product">
        <div class="text_balloon_1">
          <p>Code & Design</p>
        </div>
        <div class="balloon_1">
        </div>
        <div class="header__block">Product
        </div>
        <div class="balloon_2">
          <p>Scrum & Agile</p>
        </div>
      </div>
      <div class="triangle-topleft">
      </div>
    </div>
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

<style lang="less">

  .header__container {
    height: 100vh;
    overflow: hidden;
    background-color: #ED5759;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .triangle-topleft {
    -webkit-clip-path: polygon(0 8%, 0% 100%, 100% 100%);
    clip-path: polygon(0 8%, 0% 100%, 100% 100%);
    background: black;
    height: 100vh;
    width: 100vw;
  }

  .header__content {
    position: absolute;
    z-index: 2;

    h1 {
      color: white;
      font-family: LeagueGothic-Regular;
      font-size: 80px;
      letter-spacing: 5px;
    }

    p {
      margin-top: 60px;
      font-family: 'Open Sans', sans-serif;
      font-size: 15px;
      letter-spacing: 5px;
      color: yellow;
      font-weight: bold;
    }
  }

  #strategy {
    right: 5%;

  }

  #product {
    left: 5%
  }


  .header__operations {
    position: absolute;
    color: white;
    font-size: 18px;
    z-index: 2;
    display: flex;
    flex-direction: column;

    p {
      font-size: 17px
    }

    .text_balloon_1 {
      position: absolute;
      top: -90%;
      animation: 1s bounceInText linear;
      -webkit-animation: 0.5s bounceInText linear;
    }

    .balloon_1 {

      &::after {
        content: '';
        margin-bottom: 90px;
        animation: 0.5s bounceIn linear;
        -webkit-animation: 0.5s bounceIn linear;
        width: 1px;
        height: 85px;
        background: white;
        border-style: unset;
        position: absolute;
        bottom: 51%;
        left: 50%;
        margin-left: -2px;
        color: white;

      }
    }

    @keyframes bounceInText {
      2%  {transform: translateY(-100px)}
    }

    @keyframes bounceIn {
      2%  {transform: translateY(-100px)}
      // 6%  {transform: none}
      // 8%  {transform: translateY(-90px)}
      // // 10% {transform: none}
      // 20% {transform: translateY(-80px)}
      // // 30% {transform: none}
      // 40% {transform: translateY(-70px)}
      // 60% {transform: none}
      80% {transform: translateY(-8px)}
      // 100% {transform: none}
    }


    .balloon_2 {
      top: 1px;
      margin-top: 90px;

      &:before {
        content: '';
        width: 1px;
        height: 85px;
        background: white;
        border-style: unset;
        position: absolute;
        bottom: 8%;
        left: 50%;
        margin-left: -2px;
        color: white;
      }
    }

    .header__block {
      border-color: white;
      border-width: 2px;
      border-style: solid;
      padding: 10px 10px 10px 10px;
      font-weight: 800;
      color: yellow;
    }
  }


  @media (max-width: 950px) {
    .header__strategy {
      display: none;
    }
  }

</style>

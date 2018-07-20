<template lang="html">
  <section class="header">
    <div class="header__container">
      <div class="header__operations" id="strategy">
        <div class="balloon_1">
          <p>Growth & Marketing</p>
        </div>
        <div class="header__block">Strategy
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
        <div class="balloon_1">
          <p>Code & Design</p>
        </div>
        <div class="header__block">Product
        </div>
        <div class="balloon_2">
          <p>Scrum & Agile</p>
        </div>
      </div>
      <div class="triangle-topleft">
      </div>

      <!-- <div class="header__banner">

      </div> -->
    </div>
  </section>

</template>

<script>

export default {
  data: function () {
    return {

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

    .balloon_1 {
      margin-bottom: 90px;
      animation: movedown 2s ease-in-out;
      webkit-animation: movedown 2s ease-in-out;
      animation-fill-mode: forwards;
      &:after {
        content: '';
        width: 1px;
        height: 85px;
        background: white;
        border-style: unset;
        position: absolute;
        bottom: 61%;
        left: 50%;
        margin-left: -2px;
        color: white;
      }
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

  @keyframes movedown {
    from {
      top:-200px;
      left: 10px;
      opacity: 0;
     }
    to {
      top:10px;
      left: 100px;
      opacity: 1
    }
  }

  @-webkit-keyframes movedown  {
  from {
    top: -200px;
    opacity: 0;
  }
  to {
    top: 50px;
    opacity: 1;
    }
  }

  @media (max-width: 950px) {
    .header__strategy {
      display: none;
    }
  }

</style>

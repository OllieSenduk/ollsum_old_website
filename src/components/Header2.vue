<template lang="html">
  <section class="header">
    <div class="screenEnters">

    </div>
    <div class="header__container">
      <div class="header__operations" id="strategy">
        <div class="text_balloon_top">
          <p>Marketing & Social</p>
        </div>
        <div class="balloon_1">
        </div>
        <div class="header__block">
          Growth
        </div>
      </div>
      <div class="header__content">
        <h1 id="title">GUERILLA <br>STRAWBERRY</h1>
        <!-- <p>digital product development <br> & <br> Growth Strategy </p>
        <p>Results and Customer driven product & marketing strategy</p>
        <p>Let's get your business to the moon</p> -->
        <p>Let's scale that business <br> of yours</p>
        <img src="@/assets/rocket.svg" alt="" style="width: 100px; height: 100px;">

      </div>
      <div class="header__operations" id="product">
        <div class="text_balloon_top">
          <p>Code & Design</p>
        </div>
        <div class="balloon_1">
        </div>
        <div class="header__block">Product
        </div>

      </div>
      <div class="triangle-topleft">
      </div>
      <div class="header__action">
        <i class="fas fa-sort-down moving-arrow"></i>
        <p>What we do?</p>
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

  #strategy {
    right: 5%;

  }

  #product {
    left: 5%
  }

  #title {
     -webkit-animation: fadein 4s; /* Safari, Chrome and Opera > 12.1 */
        -moz-animation: fadein 4s; /* Firefox < 16 */
         -ms-animation: fadein 4s; /* Internet Explorer */
          -o-animation: fadein 4s; /* Opera < 14.1 */
             animation: fadein 4s;
 }

 @keyframes fadein {
     from { opacity: 0; }
     to   { opacity: 1; }
 }

 /* Firefox < 16 */
 @-moz-keyframes fadein {
     from { opacity: 0; }
     to   { opacity: 1; }
 }

 /* Safari, Chrome and Opera > 12.1 */
 @-webkit-keyframes fadein {
     from { opacity: 0; }
     to   { opacity: 1; }
 }

 /* Internet Explorer */
 @-ms-keyframes fadein {
     from { opacity: 0; }
     to   { opacity: 1; }
 }

 /* Opera < 12.1 */
 @-o-keyframes fadein {
     from { opacity: 0; }
     to   { opacity: 1; }
 }

 .header {
   // animation: createScreen 2s 1 ease-in-out;
   // width: 1px;
   // height: 1px;
   // border-radius: 50%;
   animation: displayScreen 2s 1 ease-in-out;
 }

 // .screenEnters {
 //   width: 100vw;
 //   height: 100vh;
 //   background-color: white;
 //   animation: displayScreen 2s 1 ease-in-out;
 // }


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

    .text_balloon_top {
      position: absolute;
      top: -284%;
      animation: 1s bounceInTextTop linear;
      -webkit-animation: 0.5s bounceInTop linear;
    }

    .balloon_1 {

      &::after {
        content: '';
        margin-bottom: 90px;
        animation: 0.5s bounceInTop linear;
        -webkit-animation: 0.5s bounceInTop linear;
        width: 1px;
        height: 85px;
        background: white;
        border-style: unset;
        position: absolute;
        bottom: -63%;
        left: 50%;
        margin-left: -2px;
        color: white;

      }
    }

    @keyframes bounceInTop {
      2%  {transform: translateY(-100px)}
      80% {transform: translateY(-8px)}
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

  .header__action {
    position: absolute;
    bottom: 5%;

    p {
      color: white;
    }
  }

  .moving-arrow {
    color: white;
    font-size: 34px;
    animation: 4s arrowDown infinite;
  }

  @keyframes arrowDown {
   0%   {color:#414789; left:0px; top:0px;}
   25%  {color:yellow; left:200px; top:0px;}
   50%  {color:#ED5759; left:200px; top:200px;}
   75%  {color:green; left:0px; top:200px;}
   100% {color:#414789; left:0px; top:0px;}
  }

  // @keyframes displayScreen {
  //   0%{
  //     -webkit-transform: translate(0%);
  //     background-color: white;
  //   }
  //   25%{-webkit-transform: translate(100%);
  //   background-color: black;
  // }
  // 50% {
  //   -webkit-transform: translate(100%);
  //   background-color: white
  // }
  //   100%{-webkit-transform: translate(100%);
  //     display: none
  //     ;}
  // }

  // @keyframes createScreen {
  //   0% {
  //     opacity: 0;
  //     transform: scale(0.01);
  //     border-radius: 50%;
  //   }
  //   50% {
  //     opacity: 1;
  //     transform: scale(0.01);
  //     border-radius: 50%;
  //   }
  //   100% {
  //     transform: scale(1);
  //     border-radius: 50%;
  //   }
  // }

  #svg-cloud {
    display: none;
  }

  @media (max-width: 950px) {
    .header__operations {
      display: none;
      // position: absolute;
      // top: 22%;
    }
  }

</style>

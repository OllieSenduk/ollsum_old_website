<template lang="html">

      <div class="panda" data-aos="zoom-in-left">
        <div class="ears-container">
          <div class="ear1">
          </div>
          <div class="ear2">
          </div>
        </div>
        <div class="head">
          <div class="eyes">
            <div class="eye-container1">
              <div class="eye">
              </div>
            </div>
            <div class="eye-container2">
              <div class="eye2">
              </div>
            </div>
          </div>
          <div class="nose">
          </div>
        </div>
        <div class="panda-body">
          <div class="left-paw">
          </div>
          <div class="right-paw">
          </div>
        </div>
        <div class="tail">
        </div>
        <div class="PRlaptop">
          <div class="PRscreen">
          </div>
          <div class="PRkeyboard">
          </div>
        </div>
      </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">

  @earsize: 20px;
  @pandawhite: #f5f5f5;
  @laptop: darkgrey;



// /* Extra Small Devices, Phones */
// @media only screen and (min-width : 375px) {
//   .panda-container {
//   }
// }
//
// /* Small Devices, Tablets */
// @media only screen and (min-width : 768px) {
//   .panda-container {
//     width: 50vw;
//   }
// }
//
// /* Medium Devices, Desktops */
// @media only screen and (min-width : 992px) {
//   .panda-container {
//     left: 10%;
//   }
// }

.left {
  position: absolute;
}

  .panda-container {
    background-color: #fc3;
    position: absolute;
    bottom: -40px;
    left: -2px;
  }

  .panda {
    width: 100vw;
    height: 100vh;
    position: absolute;
    .ears-container {
      display: flex;
    }
    .ear1 {
      position: relative;
      left: 94px;
      height: @earsize;
      width: @earsize * 2;
      border-top-left-radius: @earsize * 2;
      border-top-right-radius: @earsize * 2;
      background-color: black;
      transform: rotate(-2deg);
      &::before {
        display: block;
        content: "";
        height: 0;
        width: 0;
        position: relative;
        left: 24px
      }
    }
    .ear2 {
      position: relative;
      left: 92px;
      height: @earsize;
      width: @earsize * 2;
      border-top-left-radius: @earsize * 2;
      border-top-right-radius: @earsize * 2;
      background-color: black;
      &::before {
        display: block;
        content: "";
        height: 0;
        width: 0;
        position: relative;
        left: 24px
      }
    }
    .head {
      height: 85px;
      width: 114px;
      position: relative;
      left: 77px;
      z-index: 2;
      -webkit-box-shadow: -8px 0 0 #4f5b66;
      box-shadow: -8px 0 0 #4f5b66;
      border-radius: 37px;
      background: #f5f5f5;
      .eyes {
        display: flex;
        .eye-container {
          position: relative;
          height: 34px;
          width: 44px;
          border-radius: 26px;
          background-color: black;
        }
        .eye-container1 {
          &:extend(.panda .head .eyes .eye-container);
          left: 26px;
          top: 10px;
        }
        .eye-container2 {
          &:extend(.panda .head .eyes .eye-container);
          left: 22px;
          top: 10px;
        }
        .eye {
          height: 12px;
          width: 12px;
          position: relative;
          top: 16px;
          left: 24px;
          border-radius: 100%;
          -webkit-animation: 9s pandaRead infinite;
          animation: 9s pandaRead infinite;
          background: white;
         }
         .eye2 {
           height: 12px;
           width: 12px;
           position: relative;
           top: 16px;
           left: 24px;
           border-radius: 100%;
           -webkit-animation: 9s pandaRead infinite;
           animation: 9s pandaRead infinite;
           background: white;
         }
      }
      .nose {
        height: 22px;
        width: 22px;
        position: relative;
        top: 14px;
        left: 49px;
        border-radius: 20px;
        // background: @laptop;
        z-index: 3;
        &::before {
          display: block;
          content: "";
          height: 22px;
          width: 22px;
          position: relative;
          left: 22px;
          border-radius: 20px;
          // background: @laptop;
          z-index: 3;
        }
        &::after {
          display: block;
          content: "";
          height: 0;
          width: 0;
          position: relative;
          top: -22px;
          left: 12px;
          border-radius: 10px;
          border-top: 10px solid black;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
        }
      }
      .mouth {
        height: 18px;
        width: 18px;
        background-color: black;
        top: 2px;
        left: 49px;
        position: relative;
        animation: 9s pandaSmile infinite;
        border-radius: 50%;
        // border-bottom: 5px solid red;
      }
    }
    .panda-body {
      height: 110px;
      width: 120px;
      position: relative;
      top: -30px;
      z-index: 1;
      border-radius: 55px;
      background: #f5f5f5;
      -webkit-box-shadow: -8px 0 0 #4f5b66;
      box-shadow: -8px 0 0 #4f5b66;
      left: 60px;
       .left-paw {
         height: 25px;
         width: 37px;
         position: relative;
         top: 70px;
         left: 29px;
         border-radius: 12px;
         animation: 6s LeftType infinite;
         background: black;
       }
       .right-paw {
         height: 25px;
         width: 37px;
         position: relative;
         top: 45px;
         left: 75px;
         border-radius: 12px;
         animation: 6s RightType infinite;
         background: black;
       }
     }
     .tail {
       height: 24px;
       width: 48px;
       position: relative;
       top: -54px;
       left: 55px;
       z-index: 0;
       border-radius: 17px 0 0 17px;
       background: black;
     }
  }

  .PRlaptop {
    position: relative;
    top: -151px;
    left: 170px;
    z-index: 2;
    .PRscreen {
      height: 85px;
      width: 107px;
      border-radius: 8px;
      transform: skew(-18deg);
      background: black;
      &::before{
        display: block;
        content: "";
        height: 17px;
        width: 10px;
        position: relative;
        top: 38px;
        left: 56px;
        border-radius: 6px;
        background:  #fc3;
      }
    }
    .PRkeyboard {
      height: 12px;
      width: 107px;
      position: relative;
      left: -14px;
      border-radius: 0 6px 6px 0;
      background: grey;
      &::before {
        display: block;
        content: "";
        height: 12px;
        width: 72px;
        position: relative;
        left: -68px;
        border-radius: 6px;
        background: @laptop;
      }
    }
    .macbook-img {
      width: 130px;
      height: 102px;
      position: relative;
      top: -30px;
      z-index: 4;
    }
  }

  @keyframes LeftType {
    2%  {transform: translateY(-8px)}
    6%  {transform: none}
    8%  {transform: translateY(-8px)}
    10% {transform: none}
    14% {transform: translateY(-8px)}
    16% {transform: none}
    18% {transform: translateY(-8px)}
    20% {transform: none}
    22% {transform: translateY(-8px)}
    26% {transform: none}
  }

  @keyframes RightType {
    6%  {transform: translateY(-8px)}
    8%  {transform: none}
    10% {transform: translateY(-8px)}
    12% {transform: none}
    16% {transform: translateY(-8px)}
    18% {transform: none}
    20% {transform: translateY(-8px)}
    22% {transform: none}
    24% {transform: translateY(-8px)}
    28% {transform: none}
    32% {transform: translateY(-8px)}
    36% {transform: none}
  }

  @keyframes pandaRead {
    30% {transform: none}
    62% {transform: translateX(-2px)}
    70% {
      transition-timing-function: ease-out;
      transform: translateX(3px)}
    82% {transform: translateX(-2px)}
    90% {
      transition-timing-function: ease-out;
      transform: translateX(3px)}
    100%{transform: none}
  }

  @keyframes pandaSmile {
    55% {
      transition-timing-function: ease-out;

      width: 18px;
      height: 18px;
      }
      /* You could think of as "step 2" */
    80% {
      transition-timing-function: ease-out;

      width: 22px;
      height: 22px;
      background-color: black;
    }
    100% {
      transition-timing-function: ease-out;

      width: 18px;
      height: 18px  px;
      background-color: black;
    }
  }

  @media only screen and (min-width : 800px) {
    .panda {
      width: auto;
    }
  }
</style>

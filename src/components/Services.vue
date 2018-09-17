<template lang="html">
<div class="">

      <div class="panda">
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

      </div>




<h1>hello</h1>

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
    max-width: 20vw;
    max-height: 20vh;
    position: absolute;
    .ears-container {
      display: flex;
    }
    .ear1 {
      position: relative;
     left: 84px;
     height: 21px;
     width: 44px;
     border-top-left-radius: 40px;
     border-top-right-radius: 40px;
     background-color: black;
     -webkit-transform: rotate(-7deg);
     transform: rotate(-22deg);
     top: 10px;


    }
    .ear2 {
      position: relative;
      left: 84px;
      height: 21px;
      width: 44px;
      border-top-left-radius: 40px;
      border-top-right-radius: 40px;
      background-color: black;
      -webkit-transform: rotate(-26deg);
      transform: rotate(26deg);
      top: 10px;
    }
    .head {
      height: 85px;
      width: 80px;
      position: relative;
      left: 90px;
      z-index: 2;
      -webkit-box-shadow: -8px 0 0 #4f5b66;
      box-shadow: -8px 0 0 #4f5b66;
      border-radius: 55px;
      background: #f5f5f5;
      .eyes {
        display: flex;
        .eye-container {
          position: relative;
          height: 44px;
          width: 44px;
          border-radius: 26px;
          background-color: black;
        }
        .eye-container1 {
          &:extend(.panda .head .eyes .eye-container);
          left: 1px;
          top: 10px;
        }
        .eye-container2 {
          &:extend(.panda .head .eyes .eye-container);
          left: -2px;
          top: 10px;
        }
        .eye {
          height: 20px;
          width: 20px;
          position: relative;
          top: 5px;
          left: 2px;
          border-radius: 100%;
          background: white;
         }
         .eye2 {
           height: 20px;
            width: 20px;
            position: relative;
            top: 5px;
            left: 2px;
            border-radius: 100%;
            background: white;
         }
      }
      .nose {
        height: 18px;
        width: 18px;
        background-color: black;
        top: 15px;
        left: 32px;
        position: relative;
        // -webkit-animation: 9s pandaSmile-data-v-3e51d18e infinite;
        // animation: 9s pandaSmile-data-v-3e51d18e infinite;
        border-radius: 50%;
        z-index: 3;
      }
    }
    .panda-body {
      height: 70px;
      width: 85px;
      position: relative;
      top: -30px;
      z-index: 1;
      border-radius: 55px;
      background: #f5f5f5;
      -webkit-box-shadow: -8px 0 0 #4f5b66;
      box-shadow: -8px 0 0 #4f5b66;
      left: 91px;
       .left-paw {
         height: 25px;
         width: 37px;
         position: relative;
         top: 70px;
         left: 29px;
         border-radius: 12px;
         // animation: 9s LeftType infinite;
         background: black;
       }
       .right-paw {
         height: 25px;
        width: 37px;
        position: relative;
        top: -22px;
        left: 66px;
        border-radius: 12px;
        // -webkit-animation: 9s RightType-data-v-3e51d18e infinite;
        // animation: 9s RightType-data-v-3e51d18e infinite;
        background: black;
       }
     }
     .tail {
       height: 24px;
       width: 48px;
       position: relative;
       top: -54px;
       left: 70px;
       z-index: 0;
       border-radius: 17px 0 0 17px;
       background: black;
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
  //
  // @media only screen and (min-width : 800px) {
  //   .panda {
  //     width: auto;
  //   }
  // }
</style>

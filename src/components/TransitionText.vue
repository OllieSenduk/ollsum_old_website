<template lang="html">
  <div class="transitionText__container">
    <div class="transitionText__content">
      <h1>
        <div>
          <!-- <span id="flickerText">{flickerText}</span> -->
        </div>
      </h1>
    </div>
  </div>
</template>

<script>
// we have 5 words
// they all share the same flicker function
// the word changes every 3 seconds into the next one
// the App.js stops the component
export default {
  data: function () {
    return {
      words: true,
      panel: 1
    };
  },
  computed: {
    flickerText: function() {

    }
  }
}
</script>

<style lang="less" scoped>

  .transitionText__container {
    background-color: white;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    letter-spacing: 0.75em;
    text-shadow: 0 0 0px white;
    color: black;
  }

  .glitch {
    color: black;
    font-size: 200%;
  }


//
//   .transitionText__content {
//     transform: translate(-50%, -50%);
//     background-color: white;
//     top: 50%;
//     left: 50%;
//     display: block;
//     position: absolute;
//     max-width: 80%;
//     z-index: 5
//   }
//
//   h1{
//     color: #fff;
//     text-transform: uppercase;
//     font-size: 42px;
//     margin: 0;
//     line-height: 47px;
//     letter-spacing: 2px;
//   }
//
//
// .title{
//   transform: translateX(-50%) rotate(-10deg);
//   display: block;
//   float: left;
//   left: 50%;
//   position: relative;
// }
//
//   span {
//     transform: skew(-10deg);
//     display: block;
//     float: left;
//     text-shadow: #533d4a 1px 1px, #533d4a 2px 2px, #533d4a 3px 3px, #533d4a 4px 4px, #533d4a 5px 5px, #533d4a 6px 6px;
//     min-width: 10px;
//     min-height: 10px;
//     position: relative;
//     margin-bottom: 10%
//   }
//
//   .title{
//     &:nth-child(1){
//       color: red;
//     }
//     &:nth-child(2){
//       color: green;
//     }
//     &:nth-child(3){
//       color: yellow;
//     }
//   }
//
//   .fadeText1 {
//     animation: fadeText1
//   }
//   .fadeText2 {
//     animation: fadeText2
//   }
//   .fadeText3 {
//     animation: fadeText3
//   }


</style>

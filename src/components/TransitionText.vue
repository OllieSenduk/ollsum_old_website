<template lang="html">
  <div class="transitionText__container" v-bind:style="{ color: pickColor(['#9593D9', '#FF9F1C', '#22007C', '#C2EABA']), background: pickColor(['black', '#2EC4B6', 'grey', 'pink'])}">
    <div class="transitionText__content">
      <h1>
        <div>
          <span id="flickerText" :class="[ flickerOn ? '' : 'glitch' ]" v-bind:style="{ color: pickColor(['#9593D9', '#FF9F1C', '#22007C', '#C2EABA']), background: pickColor(['black', '#2EC4B6', 'grey', 'pink'])}">{{word}}</span>
          <!-- <div class="image_top">
            <img src="@/assets/video-camera.svg" alt="" style="width: 100px; height: 100px;">
          </div> -->
        </div>
      </h1>
    </div>
    <!-- <div class="image_bottom">
      <img src="@/assets/rocket.svg" alt="" style="width: 100px; height: 100px;">
    </div> -->
  </div>
</template>

<script>

export default {
  data: function () {
    return {
      words: ["Campaigns", "That", "Wow"],
      word: "Creating",
      wordCount: -1,
      flickerOn: false,
      showHeader: false
    };
  },
  methods: {
    newWord: function() {
      var self = this
      this.words.forEach(function(word){
        let newWord = self.words[self.wordCount]
        self.word = newWord
      })
    },
    pickColor: function(colors) {
      const color = colors[this.wordCount + 1];
      return color
    },
    flicker: function() {
      var self = this
      const times = 3;
      for(var i=0; i < times; i++){
        setInterval(function(){
          self.flickerOn = !self.flickerOn
        }, 250)
      }
    },
  },
  mounted: function() {
    var self = this
    this.flicker()

    if (this.wordCount < 5) {
      setInterval(function() {
        self.wordCount += 1
        self.newWord()
      }, 1200)
    } else {
      this.header = true
    }
  },
  watch: {
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Londrina+Outline');


  .transitionText__container {
    background-color: white;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .transitionText__content {
  }

  span {
    letter-spacing: 0.75em;
    text-shadow: 0 0 0px white;
    color: black;
  }

  #flickerText {
    padding: 100px;
  }

  .glitch {
    color: black;
    font-size: 110%;
    font-family: 'Londrina Outline', cursive;
  }

  .image_bottom {
    position: absolute;
    bottom: 5px;
    left: 5px;
  }

  .image_top {
    position: absolute;
    top: 5px;
    right: 5px;
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

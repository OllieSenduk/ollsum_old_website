<template lang="html">
  <section class="intro">
    <div id="shooter"></div>
  </section>
</template>

<script>
import {TweenMax, Power2, TimelineLite, TimelineMax, TweenLite} from "gsap";
import 'gsap/CSSPlugin'
import SplitText from "../../static/gsap/SplitText.min.js";


export default {
  methods: {
    fireShooter: function() {
      var self = this
      var container = self.$el.querySelector("#shooter"),
      _sentenceEndExp = /(\.|\?|!)$/g;
      function buildChunks(text, maxLength) {
        if (maxLength === undefined) {
          return text.split(" ");
        }
        var words = text.split(" "),
            wordCount = words.length,
            chunk = [],
            chunks = [], i;
        for (i = 0; i < wordCount; i++){
          chunk.push(words[i]);
          if (_sentenceEndExp.test(words[i]) || i === wordCount - 1 || chunk.join(" ").length + words[i+1].length > maxLength) {
            chunks.push(chunk.join(" "));
            chunk = [];
          }
        }
        return chunks;
      }

      function machineGun(chunks, maxLength) {
        //in case "chunks" isn't an array, we'll build chunks automatically
        if (!(chunks instanceof Array)) {
          chunks = buildChunks(chunks, maxLength);
        }

        var tl = new TimelineMax({delay:0.6, repeat:0, repeatDelay:4}),
            time = 0,
            chunk, element, duration, isSentenceEnd, i;

        for (i = 0; i < chunks.length; i++) {
          chunk = chunks[i];
          isSentenceEnd = _sentenceEndExp.test(chunk) || (i === chunks.length - 1);

          var header = document.createElement("h3")
          var text = document.createTextNode(chunk)

          header.appendChild(text);
          container.appendChild(header)
          var element = header
          // console.log(header)
          // element = header
          // console.log(header)
            duration = Math.max(1, chunk.length * 0.15); //longer words take longer to read, so adjust timing. Minimum of 0.5 seconds.
            if (isSentenceEnd) {
              duration += 0.6; //if it's the last word in a sentence, drag out the timing a bit for a dramatic pause.
            }
            //set opacity and scale to 0 initially. We set z to 0.01 just to kick in 3D rendering in the browser which makes things render a bit more smoothly.
          TweenLite.set(element, {autoAlpha:0, scale:0, z:0.01});
          //the SlowMo ease is like an easeOutIn but it's configurable in terms of strength and how long the slope is linear. See https://www.greensock.com/v12/#slowmo and https://api.greensock.com/js/com/greensock/easing/SlowMo.html
          tl.to(element, duration, {scale:1.2,  ease:SlowMo.ease.config(0.25, 0.9)}, time)
            //notice the 3rd parameter of the SlowMo config is true in the following tween - that causes it to yoyo, meaning opacity (autoAlpha) will go up to 1 during the tween, and then back down to 0 at the end.
      		 	  .to(element, duration, {autoAlpha:1, ease:SlowMo.ease.config(0.25, 0.9, true)}, time);
            time += duration - 0.05;
            if (isSentenceEnd) {
              time += 0.9; //at the end of a sentence, add a pause for dramatic effect.
            }
          }
      }

      machineGun("WE BUILD CAMPAIGNS THAT STICK", 9);
  }
  /* learn more about the GreenSock Animation Platfrom (GSAP) for JS

  https://www.greensock.com/gsap-js/

  watch a quick video on how TimelineLite allows you to sequence animations like a pro
  https://www.greensock.com/sequence-video/

  */
  },
  mounted () {
    this.fireShooter()
  }

}
</script>

<style lang="css">

  .intro {
  	background-color:#111;
    color:white;
  }

  #shooter{
    position: relative;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    margin: auto;
    overflow: hidden;
    background-color: white;
    display: flex;
    /* align-items: center; */
    justify-content: center;

  }

  h3 {
    position:absolute;
    font-family: 'Asap', sans-serif;
    font-weight: 700;
    color: black;
    width: 100%;
    /* text-align:center; */
    visibility:hidden;
    font-size: 100px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    top: 30vh;
    /* transform: translate(-50%, -50%); */

  }

  @media (max-width: 900px) {
    h3 {
      font-size:50px;
    }
  }
</style>

<template lang="html">
  <section class="testimonials" id="testimonials">
1>
    </div> -->

    <div class="wrap">
      <p class="split">
      </p>
    </div>
  </section>
</template>

<script>
import {TweenMax, Power2, TimelineLite} from "gsap";
import SplitText from "../../static/gsap/SplitText.min.js";


export default {

  data: function () {
    return {
      quotes: [
      	"“Wisdom is not a product of schooling but of the lifelong attempt to acquire it.”  <br><br>— Albert Einstein",
      	"“Live as if you were to die tomorrow. Learn as if you were to live forever.” <br><br>—  Mahatma Gandhi",
      	"“Tell me and I forget, teach me and I may remember, involve me and I learn.” <br><br>— Benjamin Franklin",
      	"“Study hard what interests you the most in the most undisciplined, irreverent and original manner possible.”<br><br>— Richard Feynman",

      	"“It is important that students bring a certain ragamuffin, barefoot irreverence to their studies; they are not here to worship what is known, but to question it.”  <br><br>—  Jacob Bronowski"
      ]
    };
  },
  methods: {
    quoteGenerator: function() {
      let counter = 0
      counter += 1
      var self = this

      var index = 0;
      var max = self.quotes.length - 1;
      var delay = .02;

      function random(min, max){
      	return (Math.random() * (max - min)) + min;
      }

      function cycleQuotes(arr, i, sel){
        var message = arr[i]
        var element = self.$el.querySelector('.split')
        element.innerHTML = message
        var split = new SplitText(element)
        var time = split.chars.length * delay;
        Array.from(split.chars).forEach(function(i) {

          	TweenMax.from(i, time, {
          		opacity: 0,
          		x: 0,
          		y: random(-200, 200),
          		z: random(500, 1000),
          		// scale: .1,
          		delay: i * delay,
          		yoyo: true,
          		repeat: -1,
          		repeatDelay: time * 4,
          		ease: Power1.easeOut
          	});
        })
        index = index == max ?  0 : (index + 1);
        setTimeout(function(){
          cycleQuotes(arr, index, ".split");
        }, ((time * 4) + (time * 4)) * 800);
      }

      cycleQuotes(self.quotes, index, ".split");
    }
  },
  mounted () {
    this.quoteGenerator()
  },
}
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300);
$yellow: #fc3;

.wrap {
	height: 50vh;
}


.testimonials {
	background: white;
	overflow: hidden;
	color: white;
	font-family: Open sans;
	max-width: 80vw;
	margin: 0 auto;
}

.wrap {
	max-width: 80vw;
	margin: 0 auto;
}

p {
	position: relative;
	perspective: 500px;
	top: 50%;
	padding: 0 20px;
	transform: translateY(-50%);
	font-weight: 300;
	color: black;
	span {
		opacity: 0;
	}
}

.testimonials__title {
  color: black;
  font-family: TungstenNarrow-Semibold;
  font-weight: 200;
  font-size: 80px;
  margin-top: 5px;
  color: $yellow;
  max-width: 40px;

  h4 {
    margin-bottom: 2px;
    margin-top: 55px;
  }
}

.box {
  height: 60px;
  width: 60px;
  background: red;
}
</style>

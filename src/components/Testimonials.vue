<template lang="html">
  <section class="testimonials" id="testimonials">
    <div class="wrap">
      <h1>Hello</h1>
      <h1 class="split">

      </h1>
    </div>
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      color: 'blue'
    };
  },
  methods: {
    quoteGenerator: function() {
      console.log("hello")
      var quotes = [
      	"“Wisdom is not a product of schooling but of the lifelong attempt to acquire it.”  <br><br>— Albert Einstein",
      	"“Live as if you were to die tomorrow. Learn as if you were to live forever.” <br><br>—  Mahatma Gandhi",
      	"“Tell me and I forget, teach me and I may remember, involve me and I learn.” <br><br>— Benjamin Franklin",
      	"“Study hard what interests you the most in the most undisciplined, irreverent and original manner possible.”<br><br>— Richard Feynman",

      	"“It is important that students bring a certain ragamuffin, barefoot irreverence to their studies; they are not here to worship what is known, but to question it.”  <br><br>—  Jacob Bronowski"
      ];

      var index = 0;
      var max = quotes.length - 1;
      var delay = .02;

      function random(min, max){
      	return (Math.random() * (max - min)) + min;
      }

      function cycleQuotes(arr, i, sel){
      	var el = $(sel);
      	var message = arr[i];
      	el.html(message);
      	var split = new SplitText(el);
      	var time = split.chars.length * delay;

      	$(split.chars).each(function(i){
      		TweenMax.from($(this), time, {
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
      	});

      	index = index == max ?  0 : (index + 1);

      	setTimeout(function(){

      		cycleQuotes(quotes, index, ".split");
      	}, ((time * 4) + (time * 4)) * 1000);

      }

    }
  },
  mounted () {
    this.quoteGenerator()
  },
}
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300);

.wrap {
	height: 100%;
}

.testimonials {
	background: white;
	overflow: hidden;
	color: white;
	font-family: Open sans;
}

.wrap {
	max-width: 800px;
	margin: 0 auto;
}

h1 {
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
</style>

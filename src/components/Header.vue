<template lang="html">
  <section id="header" class="header">
    <!-- <div class="header__strawberry">
      <img src="@/assets/str.png" alt="" class="deco-img-home">
    </div> -->
      <div class="header__container">
        <div class="header__tagline">
          <h1>GUERRILLA STRAWBERRY</h1>
          <h2>
            LET'S CREATE
            <br>
            SOMETHING
            <br>
            <span style="color: #fc3">AWESOME</span>
          </h2>
          <hr class="tagline__underline tagline__underline_yellow tagline__underline">
          </hr>
          <div class="header__message line_height_text main_message">
            <p>
              Guerrilla Strawberry is a creative & digital agency of superheroes.
              <img src="@/assets/kitty.svg" alt="rocket" class="header__icon">

            </p>
          </div>

           <!-- <a href="#about">
            <h6 class="yellow page_link"> About us </h6>
          </a> -->
          <!-- <hr class="tagline__underline tagline__underline_grey">
          </hr> -->
        </div>
        <!-- <span><img src="@/assets/kitty.svg" alt="superhero_kitty" class="header__image"></span> -->

      </div>
        <!-- <div class="big-clickme">
       <div class="btn">
         <a href="#" class="callTo ">

         </a>
       </div>
     </div> -->
     <img src="@/assets/chevron.svg" alt="" style="width: 20px; height: 20px;" class="header__cta">

 </section>



</template>

<script>

export default {

  data: function () {
    return {
    };
  },
  methods: {
  },
  mounted () {
  },
}
</script>

<style lang="scss" scoped>
h2 {
  font-family: TungstenNarrow-Semibold;
  /* letter-spacing: 3px; */
  font-weight: 500;
  font-size: 80px;
  margin-bottom: 20px;
  line-height: 77px;
  margin-top: 5px;
  margin-bottom: 10px;
}
h1 {
  margin-top: 20px;
  margin-bottom: 5px;
  opacity: 0.7;
  font-size: 20px;
  font-family: TungstenNarrow-Semibold;
  letter-spacing: 2px;
  font-weight: 100;
}
p {
  letter-spacing: 1px;
}

.header__container {
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 70px;
}

.header {
  background-image: url('../assets/strawberry.jpg');
  background-position: 32% 140%;
  height: 90vh;
  width: 100vw;
  display: flex;
  text-align: left;
  flex-direction: row;
  // animation: pageEnter 1.3s ease forwards;
}
.header__tagline {
  color: white;
}
.deco-img-home {
  width: 100px;
  opacity: 0.6;
  position: absolute;
}
.header__message {
  width: 90%;
}

.header__icon {
  height: 35px;
}

.header__cta {
  visibility: hidden;
}
/* Medium Devices, Desktops */
@media only screen and (min-width : 700px) {
  h1 {
    letter-spacing: 1px;
  }
  .header {
    background: none;
    background-image: url('../assets/strawberry.jpg');
    background-position: 11% 57%;
    height: 100vh;

  }
  .header__container {
    margin-left: 10%;
    margin-right: 50px;
    margin-top: 6%;
  }
  .header__message {
    width: 400px;
  }
  .header__tagline {
    color: white;
    margin-right: 10%;
    max-width: 40vw;
    width: 40vw;
  }

  .header__cta {
    visibility: visible;
    position: absolute;
    position:absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    bottom: 30px;
    animation: MoveUpDown 1s linear infinite;
  }
}

  @keyframes MoveUpDown {
    0%, 100% {
      bottom: 30px;
    }
    50% {
      bottom: 40px;
    }
  }


  @keyframes pageEnter {
  	50% {
  		-webkit-transform: translateZ(90px) rotateY(90deg);
  	}
  	75% {
  		-webkit-transform: translateZ(-372.5px) rotateY(15deg);
  		// opacity: .9;
  	}
    79% {
      // opacity: .7;
    }
    83% {
    }
  	100% {
  		-webkit-transform: translateZ(-500px) rotateY(0deg);
  		opacity: 1;
  	}
  }

/*
.quote span {
  display:block;
}

.quote {
  /* grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3; */
	/* text-align: center; */
	/* color: #F5C4B6;
  line-height:0.85;
  font-family: Tahoma, Geneva, sans-serif;
  font-weight: bold;
}

.quote span:nth-child(1) {
  font-size: 68px;
  -webkit-transform: rotate(6deg);
  transform: rotate(6deg);
}

.quote span:nth-child(2) {
  font-family: 'Pacifico', cursive;
  font-weight: 400;
  font-size: 68px;
  position: relative;
  z-index: 1;
  text-shadow: 5px 0 0 #F94F6A,
				-5px 0 0 #F94F6A,
				0 5px 0 #F94F6A,
				0 -5px 0 #F94F6A,
				4px 4px #F94F6A,
				-4px -4px 0 #F94F6A,
				4px -4px 0 #F94F6A,
				-4px 4px 0 #F94F6A;
  -webkit-transform: rotate(2deg);
  transform: rotate(2deg);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  color:#fff;
  margin-top: 10px;
  margin-bottom: 33px;
}

.quote span:nth-child(3) {
  font-size: 68px;
  margin-top:-12px;
}  */


/* .big-clickme {
  position: absolute;
  left: 50%;
  bottom: 10%;
  max-width: 20em;
  width: 100%;
  height: 10em;
  margin: 0 0 0px -150px;
  text-align: center;
  margin-top: 10%;
  transition: growBerry 2s linear;
}

.callTo {
      font-family: 'Exo 2', sans-serif;
  box-shadow: 0 5px 5px #e85543, 0 9px 0 #992113, 0px 9px 10px rgba(0, 0, 0, 0.4);
  position: relative;
  margin-bottom: 4px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  background: #e85543;
  box-sizing: border-box;
  width: 100%;
  text-align: center;
  padding: 0.5em 1.5em;
  font-size: 1.5rem;
  line-height: 1.5em;
  display: inline-block;
  vertical-align: middle;
  cursor: pointer;
  margin: 0;
  color: white;
  font-weight: 500;
  text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
  letter-spacing: 3px;
  transition: letter-spacing 0.2s linear;
}

.callTo:hover {



}

.callTo:active {
	 top: 7px;
  box-shadow: 0 2px 0 #e85543, 0px 4px 4px rgba(0, 0, 0, 0.4), inset 0px 2px 5px rgba(0, 0, 0, 0.2);
}

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

/*

.btn{
  width: 300px;
  height: 50px;


  border-radius: 8px;
  color: #fff;

  font-size: 22px;
  font-weight: normal;
  text-decoration: none;
  text-align: center;
  display: inline-block;
  position: relative;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: -webkit-transform;
  transition-property: transform;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
   box-shadow: 0 0 1px transparent;
  -webkit-transform: translateY(-6px);
  -ms-transform: translateY(-6px);
  transform: translateY(-6px);
  -webkit-animation-name: hover;
  animation-name: hover;
  -webkit-animation-duration: 1.5s;
  animation-duration: 1.5s;
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-direction: alternate;
  animation-direction: alternate;
}
.btn:before {
  pointer-events: none;
  position: absolute;
  z-index: -1;
  content: '';
  top: 150%;
  left: 5%;
  height: 20px;
  width: 90%;
  opacity: 0;
  background: -webkit-radial-gradient(center, ellipse, rgba(0, 0, 0, 0.35) 0%, transparent 80%);
  background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 80%);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: -webkit-transform, opacity;
  transition-property: transform, opacity;
  opacity: .4;
  -webkit-transform: translateY(6px);
  -ms-transform: translateY(6px);
  transform: translateY(6px);
  -webkit-animation-name: hover-shadow;
  animation-name: hover-shadow;
  -webkit-animation-duration: 1.5s;
  animation-duration: 1.5s;
  -webkit-animation-delay: .3s;
  animation-delay: .3s;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-direction: alternate;
  animation-direction: alternate;
}
.btn:hover {

}

@keyframes hover {
  50% {
    -webkit-transform: translateY(-3px);
    -ms-transform: translateY(-3px);
    transform: translateY(-3px);
  }
  100% {
    -webkit-transform: translateY(-6px);
    -ms-transform: translateY(-6px);
    transform: translateY(-6px);
  }
}
@-webkit-keyframes hover-shadow {
  0% {
    -webkit-transform: translateY(6px);
    transform: translateY(6px);
    opacity: .4;
  }
  50% {
    -webkit-transform: translateY(3px);
    transform: translateY(3px);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(6px);
    transform: translateY(6px);
    opacity: .4;
  }
}
@keyframes hover-shadow {
  0% {
    -webkit-transform: translateY(6px);
    -ms-transform: translateY(6px);
    transform: translateY(6px);
    opacity: .4;
  }
  50% {
    -webkit-transform: translateY(3px);
    -ms-transform: translateY(3px);
    transform: translateY(3px);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateY(6px);
    -ms-transform: translateY(6px);
    transform: translateY(6px);
    opacity: .4;
  }
}
@-webkit-keyframes hover {
  50% {
    -webkit-transform: translateY(-3px);
    transform: translateY(-3px);
  }
  100% {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
  }
}
@keyframes hover {
  50% {
    -webkit-transform: translateY(-3px);
    -ms-transform: translateY(-3px);
    transform: translateY(-3px);
  }
  100% {
    -webkit-transform: translateY(-6px);
    -ms-transform: translateY(-6px);
    transform: translateY(-6px);
  }
}

@keyframes slide {
  from {
    transform: translateX(-150px);
  }
  to {
    transform: translateX(1500px);
  }
}


  @keyframes moveLogo {
    0% {
      top: 50%;
    }
    100% {
        top: 5%;
        font-size: 30px;
        margin-left: 20px;
        left: 10%;
      }
  }


@media (max-width: 950px) {
  @keyframes moveLogo {
    0% {
      top: 50%;
    }
    100% {
        top: 5%;
        font-size: 30px;
        margin-left: 20px;
        left: 30%;
        position: fixed;
      }
  }
}

@keyframes pageEnter {
  50% {
    -webkit-transform: translateZ(-250px) rotateY(60deg);
  }
  75% {
    -webkit-transform: translateZ(-372.5px) rotateY(15deg);
    // opacity: .6;
  }
  79% {
    // opacity: .7;
  }
  83% {

  }
  100% {
    -webkit-transform: translateZ(-500px) rotateY(0deg);
    opacity: 1;
  }
}

@keyframes growBerry {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  40% {
    opacity: 1;
    // transform: scale(1);
  }
  100% {
    transform: translateY(0);
    // width: 60px;
  }
}

@media (max-width: 950px) {
  .header__strawberry {
    width: 20px;
  }
  .header {
    flex-direction: column;
  }
} */

</style>

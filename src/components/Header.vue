<template lang="html">
  <section id="header" class="header">
      <div class="header__container">
        <div class="tagline tagline_black">
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
        </div>
      </div>
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



.header {
  background-image: url('../assets/strawberry.jpg');
  background-position: 32% 140%;
  width: 100vw;
  display: flex;
  text-align: left;
  flex-direction: row;
  // animation: pageEnter 1.3s ease forwards;
}

.header__container {
  padding-top: 30%;
  padding-left: 10%;
  padding-right: 10%;
  padding-bottom: 10%;
}

.tagline {
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
@media only screen and (min-width : 900px) {
  .header {
    background: none;
    background-image: url('../assets/strawberry.jpg');
    background-position: 11% 57%;
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
@media only screen and (min-width : 900px) {

  .header__container {
    padding-top: 5%;
    padding-left: 10%;
    padding-bottom: 10%;
  }
}

@media only screen and (max-width : 700px) {
  .header {
    background: none;
    background-image: url('../assets/strawberry.jpg');
    background-position: 14% 140%;
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


</style>

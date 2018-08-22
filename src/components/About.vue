<template lang="html">
  <section class="about">
    <div class="about__container">

        <img src="@/assets/deco.png" alt="" class="deco-img">
        <img src="@/assets/deco2.png" alt="" class="deco-img2">
        <div class="about__main">
          <div class="about__main-text">
            <h3 style="text-align: center;">What we do</h3>
            <p>
              Our main focus is to create connect with your desired audience and
              get the message accross in a way that ressonates with them. More so,
              in todays day and age, where people get ..

              We go the extra mile

              Whether it through an (interactive) video, an app or website.
            </p>
          </div>
          <div class="arrow-steps">
            <img src="@/assets/next.png" alt="" class="arrow">
          </div>
          <div class="">
            <img src="@/assets/mind_map.png" alt="" class="mind_map">
          </div>

        </div>


    </div>
  </section>
</template>

<script>
import Steps from './Steps'

export default {
  components: {
    appSteps: Steps,
  },

  data: function () {
    return {
    };
  },
}
</script>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css?family=Bangers');

  h2 {
    font-family: 'Bangers', cursive;
    // color: #FBE1C1;
    color: white;
    font-size: 70px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform:translate(-50%, -50%);
    -moz-transform:translate(-50%, -50%);
    -ms-transform:translate(-50%, -50%);
    -o-transform:translate(-50%, -50%);
    transform:translate(-50%, -50%);
    animation: moveLogo 2s ease forwards;
    animation-delay: 1.3s;
    margin: 2%;
    display: block;
    box-sizing: border-box;
    }

    h3 {
      color: #FBE1C1;
      font-family: Sifonn-Basic;
      margin-bottom: 20px;
    }

    p {
      color: white;
      line-height: 30px;
    }


  .about__container {
    height: 100vh;
    width: 100vw;
    background-color: #413a90;
    display: flex;
    animation: pageEnter 1.3s ease forwards;
  }

  .arrow-steps {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 4;
  }

  .arrow {
    width: 40px;
  }

  .about__main {
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 3% 26% 8% auto 50px 40px;
    grid-template-rows: 24% 88px auto 197px;
  }

  .about__main-text {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
    text-align: left;
  }

  .deco-img {
    width: 100px;
    height: 100px;
    position: absolute;
    right: 5%;
    top: 5%;
  }

  .deco-img2 {
    width: 100px;
    height: 100px;
    position: absolute;
    left: 5%;
    bottom: 5%;
  }

  .deco-img-phone {
    width: 300px;
    height: 400px;
    position: absolute;
    bottom: 5%;
    right: 5%;
  }

  .mind_map {
    position: absolute;
    bottom: 10px;
    right: 5px;
    width: 500px;
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
</style>

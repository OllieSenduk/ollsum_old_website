<template lang="html">
  <div class = "header">
      <div class="tagline">
        <h1>Guerrilla Strawberry</h1>
        <p>We are a fast paced and hyper ambitious Creative Agency based in Amsterdam & Barcelona.
        </p>
      </div>
   </div>
</div>

</template>

<script>
export default {
}
</script>

<style lang="css" scoped>

h1 {
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 20px;
  margin-top: 20px;
}

p {
  font-family: 'Source Sans Pro', sans-serif;
}
.header {
  padding: 100px 0;
  background: #11807F;
  height: 10vh;
  z-index: -3;
  display: flex;
  align-items: center;
  justify-content: center;
  /* grid-template-columns: 5% 40% 10% 40% 5%;
  grid-template-rows: 10% 50% 40%; */
  animation: pageEnter 1.3s ease forwards;
}

/* Medium Devices, Desktops */
@media only screen and (min-width : 800px) {
  .header__content {
  }

}

.quote span {
  display:block;
}

.quote {
  /* grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3; */
	/* text-align: center; */
	color: #F5C4B6;
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
}

.tagline {
  color: white;
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


</style>

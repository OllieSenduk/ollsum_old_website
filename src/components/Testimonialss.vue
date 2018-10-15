<template lang="html">
  <section class="testimonials" id="testimonials">
    <div class="section__container testimonials__background">
      <div class="header testimonials__header">
        <div class="tagline tagline__black">
          <h1>TESTIMONIALS</h1>
        </div>
        <h2>
          LOVE
          <br>
          FOR
          <br>
          <span style="color: #fc3">STRAWBERRY</span>
        </h2>
        <hr class="tagline__underline tagline__underline_yellow tagline__underline">
        </hr>
        <div class="header__message line_height_text main_message">
          <p>
            We are blessed to have worked with some amazing individuals and companies.
            Here's what some had to say about
            Guerrilla Strawberry and its founders.
          </p>
        </div>
      </div>
    </div>
    <div class="quote__container">
      <blockquote class="quote-card">
        <p>
          They understand what it means to run campaigns in todays world.
          Their creativity and ability to execute is amazing.
        </p>

        <cite>
          Jules de Blecout, <br>Business Development @ RIPLEYS
        </cite>
        <img src="@/assets/ripleys.png" alt="" class="ripleys">
      </blockquote>

      <blockquote class="quote-card">
        <p>
          Ollie <span style="color: grey; font-style: italic;">[founder]</span> was amazing. Always completely dedicated
          and had a great way of making complex situations simple. I loved his personal
          style and would recommend him to everybody!
        </p>

        <cite>
          Joscha Koepke, <br>Global Product Lead @ GOOGLE
        </cite>
        <img src="@/assets/google.png" alt="" class="google">
      </blockquote>
      <blockquote class="quote-card">
        <p>
          Pure skills. Combine inventive thinking with high technical capabilities and you've
          got Guerrilla Strawberry.
          Praise the berry!
        </p>

        <cite>
          Inou Ridder, <br> Head Teacher @ LE WAGON
        </cite>
        <img src="@/assets/lewagon.png" alt="" class="lewagon">
      </blockquote>
    </div>

  </section>
</template>

<script>
export default {
}
</script>

<style lang="scss">

$default: #fff;
$defaultTextColor: #222222;
$defaultSecondaryTextColor: #eee;

.container {
  max-width: 800px;
  margin: 80px auto;
}
.text-center {
  text-align: center;
}

.quote-card {
  background: $default;
  color: $defaultTextColor;

  padding: 20px;
  padding-left: 50px;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba($black, 0.12);

  position: relative;
  overflow: hidden;
  min-height: 120px;
  text-align: left;

  p {
    font-size: 19px;
    line-height: 1.5;
    margin: 0;
    max-width: 80%;
  }

  cite {
    font-size: 16px;
    margin-top: 10px;
    display: block;
    font-weight: 200;
    opacity: 0.8;
  }

  img {
    position: absolute;
    top: 0;
    right: -10px;
    width: auto;
    opacity: .1;
  }

  .google {
    height: 190px;
  }

  .ripleys {
    height: 140px;
  }

  .lewagon {
    height: 160px;
  }

  &:before {
    font-family: Georgia, serif;
    content: "“";
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 5em;
    color: rgba($defaultSecondaryTextColor, 0.8);
    font-weight: normal;
  }

  cite {
    color: $grey
  }


  @media(max-width: 640px) {
    &:after {
      font-size: 22em;
      right: -25px;
    }

  }
  @media only screen and (min-width : 900px) {

    .ripleys {
      height: 140px;
      opacity: 0.4;
    }

    .lewagon {
      height: 130px;
      opacity: 0.4;
    }

    .google {
      opacity: 0.4;
    }


  }

}


//
// .testimonials {
// 	background: white;
// 	overflow: hidden;
// 	color: white;
// 	font-family: Open sans;
//   margin-bottom: 80px;
// }
//
// .testimonial__wrapper {
//   width: 100%;
//   margin: auto 0
// }
//
// .testimonials__header {
//
//   h2 {
//     color: $black;
//   }
//
//   p {
//     color: $black;
//   }
// }
//
// .testimonial__cards {
//   width: 100vw;
//   max-width: 100vw;
//   position: relative;
// }
//
// .card__content {
//   max-width: 90%;
// }
// .card {
//   height: 120%;
//   width: 90vw;
//   margin: 0 auto;
//   background-color: white;
//   box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
//   margin-top: 10%;
//   display: flex;
//   text-align: left;
//   flex-direction: column;
//   overflow: hidden;
//
//   .testimonial__card_name {
//     color: $grey
//   }
//
//   .testimonial__card_job_title {
//     color: $yellow;
//   }
//
//   p {
//     position: relative;
//   	font-weight: 300;
//   	color: black;
//     font-family: TungstenNarrow-Semibold;
//       /* letter-spacing: 3px; */
//     font-weight: 500;
//     font-size: 30px;
//     font-style: italic;
//     color: black;
//     word-spacing: 5px;
//   	span {
//   	}
//   }
// }

</style>

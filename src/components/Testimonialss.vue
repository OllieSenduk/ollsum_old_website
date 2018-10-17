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
        <br>

        <cite>
          Jules de Blecout, <br>Business Development @ RIPLEYS
        </cite>
        <img src="@/assets/ripleys.png" alt="" class="ripleys">
      </blockquote>

      <blockquote class="quote-card">
        <p>
          <span style="color: grey; font-style: italic;">[About Oliver Senduk, co-founder]</span> He was amazing. Always completely dedicated
          and had a great way of making complex situations simple. I loved his personal
          style and would recommend him to everybody!
        </p>
        <br>

        <cite>
          Joscha Koepke, <br>Global Product Lead @ <span class="company"> GOOGLE</span>
        </cite>
        <img src="@/assets/google.png" alt="" class="google">
      </blockquote>
      <blockquote class="quote-card">
        <p>
          Pure skills. Combine inventive thinking with high technical capabilities and you've
          got Guerrilla Strawberry.
          Praise the berry!
        </p>

        <br>

        <cite>
          Inou Ridder, <br> Head Teacher @ LE WAGON
        </cite>

        <img src="@/assets/lewagon.png" alt="" class="lewagon">
      </blockquote>

      <blockquote class="quote-card">
        <p>
            They worked on producing film content for the
            events at Krudd.
            Their speed and initiative to create this content was
            immense and we'd happily work with them again
        </p>
        <br>

        <cite>
          KRUDD EVENTS, <br> Music Label with a reach of over 20’000
        </cite>
        <img src="@/assets/krudd.png" alt="" class="crudd">
      </blockquote>

      <blockquote class="quote-card">
        <p>
          <span style="color: grey; font-style: italic;">[About Sam Smith, co-founder]</span> A progressive style of cinematography
           and project marketing.
           A passion to be diverse and we are looking forward to his future in the
           industry.
        </p>
        <br>

        <cite>
          Rob Thomas, <br> Marketing Director @ <span class="company"> CANON EUROPE </span>
        </cite>
        <img src="@/assets/canon3.png" alt="" class="canon">
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

h1 {
  margin-top: 0px;
  margin-bottom: 5px;
  opacity: 0.7;
  font-size: 20px;
  font-family: TungstenNarrow-Semibold;
  letter-spacing: 2px;
  font-weight: 100;
  color: #989898;
}


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
    display: block;
    margin-top: 0.75em;
    font-size: 0.7em;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #c2c8cb;
  }

  .company {

  }




  @media(max-width: 800px) {
    &:after {
      font-size: 22em;
      right: -25px;
    }

    .canon {
      height: 70px;
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

    .crudd {
      height: 200px;
      opacity: 0.4;
    }

    .canon {
      height: 100px;
      opacity: 0.4;
    }
  }


  @media only screen and (min-width : 1200px) {

        .ripleys {
          height: 300px;
          opacity: 0.4;
        }

        .lewagon {
          height: 300px;
          opacity: 0.4;
        }

        .google {
          height: 300px;
          opacity: 0.4;
        }

        .crudd {
          height: 350px;
          opacity: 0.4;
        }

        .canon {
          height: 200px;
          opacity: 0.4;
        }

        p {
          font-size: 40px;
        }

        cite {
          font-size: 30px;
        }
  }
}


</style>

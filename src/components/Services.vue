<template lang="html">
  <section section id="about" class="about">
    <div class="content__container">
        <!-- <div class="about__tagline">
          <h2>OUR VALUES</h2>
          <span class="about__quote">
            GOING
            <br>
            FOR THE
            <br>
            <b style="color: #fc3">WOW</b>
          </span>
        </div> -->
        <div class="about__blocks">

          <div class="about__block" data-aos="fade-up-right">

            <div class="about__message_container">
              <div class="about__message_icon">
                <img src="@/assets/startup.svg" alt="">
              </div>

              <div class="about__message">
                TEAM OF SUPERHEROES

                <hr class="tagline__underline tagline__underline_yellow tagline__underline">
              </div>
            </div>

            <div class="about__message_text line_height_text main_message">
              We work with the best in the field.
              Ranging from designers to programmers, cinematographers to event planners.
            </div>
          </div>
          <div class="about__block" data-aos="fade-up-left">

          <div class="about__message_container">

            <div class="about__message_icon">
              <img src="@/assets/solution.svg" alt="">
            </div>
            <div class="about__message">
              THE PERFECT FIT

              <hr class="tagline__underline tagline__underline_yellow tagline__underline">
            </div>

          </div>


          <div class="about__message_text line_height_text main_message">
             Due to our obession with creating 'wow' moments, we look at every case individually and pick the best approach
             to reach your users.

             <!-- Here at Guerrilla Strawberry we're fortunate enough
             to work with a wide network of international superstars, varying
             from designers to event mangers and developers to cinematographers.
             This enables us to look at every case individually and pick the best approach
             to reach your users. -->
          </div>
        </div>

    </div>

<!--  -->

        <!-- <a href="#about">
          <h6 class="yellow page_link"> Contact </h6>
        </a>
        <hr class="tagline__underline tagline__underline_black">
        </hr> -->
      </div>
    </div>
  </section>

</template>

<script>

export default {


  data: function () {
    return {
    };
  },
}
</script>

<style lang="scss" scoped>

  h2 {
    margin-top: 0px;
    margin-bottom: 5px;
    opacity: 0.7;
    font-size: 20px;
    font-family: TungstenNarrow-Semibold;
    letter-spacing: 2px;
    font-weight: 100;
    color: #989898;
  }

  .about{
    width: 100vw;
    background-color: white;
    text-align: left;
  }

  .about__tagline {
    color: black;

    span {
      font-family: TungstenNarrow-Semibold;
/* letter-spacing: 3px; */
      font-weight: 500;
      font-size: 80px;
      margin-bottom: 20px;
      line-height: 64px;
      margin-top: 5px;
      margin-bottom: 10px;
    }
  }

  // CARDS

  .about__message_container {
    display: -webkit-box;
    display: -ms-flexbox;
    -ms-flex-align: center;
    margin-top: 55px;
    width: 100%;
    display: flex;
    align-items: center;
  }

  .about__message {
    font-family: TungstenNarrow-Semibold;
    vertical-align:middle;
    font-size: 40px;
    margin-right: 5px;
  }

  .about__message_icon {
    vertical-align:middle;
    margin-right: 20px;

    img {
      width: 60px;
    }
  }
  @media only screen and (min-width : 700px) {
    // .about__message_text {
    //   width: 50%;
    // }

    .about__blocks {
      display: flex;
      justify-content: space-between;
    }

    .about__block {
      max-width: 33%;
    }
  }
</style>

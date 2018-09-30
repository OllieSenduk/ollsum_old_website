<template lang="html">
  <section section id="about" class="about">
      <div class="content__container">
        <div class="about__tagline">
          <h2>OUR SERVICES</h2>
          <span class="about__quote">
            GOING
            <br>
            FOR THE
            <br>
            <b style="color: #fc3">WOW</b>
          </span>
        </div>
        <div class="about__blocks">
          <div class="about__block">

          <div class="about__message_container">

            <div class="about__message_icon">
              <img src="@/assets/solution.svg" alt="">
            </div>
            <div class="about__message">
              FINDING THE PERFECT FIT

              <hr class="tagline__underline tagline__underline_yellow tagline__underline">
            </div>
          </div>


          <div class="about__message_text line_height_text main_message">
             Here at Guerrilla Strawberry we're fortunate enough
             to work with a wide network of international superstars, varying
             from designers to event mangers and developers to cinematographers.
             This enables us to look at every case individually and pick the best approach
             to reach your users.
          </div>
        </div>
        <div class="about__block">
          <div class="about__message_container">

            <div class="about__message_icon">
              <img src="@/assets/teamwork.svg" alt="">
            </div>
            <div class="about__message">
              BUSINESS SCAN
              <hr class="tagline__underline tagline__underline_yellow tagline__underline">
            </div>
          </div>


          <div class="about__message_text line_height_text main_message">
            We dive into the core of your business and your users.
            Together we uncover the underlying problems you are facing and
            what the desired outcome is. Think post-its, actionable steps and
            competitive analysis.
          </div>
        </div>
    </div>

<!--  -->
      <div class="about__block">

        <div class="about__message_container">

          <div class="about__message_icon">
            <img src="@/assets/startup.svg" alt="">
          </div>
          <div class="about__message">
            GETTING SHIT DONE

            <hr class="tagline__underline tagline__underline_yellow tagline__underline">
          </div>
        </div>

        <div class="about__message_text line_height_text main_message">
          Our passion for creating top notch products and campaigns has brought us here,
          and thus we will go above and beyond to get you the desired results.
          We value relationships more then anything.
          Therefor we are anything but a pump and dump studio.
          We remain in close contact on the progress of you goals and
          love to help out where needed.

        </div>
      </div>

        <a href="#about">
          <h6 class="yellow page_link"> Contact </h6>
        </a>
        <hr class="tagline__underline tagline__underline_black">
        </hr>
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
    display: flex;
    align-items: center;
    margin-top: 55px;
    margin-bottom: 20px;
  }

  .about__message {
    font-family: TungstenNarrow-Semibold;
    vertical-align:middle;
    font-size: 40px
  }

  .about__message_icon {
    width: 60px;
    vertical-align:middle;
    margin-right: 20px;
  }
  @media only screen and (min-width : 800px) {
    // .about__message_text {
    //   width: 50%;
    // }

    .about__blocks {
      display: flex;
    }

    .about__block {
      margin-right: 10vw;
      max-width: 44%;
    }
  }
</style>

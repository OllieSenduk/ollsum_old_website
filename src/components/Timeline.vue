<template lang="html">
  <section id="timeline__section" class="timeline__section">
    <div class="section__container timeline__background">
      <div class="header timeline__header">
        <div class="tagline">
          <h1>THE PROCESS</h1>
        </div>
        <h2>
          WORK
          <br>
          GRIND
          <br>
          <span style="color: #fc3">HUSSLE</span>
        </h2>
        <hr class="tagline__underline tagline__underline_yellow tagline__underline">
        </hr>
        <div class="header__message line_height_text main_message">
          <p>
            Here at Guerrila Strawberry, we have created lean and efficient processes to
            skip through the nonsense and go straight to what's important: creating value for
            your users.
          </p>
        </div>
      </div>

      <ul class="timeline">
        <li class="timeline-event">
          <label class="timeline-event-icon"></label>
          <div class="timeline-event-copy" data-aos="zoom-in-up">
              <div class="title"> Measurement of Success</div>
            <p>A good start is half the battle. That's why we start with crystalizing what it is
              that we want to achieve together. A clear-cut goal can greatly help define the route
              to success.
            </p>
          </div>
        </li>
        <li class="timeline-event">
          <label class="timeline-event-icon"></label>
          <div class="timeline-event-copy" data-aos="zoom-in-up">
            <div class="title">Strategy</div>
            <p>We do an extensive audit of your users, product and current metrics. With these
              results we devise a gameplan.
            </p>
          </div>
        </li>
        <li class="timeline-event">
          <label class="timeline-event-icon"></label>
          <div class="timeline-event-copy" data-aos="zoom-in-up">
            <div class="title">Getting it Done</div>
            <p>We work in an agile fashion: fast-paced and as lean as possible. At every step of the process we stop and think: will this wow your audience. If the answer is yes,
            we're on the right track</p>
          </div>
        </li>
      </ul>
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
  },
}
</script>

<style lang="scss" scoped>

.timeline__section {
  background: black;
  height: auto;
  background: black;
  padding-bottom: 40px;
}

.timeline__background {
  background: url('../assets/background_dark.png');
  background-size: cover;
  height: 100%;
}

.timeline__container {
  background: url('../assets/background_dark.png');
  background-size: cover;
  height: 100%;
  margin-right: 10%;
  margin-left: 10%;
}

.timeline__header {


  h2 {
    color: white;
  }

  .header__message {
    color: white;
  }
}

.timeline__title {
  font-family: TungstenNarrow-Semibold;
/* letter-spacing: 3px; */
  font-weight: 200;
  font-size: 80px;
  line-height: 64px;
  margin-top: 5px;
  color: $yellow;
  max-width: 40px;
}

ul {
  list-style: none;
}

/* Styling */
.timeline {
  margin: 4em auto;
  position: relative;
  max-width: 46em;

  &:before {
    background-color: white;
    content: '';
    margin-left: -1px;
    position: absolute;
    top: 0;
    left: 2em;
    width: 2px;
    height: 100%;
  }
}

.timeline-event {
  position: relative;
  text-align: left;

  &:hover {

    .timeline-event-icon {
      transform: rotate(-45deg);
      background-color: $yellow;
    }

    .timeline-event-thumbnail {
      box-shadow: 10em 0 0 0 $yellow;
    }
    h3 {
      color: white;
    }
  }
}

.timeline-event-copy {
  position: relative;
  left: 4em;
  width: 60%;

  .title {
    font-size: 1.75em;
    font-family: TungstenNarrow-Semibold;
    font-weight: 200;
    margin-bottom: 0px;
    color: $yellow;
  }

  h4 {
    font-size: 1.2em;
    margin-bottom: 2px;
    margin-top: 1.2em;
    color: $yellow;
    font-style: italic;
  }

  strong {
    font-weight: 700;
  }

  p:not(.timeline-event-thumbnail) {
    padding-bottom: 1.2em;
    color: white;
    margin-top: 0px;
  }
}

.timeline-event-icon {
  transition: transform 0.2s ease-in;
  transform: rotate(45deg);

  background-color: $black;
  outline: 10px solid white;
  display: block;
  margin: 0.5em 0.5em 0.5em -0.5em;
  position: absolute;
  top: 0;
  left: -7px;
  width: 1em;
  height: 1em;
}

.timeline-event-thumbnail {
  transition: box-shadow 0.5s ease-in 0.1s;
  color: $white;
  font-size: 0.75em;

  background-color: $black;
  box-shadow: 0 0 0 0em #ef795a;
  display: inline-block;
  margin-bottom: 1.2em;
  padding: 0.25em 1em 0.2em 1em;
}

@media only screen and (min-width : 1920px) {

    .timeline__header {
      margin-bottom: 200px;
    }
  .timeline {
    max-width: 100%;
    padding-bottom: 80px;

    .title {
      font-size: 90px;
    }

    p {
      font-size: 40px;
      line-height: 60px;
    }
  }
}
@media (max-width: 900px) {
  .timeline__title {
    font-size: 70px;
    line-height: 75px;
  }
}

</style>

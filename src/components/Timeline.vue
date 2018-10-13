<template lang="html">
  <section id="timeline__section" class="timeline__section">
    <div class="timeline__container">
      <div class="timeline__header">
        <div class="timeline__title">
          <span style="color: white"> THE </span>PROCESS
          <hr class="tagline__underline tagline__underline_yellow tagline__underline">
        </div>
      </div>

      <ul class="timeline">
        <li class="timeline-event">
          <label class="timeline-event-icon"></label>
          <div class="timeline-event-copy" data-aos="zoom-in-up">
              <h3> Measurement of Success</h3>
            <!-- <h4>Where we define what outcome you're looking for</h4> -->
            <p>Before we dive head first into creating something, we always want to know what
              is it that we want to achieve together. Maybe the strategy you had before can be tweeked or
              made better.
            </p>
          </div>
        </li>
        <li class="timeline-event">
          <label class="timeline-event-icon"></label>
          <div class="timeline-event-copy" data-aos="zoom-in-up">
            <h3>Strategy</h3>
            <!-- <h4>Where we find the best way to reach your audience</h4> -->
            <p>Do we need to reach a few people very personally, or should our aim be virality? Would an app be good to reach the crowd, or maybe we can host an event.</p>
          </div>
        </li>
        <li class="timeline-event">
          <label class="timeline-event-icon"></label>
          <div class="timeline-event-copy" data-aos="zoom-in-up">
            <h3>Getting it Done</h3>
            <p>We work agile: fast-paced and as lean as possible. At every step of the process we stop and think: will this still wow your audience. If the answer is yes,
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
    // changeIcon: function() {
  //     const config = {
  //     	sceneDuration: 900,
  //     	baseCssClass: 'circle',
  //     	targetElement: document.querySelector(".circle"),
  //     	animationClasses: ["zero", "two","three", "four","five"]
  //     };
  //
  //     const setElemClass = (element, animationClass) => element.className = `${config.baseCssClass} ${animationClass}`;
  //
  //     const setClassesHandler = (index=0) => {
  //     	const {animationClasses, targetElement, sceneDuration} = config;
  //     	setTimeout( () => {
  //     		setElemClass(targetElement, animationClasses[index])
  //       	index >= animationClasses.length -1 ? setClassesHandler() : setClassesHandler(++index)
  //     	}, sceneDuration )
  //     }
  //     setClassesHandler();
  //   }
  },
  // mounted () {
  //   this.changeIcon()
  // },
}
</script>

<style lang="scss" scoped>

/* Variables */
$color-1: black;
$color-2: white;
$color-3: rgb(168, 50, 121);
$yellow: #fc3;


.timeline__section {
  background: black;
  height: auto;
  padding-top: 80px;
  padding-bottom: 80px;
}

.timeline__container {
  background: url('../assets/background_dark.png');
  background-size: cover;
  height: 100%;
  margin-right: 10%;
  margin-left: 10%;
}

.timeline__header {
  display: flex;
  justify-content: space-between;
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

  h3 {
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

  background-color: $color-1;
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
  color: $color-2;
  font-size: 0.75em;

  background-color: $color-1;
  box-shadow: 0 0 0 0em #ef795a;
  display: inline-block;
  margin-bottom: 1.2em;
  padding: 0.25em 1em 0.2em 1em;
}

</style>

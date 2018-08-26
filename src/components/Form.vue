<template lang="html">

  <section section id="contact" class="contact">
      <div class="content__container">
        <div class="contact__tagline">
          <h2>CONTACT</h2>
          <span class="contact__quote">
            COFFEE
            <br>
            FUELS
            <br>
            <b style="color: black">BRILLIANCE</b>
          </span>
          <hr class="tagline__underline tagline__underline_black tagline__underline">
        </div>
        <div class="header__message">
          <p>
            So let's have one! We operate out of Barcelona and Amsterdam.
            Drop a message down below and our trusted office
            Panda will make sure we get the message!
          </p>
        </div>

        <!-- FORM COMPONENT -->
        <div class="contact__form">

          <form action="https://formspree.io/ollie.senduk@gmail.com" method="POST">
            <div class="field field_small">
              <p>Name</p>
              <input type="text" name="name">
            </div>
            <div class="input_line">
            </div>
            <div class="field field_small">
              <p>Email</p>
              <input type="text" name="_replyto">
            </div>
            <div class="input_line">
            </div>
            <div class="field field_large">
              <p>Your message</p>
              <input type="text" name="message">
            </div>
            <div class="input_line">
            </div>
            <input type="submit" value="Send" class="form__button">
          </form>
        </div>

      <appPandaChat/>
    </div>
  </section>

</template>

<script>
import PandaChat from './PandaChat'

export default {
  components: {
    appPandaChat: PandaChat,
  }
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

  input {
    background-color: rgba(255, 255, 255, 0.4);
    border: 0px solid white;
    height: 50px;
    width: 80%;
    font-size: 20px;
    padding-left: 5px;
  }

  .field_large {
    input {
      min-height: 220px;
    }
  }

  .input_line {
    height: 6px;
    background-color: white;
    width: 82%;
  }

  textarea:focus, input:focus{
    outline: none;
}

  .contact__form {
    p {
      font-family: Avenir;
      font-stretch: expanded;
      letter-spacing: 2px;
      margin-bottom: 1px;
    }
  }

  .form__button {
    background: black;
    color: white;
    margin-top: 10px;
    width: 82%;
  }


  .contact {
    width: 100vw;
    background-color: #fc3;
    text-align: left;
    height: 150vh;
  }

  .contact__tagline {
    padding-top: 70px;
    color: white;
  }


</style>

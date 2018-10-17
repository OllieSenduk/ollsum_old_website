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
        <div class="header__message line_height_text main_message">
          <p>
            So let's have one! We operate out of Barcelona and Amsterdam.
            Drop a message down below and our trusted office
            Panda will make sure we get the message!
          </p>
        </div>
        <div class="panda__component">
          <appPandaChat/>
        </div>
        <!-- FORM COMPONENT -->
        <div class="contact__form">

          <form action="https://formspree.io/ollie.senduk@gmail.com" method="POST">
            <div class="field field_small">
              <p>Name</p>
              <input type="text" name="name">
            </div>
            <!-- <div class="input_line">
            </div> -->
            <div class="field field_small">
              <p>Email</p>
              <input type="text" name="_replyto">
            </div>
            <!-- <div class="input_line">
            </div> -->
            <div class="field field_large">
              <p>Your message</p>
              <textarea name="name" rows="8" cols="80"></textarea>
            </div>
            <!-- <div class="input_line">
            </div> -->
            <input type="submit" value="Send" class="form__button">
          </form>
        </div>
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

  textarea {
    background-color: rgba(255, 255, 255, 0.4);
    border: 0px solid white;
    width: 80%;
    font-size: 20px;
    padding-left: 5px;
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
      font-size: 17px;
      color: white;
      font-weight: bold;
    }

    input[type="text"]
    {
    font-size: 20px;
    // font-family: TungstenNarrow-Semibold;
    letter-spacing: 20px;
    letter-spacing: 3px;
    }

    textarea {
      font-size: 17px;
      // font-family: TungstenNarrow-Semibold;
      letter-spacing: 20px;
      letter-spacing: 3px;
    }
  }

  .form__button {
    background: black;
    color: #fc3;
    margin-top: 10px;
    width: 82%;
    font-family: Avenir;
    font-stretch: expanded;
    letter-spacing: 2px;
    margin-bottom: 1px;
    font-size: 10px;
    color: white;
    font-weight: bold;
  }

  .contact {
    width: 100vw;
    height: 100%;
    background-color: #fc3;
    text-align: left;
  }

  .contact__tagline {
    padding-top: 70px;
    color: white;
  }

  .panda__component {
    position: relative;
    height: 240px;
    margin-top: 13px;
    left: -20px;
  }

  @media only screen and (min-width : 800px) {
    .contact__form {

      input[type="text"] {
        width: 80%;
      }

      p {
        font-size: 15px;
      }

      input[type="submit"] {

        font-size: 15px;
      }
    }

    .contact {
      position: relative;
      height: 180vh;
    }

    .header__message {
      width: 50%;
    }
    .input_line {
      width: 81%;
    }

    .panda__component {
      position: absolute;
      top: 87px;
      left: 70vw;
      width: 0px;
    }

    .form__button {
      background: black;
      color: white;
      margin-top: 40px;
      width: 20%;
    }

  }


    @media only screen and (min-width : 1920px) {
      h2 {
        font-size: 80px;
        line-height: 150px;
      }

      .contact__quote {
        font-size: 160px;
        line-height: 150px;
      }
      .contact__form {

        input[type="text"] {
          width: 80%;
          height: 120px;
        }

        p {
          font-size: 30px;
        }

        input[type="submit"] {
          height: 120px;

          font-size: 30px;
        }
      }
    }



</style>

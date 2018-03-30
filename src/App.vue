<template>
  <div id="app">
    <div class="header-container">
    <div class="row full-height">
      <div class="col-lg-6 col-sm-12 white-half">
        <appPandaChat></appPandaChat>
      </div>
      <div class="col-lg-6 col-sm-12 black-half">
        <div class="chat-container">
          <div class="chat-1" id="chat1">
            <p>{{ chatOneText }}</p>
          </div>
          <div class="chat-2">

          </div>
        </div>
      </div>

    </div>

    </div>


  </div>
</template>

<script>
import PandaChat from './components/PandaChat'
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';

// Import bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

Vue.use(BootstrapVue);
export default {
  name: 'App',
  components: {
    appPandaChat: PandaChat
  },
  data: {
    textOne: {
      false: "hello",
      true: "..."
    }
  },
  computed: {
    chatOneText() {
       "..."
    }
  },
  watch: {
   // Here we specifify that we're watching the value data object, and setting a timer to reset it
   value:
     function() {
       var vm = this
       setTimeout(function(){
       vm.value = 0
     }, 2000)
   }
 }
}
</script>

<style lang="less">


* { padding: 0; margin: 0; }
html, body, #fullheight {
    min-height: 100% !important;
    height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  position: relative;
  height: 100%;
}

.header-container {
  height: 100%;
}

.full-height {
  height: 100%;
}

.white-half {
  background-color: white;
  margin: 0px;
  background-size: cover;
}

.black-half {
  background-color: black;
  margin: 0px;
  background-size: cover;
}

.chat-container {
  height: 100%;
  position: relative;
}

.chat-1 {
  position: absolute;
  top: 43px;
  left: 20px;
  width: 60px;
  height: 42px;
  border-radius: 18px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  animation-timing-function: ease-out;
  animation: apearText 6s ease-in forwards;
  // opacity: 0;
  p {
    color: black;
  }
}
@keyframes apearText {
    0% {
        transform: scale(0);
    }
    20% {
      transform: scale(1);
    }
    60% {
      width: 60px;
    }
    100% {
      width: 180px;
    }
}

.chat-2 {

}

@media (min-width: 480px) {
  .header-img {
    height: 100px;
    width: 100px;
  }

  .white-half {
    height: 40%;
  }

  .black-half {
    height: 60%;
  }
}
@media (min-width: 767px) {
  .header-img {
    height: 250px;
    width: 250px;
  }

  .white-half {
    height: 100%;
  }

  .black-half {
    height: 100%;
  }
}
@media (min-width: 992px) {
  .header-img {
    height: 250px;
    width: 250px;
  }
}

</style>

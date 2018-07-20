<template lang="html">
  <div class="chat-container">
    <div class="chat-1" id="chat1">
      <p> Welcome to Space Pandas  </p>
    </div>
    <div class="chat-2">
      <p> Awesome of you to drop by! We build <strong>digital products</strong>  and create next-level <strong> Video campaigns</strong></p>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">

.chat-container {
  height: 100%;
  position: relative;
  margin-left: 20px;
}

.chat-1, .chat-2{
  position: absolute;
  border-radius: 18px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  animation-timing-function: ease-out;
  box-shadow: 0 2px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  // opacity: 0;
  p {
    color: black;
  }
}

.chat-1 {
  width: 120px;
  height: 50px;
  animation: apearText 2s ease-in forwards;
}

.chat-2 {
  padding: 10px;
  width: 80%;
  height: 100px;
  animation: apearText2 4s ease-in forwards;
  box-shadow: 0 2px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  p {
    color: black;
  }
}

@keyframes apearText {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  40% {
    opacity: 1;
    // transform: scale(1);
  }
  100% {
    transform: translateY(0);
    // width: 60px;
  }
}

@keyframes apearText2 {
  0% {
    transform: translateY(20px);
    opacity: 0;
  }

  50% {
    transform: translateY(20px);
    opacity: 0;
  }
  90% {
    opacity: 1;
    // transform: scale(1);
  }
  100% {
    transform: translateY(0);
    // width: 60px;
  }
}

@media (min-width: 411px) {
  .chat-1 {
    top: 0px;
    left: 20px;
  }

  .chat-2 {
    top: 70px;
    left: 20px;
  }
}
@media (min-width: 767px) {
  .chat-1 {
    top: -30px;
    left: 20px;
  }

  .chat-2 {
    top: 40px;
    left: 20px;
  }
}
@media (min-width: 992px) {
  .chat-1 {
    top: 10vh;
    left: 20px;
  }

  .chat-2 {
    top: 20vh;
    left: 20px;
  }

  @media (min-width: 1023px) {
    .chat-1 {
      top: 17vh;
      left: 20px;
    }

    .chat-2 {
      top: 25vh;
      left: 20px;
    }
  }
}
</style>

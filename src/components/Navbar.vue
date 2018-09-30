<template lang="html">
  <section class="navbar" id="navbar">

      <div class="burger" v-on:click="activateNav">
        <div class="burger__patty"></div>
        <div class="burger__patty"></div>
        <div class="burger__patty"></div>
      </div>

      <nav class="menu">
        <div class="menu__brand">
          <a href=""><div class="logo"></div></a>
        </div>
        <ul class="menu__list">
          <li class="menu__item"><a href="" class="menu__link">Work</a></li>
          <li class="menu__item"><a href="" class="menu__link">About</a></li>
          <li class="menu__item">
            <a href="https://twitter.com/ettrics" target="_blank" class="menu__link menu__link--social"><i class="fa fa-twitter"></i></a>
          </li>
          <li class="menu__item">
            <a href="https://dribbble.com/ettrics" target="_blank" class="menu__link menu__link--social">
              <i class="fa fa-dribbble"></i></a>
          </li>
        </ul>
      </nav>
</navbar>
</section>
</template>

<script>
export default {
  data: function () {
    return {
      active: false,
    };
  },
  mounted () {
  },
  methods: {
    activateNav: function() {

      var burger = document.querySelector('.burger');
      var menu = document.querySelector('.menu');
      var menuList = document.querySelector('.menu__list');
      var brand = document.querySelector('.menu__brand');
      var menuItems = document.querySelectorAll('.menu__item');
      var self = this
      if (self.active == false) {
       menu.classList.add('menu--active');
       menuList.classList.add('menu__list--active');
       brand.classList.add('menu__brand--active');
       burger.classList.add('burger--close');
       for (var i = 0, ii = menuItems.length; i < ii; i++) {
         menuItems[i].classList.add('menu__item--active');
       }
       self.active = true
        } else {
         menu.classList.remove('menu--active');
         menuList.classList.remove('menu__list--active');
         brand.classList.remove('menu__brand--active');
         burger.classList.remove('burger--close');
         for (var i = 0, ii = menuItems.length; i < ii; i++) {
          menuItems[i].classList.remove('menu__item--active');
         }
        self.active = false
      }
    }
  },
  computed: {

  }
}
</script>

<style lang="scss" scoped>

@mixin easeOut {
  transition: all .4s cubic-bezier(0.23, 1, 0.32, 1)
}

$yellow: #fc3;

@mixin tablet {
  @media screen and (max-width: 768px) {
    @content;
  }
}

* {
  box-sizing: border-box;
}

.navbar {
 color: white;
}

.header {
  position: fixed;
  z-index: 50;
  width: 100%;
}

.burger {
  position: absolute;
  z-index: 100;
  right: 25px;
  top: 25px;
  cursor: pointer;
  transform: rotateY(0);
  @include easeOut;

  &__patty {
    width: 28px;
    height: 2px;
    margin: 0 0 4px 0;
    background: white;
    @include easeOut;

    &:last-child {
      margin-bottom: 0;
    }
  }

  // transform burger into 'x'
  &--close {
    transform: rotate(180deg);

    .burger__patty {
      &:nth-child(1) {
        transform: rotate(45deg) translate(4px, 4px);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        transform: rotate(-45deg) translate(5px, -4px);
      }
    }
  }
}

.menu {
  position: fixed;
  top: 0;
  width: 100%;
  visibility: hidden;
  z-index: 12;

  &--active {
    visibility: visible;
  }

  &__brand,
  &__list {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    float: left;
    width: 50%;
    height: 100vh;
    overflow: hidden;
  }

  &__list {
    margin: 0;
    padding: 0;
    // background: mix(black, $yellow, 20);
    background: black;
    list-style-type: none;
    transform: translate3d(0, -100%, 0);
    @include easeOut;

    &--active {
      transform: translate3d(0, 0, 0);
    }
  }

  &__brand {
    background: $yellow;
    @include easeOut;
    transform: translate3d(0, 100%, 0);

    &--active {
      transform: translate3d(0, 0, 0);
    }
  }

  &__item {
    transform: translate3d(500px, 0, 0);
    @include easeOut;

    &--active {
      transform: translate3d(0, 0, 0);
    }
  }

  &__link {
    display: inline-block;
    position: relative;
    font-size: 30px;
    padding: 15px 0;
    font-weight: 300;
    color: white;
    text-decoration: none;
    color: white;
    @include easeOut;

    &:before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 10px;
      height: 2px;
      background: white;
      transform: translateX(-50%);
      @include easeOut;
    }

    &:hover {
      &:before {
        width: 100%;
      }
    }
  }

  // add delay to each menu item
  @for $x from 1 through 6 {
    .menu__item:nth-child(#{$x}) {
      transition-delay: $x * .1s;
    }
  }
}

// responsive tablet view
@include tablet {
 ul.menu__list,
 div.menu__brand {
  float: none;
  width: 100%;
  min-height: 0;

   &--active {
     transform: translate3d(0, 0, 0);
   }
 }

 .menu__list {
   height: 75vh;
   transform: translate3d(-100%, 0, 0);
 }

 .menu__link {
   font-size: 24px;
 }

 .menu__brand {
   height: 25vh;
   transform: translate3d(100%, 0, 0);

   .logo {
     width: 90px;
     height: 90px;
   }
 }
}

// make the demo look nice, not required for your own use.
.logo {
  width: 200px;
  height: 200px;
  background: lighten(black, 10);
  border-radius: 50%;
}

h1, h2, h3, p {
  margin: 0;
  font-weight: 400;
}

main {
  height: 100vh;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  padding: 8vw;

  h1 > a {
    color: white;
    text-decoration: none;
    font-size: 48px;
    font-weight: 300;
  }
}

.support {
  position: fixed;
  bottom: 24px;
  color: rgba(black, 0.6);
}
</style>

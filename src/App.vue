<template>
  <div id="app">
    <!--preloader-->
    <div class="preloader" :class="loaded == true ? 'loaded' : ''">
      <div class="loader" :class="loaded == true ? 'loaded' : ''"></div>
      <div
        class="loader-section section-left"
        :class="loaded == true ? 'loaded' : ''"
      ></div>
      <div
        class="loader-section section-right"
        :class="loaded == true ? 'loaded' : ''"
      ></div>
    </div>

    <AppNavbar></AppNavbar>
    <div class="view">
      <router-view />
    </div>
    <!--goUp button-->
    <a id="goDown" class="goDown">
      <p>Scroll Down</p>

      <font-awesome-icon icon="fa-solid fa-angles-down" />
    </a>
  </div>
</template>

<script>
import AppNavbar from "./components/AppNavbar.vue";
export default {
  name: "App",
  data: function () {
    return {
      loaded: false,
    };
  },
  components: {
    AppNavbar,
  },
  mounted() {
    //preloader
    window.addEventListener("load", () => {
      this.loaded = true;
    });
    /* //go up button
    let goUp = document.getElementById("goDown");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        goUp.innerHTML = "<font-awesome-icon icon='fa-solid fa-angles-up' />";
      } else {
        goUp.style.opacity = "0";
      }
    }); */
  },
};
</script>
<style lang="scss" scoped>
@import "./style/reset.scss";

#app {
  /*preloder start*/
  .preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    &.loaded {
      visibility: hidden;
      transition: all 0.3s 2s ease-in-out;
    }
    .loader {
      display: block;
      position: relative;
      left: 50%;
      top: 50%;
      width: 150px;
      height: 150px;
      margin: -75px 0 0 -75px;
      border-radius: 50%;
      border: 3px solid transparent;
      border-top-color: #fff;
      z-index: 101;
      -webkit-animation: spin 2s ease-in-out infinite;
      animation: spin 2s ease-in-out infinite;
      &.loaded {
        opacity: 0;
        transition: all 0.3s 2s ease-in-out;
      }
      &:before {
        content: "";
        position: absolute;
        top: 5px;
        left: 5px;
        right: 5px;
        bottom: 5px;
        border-radius: 50%;
        border: 3px solid transparent;
        border-top-color: #fff;
        -webkit-animation: spin 3s ease-in infinite;
        animation: spin 3s ease-in infinite;
      }
      &:after {
        content: "";
        position: absolute;
        top: 1px;
        left: 1px;
        right: 1px;
        bottom: 1px;
        border-radius: 50%;
        border: 3px solid transparent;
        border-top-color: #fff;
        -webkit-animation: spin 1.5s ease-in-out infinite;
        animation: spin 1.5s ease-in-out infinite;
      }
    }
    .loader-section {
      position: fixed;
      top: 0;
      width: 51%;
      height: 100%;
      background-color: #222;
      z-index: 100;
      &.section-left {
        left: 0;
        &.loaded {
          transform: translateX(-100%);
          transition: all 0.7s 2.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        }
      }
      &.section-right {
        right: 0;

        &.loaded {
          transform: translateX(100%);
          transition: all 0.7s 2.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        }
      }
    }
  }
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  .view {
    margin-left: 9rem;
    @media (max-width: 768px) {
      margin-left: 0;
    }
  }
  .goDown {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    right: 5px;
    bottom: 15px;
    color: #fff;
    padding: 10px 5px;
    animation: go-up 1s infinite alternate;
    transition: all 0.2s ease-in-out;
    opacity: 1;
    animation: goUpDownAnim 2s ease-in-out infinite;
    text-decoration: none;
    z-index: 100;
    &:hover {
      color: #fff;
    }
    p {
      font-size: 16px;
      writing-mode: vertical-rl;
      text-orientation: mixed;
      margin: 0;
      @media (max-width: 768px) {
        font-size: 13px;
      }
    }
    @keyframes goUpDownAnim {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(15px);
      }
      100% {
        transform: translateY(0);
      }
    }
    svg {
      font-size: 20px;
      margin: 5px 5px 0px 5px;
      transition: all 0.2s ease-in-out;
      color: #fff;
      @media (max-width: 768px) {
        font-size: 15px;
      }
    }
  }
}
</style>

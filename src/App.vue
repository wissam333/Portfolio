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
    <router-view />
    <div id="cursor" class="cursor"></div>
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
    window.addEventListener(
      "load",
      () => {
        this.loaded = true;
      },
      "1000ms"
    );
    const cursor = document.getElementById("cursor");
    document.addEventListener("mousemove", (e) => {
      let X = e.pageX;
      let Y = e.pageY;

      cursor.style.top = Y + "px";
      cursor.style.left = X + "px";
      cursor.style.display = "block";
    });
    document.addEventListener("mouseout", () => {
      cursor.style.display = "none";
    });
  },
};
</script>
<style lang="scss" scoped>
@import "./style/reset.scss";

#app {
  cursor: none;
  /*preloder start*/
  .preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
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
  .cursor {
    position: fixed;
    width: 7px;
    height: 7px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 0 0 6px rgb(255 255 255 / 10%),
      0 0 0 10px rgb(255 255 255 / 10%), 0 0 20px 2px rgb(255 255 255);
    pointer-events: none;
    z-index: 999;
  }
}
</style>

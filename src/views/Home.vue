<template>
  <div class="home">
    <div class="overlay"></div>
    <img class="sky" src="../assets/sasa.png" alt="" />
    <img class="mountains" src="../assets/sasa2.png" alt="" />
    <div class="stars">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="type_effect">
      <div class="container">
        <!--left-->
        <p>Hi, I'm</p>
        <p>Wissam Najjom,</p>
        <p>Front End Developer</p>
        <button class="btn btn-md">Contact Me</button>
      </div>
    </div>
    <div class="cv">
      <a
        href="https://github.com/wissam333/Portfolio/raw/gh-pages/CV.pdf"
        download="Wissam CV"
      >
        <button class="btn btn-md">Download CV</button>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data: function () {
    return {
      loaded: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../style/stars.scss";
@import url("https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap");
.home {
  position: relative;
  overflow: hidden;
  display: flex;
  height: 100vh;
  justify-content: space-between;
  .mountains {
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    z-index: 2;
  }

  .sky {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    z-index: 1;
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(6deg, rgb(0 0 0 / 20%), rgb(0 0 0 / 46%));
    z-index: 3;
    @media (max-width: 768px) {
      background: linear-gradient(6deg, rgb(0 0 0 / 45%), rgb(0 0 0 / 75%));
    }
  }

  .stars {
    z-index: 1;
  }

  .type_effect {
    @keyframes scale {
      100% {
        transform: scale(1);
      }
    }
    color: #fff;
    font-weight: bolder;
    font-family: "Kdam Thmor Pro", sans-serif;
    font-size: 4rem;
    display: flex;
    align-items: center;
    padding: 5vw;
    z-index: 3;
    @media (max-width: 768px) {
      font-size: 8.9vw;
    }
    button {
      font-size: 1.2rem;
      color: #fff;
      border: 2px solid #fff;
      letter-spacing: 1px;
      margin-top: 2rem;
      @media (max-width: 768px) {
        font-size: 4vw;
      }
      &:hover {
        color: #fff;
        background-color: #69649c;
      }
    }
  }
  .cv {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 9;
    button {
      font-size: 20px;
      color: #fff;
      border: 2px solid #fff;
      letter-spacing: 1px;
      @media (max-width: 768px) {
        font-size: 16px;
      }
      &:hover {
        color: #fff;
        background-color: #69649c;
      }
    }
  }
}
</style>

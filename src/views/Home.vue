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
        <span>Hi, </span>
        <span>I'm</span>
        <br />
        <span>Wissam </span>
        <span>Najjom,</span>
        <br />
        <span>Front </span>
        <span>End </span>
        <span>Developer</span>
        <br />
        <button class="btn btn-md">Contact Me</button>
      </div>
    </div>

    <div class="cv">
      <a href="../../public/CV.pdf" download="download">
        <button class="btn btn-md">Download CV</button>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
};
</script>

<style lang="scss" scoped>
@import "../style/stars.scss";
@import url("https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap");
.home {
  position: relative;
  display: flex;
  height: 100vh;
  justify-content: space-between;
  margin-left: 9rem;
  @media (max-width: 768px) {
    margin-left: 0;
  }

  .moon {
    width: 10em;
    margin: 30px;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
  }

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
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(6deg, rgb(0 0 0 / 20%), rgb(0 0 0 / 46%));
    z-index: 3;
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
    font-weight: 400;
    font-family: "Kdam Thmor Pro", sans-serif;
    font-size: 4rem;
    display: flex;
    align-items: center;
    padding: 5vw;
    transform: scale(0.94);
    animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);
    z-index: 3;
    @media (max-width: 768px) {
      font-size: 7vw;
    }
    @keyframes fade-in {
      100% {
        opacity: 1;
        filter: blur(0);
      }
    }
    span {
      opacity: 0;
      filter: blur(4px);
      transition: color 0.3s ease-in-out;
    }
    span:nth-child(1) {
      animation: fade-in 0.8s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
      &:hover {
        color: #8881d9;
      }
    }

    span:nth-child(2) {
      animation: fade-in 0.8s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
      &:hover {
        color: #8881d9;
      }
    }

    span:nth-child(3) {
      animation: fade-in 0.8s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
      &:hover {
        color: #8881d9;
      }
    }

    span:nth-child(4) {
      animation: fade-in 0.8s 0.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
      &:hover {
        color: #8881d9;
      }
    }

    span:nth-child(5) {
      animation: fade-in 0.8s 0.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
      &:hover {
        color: #8881d9;
      }
    }

    span:nth-child(6) {
      animation: fade-in 0.8s 0.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
      &:hover {
        color: #8881d9;
      }
    }

    span:nth-child(7) {
      animation: fade-in 0.8s 0.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
      &:hover {
        color: #8881d9;
      }
    }
    span:nth-child(8) {
      animation: fade-in 0.8s 0.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
      &:hover {
        color: #8881d9;
      }
    }

    span:nth-child(9) {
      animation: fade-in 0.8s 0.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
      &:hover {
        color: #8881d9;
      }
    }
    button {
      animation: fade-in 0.8s 1s forwards cubic-bezier(0.11, 0, 0.5, 0);
    }

    button {
      opacity: 0;
      filter: blur(4px);
      font-size: 1.2rem;
      color: #fff;
      border: 1px solid #fff;
      letter-spacing: 1px;
      margin-top: 2rem;
      @media (max-width: 768px) {
        font-size: 4vw;
      }
      &:hover {
        color: #fff;
        background-color: #69649c;
        border-color: #8881d9;
      }
    }
  }
  .cv {
    position: absolute;
    top: 1vw;
    right: 1vw;
    z-index: 9;
    button {
      font-size: 20px;
      color: #fff;
      border: 1px solid #fff;
      letter-spacing: 1px;
      @media (max-width: 768px) {
        font-size: 16px;
      }
      &:hover {
        color: #fff;
        background-color: #69649c;
        border-color: #8881d9;
      }
    }
  }
}
</style>

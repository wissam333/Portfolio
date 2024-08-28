<template>
  <!--toggle button-->
  <div
    class="toggle"
    @click="active == true ? (active = false) : (active = true)"
  >
    <span id="toggle1" :class="active == true ? 'active' : ''"></span>
    <span id="toggle2" :class="active == true ? 'active' : ''"></span>
    <span id="toggle3" :class="active == true ? 'active' : ''"></span>
  </div>

  <nav :class="active == true ? 'active' : ''">
    <!---logo-->
    <div class="logo">
      <img src="../assets/1.webp" alt="" />
      <p>Front End Developer</p>
    </div>
    <!---links-->
    <ul class="links">
      <router-link @click="active = 'false'" to="/"><li>Home</li></router-link>

      <!-- <router-link @click="active = 'false'" to="/about">
        <li>About</li></router-link
      > -->

      <router-link @click="active = 'false'" to="/skills">
        <li>My Skills</li></router-link
      >

      <router-link @click="active = 'false'" to="/contact">
        <li>Contact</li></router-link
      >

      <router-link @click="active = 'false'" to="/work">
        <li>Work</li></router-link
      >
    </ul>
    <!---social-->
    <ul class="social">
      <li>
        <a href="https://www.facebook.com/wissam.najjom" target="_blank">
          <font-awesome-icon icon="fa-brands fa-facebook" size="lg"
        /></a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/wissam-najjom-09ba06171"
          target="_blank"
        >
          <font-awesome-icon icon="fa-brands fa-linkedin" size="lg"
        /></a>
      </li>
      <li>
        <a href="https://github.com/wissam333" target="_blank">
          <font-awesome-icon icon="fa-brands fa-github" size="lg"
        /></a>
      </li>
    </ul>
    <!--music-->
    <div class="music" @click="play()">
      <font-awesome-icon icon="fa-solid fa-music" />
      <span id="musicText"> Music?</span>
      <audio id="music">
        <source src="../assets/michael-buble.mp3" />
      </audio>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Navbar",
  data: function () {
    return {
      active: false,
      musicOFF: true,
    };
  },
  methods: {
    play: function () {
      let music = document.getElementById("music");
      let musicText = document.getElementById("musicText");
      if (this.musicOFF) {
        music.play();
        musicText.innerText = " Enjoy :>";
        this.musicOFF = false;
      } else {
        music.pause();
        musicText.innerText = " okay :<";
        this.musicOFF = true;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../style/reset.scss";
.toggle {
  width: 45px;
  height: 35px;
  position: fixed;
  left: 10px;
  top: 10px;
  display: none;
  z-index: 11;
  @media (max-width: 768px) {
    display: block;
  }
  span:nth-child(1) {
    position: absolute;
    top: 20%;
    left: 0;
    width: 100%;
    height: 3px;
    border-radius: 10px;
    background-color: #fff;
    transition: all 0.5s ease-in-out;
    &.active {
      transform: rotate(-45deg);
      width: 70%;
      top: 50%;
    }
  }
  span:nth-child(2) {
    position: absolute;
    top: 60%;
    left: 0;
    width: 75%;
    height: 3px;
    border-radius: 10px;
    background-color: #fff;
    transition: all 0.5s ease-in-out;
    &.active {
      opacity: 0;
    }
  }
  span:nth-child(3) {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 3px;
    border-radius: 10px;
    background-color: #fff;
    transition: all 0.5s ease-in-out;
    &.active {
      transform: rotate(45deg);
      width: 70%;
      top: 50%;
    }
  }
}
nav {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 9rem;
  background-color: #181818;
  height: 100vh;
  border-right: 1px solid #282828;
  position: fixed;
  left: 0;
  top: 0;
  right: auto;
  bottom: 0;
  transition: all 0.5s ease-in-out;
  z-index: 10;
  @media (max-width: 768px) {
    width: 0;
    height: 0;
    overflow: hidden;
  }
  &.active {
    display: block;
    width: 100%;
    height: 100vh;
  }
  .logo {
    background-color: #000;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    img {
      width: 4em;
      height: 4em;
      @media (max-width: 768px) {
        width: 3em;
        height: 3em;
      }
    }
    p {
      color: #69649c;
      text-align: center;
      font-weight: 800;
      font-family: "Kdam Thmor Pro", sans-serif;
      letter-spacing: 0.6px;
      width: 100%;
      font-size: 0.8rem;
      margin-top: 1rem;
    }
  }
  .links {
    a {
      width: 100%;
      text-align: center;
      line-height: 3rem;
      text-decoration: none;
      &:nth-child(1) {
        li {
          border-top: 1px solid #282828;
        }
      }
      li {
        color: #909096;
        border-bottom: 1px solid #282828;
        font-size: 1rem;
        transition: color 0.3s;
        cursor: pointer;
        &:hover {
          color: #fff;
        }
      }
    }
  }
  .social {
    height: 4rem;
    display: flex;
    justify-content: space-evenly;
    li {
      a {
        color: #909096;
        font-size: 14px;
        text-decoration: none;
        &:hover {
          color: #fff;
        }
      }
    }
  }
  .music {
    color: #69649c;
    text-align: center;
    font-size: 1.3rem;
    font-family: "Kdam Thmor Pro", sans-serif;
    font-weight: 800;
    padding: 15px;
    margin-bottom: 10px;
    cursor: pointer;
    animation: light 2s infinite;
    @keyframes light {
      0% {
        color: #69649c;
      }
      50% {
        color: #fff;
      }
      100% {
        color: #69649c;
      }
    }
  }
}
</style>

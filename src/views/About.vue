<template>
  <div class="about">
    <div class="me row">
      <div
        data-aos="fade-right"
        data-aos-duration="2000"
        class="paragraph col-sm-6"
      >
        <h2 class="headline">ME, Myself And I</h2>
        <p>
          I’m a student at the University of Informatics Engineering located in
          Syria, I have a serious passion for web and mobile Application, I’m
          self-learner, hard-Worker, organized person.
          <br />
          I’m not a UI/UX Designer (i will learn it soon) but i like to
          design my websites like this Portfolio
        </p>
        <br />
        <br />
        <h2 class="headline">Interests</h2>
        <p class="interst_paragraph">
          At my free time I like to play video games and to draw
          <a
            href="https://wissam333.github.io/Portfolio/assets/art.ed1e5563.webp"
            target="_blank"
            ><span> this is one of my best digital drawings </span></a
          ><font-awesome-icon icon="fa-solid fa-arrow-right" />
        </p>
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="2000"
        class="artGallery col-sm-6"
      >
        <img src="../assets/art.webp" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css";
export default {
  name: "about,",
  mounted() {
    AOS.init();
  },
};
</script>
<style lang="scss" scoped>
@import "../style/reset.scss";
.about {
  overflow: hidden;
  background-image: linear-gradient(#0b0a0c, black);
  display: flow-root;
  @media (min-width: 1400px) {
    height: 100vh;
  }
  @media (max-width: 768px) {
    padding: 30px;
  }
  .me {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0;
    .paragraph {
      color: #fff;
      font-family: "Kdam Thmor Pro", sans-serif;
      padding: 5vw;
      @media (max-width: 768px) {
        padding: 0;
      }
      p {
        font-size: 20px;
        line-height: 30px;
        a {
          text-decoration: none;
          span {
            color: #696497;
          }
        }
        @media (max-width: 768px) {
          font-size: 15px;
          line-height: 25px;
        }
      }
    }
    .artGallery {
      img {
        display: block;
        margin: auto;
        width: 75%;
        height: 75%;
        clip-path: ellipse(51% 35% at 46% 50%);
      }
    }
  }
}
</style>

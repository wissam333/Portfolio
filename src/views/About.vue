<template>
  <div class="about">
    <div class="me row">
      <div class="paragraph col-sm-6">
        <h1>ME, Myself And I</h1>
        <p>
          I’m a student at the University of Informatics Engineering located in
          Syria, I have a serious passion for web and mobile Application, I’m
          self-learner, hard-Worker, organized person.
        </p>
        <br />
        <br />
        <h1>Interest</h1>
        <p>
          At my free time I like to play dota1 and watch anime, somtimes I like
          to listen to Lo-fi music and to draw (<span>
            this is one of my best digital drawings</span
          >)=>
        </p>
      </div>
      <div class="artGallery col-sm-6">
        <img src="../assets/art.jpg" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "about,",
};
</script>
<style lang="scss" scoped>
.about {
  background-image: linear-gradient(#0b0a0c, black);
  display: flow-root;
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
      p {
        font-size: 20px;
        line-height: 30px;
        span{
          color: #696497;
        }
        @media (max-width: 768px) {
          font-size: 15px;
          line-height: 25px;
        }
      }

      h1 {
        color: #696497;
        font-size: 60px;
        margin-bottom: 20px;
        @media (max-width: 768px) {
          font-size: 25px;
        }
      }
    }
    .artGallery {
      img {
        width: 100%;
        height: 100%;
        clip-path: ellipse(51% 35% at 46% 50%);
      }
    }
  }
}
</style>

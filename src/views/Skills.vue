<template>
  <div class="skills_wrap">
    <div class="wrap">
      <div class="divider">
        <div class="ball"></div>
      </div>
    </div>
    <div class="skills">
      <h2 class="headline">My Skills</h2>
      <div class="container">
        <div class="row">
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            class="section section1 col-lg-6"
          >
            <vueper-slides
              :bullets="false"
              :arrows="false"
              :infinite="true"
              :visible-slides="3"
              :slide-ratio="1 / 4"
              :autoplay="true"
              :duration="1500"
            >
              <vueper-slide>
                <template #content>
                  <font-awesome-icon icon="fa-brands fa-html5" />
                </template>
              </vueper-slide>

              <vueper-slide>
                <template #content>
                  <font-awesome-icon icon="fa-brands fa-css3-alt" />
                </template>
              </vueper-slide>

              <vueper-slide>
                <template #content>
                  <font-awesome-icon icon="fa-brands fa-js-square" />
                </template>
              </vueper-slide>

              <vueper-slide>
                <template #content>
                  <font-awesome-icon icon="fa-brands fa-bootstrap" />
                </template>
              </vueper-slide>

              <vueper-slide>
                <template #content>
                  <font-awesome-icon icon="fa-brands  fa-sass" />
                </template>
              </vueper-slide>

              <vueper-slide>
                <template #content>
                  <font-awesome-icon icon="fa-brands fa-vuejs" />
                </template>
              </vueper-slide>

              <vueper-slide>
                <template #content>
                  <font-awesome-icon icon="fa-brands fa-java" />
                </template>
              </vueper-slide>

              <vueper-slide>
                <template #content>
                  <font-awesome-icon icon="fa-brands fa-git-alt" />
                </template>
              </vueper-slide>
            </vueper-slides>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            class="section section2 col-lg-6"
          >
            <div class="exp">
              <h3>My Journuy</h3>
              <div class="exp_years_desc">
                <ul class="exp_years">
                  <li
                    @click="active = '2018'"
                    :class="active == '2018' ? 'active' : ''"
                  >
                    2018
                  </li>
                  <li
                    @click="active = '2019'"
                    :class="active == '2019' ? 'active' : ''"
                  >
                    2019
                  </li>
                  <li
                    @click="active = '2020'"
                    :class="active == '2020' ? 'active' : ''"
                  >
                    2020
                  </li>
                  <li
                    @click="active = '2021'"
                    :class="active == '2021' ? 'active' : ''"
                  >
                    2021
                  </li>
                  <li
                    @click="active = '2022'"
                    :class="active == '2022' ? 'active' : ''"
                  >
                    2022
                  </li>
                  <li
                    @click="active = 'soon'"
                    :class="active == 'soon' ? 'active' : ''"
                  >
                    Soon
                  </li>
                </ul>

                <div class="exp_desc" v-if="active == '2018'">
                  I started my journey At the end of 2018, by chance I
                  participate in "One Million Arab Coders Initiative" but
                  Unfortunately, I did not get a place in the top 100. I learned
                  the basics of the web(html, css), And most importantly, I
                  discovered my new passion in the web world.
                </div>
                <div class="exp_desc" v-if="active == '2019'">
                  I continued my journey studying Front End and learned my first
                  programming language (JavaScript). Also during this year, I
                  learned Pascal and the basics of C++.
                </div>
                <div class="exp_desc" v-if="active == '2020'">
                  Then at university I learned the basics of SQL, And I kept
                  studying c++ and java. As for the front end, I learned sass,
                  bootstrap, and js (dom,bom).
                </div>
                <div class="exp_desc" v-if="active == '2021'">
                  I focused on the frontend and learned vue 2, At the end of
                  2021 I took my first serious step and got my first job
                  opportunity in dr social company. I trained for a month doing
                  my first real project (RTC and RTM).
                </div>
                <div class="exp_desc" v-if="active == '2022'">
                  I learned vue 3 and worked as a front end developer
                  freelancer(simple projects for students). And I have the
                  ambition to become a professional in this field and the web
                  field in general. My plan for the rest of the year is to learn
                  nuxt, webpack, and Vutify, Also learn how to deal with backend
                  professionally.
                </div>
                <div class="exp_desc" v-if="active == 'soon'">
                  I want to master Frontend field, learn WordPress and UI/UX.
                  Then I will enter the backend field to become a full stack
                  developer, And in the meantime, I'm going to study web
                  security because I have a great CTF mentor(my brother). In
                  general, I will do my best to become a superhero in the web
                  field!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "skills",
  data: function () {
    return {
      active: "2018",
    };
  },
  components: { VueperSlides, VueperSlide },
};
</script>
<style lang="scss" scoped>
@import "../style/reset.scss";
.skills_wrap {
  .wrap {
    background-color: #141415;
    position: relative;
    .divider {
      margin: auto;
      width: 160px;
      height: 50px;
      .ball {
        position: absolute;
        width: 0;
        height: 0;
        border-left: 80px solid transparent;
        border-right: 80px solid transparent;
        border-top: 50px solid #000;
      }
    }
  }
  .skills {
    overflow: hidden;
    background-color: #141415;
    @media (min-width: 991px) {
      height: 100vh;
    }
    h2 {
      padding: 5vw;
      @media (max-width: 768px) {
        padding: 30px;
      }
    }
    .container {
      .section {
        margin: auto;
        @media (max-width: 991px) {
          margin-bottom: 100px;
        }
        &.section1 {
          svg {
            width: 100%;
            height: 100%;
            color: #696497;
          }
        }
        &.section2 {
          padding-left: 36px;
        }
      }
      .exp {
        h3 {
          color: #fff;
          text-align: center;
          font-size: 14px;
          font-weight: 900;
        }
        .exp_years_desc {
          display: flex;
          .exp_years {
            li {
              color: #fff;
              font-size: 12px;
              font-weight: 900;
              padding: 17px;
              border-left: 3px solid #5d598940;
              cursor: pointer;
              transition: all 0.2s linear;
              &.active {
                color: #918bcc;
                border-left: 3px solid #918bcc;
              }
              &:hover {
                color: #918bcc;
                background-color: #918bcc26;
              }
            }
          }
          .exp_desc {
            color: #c2c2c2;
            font-size: 20px;
            padding: 20px;
            line-height: 2.5vw;
            @media (max-width: 768px) {
              font-size: 14px;
              line-height: 5.5vw;
            }
          }
        }
      }
    }
  }
}
</style>

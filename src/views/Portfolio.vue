<template>
  <div class="portfolio">
    <home></home>
    <about></about>
    <skills></skills>
    <work></work>
    <contact></contact>
    <app-footer></app-footer>
  </div>
</template>
<script>
import home from "./Home.vue";
import skills from "./Skills.vue";
import about from "./About.vue";
import contact from "./Contact.vue";
import work from "./Work.vue";
import appFooter from "../components/AppFooter.vue";

export default {
  name: "portfolio",
  components: {
    home,
    about,
    skills,
    contact,
    work,
    appFooter,
  },
};
</script>
<style lang="scss" scoped></style>

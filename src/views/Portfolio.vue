<template>
  <div class="portfolio">
    <home></home>
    <about></about>
    <skills></skills>
  </div>
</template>
<script>
import home from "./Home.vue";
import skills from "./Skills.vue";
import about from "./About.vue";

export default {
  name: "portfolio",
  components: {
    home,
    about,
    skills,
  },
};
</script>
<style lang="scss" scoped></style>

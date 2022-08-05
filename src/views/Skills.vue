<template>
  <div class="wrap">
    <div class="divider">
      <div class="ball"></div>
    </div>
  </div>
  <div class="skills">
    <h2 class="headline">My Skills</h2>
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <apex-line-chart></apex-line-chart>
        </div>
        <div class="col-lg-6"></div>
      </div>
    </div>
  </div>
</template>
<script>
import ApexLineChart from "../components/charts/ApexLineChart.vue";
export default {
  name: "skills",
  components: {
    ApexLineChart,
  },
};
</script>
<style lang="scss" scoped>
@import "../style/reset.scss";
.wrap {
  background-color: #1c1c1c;
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
  padding: 5vw;
  background-color: #1c1c1c;
  &::after {
    content: "";
    display: block;
    position: relative;
    top: -5px;
    width: 300px;
    height: 1px;
    margin-left: 20px;
    background-color: var(--lightest-navy);
  }
  h2 {
    margin-bottom: 100px;
  }
}
</style>

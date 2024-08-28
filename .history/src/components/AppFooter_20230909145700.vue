<template>
  <div class="app-footer">
    <div class="footer">
      <div class="part-left">
        <i>Date : 14/8/2022 </i>
        <a class="goup" href="#">
          <font-awesome-icon icon="fa-solid fa-angles-up" />
        </a>
      </div>

      <div class="part-right">
        <span> Made with fkn </span>
        <font-awesome-icon icon="fa-solid fa-heart" />

        <span> By Wissam Najjom </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "appFooter",
};
</script>
<style lang="scss" scoped>
.app-footer {
  position: relative;
  .footer {
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    color: #fff;
    width: 100%;
    font-size: 14px;
    padding: 15px;
    z-index: 2;
    @media (max-width: 768px) {
      font-size: 3.2vw;
      padding: 15px;
    }
    .part-left {
      a {
        color: #7367f0;
        text-decoration: none;
      }
      .goup {
        margin-left: 0.5vw;
        padding: 3px 5px;
      }
    }
    .part-right {
      svg {
        color: #7367f0;
      }
    }
  }
}
</style>

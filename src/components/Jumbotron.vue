<template lang="html">
  <div class="jumbotron part_bor_btm">
    <div class="jum_img">
      <slot name="img"></slot>
    </div>
    <div class="jum_title clear_fix">
      <slot name="titleLeft"></slot>
      <slot name="titleRight"></slot>
    </div>
  </div>
</template>

<style lang="scss">
@import "../styles/index.scss";

.jumbotron {
  background: $baseWhite;

  .jum_img {
    img {
      display: flex;
      width: 100%;
    }
  }

  .jum_title {
    padding: pxToRem(28) pxToRem(30) pxToRem(45);

    &>:first-child {
      float: left;
    }
    &>:last-child {
      float: right;
    }
  }

  .jum_l_title {
    font-size: pxToRem(30);
    h3,p {
      margin: 0 0 0 0;
    }
    h3 {
      margin-bottom: pxToRem(18);
      font-size: pxToRem(32);
    }
    p {
      font-size: pxToRem(25);
      color: $fontGray;
    }
  }

  .jum_r_title {
    color: $deepYellow;
    // word-spacing: 10px;
    letter-spacing: pxToRem(3);
    font-weight: 600;
    font-size: pxToRem(32);
  }
}
</style>

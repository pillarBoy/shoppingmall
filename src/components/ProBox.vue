<template lang="html">
  <div class="pro_box">
    <div class="el_rlt" flex="">
      <slot name="img"></slot>
      <div class="inner_title" v-if="innerTitle">
        {{innerTitle}}
      </div>
      <div class="top_thumb" v-if="tTitle">
        {{tTitle}}
      </div>
    </div>
    <div class="down_title" flex="dir:top" v-if="downTitle || proMoney">
      <div v-if="downTitle">
        {{downTitle}}
      </div>
      <div v-if="proMoney">
        ￥<span>{{proMoney}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    innerTitle: String,
    downTitle: String,
    proMoney: [String, Number],
    tTitle: String,
  },
};
</script>

<style lang="scss">
@import "../styles/index.scss";
.pro_box {
  position: relative;
  & > div {
    display: flex;
  }
  .inner_title {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: pxToRem(54);
    font-size: pxToRem(30);
    text-align: center;
    background: $baseYellow;
  }
  img {
    width: 100%;
    height: 100%;
    max-height: 100%;
  }
  .down_title {
    text-align: center;
    font-size: pxToRem(28);
    line-height: pxToRem(50);
    &>:nth-child(1) {
      color: $fontGray;
    }
  }
  .top_thumb {
    position: absolute;
    top: 0;
    left: 0;
    width: pxToRem(120);
    line-height: pxToRem(42);
    text-align: center;
    font-size: pxToRem(24);
    background: $baseYellow;
  }
}
</style>

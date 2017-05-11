<template lang="html">
  <div class="pro_box">
    <div class="img">
      <slot name="img"></slot>
      <div class="inner_title" v-if="innerTitle">
        {{innerTitle}}
      </div>
    </div>
    <div class="down_title">
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
  },
};
</script>

<style lang="scss">
@import "../styles/index.scss";
.pro_box {
  position: relative;

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
}
</style>

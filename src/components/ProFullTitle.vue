<template lang="html">
  <div class="pro_f_title">
    <span>{{pTitle}}</span><b class="icon to_r_3_icon"></b>
  </div>
</template>

<script>
export default {
  props: {
    pTitle: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss">
@import "../styles/index.scss";
.pro_f_title {
  line-height: pxToRem(100);
  border-top: pxToRem(1) solid $deepGrap;
  font-size: pxToRem(32);
  font-weight: 500;
  text-align: center;
  background: $baseWhite;
  .to_r_3_icon {
    margin-left: pxToRem(18);
    width: pxToRem(41);
    height: pxToRem(22);
    background: url(../assets/to_rt_3.png) no-repeat center center;
    background-size: pxToRem(41) pxToRem(22);
  }
}
</style>

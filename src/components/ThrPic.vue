<template lang="html">
  <div class="thr_pic_part" flex="">
    <div class="thr_big">
      <slot name="big"></slot>
    </div>
    <div class="thr_md" flex="dir:top">
      <div flex-box="5">
        <slot name="mdTop"></slot>
      </div>
      <div flex-box="5">
        <slot name="mdBtm"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss">
@import "../styles/index.scss";

.thr_pic_part {
  padding: 0 pxToRem(30) pxToRem(45);
  background: $baseWhite;
  border-bottom: 1px solid $deepGray;

  .thr_big {
    width: pxToRem(326);
    margin-right: pxToRem(4);
  }

  .thr_md {
    width: pxToRem(360);

    &>:nth-child(1) {
      margin-bottom: pxToRem(3);
    }
  }
}
</style>

<template lang="html">
  <div id="content"
    :style='{ bottom: noFooter ? "0px" : "", top: noHeader ? "0px" : "" }'
    >
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['noHeader', 'noFooter'],
};
</script>

<style lang="scss">
@import "../styles/index.scss";
#content {
  position: absolute;
  left: 0;
  top: pxToRem(90);
  right: 0;
  bottom: pxToRem(97);
  z-index: 1;
  padding-bottom: pxToRem(25);
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
</style>

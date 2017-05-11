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
  bottom: 0;
  z-index: 1;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
</style>

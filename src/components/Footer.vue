<template lang="html">
  <div id="footer">
    <mt-tabbar v-model="tab_test">
      <mt-tab-item id="tab1">
        <img slot="icon" src="../assets/store_icon.png" alt="">
        首页
      </mt-tab-item>
      <mt-tab-item id="tab2">
        <img slot="icon" src="../assets/store_icon.png" alt="">
        tab1
      </mt-tab-item>
      <mt-tab-item id="tab3">
        <img slot="icon" src="../assets/store_icon.png" alt="">
        tab3
      </mt-tab-item>
      <mt-tab-item id="tab4">
        <img slot="icon" src="../assets/store_icon.png" alt="">
        tab4
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab_test: 'tab1',
    };
  },
};
</script>
<style lang="scss">
@import "../styles/index.scss";

#footer {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  height: pxToRem(97);
  border-top: 1px solid $deepGray;
  border-bottom: 1px solid $deepGray;
}
</style>

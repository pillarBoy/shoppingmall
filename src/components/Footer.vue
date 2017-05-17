<template lang="html">
  <div id="footer" @click="test" :value="tab_test">
    <mt-tabbar v-model="tab_test">
      <mt-tab-item id="tab1" >
        <!-- <img slot="icon" src="../assets/store_icon.png" alt=""> -->
        <span class="icon-image2vector min_tab_icon"> </span>
        <br>首页
      </mt-tab-item>
      <mt-tab-item id="tab2">
        <span class="icon-image2vector min_tab_icon"> </span>
        <br>专题
      </mt-tab-item>
      <mt-tab-item id="tab3">
        <span class="icon-image2vector min_tab_icon"> </span>
        <br>分类
      </mt-tab-item>
      <mt-tab-item id="tab4">
        <span class="icon-image2vector min_tab_icon"> </span>
        <br>购物车
      </mt-tab-item>
      <mt-tab-item id="tab5">
        <span class="icon-image2vector min_tab_icon"> </span>
        <br>个人中心
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab_test: 'tab1',
      vll: 'tab1',
    };
  },
  methods: {
    test() {
      console.log(this.$el.getAttribute('value'));
    },
  },
  // watch: {
  //   tab_test(newVal, oldVal) {
  //     console.log(newVal);
  //     console.log(oldVal);
  //     console.log(this.$el);
  //   },
  //   vll(v, o) {
  //     console.log(v, o);
  //   },
  // },
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

  .min_tab_icon {
    font-size: pxToRem(50);
  }
}
</style>

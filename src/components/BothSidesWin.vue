<template lang="html">
  <div class="both_side_win"  flex="">
    <div
      class="pro_item"
      flex-box="5"
      v-for="(item,index) in products"
      :class="index%2===0 ? 'left_item' : 'right_item'"
      >
      <v-pro-box
        :innerTitle="'活动促销·返现5元'"
        :downTitle="'家用空气净化器'"
        :proMoney="255">
        <img slot="img" src="../assets/down_pro_test.png" alt="">
      </v-pro-box>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "../styles/index.scss";

.both_side_win {
  margin: 0 pxToRem(30);
  flex-wrap: wrap;

  .pro_item {
    box-sizing: border-box;
    max-width: 50%;
  }
  .left_item {
    padding-right: pxToRem(15);
  }
  .right_item {
    padding-left: pxToRem(15);
  }
}
</style>

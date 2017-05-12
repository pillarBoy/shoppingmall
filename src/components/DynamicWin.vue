<template lang="html">
  <div class="dynamic_win">
    <div class="dy_title" flex="main:center">
      <div flex-box="1"
        v-for="cate in categories"
        @click="active = cate.id">
        <span :class="{'at_bt_line': cate.id === active }">{{cate.name}}</span>
      </div>
    </div>
    <mt-tab-container class="dy_pic_part" v-model="active">
      <mt-tab-container-item class="more_auto" id="tab-container1">
        <div class="dy_item" v-for="n in 10" :key="n">
          <v-pro-box :down-title="'智能手表'" :pro-money="199">
            <img slot="img" src="../assets/er_ji1.png" alt="">
          </v-pro-box>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item class="more_auto" id="tab-container2">
        <div v-for="n in 5" :key="n">{{n}}</div>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          name: '人民币专区',
          id: 'tab-container1',
        },
        {
          name: '行云币专区',
          id: 'tab-container2',
        },
      ],
      test: 'dynamic_win',
      active: 'tab-container1',
    };
  },
  methods: {

  },
};
</script>

<style lang="scss">
@import "../styles/index.scss";
.dynamic_win {
  background: $baseWhite;
  margin-top: pxToRem(30);

  .dy_title {
    margin-bottom: pxToRem(30);
    color: $lightGray;
    font-size: pxToRem(32);
    font-weight: 500;
    text-align: center;
    line-height: pxToRem(100);
    border-top: 1px solid $deepGray;
    border-bottom: 1px solid $deepGray;
  }

  .dy_item {
    margin-right: pxToRem(30);

    &:first-child {
      padding-left: pxToRem(30);
    }
    &:last-child {
      padding-right: pxToRem(30);
    }
   }

  .more_auto {
    display: flex;
    flex-wrap: nowrap;
    overflow: auto;

    &>div {
      text-align: center;
    }
    img {
      width: pxToRem(270);
      height: pxToRem(270);
    }
  }

  .at_bt_line {
    // padding: 0 pxToRem(3);
    display: inline-block;
    line-height: pxToRem(98);
    color: $deepBlack20;
    border-bottom: 4px solid $deepBlack20;
  }
}
</style>

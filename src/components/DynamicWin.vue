<template lang="html">
  <div class="dynamic_win">
    <div class="dy_title" flex="main:center">
      <div flex-box="1"
        v-for="cate in categories"
        @click="active = cate.id">
        <span :class="{'at_bt_line': cate.id === active }">{{cate.name}}</span>
      </div>
    </div>
    <mt-tab-container v-model="active">
      <mt-tab-container-item class="more_auto" id="tab-container1">
        <div v-for="n in 20" :key="n">{{n}}</div>
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
  .dy_title {
    background: $baseWhite;
    color: $lightGray;
    font-size: pxToRem(32);
    font-weight: 500;
    text-align: center;
    line-height: pxToRem(100);
    border-top: 1px solid $lightGray;
    border-bottom: 1px solid $lightGray;
  }
  .more_auto {
    display: flex;
    flex-wrap: nowrap;
    overflow: auto;

    &>div {
      min-width: pxToRem(90);
      text-align: center;
    }
  }

  .at_bt_line {
    display: inline-block;
    line-height: pxToRem(98);
    color: $deepBlack20;
    border-bottom: 4px solid $deepBlack20;
  }
}
</style>

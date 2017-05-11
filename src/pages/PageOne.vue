<template lang="html">
  <div id="pageOne">
    <mt-header :title="'商场'">
      <div class="icon close_b_icon" slot="left"></div>
      <div class="icon sch_b_icon" slot="right"></div>
    </mt-header>
    <v-content>
      <!-- <v-load-more></v-load-more> -->
      <v-pro-full-title :p-title="'test'"></v-pro-full-title>
      <!-- <v-carousel :auto="5000" :data="arr" :speed="500"></v-carousel> -->
      <v-dynamic-win></v-dynamic-win>
    </v-content>
  </div>
</template>

<script>
export default {
  data() {
    return {
      t_title: 'page one',
      arr: [1, 2, 3],
      active: 'tab-container1',
    };
  },
};
</script>
<style lang="scss">
@import "../styles/index.scss";
.close_b_icon,
.sch_b_icon {
    width: pxToRem(44);
    height: pxToRem(44);
    background: url("../assets/sch_b_icon.png") no-repeat center center;
    background-size: pxToRem(44) pxToRem(44);
}
.close_b_icon {
    background-image: url("../assets/close_b_icon.png");
    background-size: pxToRem(34) pxToRem(34);
}

#pageOne {
  #content {
    background: $baseGray;
  }
}
</style>

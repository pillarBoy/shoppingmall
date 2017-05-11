<template lang="html">
  <div id="storePage">
    <mt-header :title="'商场'">
      <div class="icon close_b_icon" slot="left"></div>
      <div class="icon sch_b_icon" slot="right"></div>
    </mt-header>
    <v-content>
      <!-- <v-load-more></v-load-more> -->
      <v-pro-full-title :p-title="'test'"></v-pro-full-title>
      <v-thr-pic>
        <div slot="big">
          <v-pro-box :innerTitle="'test'">
            <img slot="img" src="../assets/thr_b.png" alt="">
          </v-pro-box>
        </div>
        <div slot="mdTop">
          <v-pro-box :innerTitle="'test'">
            <img slot="img" src="../assets/thr_md.png" alt="">
          </v-pro-box>
        </div>
        <div slot="mdBtm">
          <v-pro-box :innerTitle="'test'">
            <img slot="img" src="../assets/thr_md.png" alt="">
          </v-pro-box>
        </div>
      </v-thr-pic>
      <!-- <v-carousel :auto="5000" :data="arr" :speed="500"></v-carousel> -->
    </v-content>
    <!-- <v-carousel :auto="5000" :data="arr" :speed="500"></v-carousel> -->
  </div>
</template>

<script>
export default {
};

</script>
<style lang="scss">
@import "../styles/index.scss";

#storePage {
  #content {
    background: $baseGray;
  }

  .close_b_icon, .sch_b_icon {
    width: pxToRem(44);
    height: pxToRem(44);
    background: url(../assets/sch_b_icon.png) no-repeat center center;
    background-size: pxToRem(44) pxToRem(44);
  }

  .close_b_icon {
    background-image: url(../assets/close_b_icon.png);
    background-size: pxToRem(34) pxToRem(34);
  }
}
</style>

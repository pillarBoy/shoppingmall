<template lang="html">
  <div id="storePage">
    <mt-header :title="'商场'">
      <div class="icon close_b_icon" slot="left"></div>
      <div class="icon sch_b_icon" slot="right"></div>
    </mt-header>
    <v-content>
      <div class="parting_ling_t">
        <v-carousel :auto="2000" :speed="500" :data="banners"></v-carousel>
      </div>
      <!-- <v-load-more></v-load-more> -->
      <div class="parting_ling_t">
        <v-pro-full-title :p-title="'圣诞狂欢'"></v-pro-full-title>
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
      </div>
      <!-- 圣诞狂欢 -->
      <v-dynamic-win></v-dynamic-win>
      <!-- 专题精选 -->
      <div class="parting_ling_t">
        <v-pro-full-title :p-title="'专题精选'"></v-pro-full-title>
        <v-jumbotron>
          <div slot="img">
            <img src="../assets/jing_xuan.png" alt="">
          </div>
          <div class="jum_l_title" slot="titleLeft">
            <h3>以表真心，唯爱永恒</h3>
            <p>你们的爱，我们来表达</p>
          </div>
          <div class="jum_r_title" slot="titleRight">￥699起</div>
        </v-jumbotron>
      </div>

      <!-- 人气商品 -->
      <div class="parting_ling_t white_bg">
        <v-pro-full-title :p-title="'人气商品'"></v-pro-full-title>
        <v-both-sides-win :products="banners"></v-both-sides-win>
      </div>
    </v-content>
    <v-footer></v-footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banners: [1, 2, 3, 4, 5, 6],
    };
  },
};

</script>
<style lang="scss">
@import "../styles/index.scss";

.icon-image2vector:before {
  content: "\e900";
}

$col: #f00 #0f0 !default;
.chg_color {
  color:nth($col, 1);
  &:hover {
    color:nth($col, 2);
  }
}

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
  .parting_ling_t {
    margin-top: pxToRem(25);
  }

  .pro_down_win {
    margin: 0 pxToRem(30);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .pro_item {
      box-sizing: border-box;
      width: 50%;
    }
    .left_item {
      padding-right: pxToRem(15);
    }
    .right_item {
      padding-left: pxToRem(15);
    }
    .down_title {
      font-size: pxToRem(30);
      line-height: pxToRem(50) ;
      margin-top: pxToRem(8);
      margin-bottom: pxToRem(27);
    }
  }
  .pro_down_win_test {
    margin: 0 pxToRem(30);
    flex-wrap: wrap;

    .pro_item {
      box-sizing: border-box;
      width: 50%;
    }
    .left_item {
      padding-right: pxToRem(15);
    }
    .right_item {
      padding-left: pxToRem(15);
    }
  }
}
</style>

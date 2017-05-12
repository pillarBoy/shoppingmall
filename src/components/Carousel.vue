<template lang="html">
  <div id="Carousel" @touchstart="tchStart" @touchend="changeImg">
    <mt-swipe
      ref="swipe_test"
      :auto="auto"
      :defaultIndex="3"
      :speed="speed"
      :showIndicators="false">
      <mt-swipe-item v-for="item in data" :key="item">{{item}}</mt-swipe-item>
    </mt-swipe>
    <span class="swipe_corner">{{activeNo}}/{{this.data.length}}</span>
  </div>
</template>

<script>
export default {
  props: ['auto', 'defaultIndex', 'speed', 'data'],
  data() {
    return {
      activeNo: 1,
      picNO: null,
      autoKey: null,
    };
  },
  mounted() {
    if (this.auto) {
      this.autoPlay();
    }
  },
  methods: {
    tchStart() {
      // 清除自动播放
      clearTimeout(this.autoKey);
    },
    changeImg() {
      // 清除 touch time
      clearTimeout(this.picNO);
      if (this.auto) {
        this.updateAtNo();
        this.autoPlay('touch');
      } else {
        this.updateAtNo();
      }
    },
    updateAtNo() {
      this.picNO = setTimeout(() => {
        const { animating, index, isDone } = this.$refs.swipe_test.$data;
        if (!animating && isDone) {
          this.activeNo = index + 1;
          clearTimeout(this.picNO);
        } else {
          this.updateAtNo();
        }
      }, 100);
    },
    autoPlay(touch) {
      // touch 事件不 清除
      if (!touch) {
        clearTimeout(this.picNO);
      }
      this.autoKey = setInterval(() => {
        this.updateAtNo();
      }, this.auto);
    },
  },
};
</script>

<style lang="scss">
@import "../styles/index.scss";
#Carousel {
  position: relative;
  height: pxToRem(460);
  background: $baseWhite;

  .swipe_corner {
    position: absolute;
    right: pxToRem(30);
    bottom: pxToRem(20);
    font-size: pxToRem(25);
  }
}
</style>

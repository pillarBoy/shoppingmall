<template lang="html">
  <mt-loadmore :top-method="loadTop" @top-status-change="handleTopChange" ref="TopLoad">
    <ul v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="20">
      <li v-for="item in list">{{ item }}</li>
    </ul>
    <div slot="top" class="mint-loadmore-top">
      <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
      <span v-show="topStatus === 'loading'">Loading...</span>
    </div>
  </mt-loadmore>
</template>

<script>
import { MessageBox } from 'mint-ui';

export default {
  data() {
    return {
      topStatus: '',
      loading: false,
      list: [1, 2, 4, 5, 6, 7, 5, 0, 3, 2, 2, 2, 4, 5, 6, 7, 5, 0, 3, 2, 2],
    };
  },
  methods: {
    loadTop() {
      this.$refs.TopLoad.onTopLoaded();
      this.list = [];
      for (let counts = 0; counts < 13; counts += 1) {
        this.list.push(counts);
      }
    },
    handleTopChange(status) {
      this.topStatus = status;
    },
    loadMore() {
      this.loading = true;
      if (this.list.length < 100) {
        setTimeout(() => {
          const last = this.list[this.list.length - 1];
          for (let i = 1; i <= 10; i += 1) {
            this.list.push(last + i);
          }
          this.loading = false;
        }, 100);
      } else {
        if (this.loading) {
          MessageBox({
            title: '不能超过100条消息哦',
            message: '确定执行此操作?',
            showCancelButton: true,
          });
        }
        setTimeout(() => {
          this.loading = false;
        }, 5000);
      }
    },
  },
};
</script>

<style lang="scss">
@import "../styles/index.scss";
  li {
    line-height: pxToRem(80);
    text-align: center;
    border-bottom: 1px solid #ccc;
  }
</style>

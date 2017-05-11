<template lang="html">
  <div id="header_part">
    <div class="left-icon">
      <slot name='left'></slot>
    </div>
    <p class="title" v-if='title'>{{title}}</p>
    <p class='title' v-else>
      1
      <slot name='middle'></slot>
    </p>
    <div class="right-icon">
      <slot name='right'></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
};
</script>
<style media="screen" lang='scss'>
@import "../styles/headerCommen.scss";
</style>

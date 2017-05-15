<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>
<!-- sass 用法 style 标签 lang="scss" 自动使用sass语法编译，默认css -->
<style lang="css">
/* 初始化 以下标签样式 */
/*body,ul,li,dl,dd,dt,p,a,h1,h2,h3,h4,h5,h6{}
body {
  height: 100%;
}*/

#app {
  letter-spacing: 2px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.icon {
  display: inline-block;
}
.btn {
  background: #aec0e1;
  border: 1px solid #ccc;
  border-radius: 10px;
}
.clear_fix:after {
  content: '';
  display: table;
  height: 0;
  width: 0;
  font-size: 0;
  clear: both;
}
.part_bor_btm {
  border-bottom: 1px solid $deepGray;
}
.el_rlt {
  position: relative;
}
.lf {
  float: left;
}
.rt {
  float: right;
}
.white_bg {
  background: #fff;
}
</style>

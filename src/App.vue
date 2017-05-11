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
body,ul,li,dl,dd,dt,p,a{}
body {
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.icon {
  display: inline-block;
}
</style>

<template lang="html">
  <div class="test">
    {{test}}
    <a href="#" :data-tt="test">test</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: 'test string',
    };
  },
};
</script>

<style lang="css">
.test {
  color: green;
}
</style>

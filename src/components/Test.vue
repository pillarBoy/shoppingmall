<template lang="html">
  <div class="test">
    <p>{{test}}</p>
    <p><a href="#" :data-tt="test">test</a></p>
    <br>
    <span @click="indicator">Indicator</span>
    <span @click="toast">Toast</span>
  </div>
</template>

<script>
import { Toast, Indicator } from 'mint-ui';

export default {
  data() {
    return {
      test: 'test string',
    };
  },
  methods: {
    indicator() {
      Indicator.open({
        text: 'loading...',
        spinnerType: 'fading-circle',
      });
      setTimeout(() => {
        Indicator.close();
      }, 30000);
    },
    toast() {
      const instance = Toast({
        message: '提示',
        position: 'bottom',
        duration: 50000,
      });
      setTimeout(() => {
        instance.close();
      }, 20000);
    },
  },
};
</script>

<style lang="css">
.test {
  color: #333;
  padding: .3rem;
}
.test span {
  border: 1px solid #aaa;
  border-radius: 6px;
  padding: 5px 10px;
  background: #11FFaa;
}
</style>

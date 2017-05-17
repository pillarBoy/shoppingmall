/*
 * 用于重置html fontsize 计算rem基数
 * 项目开始调用即可
 */
const config = () => {
  const docEl = document.documentElement;
  const fontEl = document.createElement('style');
  const metaEl = document.querySelector('meta[name="viewport"]');
  const isAndroid = window.navigator.appVersion.match(/android/gi);
  const isIPhone = window.navigator.appVersion.match(/(iphone|ipad)/gi);
  let dpr = null;
  if (isAndroid || isIPhone) {
    dpr = window.devicePixelRatio;
  } else {
    dpr = 1;
  }
  const scale = 1 / dpr;
  const rem = docEl.clientWidth * (dpr / 10);
  // 设置viewport，进行缩放，达到高清效果
  metaEl.setAttribute('content', `initial-scale=${scale}, maximum-scale=${scale}, minimum-scale=${scale}, user-scalable=no`);

  docEl.setAttribute('data-dpr', dpr);
  docEl.setAttribute('data-rem', rem);
  // 动态写入样式
  docEl.firstElementChild.appendChild(fontEl);
  fontEl.innerHTML = `html{font-size: ${rem}px!important}`;
  // 给js调用的，某一dpr下rem和px之间的转换函数
  window.rem2px = v => (parseFloat(v) * rem);
  window.px2rem = v => (parseFloat(v) / rem);

  window.dpr = dpr;
  window.rem = rem;
};

export default config;

<template>
  <div class="fix-loading">
    <div class="loading">
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.fix-loading {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 103;
  left: 0;
  top: 0;
  background: rgba($color: #000000, $alpha: 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
}
/*loading*/
@keyframes load {
  0%,
  100% {
    height: 40px;
    background: #3cafd6;
  }
  50% {
    height: 70px;
    margin: -15px 0;
    background: lightblue;
  }
}
.loading {
  width: 80px;
  height: 40px;
  margin: 0 auto;
  margin-top: 100px;
}
.loading span {
  display: inline-block;
  width: 8px;
  height: 100%;
  border-radius: 4px;
  background: #3cafd6;
  animation: load 1s ease infinite;
}
.loading span:nth-child(2) {
  animation-delay: 0.2s;
}
.loading span:nth-child(3) {
  animation-delay: 0.4s;
}
.loading span:nth-child(4) {
  animation-delay: 0.6s;
}
.loading span:nth-child(5) {
  animation-delay: 0.8s;
}
</style>


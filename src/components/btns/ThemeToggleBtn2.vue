<template>
  <div class="circle">
    <div class="inner-circle"></div>
  </div>
</template>
<style lang="scss" scoped>
$circleSize: 25px;

.circle {
  height: $circleSize;
  width: $circleSize;
  background-color: rgb(var(--v-theme-color-2));
  border-radius: 50%;
  display: inline-block;
  //   margin-left: -10px;
  position: relative;
  animation: move 8s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;

  .inner-circle {
    height: calc($circleSize / 4);
    width: calc($circleSize / 4);
    background-color: rgb(var(--v-theme-background));
    border-radius: 50%;
    z-index: 100;
    margin: 5px;
  }
}
@keyframes move {
  0%,
  20% {
    left: -15px;
    transform: rotate(0deg);
  }
  50% {
    left: 20px;
    transform: rotate(360deg);
  }
  100% {
    left: -15px;
    transform: rotate(0deg);
  }
}
</style>

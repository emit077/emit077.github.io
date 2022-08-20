<template>
  <svg class="move-top" width="23" height="40" viewBox="-2 0 30 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M12.75 0.869358C12.1633 0.284471 11.2136 0.285926 10.6287 0.87261L1.09738 10.4332C0.512493 11.0199 0.513949 11.9696 1.10063 12.5545C1.68732 13.1394 2.63706 13.1379 3.22195 12.5512L11.6942 4.05296L20.1925 12.5252C20.7792 13.1101 21.7289 13.1087 22.3138 12.522C22.8987 11.9353 22.8972 10.9855 22.3106 10.4007L12.75 0.869358ZM13.194 3.92934L13.191 1.92934L10.191 1.93394L10.194 3.93394L13.194 3.92934Z"
        :fill="fill" :stroke="stroke" :opacity="opacity" :stroke-width="stroke_width"/>
  </svg>
</template>
<!--  -->
<style lang="scss" scoped>
.move-top {
  animation: move-top 10s ease-in-out infinite;
  transform-origin: center;
  position: relative;
}

@keyframes move-top {
  0% {
    top: 0;
  }
  40% {
    -webkit-transform: rotate(0deg);
  }
  50% {
    top: -160px;
    -webkit-transform: rotate(180deg);
  }
  90% {
    -webkit-transform: rotate(180deg);
  }
  100% {
    top: 0;
     -webkit-transform: rotate(360deg);
  }
}


</style>
<!--   -->
<script>

export default {
  name: 'CircleOutline',
  props: {
    stroke: {
      type: String,
      default: '#7986FD',
    },
    fill: {
      type: String,
      default: 'none',
    },
    opacity: {
      type: String,
      default: '1',
    },
    stroke_width: {
      type: String,
      default: '3',
    },
  },
};
</script>

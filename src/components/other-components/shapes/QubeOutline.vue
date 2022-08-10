<template>
  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1.5" y="1.5" width="23" height="23" :stroke="stroke" :fill="fill" :opacity="opacity"
          :stroke-width="stroke_width"/>
  </svg>

</template>
<!--  -->
<style lang="scss" scoped>

</style>
<!--   -->
<script>

export default {
  name: 'CircleOutline',
  props: {
    stroke: {
      type: String,
      default: '#1F7949',
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
      default: '4',
    },
  },
};
</script>

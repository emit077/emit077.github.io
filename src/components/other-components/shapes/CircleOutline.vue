<template>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10.5" :stroke="stroke" :fill="fill" :opacity="opacity" :stroke-width="stroke_width"/>
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

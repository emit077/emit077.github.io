<template>
  <svg width="34" height="30" viewBox="0 0 34 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.14359 28L17 4L30.8564 28H3.14359Z" :stroke="stroke" :fill="fill" :opacity="opacity"
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

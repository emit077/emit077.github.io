<template>
  <svg width="89" height="13" viewBox="0 0 89 13" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M2 10.5L7 3L12 10.5L17 3L22 10.5L27 3L32 10.5L37 3L42 10.5L47 3 M42 10.5L47 3L52 10.5L57 3L62 10.5L67 3L72 10.5L77 3L82 10.5L87 3"
        :stroke="stroke" :opacity="opacity" :stroke-width="stroke_width"/>
  </svg>
</template>
<!--  -->
<style lang="scss" scoped>

</style>
<!--   -->
<script>

export default {
  name: 'ZigZagLine',
  props: {
    stroke: {
      type: String,
      default: '#F3B24A',
    },
    opacity: {
      type: String,
      default: '1',
    },
    stroke_width: {
      type: String,
      default: '2',
    },
  },
};
</script>

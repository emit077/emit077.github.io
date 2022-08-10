<template>
  <svg width="42" height="32" viewBox="0 0 42 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25.622 3.109L19.5456 27.892L16.5317 27.8754L22.6081 3.09242L25.622 3.109Z" fill="#F85C5C"/>
    <path
        d="M8.53727 20.4008L4.20198 15.8969L8.58656 11.441L12.1065 11.4603L7.72193 15.9163L12.0572 20.4202L8.53727 20.4008ZM30.4028 11.561L33.9427 11.5804L38.278 16.0844L33.8935 20.5403L30.3535 20.5208L34.7581 16.065L30.4028 11.561Z"
        :stroke="stroke" :fill="fill" :opacity="opacity" :stroke-width="stroke_width"/>
  </svg>

</template>
<!--  -->
<style lang="scss" scoped>

</style>
<!--   -->
<script>

export default {
  name: 'TagOutline',
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

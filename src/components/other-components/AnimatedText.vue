<template>
  <div class="d-block">
    <svg viewBox="0 0 400 150">
      <text x="0%" y="40%" dy=".15em" :class="$vuetify.display.mobile?'text-h1 ':' text-h1'">
        Amit
      </text>
      <text x="0%" y="85%" dy=".15em" :class="$vuetify.display.mobile?'text-h1 ':' text-h1'">Kumar
      </text>
    </svg>
  </div>
</template>
<style lang="scss" scoped>
$stroke-width: 1px;
$stroke-color: rgba(var(--v-theme-stroke-1));

svg text {
  animation: stroke 6s alternate;
  transition: color 6s linear;
  //stroke-width: $stroke-width;
  //stroke: $stroke-color;
  font-weight: bolder;
  text-align: left;
  font-size: 80px !important;
  fill: rgba(var(--v-theme-stroke-1));
}

@keyframes stroke {
  0% {
    fill: rgba(72, 138, 20, 0);
    stroke: $stroke-color;
    stroke-dashoffset: 25%;
    stroke-dasharray: 0 50%;
    stroke-width: $stroke-width;
  }
  70% {
    fill: rgba(72, 138, 20, 0);
    stroke: $stroke-color;
  }
  80% {
    fill: rgba(72, 138, 20, 0);
    stroke: $stroke-color;
    stroke-width: $stroke-width;
  }
  100% {
    fill: rgba(var(--v-theme-stroke-1));
    stroke: $stroke-color;
    stroke-dashoffset: -25%;
    stroke-dasharray: 50% 0;
    stroke-width: 0;
  }
}
</style>
<script>
export default {
  name: 'AnimatedText',
  data: () => ({}),
}
</script>
<template>
  <div class="text-center">
    <h4 class="section-subtitle mb-3">
      {{ title }}
    </h4>

    <h2 class="mb-10 text-stroke-1 section-title" data-splitting>
      {{ subtitle_arr[0] }} <span class="text-color-1">{{ subtitle_arr[1] }}</span>
    </h2>
  </div>
</template>
<!--  -->
<style lang="scss" scoped>
$subtitle-font-size: calc(100% + 0.2vw);
$title-font-size: calc(100% + 1.4vw);

.section-subtitle:before,
.section-subtitle::after {
  border-color: rgb(var(--v-theme-primary), 0.5);
  display: inline-block;
  content: "";
  border-top: 2px solid;
  width: 25px;
  margin: 0px 10px 5px 10px;
  position: relative;
}
.section-subtitle {
  color: rgb(var(--v-theme-primary), 0.5);
  font-size: $subtitle-font-size;
  font-weight: 400;
}
.section-title {
  font-size: $title-font-size;
}
</style>
<!--   -->
<script setup>
const props = defineProps({
  title: String,
  subtitle: String,
});
let subtitle_arr = [];
if (props.subtitle) subtitle_arr = props.subtitle.split("##");
</script>

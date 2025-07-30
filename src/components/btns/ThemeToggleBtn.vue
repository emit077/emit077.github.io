<template>
  <input
    type="checkbox"
    id="toggle"
    class="toggle--checkbox"
    v-model="is_dark"
    @change="toggleTheme"
  />
  <label
    for="toggle"
    class="toggle--label"
    :class="'toggle--label-' + theme.global.name.value"
  >
    <span class="toggle--inner-item"></span>
  </label>
</template>
<style lang="scss" scoped>
// variables
$white: #fff;
$circle-size: 23px;
$circle-label-height: 33px;

.toggle--checkbox {
  display: none;
}
.toggle--checkbox:checked + .toggle--label:before {
  background: $white;
  // border-color: #e8e8ea;
  animation-name: switch;
  box-shadow: none;
  animation-duration: 350ms;
  animation-fill-mode: forwards;
}
// inner circle for moon
.toggle--label-dark .toggle--inner-item {
  position: absolute;
  height: 7px;
  width: 7px;
  background-color: #d7d7db;
  border-radius: 50%;
  display: block;
  z-index: 10;
  right: 2px;
  top: 13px;
  animation: 5ms fadeIn;

  &::before {
    content: "";
    width: 5px;
    height: 5px;
    border-radius: 50%;
    position: absolute;
    background: #d7d7db;
    bottom: 8px;
    right: 7px;
    // box-shadow: 0px 0px 8px 1px $white;
  }
}

// inner circle for sun
.toggle--label-light .toggle--inner-item {
  position: absolute;
  height: 7px;
  width: 7px;
  background-color: #f5da71;
  border-radius: 50%;
  display: block;
  z-index: 10;
  left: 10px;
  bottom: 3px;
  animation: 5ms fadeIn;

  &::before {
    content: "";
    width: 5px;
    height: 5px;
    border-radius: 50%;
    position: absolute;
    background: #f5da71;
    bottom: 8px;
    left: 7px;
    // box-shadow: 0px 0px 8px 1px $white;
  }
}

.toggle--checkbox:checked + .toggle--label:after {
  transition-delay: 350ms;
  opacity: 1;
}
.toggle--label {
  width: calc($circle-size * 2.6);
  height: $circle-label-height;
  background: rgb(var(--v-theme-primary), 0.2);
  border-radius: calc($circle-size);
  border: 5px solid transparent;
  display: flex;
  position: relative;
  transition: all 350ms ease-in;
}
.toggle--label:before {
  animation-name: reverse;
  animation-duration: 350ms;
  animation-fill-mode: forwards;
  transition: all 350ms ease-in;
  content: "";
  width: $circle-size;
  height: $circle-size;
  border-radius: $circle-size;
  // border: 5px solid #f5eb71;
  position: absolute;
  background: #fff07a;
  box-shadow: 0px 0px 4px 0.5px #fff07a;
}

@keyframes switch {
  0% {
    left: 0px;
  }
  60% {
    left: 0px;
    width: calc($circle-size * 2);
  }
  100% {
    left: calc(100% - $circle-size);
    width: $circle-size;
  }
}
@keyframes reverse {
  0% {
    width: $circle-size;
    left: calc(100% - $circle-size);
  }
  60% {
    left: 0px;
    width: calc($circle-size * 2);
  }
  100% {
    left: 0px;
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  80% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fadeOut {
  100% {
    opacity: 0;
  }
  20% {
    opacity: 0;
  }
  0% {
    opacity: 1;
  }
}
</style>
<script setup>
import { useTheme } from "vuetify";
const theme = useTheme();
let is_dark = theme.global.current.value.dark ? true : false;
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}
</script>

<template>
  <v-app
    :theme="theme.global.name.value"
    class="app-bg"
    :class="getClassName()"
    style="overflow: hidden"
  >
    <AppBar />
    <v-container grid-list-xl>
      <v-main>
        <router-view />
      </v-main>
    </v-container>
  </v-app>
</template>
<style lang="scss">
@import url("@/utility/css/font.scss");
.app-bg {
  color: rgb(var(--v-theme-surface));

  transition: background-color 0.5s linear, color 0.5s linear;
  background-size: cover;
  background-color: rgb(var(--v-theme-surface)) !important;
}

.bg-img-dark {
  background-image: url("@/assets/background/dark-bg-Img.svg") !important;
}

.bg-img-light {
  background-image: url("@/assets/background/light-bg-Img.svg") !important;
}

.bg-img-mobile-dark {
  background-image: url("@/assets/background/dark-bg-img-mobile.svg") !important;
}

.bg-img-mobile-light {
  background-image: url("@/assets/background/light-bg-img-mobile.svg") !important;
}
</style>

<script setup>
import { useTheme } from "vuetify";
import { useDisplay } from "vuetify";
const theme = useTheme();
const { mobile } = useDisplay();

const getClassName = () => {
  if (mobile.value) {
    return "bg-img-mobile-" + theme.global.name.value;
  } else {
    return "bg-img-" + theme.global.name.value;
  }
};
//
</script>

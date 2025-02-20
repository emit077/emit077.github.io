<template>
  <v-app :theme="theme.global.name.value" class="app-bg">
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
}
</style>

<script setup>
import { useTheme } from "vuetify";
const theme = useTheme();
//
</script>

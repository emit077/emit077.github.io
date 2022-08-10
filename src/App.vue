<template>
  <v-app :theme="$store.state.currentTheme" class="bg-img" :class="'bg-img-'+$store.state.currentTheme">
    <app-bar/>
    <v-main>
      <router-view/>
    </v-main>
    <app-footer/>
  </v-app>
</template>
<style lang="scss">
@import "./assets/css/style.scss";

.bg-img {
  transition: background-color 0.5s linear, color 0.5s linear;
  background-size: cover;
  background-color: rgb(var(--v-theme-surface)) !important;
}

.bg-img-dark {
  background-image: url('@/assets/images/dark/bg-Img.svg');
}

.bg-img-light {
  background-image: url('@/assets/images/light/bg-Img.svg');
}
</style>

<script>
import AppBar from "@/components/layout-components/AppBar"
import AppFooter from "@/components/layout-components/AppFooter"

export default {
  name: 'App',
  components: {
    AppBar,
    AppFooter,
  },

  data: () => ({
    //
  }),
  mounted() {
  }
}
</script>

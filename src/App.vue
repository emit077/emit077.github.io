<template>
  <v-app :theme="$store.state.currentTheme" class="bg-img" :class="getClassName()">
    <app-bar/>
    <v-main class="main-body">
      <router-view/>
    </v-main>
    <app-footer/>
  </v-app>
</template>
<style lang="scss">
@import "./assets/css/style.scss";

.main-body {
  overflow-x: hidden !important;
}

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

.bg-img-mobile-dark {
  background-image: url('@/assets/images/dark/bg-img-mobile.svg');
}

.bg-img-mobile-light {
  background-image: url('@/assets/images/light/bg-img-mobile.svg');
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
  },
  methods: {
    getClassName() {
      if (this.$vuetify.display.mobile) {
        return "bg-img-mobile-" + this.$store.state.currentTheme
      } else {
        return "bg-img-" + this.$store.state.currentTheme
      }

    }
  }
}
</script>

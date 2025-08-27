<template>
  <v-app-bar
    color="transparent"
    :elevation="scrolled ? 2 : 0"
    :class="{ scrolled: scrolled }"
    class="px-10 sticky transition-all duration-300"
  >
    <!-- Logo/Brand -->
    <div class="d-flex align-center">
      <v-avatar size="40" class="mr-3">
        <!-- <v-img src="@/assets/logo.svg" alt="Amit Sahu"></v-img> -->
      </v-avatar>
      <!-- <span class="text-h6 font-weight-bold text-primary">Amit Sahu</span> -->
    </div>

    <v-spacer></v-spacer>

    <!-- Desktop Navigation -->
    <div v-if="!mobile" class="d-flex align-center">
      <!-- <v-btn
        variant="text"
        class="mx-2"
        :class="{ active: $route.path === '/' }"
        @click="$router.push('/')"
      >
        Home
      </v-btn>
      <v-btn
        variant="text"
        class="mx-2"
        :class="{ active: $route.path === '/about' }"
        @click="$router.push('/about')"
      >
        About
      </v-btn> -->
    </div>

    <!-- Mobile Menu -->
    <v-menu v-if="mobile" location="bottom">
      <!-- <template v-slot:activator="{ props }">
        <v-btn icon v-bind="props">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item @click="$router.push('/')">
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item @click="$router.push('/about')">
          <v-list-item-title>About</v-list-item-title>
        </v-list-item>
      </v-list> -->
    </v-menu>

    <ThemeToggleBtn class="px-3" />
  </v-app-bar>
</template>

<style scoped>
.v-app-bar.scrolled {
  background: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.v-btn.active {
  background: rgba(var(--v-theme-primary), 0.1);
  color: rgb(var(--v-theme-primary));
}

.transition-all {
  transition: all 0.3s ease;
}
</style>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useDisplay } from "vuetify";

const { mobile } = useDisplay();
const scrolled = ref(false);

const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

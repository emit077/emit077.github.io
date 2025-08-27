<template>
  <LandingScreen v-if="mobile" />
  <LandingScreenDesktop v-else />

  <MyExperiance />
  <MyProjects />
  <TechStack />
  <HireMe />
</template>

<script setup>
import HireMe from "@/components/home-page/HireMe.vue";
import LandingScreenDesktop from "@/components/home-page/LandingScreenDesktop.vue";
import MyExperiance from "@/components/home-page/MyExperiance.vue";

import { useDisplay } from "vuetify";
const { mobile } = useDisplay();
</script>

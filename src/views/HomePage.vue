<template>
  <div>
    <!-- <link-style></link-style> -->
    <!-- <moving-lines /> -->
    <landing-screen />
    <my-experience />
    <my-services />
    <about-me />
    <my-projects />
    <my-skills />
    <contact-me />
  </div>
</template>
<style lang="scss"></style>

<script>
import LandingScreen from "@/components/home-page-components/LandingScreen";
import ContactMe from "@/components/home-page-components/ContactMe";
import AboutMe from "@/components/home-page-components/AboutMe";
import MyExperience from "@/components/home-page-components/MyExperience";
import MyProjects from "@/components/home-page-components/MyProjects";
import MyServices from "@/components/home-page-components/MyServices";
import MySkills from "@/components/home-page-components/MySkills";
// import MovingLines from "@/components/other-components/shapes/MovingLines";
// import LinkStyle from "@/components/other-components/LinkStyle";

export default {
  name: "HomePage",
  components: {
    LandingScreen,
    ContactMe,
    AboutMe,
    MyExperience,
    MyServices,
    MyProjects,
    MySkills,
    // MovingLines,
    // LinkStyle
  },
  data() {
    return {};
  },
  beforeMount() {
    this.toggleLoading();
  },
  mounted() {},
  methods: {},
};
</script>

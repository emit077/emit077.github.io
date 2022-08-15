<template>
  <div class="app-padding py-15 my-15" id="about-me">
    <p class="shadow-text">About me</p>
<!--    <v-row align="start" justify="start" no-gutters>-->
<!--      <v-col xs="12" sm="6" md="9" class="justify-center text-stroke-1 pr-6 py-6">-->
        <qube-outline class="spin-animation float-right" :opacity="0.7" :stroke="'#F3B24A'" style="width: 15px"/>
        <div class="" :class="$vuetify.display.mobile?'mt-n2':'mt-n15'">
          <common-content-wrapper :title="title" :subtitle="subtitle" :description="description"/>
        </div>
<!--      </v-col>-->
<!--      <v-col xs="12" sm="6" md="3" class="text-center text-stroke-1 pr-6 py-6">-->
<!--        <img v-if="$store.state.currentTheme=='dark'" :src="require('@/assets/images/dark/profile-img.png')" alt=""-->
<!--             class="profile-img">-->
<!--        <img v-else :src="require('@/assets/images/light/profile-img.png')" alt="" class="profile-img">-->

        <a :href="pdfLink" download="download" class="float-right" target="_blank">
          <button class="get-cv-btn mt-7">
            Download CV
          </button>
        </a>
<!--      </v-col>-->
<!--    </v-row>-->
  </div>
</template>
<!--  -->
<style lang="scss" scoped>
.profile-img {
  width: 100%;
}

.get-cv-btn {
  padding: 5px 15px;
  border-radius: 8px;
  border: solid 1.5px rgb(var(--v-theme-stroke-2), 0.8);
  color: rgb(var(--v-theme-stroke-2), 0.8);
  background-color: rgb(var(--v-theme-stroke-2), 0.1);
  transition: background-color 0.5s linear, color 0.5s linear;
}

.get-cv-btn:hover {
  color: rgb(var(--v-theme-stroke-1), 0.8);
  background-color: rgb(var(--v-theme-stroke-2), 1);
}
</style>
<!--   -->
<script>
import CommonContentWrapper from "@/components/other-components/CommonContentWrapper"
import QubeOutline from "@/components/other-components/shapes/QubeOutline"

export default {
  name: 'AboutMe',
  components: {
    CommonContentWrapper,
    QubeOutline
  },
  data() {
    return {
     pdfLink: "https://drive.google.com/uc?export=download&id=1LCRKTyaRS0wBbQq0e_WuxxMiRkRXszNm",
      title: "About me",
      subtitle: "Know more about me",
      description: "Hello! My name is Amit Kumar Sahu. I'm a software developer & UI/UX Designer based in Raipur Chhattisgarh. I enjoy creating things that live on the internet. It all started from my college days when I start building interest in software development and decided to try editing custom themes and build a website for a college event, Fast-forward to today, I had the privilege of working at a start-up and a huge corporation. " +
          "<br/> <br/>Apart from this, I like to travel and explore different places and their traditional dishes. Making handcrafts is one of my favourite hobbies."
    }
  },
  methods: {}
};
</script>

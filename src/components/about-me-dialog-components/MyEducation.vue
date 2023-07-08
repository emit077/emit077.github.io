<template>
  <div class="app-padding py-15 my-15" id="about-me">
    <p class="shadow-text">Education</p>
    <!--    <v-row align="start" justify="start" no-gutters>-->
    <!--      <v-col xs="12" sm="6" md="9" class="justify-center text-stroke-1 pr-6 py-6">-->
    <qube-outline class="spin-animation float-right" :opacity="0.7" :stroke="'#F3B24A'" style="width: 15px"/>
    <div class="" :class="$vuetify.display.mobile?'mt-n2':'mt-n15'">
      <common-content-wrapper :title="title" :subtitle="subtitle" :description="description"/>
    </div>
    <about-me-dialog />

    <!--      </v-col>-->
    <!--      <v-col xs="12" sm="6" md="3" class="text-center text-stroke-1 pr-6 py-6">-->
    <!--        <img v-if="$store.state.currentTheme=='dark'" :src="require('@/assets/images/dark/profile-img.png')" alt=""-->
    <!--             class="profile-img">-->
    <!--        <img v-else :src="require('@/assets/images/light/profile-img.png')" alt="" class="profile-img">-->

    <!--        <a :href="pdfLink" download="download" class="float-right" target="_blank">-->
    <!--          <button class="get-cv-btn mt-7">-->
    <!--            Download CV-->
    <!--          </button>-->
    <!--        </a>-->
    <!--      </v-col>-->
    <!--    </v-row>-->
  </div>
</template>
<style lang="scss" scoped>
.profile-img {
  width: 90%;
}
</style>
<script>
import CommonContentWrapper from "@/components/other-components/CommonContentWrapper"
import QubeOutline from "@/components/other-components/shapes/QubeOutline"
import AboutMeDialog from "@/views/AboutMeDialog";


export default {
  name: 'MyEducations',
  components: {
    CommonContentWrapper,
    QubeOutline,
    AboutMeDialog
  },
  data() {
    return {
      title: "Qualification",
      subtitle: "",
      description: ""
    }
  },
  methods: {}
};
</script>

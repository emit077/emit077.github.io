<template>
  <div class="app-padding py-15 my-15" id="about-me">
    <p class="shadow-text">About me</p>
    <qube-outline class="spin-animation float-right" :opacity="0.7" :stroke="'#F3B24A'" style="width: 15px"/>
    <div class="" :class="$vuetify.display.mobile?'mt-n2':'mt-n15'">
      <common-content-wrapper :title="title" :subtitle="subtitle" :description="description"/>
    </div>
  </div>
</template>
<!--  -->
<style lang="scss" scoped>

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
      title: "About me",
      subtitle: "Know more about me",
      description: "Hello! My name is Amit Kumar Sahu. I'm a software developer based in Raipur Chhattisgarh. I enjoy creating things that live on the internet. It all started from my college days when I start building interest in software development and decided to try editing custom themes and build a website for a college event, Fast-forward to today, I had the privilege of working at a start-up and a huge corporation. <br/> <br/>Professionally connected with the web development industry and information technology for many years. Interested in the entire frontend spectrum and working on ambitious projects with positive people."
    }
  },
  methods: {}
};
</script>

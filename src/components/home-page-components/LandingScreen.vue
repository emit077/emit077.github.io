<template>

  <div class="app-padding d-flex align-center" id="landing-screen"
       :style="style"
       :class="$vuetify.display.mobile?'py-15 landing-screen-'+$store.state.currentTheme :'text-h6 landing-screen-'+$store.state.currentTheme">
    <v-row align="center" justify="center" no-gutters>
      <v-col sm="6" cols="12" class="justify-center" :class="$vuetify.display.mobile?'my-15':''">
        <p class="font-weight-bold  mb-5 text-stroke-1 ml-2"
           :class="$vuetify.display.mobile?'text-subtitle-1 ':' text-h6'">Hey I'm</p>
        <h1 class=" font-weight-bold text-stroke-1"
            :class="$vuetify.display.mobile?'text-h2 ':' text-h1'">Amit<br>Kumar</h1>
        <zig-zag-line class="move-animation-2" :stroke="'#F3B24A'" :height="$vuetify.display.mobile?8:13"/>
      </v-col>
      <v-col sm="6" cols="12" class="justify-center text-stroke-1">
        <circle-outline class="float-right move-animation" :stroke="'#F85C5C'" style="width: 15px"/>
        <common-content-wrapper :title="title" :subtitle="subtitle" :description="description"/>
        <triangle-outline class="spin-animation" style="width: 15px"
                          :class="$vuetify.display.mobile?'float-right':'mt-8'"/>
      </v-col>
    </v-row>
  </div>
</template>
<!--  -->
<style lang="scss" scoped>
#landing-screen {
  background-position: left;
  transition: backgroundImage 0.5s linear;

}

.landing-screen-dark {
  background-image: url('@/assets/images/dark/black-semi-circle.svg');
}

.landing-screen-light {
  background-image: url('@/assets/images/light/black-semi-circle.svg');
}

</style>
<!--   -->
<script>
import CommonContentWrapper from "@/components/other-components/CommonContentWrapper"
import CircleOutline from "@/components/other-components/shapes/CircleOutline"
import ZigZagLine from "@/components/other-components/shapes/ZigZagLine"
import TriangleOutline from "@/components/other-components/shapes/TriangleOutline"

export default {
  name: 'LandingPageVue',
  components: {
    CommonContentWrapper,
    CircleOutline,
    ZigZagLine,
    TriangleOutline
  },
  data() {
    return {
      style: {
        "min-height": screen.height - 200 + "px",
      },
      title: "Introduction",
      subtitle: "Fullstack Developer & UI/UX Designer, Based in Raipur",
      description: "Passionate about visual design and technology. I specialized in fullstack development and UI/UX design and my passion is about building elegant and professional user interfaces and websites."
    }
  },
  mounted() {
    // let url = this.getThemedImageUrl('black-semi-circle.svg')
    this.style = {
      "min-height": screen.height - 200 + "px",
      // backgroundImage: 'url(' + url + ')'
    }
  },
  methods: {}
};
</script>

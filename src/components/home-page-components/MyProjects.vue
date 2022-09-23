<template>
  <zig-zag-line class="float-right move-animation-2" :stroke="'#07bf13'" :height="$vuetify.display.mobile?7:10"/>
  <div class="app-padding portfolio-section" id="portfolio"
       :style="style" :class="$vuetify.display.mobile?'pt-5':'text-h6'">

    <v-row align="top" justify="center" no-gutters :class="$vuetify.display.mobile?'py-15 mt-15':'py-15 my-15'">
      <v-col sm="6" cols="12" class="justify-center" :class="getClassName(0)"
             v-if="!$vuetify.display.mobile">
        <project-card :project="project_list[0]"/>
      </v-col>
      <!--      -->
      <v-col sm="6" cols="12" class="text-stroke-1"
             :class="$vuetify.display.mobile?'':'pl-6 py-6'">
        <common-content-wrapper :title="title" :subtitle="subtitle" :description="description"/>
      </v-col>
      <!--      -->
      <v-col sm="6" cols="12" class="justify-center"
             v-for="(project,i) in $vuetify.display.mobile?project_list: project_list.splice(1,7)" :key="i"
             :class="getClassName(i)">
        <project-card :project="project"/>
      </v-col>
    </v-row>
  </div>
  <arrow-outline style="width:18px" class="ml-4"/>
</template>
<!--  -->
<style lang="scss" scoped>
.portfolio-section {
  background-position: top right;
}

</style>
<!--   -->
<script>
import CommonContentWrapper from "@/components/other-components/CommonContentWrapper"
import ProjectCard from "@/components/other-components/ProjectCard"
import ZigZagLine from "@/components/other-components/shapes/ZigZagLine"
import ArrowOutline from "@/components/other-components/shapes/ArrowOutline"

export default {
  name: 'MyProjects',
  components: {
    CommonContentWrapper,
    ProjectCard,
    ZigZagLine,
    ArrowOutline
  },
  data() {
    return {
      style: {},
      title: "Portfolio",
      subtitle: "Some Things I’ve Built",
      description: "I build some greate products. some of my recent and note worthy project are listed here.",
      project_list: [
        {
          title: "Cashpo",
          description:
              "A plateform which provides you Personal loans upto ₹2 lakhs instantly through a completely paperless process. Currently operated in 10+ cities Of India. Key Highlight Emandate/Nach, e-KYC, Auto Disbursment etc.",
          image: require("@/assets/images/projects/cashpo.png"),
          working_link: "https://cashpo.in",
          tech_stack: ["Django", "python", "Vuejs", "Vuetify", "HTML", "SCSS"],
        },
        {
          title: "Tutors Factory",
          description:
              "Tutors Factory the best home tutor provider have connected the 10,000+ tutors with almost 25,000+ students across the nation. It has Student portal, Tutor portal, Bussiness Developer portal And Admin portal",
          image: require("@/assets/images/projects/tf.png"),
          working_link: "https://www.tutorsfactory.com",
          tech_stack: ["Django", "python", "Vuejs", "Vuetify", "HTML", "SCSS"],
        },
        {
          title: "Medx",
          description:
              "A Subscription Based B2B medicine delivery service. Delivering 2500+ order in a Day. Currently operated in Raipur Only. this platefoarm have some key feature Like Shipment Lifecycle, Live Traking, Wallet and Payout etc. ",
          image: require("@/assets/images/projects/medx.png"),
          working_link: "https://themedx.in",
          tech_stack: ["Django", "python", "Vuejs", "Vuetify", "HTML", "CSS"],
        },
        {
          title: "Wednicely",
          description:
              "Wednicely Panda is plateform where you can create a e-invitation card within few minutes. It has 1000+ temaplate and  10+ category  to choose from ",
          image: require("@/assets/images/projects/ip.png"),
          working_link: "https://wednicely.com/",
          tech_stack: ["Vuejs", "Vuetify", "HTML", "CSS"],
        },
        {
          title: "BurnBlack",
          description:
              "BurnBlack is plateform who provide the  finacial service like ITR, GST filling, Company registration, Billing Software and other Financial Services.",
          image: require("@/assets/images/projects/burnblack.png"),
          working_link: "https://burnblack.in/",
          tech_stack: ["Django", "python", "Vuejs", "Vuetify", "HTML", "SCSS"],
        },
        {
          title: "Rawfit",
          description:
              "Rawfit is subscription Based helth monitoring system based on google fit. Which also provide service to book a activity sesson.",
          image: require("@/assets/images/projects/rawfit.png"),
          working_link: "https://rawfit.in",
          tech_stack: ["Django", "python", "Vuejs", "HTML", "SCSS"],
        },
        {
          description:
              "GimBooks is Y combinator funded startup who  helps small business owners to create and share Invoice, Quotations, E-Waybills, Payment reminders, Payment receipts and much more!",
          title: "GimBooks",
          image: require("@/assets/images/projects/gim.png"),
          working_link: "https://www.gimbooks.com/",
          tech_stack: ["Django", "python", "JavaScript", "HTML", "CSS"],
        },
      ],
    }
  },
  mounted() {
    this.style = {
      backgroundImage: 'url(' + require('@/assets/images/dark/yellow-semi-circle.svg') + ')'
    }
  },
  methods: {
    getClassName(i) {
      let class_name = ""
      if (this.$vuetify.display.mobile) {
        class_name += "py-6 px-2"
      } else {
        if (i % 2 == 0)
          class_name += " pr-6 py-6"
        else
          class_name += " pl-6 py-6"
      }
      return class_name
    }
  }
};
</script>

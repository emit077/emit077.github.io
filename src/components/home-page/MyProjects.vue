<template>
  <div class="py-15">
    <SectionHeader :title="title" :subtitle="subtitle" />
    <v-row class="justify-center">
      <v-col
        cols="12"
        xs="12"
        sm="12"
        md="4"
        xl="4"
        v-for="project in project_list"
        class="justify-center"
      >
        <v-card
          :disabled="loading"
          :loading="loading"
          class="project-card h-100 pb-5"
          flat=""
        >
          <template v-slot:loader="{ isActive }">
            <v-progress-linear
              :active="isActive"
              color="deep-purple"
              height="4"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img height="210" :src="project.image" cover class="project-image"></v-img>
          <!-- link btn -->
          <div class="mt-n4 float-end d-flex">
            <button
              class="link-btn justify-center align-center elevation-2 mr-1"
              v-if="project.github_link"
              @click="OpneLink(project.github_link)"
            >
              <v-icon size="23" icon="mdi-github"></v-icon>
            </button>
            <button
              class="link-btn justify-center align-center elevation-2 mr-1"
              @click="OpneLink(project.working_link)"
            >
              <v-icon size="20" icon="mdi-open-in-new"></v-icon>
            </button>
          </div>
          <!-- link btn  end -->

          <v-card-item class="">
            <v-card-title class="mt-3">{{ project.title }}</v-card-title>
          </v-card-item>

          <v-card-text>
            <div>
              {{ project.description }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<style>
.link-btn {
  height: 35px;
  width: 35px;
  position: relative;
  background-color: rgb(var(--v-theme-background), 1);
  border-radius: 50%;
  display: flex;
}

.project-card {
  background-color: rgb(var(--v-theme-primary), 0.06) !important;
}
.project-image .v-img__img--cover {
  object-position: top !important;
}
</style>

<script setup>
import { ref } from "vue";

let style = {};
let title = "Portfolio";
let subtitle = "Some Things ##I’ve Built";
let description =
  "I build some great products. some of my recent and note worthy project are listed here.";
let project_list = [
  {
    title: "Cashpo",
    description:
      "A platform which provides you Personal loans upto ₹2 lakhs instantly through a completely paperless process. Key Highlight e-Mandate/NACH, e-KYC, Auto Disbursement etc.",
    image: new URL("@/assets/images/projects/cashpo.png", import.meta.url).href,
    working_link: "https://cashpo.in",
    tech_stack: ["django", "python", "vue-js", "html-5", "sass", "postgresql"],
  },
  {
    title: "Tutors Factory",
    description:
      "Tutors Factory the best home tutor provider have connected the 10,000+ tutors with almost 25,000+ students across the nation. It has Student portal, Tutor portal, Business Developer portal And Admin portal",
    image: new URL("@/assets/images/projects/tf.png", import.meta.url).href,
    working_link: "https://www.tutorsfactory.com",
    tech_stack: ["django", "python", "vue-js", "html-5", "sass", "postgresql"],
  },
  {
    title: "Indianmentors",
    description:
      "Indianmentors is the best home tutor provider have connected the 20,000+ tutors with almost 35,000+ students across the glob. It has Student portal, Tutor portal, Business Developer portal And Admin portal",
    image: new URL("@/assets/images/projects/indianmentors.png", import.meta.url).href,
    working_link: "https://www.indianmentors.in/",
    tech_stack: ["django", "python", "vue-js", "html-5", "sass", "postgresql"],
  },
  {
    title: "Medx",
    description:
      "A Subscription Based B2B medicine delivery service. Delivering 2500+ order in a Day. This platform have some key feature Like Shipment Lifecycle, Live tracking, Wallet and Payout etc.",
    image: new URL("@/assets/images/projects/medx.png", import.meta.url).href,
    working_link: "https://themedx.in",
    tech_stack: ["django", "python", "vue-js", "html-5", "postgresql"],
  },
  {
    title: "Wednicely",
    description:
      "Wednicely is platform where you can create a e-invitation card within few minutes. It has 1000+ template and  10+ category  to choose from",
    image: new URL("@/assets/images/projects/ip.png", import.meta.url).href,
    working_link: "https://wednicely.com/",
    tech_stack: ["django", "python", "vue-js", "html-5", "postgresql"],
  },
  {
    title: "BurnBlack",
    description:
      "BurnBlack is platform who provide the financial service like ITR, GST filling, Company registration, Billing Software and other Financial Services.",
    image: new URL("@/assets/images/projects/burnblack.png", import.meta.url).href,
    working_link: "https://burnblack.in/",
    tech_stack: ["django", "python", "vue-js", "html-5", "postgresql"],
  },
  {
    title: "Rawfit",
    description:
      "Rawfit is subscription Based health monitoring system based on google fit. Which also provide service to book a activity session.",
    image: new URL("@/assets/images/projects/rawfit.png", import.meta.url).href,
    working_link: "https://rawfit.in",
    tech_stack: ["django", "python", "vue-js", "html-5", "postgresql"],
  },
  {
    description:
      "GimBooks is Y combinator funded startup who  helps small business owners to create and share Invoice, Quotations, E-Waybills, Payment reminders, Payment receipts and much more!",
    title: "GimBooks",
    image: new URL("@/assets/images/projects/gim.png", import.meta.url).href,
    working_link: "https://www.gimbooks.com/",
    tech_stack: ["django", "python", "html-5", "javascript", "mysql"],
  },
  {
    description:
      "Digital ayurveda is patients management platform for docters where they can manage all the medical records and drugs record.",
    title: "Digital Ayurved",
    image: new URL("@/assets/images/projects/digital-ayurved.png", import.meta.url).href,
    working_link: "https://digitalayurved.in/",
    tech_stack: ["django", "python", "html-5", "vue", "vuetify", "javascript", "mysql"],
  },
  {
    description:
      "Spidertech is tech startup based out of Raipur Chhattisgarh focusing on providing tech support to new startups.",
    title: "Spider Tech",
    image: new URL("@/assets/images/projects/spidertech.png", import.meta.url).href,
    working_link: "https://spidertech.in/",
    tech_stack: ["html-5", "vue", "vuetify", "javascript", "SASS"],
  },
  // {
  //   description: "",
  //   title: "More Projects",
  //   image:new URL("@/assets/images/projects/more-project.png", import.meta.url).href,
  //   working_link: "https://github.com/emit077?tab=repositories",
  //   tech_stack: ["django", "python", "html-5", "javascript", "mysql"],
  // },
];

let loading = ref(false);
let selection = 1;
const reserve = () => {
  loading.value = true;
  setTimeout(() => (this.loading = false), 2000);
};

const OpneLink = (url) => {
  window.open(url, "_blank");
};
</script>

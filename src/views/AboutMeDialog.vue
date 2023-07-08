<template>
  <v-row justify="center">
    <v-btn
      color="primary"
      dark
      v-bind="attrs"
      v-on="on"
      @click="dialog = !dialog"
    >
      Know more
    </v-btn>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-btn
          icon
          dark
          @click="dialog = false"
          class="float-right d-inline-block"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <!--  -->
        <div class="text-center">
          <img
            :src="require('@/assets/images/dark/profile-img.png')"
            alt=""
            height="320"
            class="profile-img"
          />
          <div class=" mt-4">
            <div
              class="d-inline-flex mx-2"
              v-for="(item, i) in social_contact_list"
              :key="i"
            >
              <a :href="item.link" target="_blank" class="text-white">
                <v-icon class="social-icon" size="32">{{ item.icon }}</v-icon>
              </a>
            </div>
          </div>
        </div>
        <div class="app-padding pt-7">
          <p v-html="description" class="text-stroke-1 section-description"></p>
        </div>
        <work-experience></work-experience>
        <my-education></my-education>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<style lang="scss" scoped>
.profile-img {
  filter: grayscale(100%);
}
.section-description {
  line-height: 190%;
  font-size: 18px;
}
</style>
<script>
import WorkExperience from "@/components/about-me-dialog-components/WorkExperience";
import MyEducation from "@/components/about-me-dialog-components/MyEducation";
export default {
  components:{
    WorkExperience,
    MyEducation
  },
  data() {
    return {
      dialog: true,
      description: "Hello! My name is Amit Kumar Sahu. I'm a software developer & UI/UX Designer based in Raipur Chhattisgarh. I enjoy creating things that live on the internet. It all started from my college days when I start building interest in software development and decided to try editing custom themes and build a website for a college event, Fast-forward to today, I had the privilege of working at a start-up and a huge corporation. " +
          "<br/> <br/>Apart from this, I like to travel and explore different places and their traditional dishes. Making handcrafts is one of my favourite hobbies."
    };
  },
};
</script>

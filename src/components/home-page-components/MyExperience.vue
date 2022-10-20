<template>
  <div class="app-padding align-center d-block py-15 my-15" id="experience"
       :class="$vuetify.display.mobile?'pt-5':'text-h6'">
    <p class="shadow-text text-center">Experience</p>
    <div class="d-flex justify-space-around" v-if="!$vuetify.display.mobile">
      <div class="d-inline-flex">
        <div class="d-inline-flex  font-weight-bold text-stroke-2"
             :class="$vuetify.display.mobile?'text-h2':' text-h1'"> {{ experience }}
        </div>
        <div class="d-inline-flex align-center pl-2 text-stroke-1">Years of<br>Excellence
        </div>
      </div>
      <div class="d-inline-flex">
        <div class="d-inline-flex font-weight-bold text-stroke-2 text-h1">10</div>
        <div class="d-inline-flex align-center pl-2 text-stroke-1">Mind blowing<br> Projects</div>
      </div>
    </div>
    <div v-else class="text-center">
      <div class=" ">
        <div class="text-h1 font-weight-bold text-stroke-2">3.6</div>
        <div class=" align-center pl-2 text-stroke-1">Years of Excellence</div>
      </div>
      <div class="mt-10">
        <div class="text-h1 font-weight-bold text-stroke-2">10</div>
        <div class=" align-center pl-2 text-stroke-1">Mind blowing Projects</div>
      </div>
    </div>
    <circle-outline class="float-right move-animation-3" style="width: 15px"/>
  </div>
</template>
<!--  -->
<style lang="scss" scoped>

</style>
<!--   -->
<script>
import CircleOutline from "@/components/other-components/shapes/CircleOutline"

export default {
  name: 'MyExperience',
  components: {
    CircleOutline
  },
  data() {
    return {
      title: "Experience",
      subtitle: "Product designer and Developer, Based in Raipur",
      description: "Passionate about visual design and technology. I specialized in frontend development and UI/UX design and my passion is about building elegant and professional user interfaces and websites.",
      experience: "",
    }
  },
  mounted() {
    this.calcExperience()
  },
  methods: {
    calcExperience() {
      let start_date = new Date("6/1/2019");
      let current_date = new Date();
      let diffDays = parseInt((current_date - start_date) / (1000 * 60 * 60 * 24), 10);
      let diffYears = parseInt(diffDays / 365)
      let diffMonths = parseInt((diffDays % 365) / 30)
      this.experience = diffYears + "." + diffMonths
    }
  }
};
</script>

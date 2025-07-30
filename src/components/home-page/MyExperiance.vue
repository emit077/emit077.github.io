<template>
  <div class="py-15">
    <!-- shadow text -->
    <p class="shadow-text text-center pa-0">Experience</p>
    <!--  -->
    <div class="d-flex justify-space-around mt-lg-n10">
      <div class="d-inline-flex">
        <div class="experiance-value">
          {{ experience }}
        </div>
        <div class="d-inline-flex align-center pl-2">Years of<br />Excellence</div>
      </div>
      <div class="d-inline-flex">
        <div class="experiance-value">15</div>
        <div class="d-inline-flex align-center pl-2 text-stroke-1">
          Mind blowing<br />
          Projects
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.experiance-value {
  font-size: calc(100% + 5vw);
  font-weight: bold;
  display: inline-flex;
}
</style>

<script setup>
let title = "Experience";
let subtitle = "Product designer and Developer, Based in Raipur";
let description =
  "Passionate about visual design and technology. I specialized in frontend development and UI/UX design and my passion is about building elegant and professional user interfaces and websites.";
let experience = "";

const calcExperience = () => {
  let start_date = new Date("07/01/2019");
  let current_date = new Date();
  let diffDays = parseInt((current_date - start_date) / (1000 * 60 * 60 * 24), 10);
  let diffYears = parseInt(diffDays / 365);
  let diffMonths = parseInt((diffDays % 365) / 30);
  experience = diffYears + "." + diffMonths;
};
calcExperience();
</script>

<template>
  <div class="pt-15">
    <!-- shadow text -->
    <p class="shadow-text text-center pa-0">Hire Me</p>
    <!--  -->
    <SectionHeader :title="title" :subtitle="subtitle" />
    <div class="v-row justify-center">
      <p
        v-html="description"
        class="text-primary text-paragraph v-col-md-10 v-col-sm-12"
      ></p>
    </div>
    <div class="text-center my-10">
      <SociaLinks />
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
let title = "Contact me";
let subtitle = "Get in##Touch";
let description = `Hey there! 🚀 Looking for someone to bring your ideas to life? I'm your go-to! With skills in end-to-end product development, I'm all about creativity and innovation. Let’s team up to create some epic projects that stand out.<br><br> 💡 Whether you need help with UI/UX design, web development or product development, I’ve got you covered! Hit me up if you want to chat about how we can work together—I’m just a message away! Just shoot me an email at <a
            href="mailto:emitsahu077@gmail.com"
            class="text-stroke-2 text-decoration-none text-h6"
            >emitsahu077@gmail.com
          </a>. Let’s make something awesome happen! ✌️✨`;
</script>

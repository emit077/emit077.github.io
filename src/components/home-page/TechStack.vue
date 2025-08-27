<template>
  <ZigZagLine class="float-left move-animation-2" :opacity="1"></ZigZagLine>
  <div class="app-padding py-15 my-15" :style="style">
    <SectionHeader :title="title" :subtitle="subtitle" />
    <circle-outline
      class="move-animation-3 float-right"
      :opacity="0.8"
      :stroke="'#1F7949'"
      style="width: 15px"
    />
    <v-row align="end" justify="center" no-gutters>
      <v-col
        cols="4"
        xs="4"
        sm="4"
        md="2"
        lg="2"
        xl="2"
        class="justify-center text-center"
        v-for="(skill, i) in tech_stacks"
        :key="i"
      >
        <div
          class="skills-card align-center text-center pa-md-4 pa-2 ma-md-4 ma-1"
          :style="{ '--data-index': i % 2 == 0 ? i : i / 4 }"
        >
          <div class="mt-4">
            <img
              :src="skill.img"
              :alt="skill.title"
              width="70"
              :style="{ '--data-index': i % 2 == 0 ? i : i / 4 }"
            />
            <p class="mt-3" v-html="skill.title"></p>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<!--  -->
<style lang="scss" scoped>
.skills-card {
  background-color: rgb(var(--v-theme-primary), 0.06);
  border-radius: 5px;
  transition-duration: 1s;

  p {
    color: rgb(var(--v-theme-stroke-1));
    transform-origin: bottom;
    animation: text_animate 5s cubic-bezier(0.9, 0.03, 0.69, 0.22)
      calc(3s * var(--data-index)) alternate infinite;
  }

  img {
    background-clip: transparent;
    transform-origin: top;
    filter: grayscale(10);
    animation: img_animate 5s cubic-bezier(0.9, 0.03, 0.69, 0.22)
      calc(3s * var(--data-index)) alternate infinite;
  }
}

@keyframes img_animate {
  0%,
  30%,
  90%,
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -ms-transform: scale(1); /* IE 9 */
    -webkit-transform: scale(1);
    filter: none;
    filter: grayscale(10);
  }
  40%,
  50%,
  60% {
    -webkit-transform: scale(1.4);
    transform: scale(1.4);
    -ms-transform: scale(1.4); /* IE 9 */
    -webkit-transform: scale(1.4);
    filter: none;
  }
}
@keyframes text_animate {
  0%,
  30%,
  90%,
  100% {
    opacity: 1;
  }
  40%,
  50%,
  60% {
    opacity: 0.01;
  }
}
</style>
<!--   -->
<script setup>
let title = "Tech Stack";
let subtitle = "Power of technology ##in my hands";
let description = "";
let tech_stacks = [
  {
    title: "Python",
    img: new URL("@/assets/images/tech-stack/python.png", import.meta.url).href,
  },
  {
    title: "Django",
    img: new URL("@/assets/images/tech-stack/django.png", import.meta.url).href,
  },
  {
    title: "Vue js",
    img: new URL("@/assets/images/tech-stack/vue.png", import.meta.url).href,
  },
  {
    title: "Vuetify",
    width: 45,
    img: new URL("@/assets/images/tech-stack/vuetify.png", import.meta.url).href,
  },
  {
    title: "Nuxt",
    width: 45,
    img: new URL("@/assets/images/tech-stack/nuxt.png", import.meta.url).href,
  },
  {
    title: "Javascript",
    img: new URL("@/assets/images/tech-stack/js.png", import.meta.url).href,
  },
  {
    title: "Git",
    img: new URL("@/assets/images/tech-stack/git.png", import.meta.url).href,
  },
  {
    title: "React",
    img: new URL("@/assets/images/tech-stack/react.png", import.meta.url).href,
  },
  {
    title: "React Native",
    img: new URL("@/assets/images/tech-stack/react.png", import.meta.url).href,
  },
  {
    title: "Next.js",
    img: new URL("@/assets/images/tech-stack/nextjs.png", import.meta.url).href,
  },
  {
    title: "Jquery",
    img: new URL("@/assets/images/tech-stack/jquery.png", import.meta.url).href,
  },
  {
    title: "HTML5",
    img: new URL("@/assets/images/tech-stack/html.png", import.meta.url).href,
  },
  {
    title: "SASS",
    img: new URL("@/assets/images/tech-stack/sass.png", import.meta.url).href,
  },
  {
    title: "Mysql",
    img: new URL("@/assets/images/tech-stack/mysql.png", import.meta.url).href,
  },
  {
    title: "Postgresql",
    img: new URL("@/assets/images/tech-stack/postgres.png", import.meta.url).href,
  },
  {
    title: "Figma",
    img: new URL("@/assets/images/tech-stack/figma.png", import.meta.url).href,
  },
  {
    title: "AWS",
    img: new URL("@/assets/images/tech-stack/aws.png", import.meta.url).href,
  },
  {
    title: "firebase",
    img: new URL("@/assets/images/tech-stack/firebase.png", import.meta.url).href,
  },
  {
    title: "Nginx",
    img: new URL("@/assets/images/tech-stack/nginx.png", import.meta.url).href,
  },
  {
    title: "Ubuntu",
    img: new URL("@/assets/images/tech-stack/ubuntu.png", import.meta.url).href,
  },
  {
    title: "OpenAI GPT",
    img: new URL("@/assets/images/tech-stack/gpt.png", import.meta.url).href,
  },
  {
    title: "Claude AI",
    img: new URL("@/assets/images/tech-stack/claude.png", import.meta.url).href,
  },
  {
    title: "GitHub Copilot",
    img: new URL("@/assets/images/tech-stack/github-copilot.png", import.meta.url).href,
  },
  {
    title: "Midjourney",
    img: new URL("@/assets/images/tech-stack/mid-journey.png", import.meta.url).href,
  },
  {
    title: "Gemini",
    img: new URL("@/assets/images/tech-stack/gemini.png", import.meta.url).href,
  },
];
const getImageUrl = (path) => {
  return new URL(`${path}`, import.meta.url).href;
};
</script>

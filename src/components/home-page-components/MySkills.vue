<template>
  <div class="app-padding py-15 my-15" :style="style">
    <v-row align="end" justify="center" no-gutters>
      <v-col sm="6" cols="12" class="justify-center text-stroke-1">
        <qube-outline
          class="spin-animation float-right"
          :opacity="0.4"
          :stroke="'#F85C5C'"
          style="width: 15px"
        />
        <common-content-wrapper
          :title="title"
          :subtitle="subtitle"
          :description="description"
        />
      </v-col>
      <v-col
        xs="6"
        sm="3"
        md="2"
        class="justify-center"
        v-for="(skill, i) in tech_stacks"
        :key="i"
        :class="$vuetify.display.mobile ? 'text-center ' : ' text-left'"
      >
        <div
          class="skills-card align-center text-center pa-4 ma-4"
          :style="{ '--data-index': i % 2 == 0 ? i : i / 4 }"
        >
          <div class="mt-4">
            <img
              :src="skill.img"
              :alt="skill.title"
              width="70"
              :style="{ '--data-index': i % 2 == 0 ? i : i / 4 }"
            />
            <p v-html="skill.title"></p>
          </div>
        </div>
      </v-col>
    </v-row>
    <circle-outline
      class="move-animation-2 float-left"
      :opacity="0.8"
      :stroke="'#1F7949'"
      style="width: 15px"
    />
  </div>
</template>
<!--  -->
<style lang="scss" scoped>
.skills-card {
  background-color: rgb(var(--v-theme-fill-2), 0.4);
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
    transform-origin: center;
    filter: grayscale(10);
    animation: img_animate 5s cubic-bezier(0.9, 0.03, 0.69, 0.22)
      calc(3s * var(--data-index)) alternate infinite;
  }
}

// .skills-card:hover {
//   animation: none;
//   img {
//     transform: scale(1.4);
//     filter: none;
//   }
// }

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
<script>
import CommonContentWrapper from "@/components/other-components/CommonContentWrapper";
import QubeOutline from "@/components/other-components/shapes/QubeOutline";
import CircleOutline from "@/components/other-components/shapes/CircleOutline";

export default {
  name: "MySkills",
  components: {
    CommonContentWrapper,
    QubeOutline,
    CircleOutline,
  },
  data() {
    return {
      title: "Tech Stack",
      subtitle: "Power of technology in my hands",
      description: "",
      tech_stacks: [
        {
          title: "Python",
          img: require("@/assets/images/tech-stack/python.png"),
        },
        {
          title: "Django",
          img: require("@/assets/images/tech-stack/django.png"),
        },
        {
          title: "Vue js",
          img: require("@/assets/images/tech-stack/vue.png"),
        },
        {
          title: "Vuetify",
          width: 45,
          img: require("@/assets/images/tech-stack/vuetify.png"),
        },
        {
          title: "Nuxt",
          width: 45,
          img: require("@/assets/images/tech-stack/nuxt.png"),
        },
        {
          title: "Javascript",
          img: require("@/assets/images/tech-stack/js.png"),
        },
        {
          title: "Git",
          img: require("@/assets/images/tech-stack/git.png"),
        },
        {
          title: "React",
          img: require("@/assets/images/tech-stack/react.png"),
        },
        {
          title: "Jquery",
          img: require("@/assets/images/tech-stack/jquery.png"),
        },
        {
          title: "HTML5",
          img: require("@/assets/images/tech-stack/html.png"),
        },
        {
          title: "SASS",
          img: require("@/assets/images/tech-stack/sass.png"),
        },
        {
          title: "Mysql",
          img: require("@/assets/images/tech-stack/mysql.png"),
        },
        {
          title: "Postgresql",
          img: require("@/assets/images/tech-stack/postgres.png"),
        },
        {
          title: "Figma",
          img: require("@/assets/images/tech-stack/figma.png"),
        },
        {
          title: "AWS",
          img: require("@/assets/images/tech-stack/aws.png"),
        },
        {
          title: "firebase",
          img: require("@/assets/images/tech-stack/firebase.png"),
        },
        {
          title: "Nginx",
          img: require("@/assets/images/tech-stack/nginx.png"),
        },
        {
          title: "Ubuntu",
          img: require("@/assets/images/tech-stack/ubuntu.png"),
        },
      ],
    };
  },
  methods: {},
};
</script>

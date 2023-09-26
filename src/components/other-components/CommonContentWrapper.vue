<template>
  <h4 class="fs-nunito section-title splitting " :class="'section-title-' + this.$store.state.currentTheme" data-splitting>
    <span
      v-for="(text, i) in title.split('')"
      :key="i"
      class=""
      :style="{ '--char-index': i }"
      >
        {{ text }}
      </span></h4>
  <h2 class="my-10 text-stroke-1 section-subtitle splitting  text--blocks" data-splitting>
    
    <div  v-for="(subtitletext, i) in subtitle.split('<br/>')" :key="i">
      <span
      v-for="(text, i) in subtitletext.split('')"
      :key="i"
      class="char"
      :style="{ '--char-index': i }"
      >
        {{ text }}
      </span>
    </div>
  </h2>
  <p v-html="description" class="text-stroke-1 section-description"></p>
</template>
<!--  -->
<style lang="scss" scoped>
.section-title-light {
  color: rgb(var(--v-theme-stroke-2), 0.8);
  font-weight: 600;
  font-size: 20px;
}

.section-title-dark {
  color: rgb(var(--v-theme-stroke-1), 0.5);
  font-weight: 500;
  font-size: 20px;
}

.section-title:before {
  border-color: rgb(var(--v-theme-stroke-1), 0.5);
  display: inline-block;
  content: "";
  border-top: 2px solid;
  width: 25px;
  margin: 4px 10px 4px 0px;
  transform: translateY(-50%);
}

.section-subtitle {
  line-height: 140%;
}

.section-description {
  line-height: 190%;
  font-size: 18px;
}
</style>
<!--   -->
<script>
import ScrollOut from "scroll-out";

export default {
  name: "CommonContentWrapper",
  props: ["title", "subtitle", "description"],
  data() {
    return {
      // style: {
      //   height: screen.height - 150 + "px",
      // },
    };
  },
  mounted() {
    ScrollOut({
      targets: "[data-splitting]",
    });
    // this.style = {
    //   height: screen.height - 150 + "px",
    //   // backgroundImage: 'url(' + require("@/assets/" + this.$vuetify.theme.global.name + "/wave-1.svg") + ')'
    // };
  },
  methods: {},
};
</script>

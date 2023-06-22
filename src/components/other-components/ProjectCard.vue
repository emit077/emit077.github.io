<template>
  <a :href="project.working_link" target="_blank" class="text-decoration-none">
    <v-card
      class="project-card d-flex align-center bg-transparent"
      flat
      color=""
      v-bind="props"
    >
      <div class="d-flex align-center h-100">
        <div class="project-content" v-if="!$vuetify.display.mobile">
          <p class="text-h5 text-stroke-4 font-weight-bold p-title un mb-3">
            {{ project.title }}
          </p>
          <small class="fs-roboto-mono project-index"
            >{{ index > 9 ? index : "0" + index }}
            <v-icon size="14" class="right-arrow">mdi-arrow-right</v-icon>
          </small>
        </div>
      </div>
      <!-- <img :src="project.image" class="fproject-img" alt="" height="250"/> -->
      <v-img
        :aspect-ratio="16 / 9"
        cover
        :src="project.image"
        class="project-img"
        :class="$vuetify.display.mobile ? '' : 'ml-15'"
        :min-height="$vuetify.display.mobile ? 225 : ''"
      >
        <div
          class="h-100 d-flex align-center justify-center"
          :class="
            $vuetify.display.mobile
              ? 'project-img-cover-mobile'
              : 'project-img-cover'
          "
        >
          <div class="project-content" v-if="$vuetify.display.mobile">
            <p class="text-h6 text-stroke-4 font-weight-bold p-title un mb-3">
              {{ project.title }}
            </p>
          </div>
        </div>
      </v-img>
    </v-card>
  </a>
</template>
<!--  -->
<style lang="scss" scoped>
$transition_duration: 1s;
.project-card {
  border-radius: 5px;
  .project-index {
    color: #93959a !important;
  }
  .project-content {
    position: absolute;
    z-index: 10;
    text-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.8),
      0px 4px 4px 0px rgba(0, 0, 0, 0.95);
    // transition-duration: $transition_duration;
  }
  .project-img-cover {
    background: linear-gradient(
      79deg,
      rgb(var(--v-theme-surface), 1) 0%,
      rgba(217, 217, 217, 0) 60%
    );
    transition-duration: 10s;
    transform-origin: 0%;
  }

  .project-img-cover-mobile {
    background: radial-gradient(63.80% 66.20% at 46.81% 50.00%, rgba(var(--v-theme-surface), 0.74) 0%, rgba(217, 217, 217, 0.00) 100%);
    // background: linear-gradient(79deg, #1C222B 0%, rgba(217, 217, 217, 0.00) 100%);
    transition-duration: 10s;
    transform-origin: 0%;
  }
  .p-title:after {
    content: "";
    width: 115%;
    height: 2px;
    margin-top: 10px;
    display: block;
    background: rgb(var(--v-theme-stroke-4), 1);
    transition: all 0.3s ease-in-out;
  }
}
.right-arrow {
  position: relative;
  left: 0px;
  -webkit-transition-duration: 500ms;
  -webkit-transition-timing-function: linear;
  -webkit-transition-delay: 0s;
}
.project-card:hover {
  .right-arrow {
    left: 10px;
    color: rgb(var(--v-theme-stroke-3), 1);
    // transform: scale(1.1);
  }
}
</style>
<!--   -->
<script>
export default {
  name: "ProjectsCard",
  props: ["project", "index"],
  data() {
    return {};
  },
  methods: {},
};
</script>

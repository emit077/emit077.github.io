<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-card
        class="mx-auto project-card "
        color="grey-lighten-4"
        v-bind="props"
    >
      <v-img
          :aspect-ratio="16/9"
          cover
          :src="project.image"
          class="project-img"
          :min-height="$vuetify.display.mobile?225:''"
      >
        <v-expand-transition>
          <div
              :class="isHovering?'v-card--reveal':'v-card--shrink'"
              class="project-content d-flex pa-6"
          >
            <div>
              <p class="text-h6 text-stroke-2 font-weight-bold p-title un mb-3"> {{ project.title }} </p>
              <small class="text-stroke-12 font-weight-regular">{{ project.description }}</small>

              <v-row class="external-link w-100 mx-0 px-3 pb-1">
                <v-col cols="8">
<!--                  <div class="tech-uses">-->
<!--                    <img v-for="(tech,i) in project.tech_stack" :key="i" class="mr-2"-->
<!--                         :src="require('@/assets/images/tech-stack/'+tech+'.svg')" alt="external-link" :title="tech" width="25">-->
<!--                  </div>-->
                </v-col>
                <v-col cols="4" class="text-right">
                  <a :href="project.working_link" target="_blank" class="text-decoration-none">
                    <img :src="require('@/assets/images/dark/external-link.svg')" alt="external-link">
                  </a>
                </v-col>
              </v-row>
            </div>
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
</template>
<!--  -->
<style lang="scss" scoped>
$transition_duration: 1s;
.project-card {
  .v-card--shrink {
    height: 100%;
  }

  .v-card--reveal {
    height: 100%;
  }

  .project-content {
    align-items: center;
    bottom: 0;
    justify-content: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    transition-duration: $transition_duration;
    background-color: rgb(var(--v-theme-fill-2), 0.92);
  }

  .p-title,
  .project-content,
  .project-img {
    transition-duration: $transition_duration;
    transform-origin: bottom;
  }

  .p-title:after {
    content: '';
    width: 20px;
    height: 2px;
    margin-top: 3px;
    display: block;
    background: rgb(var(--v-theme-stroke-3), 1);
    transition-duration: 800ms;
  }

  .external-link {
    position: absolute;
    bottom: 0;
    right: 0;
  }

}

.project-card:hover {
  .p-title {
    color: rgb(var(--v-theme-stroke-3)) !important;
  }

  .project-content {
    //background-color: rgb(var(--v-theme-stroke-2), 0.95) !important;
  }

  .project-img {
    transform: scale(1.2);
  }

  .project-content {
    transform: scale(0.84);
  }

  .p-title:after {
     background: rgb(var(--v-theme-stroke-2), 1);
  }
}

</style>
<!--   -->
<script>
export default {
  name: 'ProjectsCard',
  props: ['project'],
  data() {
    return {}
  },
  methods: {}
};
</script>

<template>
  <div class="app-padding py-15 my-15 d-flex align-center" id="my-services">
    <triangle-outline class="spin-animation " style="width: 45px"/>
    <v-row align="end" justify="start" no-gutters>
      <v-col xs="12" sm="6" md="8" class="justify-center text-stroke-1 pr-6 py-6">
        <common-content-wrapper :title="title" :subtitle="subtitle" :description="description"/>
      </v-col>
      <v-col xs="12" sm="6" md="4" class="justify-center" :class="getClassName(i)"
             v-for="(service,i) in service_list" :key="i">
        <div class="service-card justify-center d-flex align-center">
          <div class="d-inline-flex">
            <v-icon class="service-icon" size="50">{{ service.icon }}</v-icon>
            <!--            <img :src="require('@/assets/images/'+service.img)" alt="">-->
          </div>
          <div class="d-inline-flex text-stroke-12 pl-5 text-h6">
            <div v-html="service.name"></div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<!--  -->
<style lang="scss" scoped>

.service-card {
  background-color: rgb(var(--v-theme-fill-2));
  min-height: 250px;
  border-radius: 5px;
  transition-duration: 1s;

  .service-icon {
    transition-duration: 1s;
    color: rgb(var(--v-theme-stroke-3));
  }
}

.service-card:hover {
  transform: scale(1.04);
  background-color: rgb(var(--v-theme-stroke-2));

  .un:after {
    background: rgb(var(--v-theme-fill-3), 1) !important;
  }

  .service-icon {
    color: rgb(var(--v-theme-stroke-1));
  }
}


</style>
<!--   -->
<script>
import CommonContentWrapper from "@/components/other-components/CommonContentWrapper"
import TriangleOutline from "@/components/other-components/shapes/TriangleOutline"

export default {
  name: 'MyServices',
  components: {
    CommonContentWrapper,
    TriangleOutline,
  },
  data() {
    return {
      title: "Services",
      subtitle: "How can i Help you?",
      description: "\n" +
          "Professionally connected with the IT industry for many years. Interested in the entire web development spectrum and working on ambitious projects with positive people.",
      service_list: [
        {
          name: "Web<p class=\"un\">Development</p>",
          img: 'services/pen.svg',
          icon: 'mdi-web'
        },
        {
          name: "Backend<p class=\"un\">Development</p>",
          img: 'services/pen.svg',
          icon: 'mdi-application-cog'
        },
        {
          name: "UI/UX<p class=\"un\">Designing</p>",
          img: 'services/pen.svg',
          icon: 'mdi-fountain-pen-tip'
        },
        {
          name: "Product Design<p class=\"un\">& Development</p>",
          img: 'services/pen.svg',
          icon: 'mdi-monitor-cellphone'
        }
      ]
    }
  },
  methods: {
    getClassName(i) {
      let class_name = ""
      if (this.$vuetify.display.mobile) {
        class_name += "my-6 px-2"
      } else {
        switch (i) {
          case 3:
          case 0:
            class_name += "pl-6 my-6"
            break;
          case 1:
            class_name += "pr-6 my-6"
            break;
          case 2:
            class_name += "px-6 my-6"
            break;
        }
      }
      return class_name
    }
  }
};
</script>

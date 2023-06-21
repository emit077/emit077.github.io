<template>
  <v-footer app absolute class="d-block bg-dark app-padding" v-if="footer">
    <div class="footer-wrapper  ">
      <v-row justify="center" align="center" class="py-10" no-gutters>
      <v-col md="3" cols="12" class="text-center py-5">
        <div class="px-5">
          <router-link to="/" class="router-link">
            <img :src="require('@/assets/images/dark/octa-logo.svg')" alt="logo" class="app-logo">
          </router-link>
          <!--  social link   -->
          <v-divider class="my-4 mx-10" color="rgb(var(--v-theme-stroke-3), 0.3)"></v-divider>
          <div class="d-inline-flex mx-2" v-for="(item,i) in social_contact_list" :key="i">
            <a :href="item.link" target="_blank" class="text-white">
              <v-icon class="social-icon" size="32" color="rgb(var(--v-theme-stroke-3), 0.6)">{{ item.icon }}</v-icon>
            </a>
          </div>
        </div>
      </v-col>
      <!--   quick link   -->
      <v-col md="6" cols="12">
          <li class=" py-1 text-white" v-for="(item,i) in link_list" :key="i"
                 :class="$vuetify.display.mobile?'text-center':'text-left'">
            <span class="cursor-pointer hover-underline" @click.prevent="onLinkClick(item.link)">
            {{ item.title }}
            </span>
          </li>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <p class="text-caption text-center mt-3"> Designed & developed by @Amit Kumar Sahu</p>
  </div>
  </v-footer>
</template>
<style lang="scss" scoped>
.footer-wrapper {
  // background-color: #161B22;
  background-color: #151821;

  .app-logo {
    width: 75%;
  }

  .social-icon {
    color: #ffffff;
    transition-duration: 1s;
  }

  .social-icon:hover {
    transform: scale(1.35);
    color: rgb(var(--v-theme-theme-stroke-3));
  }

  a {
    text-decoration: none;
  }


  .hover-underline:hover {
    text-decoration: underline;

  }
}
</style>

<script>
export default {
  name: "AppFooter",
  data: () => ({
    footer: false,
    link_list: [
      {
        title: "Home",
        link: "app",
        link_page: "home",
      },
      {
        title: "Experience",
        link: "experience",
        link_page: "home",
      },
      {
        title: "Services",
        link: "my-services",
        link_page: "home",
      },
      {
        title: "Portfolio",
        link: "portfolio",
        link_page: "home",
      },
      {
        title: "About Me",
        link: "about-me",
        link_page: "home",
      },
      {
        title: "Contact Me",
        link: "lets-talk",
        link_page: "home",
      },
    ],
  }),
  mounted() {
    setTimeout(() => {
      this.footer = true
    }, 500)
  },
  methods: {},
};
</script>
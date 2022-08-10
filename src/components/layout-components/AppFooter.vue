<template>
  <v-footer app absolute class="footer-wrapper d-block bg-dark"
            v-if="footer">
    <v-row justify="center" class="py-10" no-gutters>
      <v-col md="3" cols="12" class="text-center py-5">
        <div class="px-5">
          <router-link to="/" class="router-link">
            <img :src="require('@/assets/images/dark/logo.svg')" alt="logo" class="app-logo">
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
      <v-col md="6" cols="12" class="d-flex align-center">
        <v-row class="py-3 px-5" no-gutters>
          <v-col md="4" cols="6" class="text-center py-2 text-white" v-for="(item,i) in link_list" :key="i">
            <span class="cursor-pointer" @click.prevent="onLinkClick(item.link)">
            {{ item.title }}
            </span>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-divider></v-divider>
    <p class="text-caption text-center mt-3"> Designed & developed by @Amit Kumar Sahu</p>


  </v-footer>
</template>
<style lang="scss" scoped>
.footer-wrapper {
  background-color: #161B22;

  .app-logo {
    width: 35%;
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


  .l-border {
    height: 100% !important;
    border-left: solid 1px;
    border-color: rgb(var(--v-theme-secondary2), 0.7);
  }

  .link-style {
    list-style: none;
    color: white;
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
    contact_number: "+91 8878957797",
    contact_email: "hello.spidertech@gmail.com",
    contact_list: [
      {
        icon: "mdi-facebook",
        link: "https://www.facebook.com/Spidertechin-109532415172906",
      },
      // {
      //   icon: "mdi-linkedin",
      //   link: "https://www.linkedin.com/in/amit-kumar-sahu-705a06137",
      // },
      {
        icon: "mdi-instagram",
        link: "https://www.instagram.com/spidertech.in/?igshid=YmMyMTA2M2Y%3D",
      },
      {
        icon: "mdi-twitter",
        link: "https://twitter.com/SpiderTech777",
      },
    ],
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
// import axios from "axios";
//
// let CancelToken = axios.CancelToken;
// let source = CancelToken.source();

export default {
  data() {
    return {
      nav_link_list: [
        {
          title: "Home",
          link: "app",
          link_page: "home",
        },
        {
          title: "Services",
          link: "my-services",
          link_page: "home",
        },
        {
          title: "About Me",
          link: "about-me",
          link_page: "home",
        },
        {
          title: "Portfolio",
          link: "portfolio",
          link_page: "home",
        },
        {
          title: "Contact Me",
          link: "lets-talk",
          link_page: "home",
        },
      ],
      social_contact_list: [
        {
          icon: "mdi-github",
          link: "https://github.com/emit077",
        },
        {
          icon: "mdi-linkedin",
          link: "https://www.linkedin.com/in/amit-kumar-sahu-705a06137",
        },
        {
          icon: "mdi-stack-overflow",
          link: "https://stackoverflow.com/users/10175889/amit",
        },
        {
          icon: "mdi-codepen",
          link: "https://codepen.io/emitsahu077",
        },
      ],
      menu_style: {},
      menu: false,
      shado_text_animation: {
        "data-aos": "fade-up",
        "data-aos-delay": "10",
        "data-aos-duration": "1100",
        "data-aos-anchor-placement":"bottom-bottom",
        "offset": 200,
      },
    };
  },
  methods: {
    showSnakeBar(type = "success", text) {
      this.$store.dispatch("setSnackbar", {
        flag: true,
        text,
        color: type,
      });
    },
    //page scroll to the id
    onLinkClick(id) {
      const SCROlL_ELM = document.getElementById(id);
      SCROlL_ELM.scrollIntoView({ behavior: "smooth" });
    },
    //toggle the loading screen
    toggleLoading() {
      this.$store.state.page_loading = true;
      setTimeout(() => {
        this.$store.state.page_loading = false;
      }, 1000);
    },
    //  get image url
    getThemedImageUrl(image_name) {
      return require("@/assets/images/" +
        this.$store.state.currentTheme +
        "/" +
        image_name);
    },
  },
};

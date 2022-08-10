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
        }, {
          title: "Contact Me",
          link: "lets-talk",
          link_page: "home",
          // route_name: 'home',
        },
      ],
      menu_style: {},
      menu: false,
    }
  },
  methods: {
    showSnakeBar(type = 'success', text) {
      this.$store.dispatch('setSnackbar', {
        flag: true,
        text,
        color: type
      })
    },
    //page scroll to the id
    onLinkClick(id) {
      const SCROlL_ELM = document.getElementById(id)
      SCROlL_ELM.scrollIntoView({behavior: "smooth"});
    },
    //toggle the loading screen
    toggleLoading() {
      this.$store.state.page_loading = true
      setTimeout(() => {
        this.$store.state.page_loading = false
      }, 1000)
    },
    //  get image url
    getThemedImageUrl(image_name) {
      return require('@/assets/images/' + this.$store.state.currentTheme + '/' + image_name)
    }
  }
}
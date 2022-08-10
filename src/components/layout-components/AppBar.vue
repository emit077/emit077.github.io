<template>
  <div class="app-padding py-3 d-flex align-center" id="app-bar">
    <div class="d-inline-flex align-center  w-25" v-show="header">
      <router-link to="/" class="router-link">
        <img :src="require('@/assets/images/'+this.$store.state.currentTheme+'/logo.svg')" alt="logo" class="app-logo"
             :width="$vuetify.display.mobile?35:'50'">
      </router-link>
    </div>


    <!--  desktop  -->
    <div class="d-inline-block text-right w-75" v-show="header">
      <div v-if="!$vuetify.display.mobile" class="d-inline-flex">

        <div v-for="(item,i) in nav_link_list" :key="i" class="d-inline-block align-center">
          <span class="ml-8 d-inline-block">
                <span class="text-dot" @click.prevent="onLinkClick(item.link)"> {{ item.title }} </span>
          </span>
        </div>
        <div class="d-inline-block">
          <theme-toggle-btn/>
        </div>
      </div>
      <!-- mobile -->
      <div class="d-inline-flex">
        <menu-toggle-btn class="d-flex"/>
      </div>
    </div>
  </div>
</template>
<!--  style  -->
<style lang="scss" scoped>
#app-bar {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  //height: 100px;
  vertical-align: middle;
  //backdrop-filter: blur(10px);
  transition-duration: 500ms;
  transform-origin: bottom;
  background-color: rgb(var(--v-theme-theme-fill-1));

}

.text-dot {
  cursor: pointer;
  position: relative;
  transition-duration: 0.5s;
  color: rgb(var(--v-theme-stroke-1), 1) !important;
}

.text-dot:hover {
  color: rgb(var(--v-theme-stroke-3), 1) !important;
}

.text-dot:hover::before {
  content: '';
  border-radius: 100%;
  position: absolute;
  background: rgb(var(--v-theme-stroke-2), 1);
  bottom: -10px;
  height: 5px;
  width: 5px;
  left: 50%;
}

</style>
<!--   script   -->
<script>
import ThemeToggleBtn from "@/components/other-components/ThemeToggleBtn"
import MenuToggleBtn from "@/components/other-components/MenuToggleBtn"

export default {
  name: 'LandingPageVue',
  components: {
    ThemeToggleBtn,
    MenuToggleBtn
  },
  data() {
    return {
      header: false,
      bar_height: 0,
      menu_style: {},
      menu: false,
    }
  },
  mounted() {

    const APP_BAR = document.getElementById("app-bar")
    APP_BAR.style.height = this.$vuetify.display.mobile ? '60px' : '130px'
    document.addEventListener('scroll', function () {
      if (document.scrollingElement.scrollTop) {
        if (this.$vuetify.display.mobile)
          APP_BAR.style.height = document.scrollingElement.scrollTop < 50 ? "60px" : "50px"
        else
          APP_BAR.style.height = document.scrollingElement.scrollTop < 50 ? "130px" : "70px"
        APP_BAR.style.backdropFilter = document.scrollingElement.scrollTop > 50 ? "blur(10px)" : "none"
        APP_BAR.style.backgroundColor = document.scrollingElement.scrollTop > 50 ? "rgb(var(--v-theme-surface), 0.6)" : "none"
      }
    }.bind(this));
    setTimeout(() => {
      this.header = true
    }, 500)
  },
  methods: {}
};
</script>

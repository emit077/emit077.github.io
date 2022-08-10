<template>
  <v-menu v-model="menu" transition="slide-y-transition">
    <template v-slot:activator="{ props }">
      <span v-bind="props" class="mt-n2 menu-btn">
        <input type="checkbox" id="menu" v-model="menu">
        <label for="menu" class="icon" @click="toggleMenu"> <div class="menu"></div></label>
      </span>
    </template>
    <div class="text-center py-4 mobile-navigation-menu " :style="menu_style">
      <div v-for="(item,i) in nav_link_list" :key="i" class="align-center">
            <span class="my-2 d-inline-block" v-if="item.link && $route.name==item.link_page">
              <a href="#" @click.prevent="onLinkClick(item.link)" class="text-center text-stroke-1 text-decoration-none">
                <center>
                  <span class=""> {{ item.title }}</span>
                </center>
              </a>
            </span>
      </div>
    </div>
  </v-menu>

</template>
<!--  -->
<style lang="scss" scoped>
.mobile-navigation-menu {
  margin-top: 35px;
  background-color: rgb(var(--v-theme-theme-fill-1), 0.8);
  backdrop-filter: blur(10px);
}


input#menu {
  display: none;
}

.icon {
  background: transparent;
  cursor: pointer;
  display: block;
  height: 24px;
  padding: 10px 2px;
  width: 24px;
}

label.icon {
  position: relative;
  z-index: 200;
}

.icon .menu,
.icon .menu::before,
.icon .menu::after {
  background: #9FB1BD;
  content: '';
  display: block;
  height: 2px;
  position: absolute;
  transition: background ease .4s, top ease .3s .3s, transform ease .3s;
  width: 20px;
}



.menu-btn:hover {
  .menu,
  .menu::before,
  .menu::after {
    background: rgb(var(--v-theme-stroke-3));
  }
}

//.icon:hover .menu,
//.icon:hover .menu::before,
//.icon:hover .menu::after {
//  background: rgb(var(--v-theme-stroke-3));
//}

.icon .menu {
  //left: 18px;
  //top: 27px;
}

.icon .menu::before {
  top: -6px;
}

.icon .menu::after {
  top: 6px;
}

#menu:checked + .icon .menu {
  background: transparent;
}

#menu:checked + .icon .menu::before {
  transform: rotate(45deg);
}

#menu:checked + .icon .menu::after {
  transform: rotate(-45deg);
}

#menu:checked + .icon .menu::before,
#menu:checked + .icon .menu::after {
  top: 0;
  transition: top ease .3s, transform ease .3s .3s;
}

#menu:checked ~ nav {
  width: 200px;
}
</style>
<!--   -->
<script>
export default {
  name: 'ThemeToggleBtn',
  data() {
    return {
      menu: false,
      menu_style: {},
    }
  },
  mounted() {
    this.menu_style = {
      width: screen.width + "px !important",
      height: screen.height + "px !important",
    }
  },
  methods: {
    toggleMenu() {
      this.menu = !this.menu
      // this.$store.dispatch('setCurrentTheme', this.$store.state.currentTheme == 'dark' ? 'light' : 'dark')
    }
  }
};
</script>

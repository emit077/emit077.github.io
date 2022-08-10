<template>
  <div>
    <input type="checkbox" id="theme-toggle" v-model="is_dark" @click="toggleTheme" hidden>
    <label for="theme-toggle" class="sun" :class="$vuetify.display.mobile?'mb-1':'mb-n1'"></label>
  </div>
</template>
<!--  -->
<style lang="scss" scoped>
#theme-toggle + label {
  content: '';
  display: inline-block;
  cursor: pointer;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
}

#theme-toggle:not(:checked) + label {
  background-color: gold;
}

#theme-toggle:checked + label {
  background-color: transparent;
  box-shadow: inset -5px -4px 0px 0px #fff;
}

.sun {
  box-shadow: 0px 0px 17px 1px rgba(231, 166, 26, 0.6);
}

</style>
<!--   -->
<script>
export default {
  name: 'ThemeToggleBtn',
  data() {
    return {
      is_dark: true,
    }
  },
  mounted() {
  },
  methods: {
    toggleTheme() {
      this.$store.dispatch('setCurrentTheme', this.$store.state.currentTheme == 'dark' ? 'light' : 'dark')
    }
  }
};
</script>

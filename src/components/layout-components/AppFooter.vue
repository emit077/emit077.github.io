<template>
  <v-footer
    app
    absolute
    class="d-block bg-dark app-padding bg-transparent pa-0"
    v-if="footer"
  >
    <div class="dotted-spaced">
      <p class="text-caption text-center py-3">
        Designed & developed by @Amit Kumar Sahu
      </p>
    </div>
  </v-footer>
</template>
<style lang="scss" scoped>
.dotted-spaced {
  background-color: rgb(var(--v-theme-stroke-2));
}
</style>
<script>
export default {
  name: "AppFooter",
  data: () => ({
    footer: true,
  }),
  mounted() {
    // setTimeout(() => {
    //   this.footer = true;
    // }, 500);
  },
  methods: {},
};
</script>

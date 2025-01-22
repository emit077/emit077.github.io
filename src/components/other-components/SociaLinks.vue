<template>
  <div class="d-inline-flex mx-3" v-for="(item, i) in social_contact_list" :key="i">
    <a :href="item.link" target="_blank" class="text-white">
      <v-icon class="social-icon" size="35">{{ item.icon }}</v-icon>
    </a>
  </div>
</template>
<style lang="scss" scoped>
.social-icon {
  color: rgb(var(--v-theme-primary));
  transition-duration: 1s;
}
.social-icon:hover {
  transform: scale(1.4);
}

a {
  text-decoration: none;
}
.hover-underline:hover {
  text-decoration: underline;
}
</style>

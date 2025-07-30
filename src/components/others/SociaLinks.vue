<template>
  <div class="d-inline-flex mx-2" v-for="(item, i) in social_contact_list" :key="i">
    <a :href="item.link" target="_blank" class="text-white">
      <v-icon class="social-icon" size="32">{{ item.icon }}</v-icon>
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
<script setup>
const social_contact_list = [
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
];
</script>

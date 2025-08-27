<template>
  <section class="hero">
    <div class="bg-shapes" aria-hidden="true">
      <!-- SVG for animated shapes (see below for inline SVG + CSS anim) -->
      <svg width="100%" height="100%">
        <circle cx="70" cy="70" r="32" class="bg-circle" />
        <rect x="80%" y="5%" width="24" height="24" class="bg-rect" />
        <!-- Add more shapes or animate with CSS/GSAP as needed -->
      </svg>
    </div>
    <div class="content">
      <p class="intro">👋 Hi, I'm</p>
      <h1 class="name">
        Amit Sahu
        <span class="circle-anim"></span>
      </h1>
      <div class="titles">
        <!-- <span class="badge badge-designer">Web Designer</span> -->
        <span class="badge badge-dev">
          <Transition name="title-fade">
            <!-- <span :key="currentTitle">{{ currentTitle }}</span> -->
            <span>{{ currentTitle }}</span>
          </Transition>
        </span>
      </div>
      <p class="summary py-5">
        I craft stunning & performant web experiences specializing in fullstack
        development and UI/UX. I'm passionate about building elegant, professional
        interfaces and seamless websites.
      </p>
      <a href="#portfolio" class="cta-btn">See My Work</a>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
const titles = ["Fullstack Developer 👨🏻‍💻", "UI/UX Expert 🎨", "Tech Enthusiast 🚀"];
const currentTitle = ref(titles[0]);
let idx = 0,
  timer;
const rotateTitle = () => {
  idx = (idx + 1) % titles.length;
  currentTitle.value = titles[idx];
};
onMounted(() => {
  timer = setInterval(rotateTitle, 2500);
});
onBeforeUnmount(() => {
  clearInterval(timer);
});
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 700px;
  padding: 2rem 1rem;
  color: rgb(var(--v-theme-primary));
  display: flex;
  align-items: center;
  justify-content: center;
}
.bg-shapes {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}
.bg-circle {
  fill: #2ec4f144;
  animation: bgFloat 6s ease-in-out infinite alternate;
}
.bg-rect {
  fill: #e5ffce99;
  rx: 7;
  animation: bgFloat2 10s infinite alternate;
}
@keyframes bgFloat {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(20px);
  }
}
@keyframes bgFloat2 {
  0% {
    transform: scale(1) translateX(0);
  }
  100% {
    transform: scale(1.12) translateX(-16px);
  }
}
.content {
  z-index: 2;
  text-align: center;
  margin: 0 auto;
}
.intro {
  font-size: 1.2rem;
  color: #2ec4f1;
  font-weight: 600;
  margin-bottom: 0.3em;
  animation: fadeInDown 0.9s;
}
.name {
  font-size: clamp(2.4rem, 6vw, 3.6rem);
  font-weight: 900;
  letter-spacing: -1.2px;
  margin-bottom: 0.6rem;
  position: relative;
  animation: fadeIn 1s;
}
.circle-anim {
  display: inline-block;
  position: absolute;
  top: -14px;
  right: -36px;
  height: 22px;
  width: 22px;
  border-radius: 50%;
  background: linear-gradient(135deg, #2ec4f1 60%, #ffb300 100%);
  animation: bounce 1.7s infinite alternate;
}
.titles {
  margin-top: 0.35em;
}
.titles .badge {
  display: inline-block;
  padding: 0.35em 1em;
  margin: 0 0.5em 0.5em 0;
  font-size: 1.04rem;
  border-radius: 999px;
  font-weight: 600;
  animation-delay: 2s;
  animation: slideInLeft 1.2s;
}
.badge-designer {
  background: #7047eb22;
  color: #7047eb;
  border: 1px solid #7047eb;
}
.badge-dev {
  background: #43c97f22;
  color: #43c97f;
  border: 1px solid #43c97f;
}

.summary {
  margin: 1em 0 1.3em;
  font-size: 1.02rem;
  color: rgb(var(--v-theme-primary));
  line-height: 1.45;
  animation: fadeInUp 1.5s;
}

.cta-btn {
  display: inline-block;
  padding: 0.4em 1.8em;
  background: linear-gradient(90deg, #2ec4f1 40%, #43c97f 100%);
  color: #181a1b;
  border-radius: 2em;
  font-weight: 700;
  font-size: 1.11rem;
  transition: background 0.23s;
  box-shadow: 0 4px 20px 0 #2ec4f155;
  animation: pulse 2s infinite alternate;
  text-decoration: none;
  margin-top: 0.6em;
}
@media (max-width: 450px) {
  .name {
    font-size: 2.2rem;
  }
  .summary {
    font-size: 0.94rem;
  }
  .content {
    padding: 0 0.3rem;
  }
  .titles .badge {
    margin-bottom: 0.35em;
  }
}
@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-9px);
  }
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes slideInLeft {
  from {
    /* transform: translateX(-50px); */
    opacity: 0;
  }
  to {
    /* transform: none; */
    opacity: 1;
  }
}
@keyframes fadeInDown {
  from {
    transform: translateY(-32px);
    opacity: 0;
  }
  to {
    transform: none;
    opacity: 1;
  }
}
@keyframes fadeInUp {
  from {
    transform: translateY(28px);
    opacity: 0;
  }
  to {
    transform: none;
    opacity: 1;
  }
}
@keyframes pulse {
  0% {
    box-shadow: 0 4px 30px 0 #2ec4f180;
  }
  100% {
    box-shadow: 0 4px 20px 0 #2ec4f122;
  }
}
.title-fade-enter-active,
.title-fade-leave-active {
  transition: opacity 0.6s;
}
.title-fade-enter-from,
.title-fade-leave-to {
  opacity: 0;
}
</style>

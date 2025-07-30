<template>
  <div class="d-flex justify-center align-center" style="min-height: 700px">
    <div class="py-10 my-15">
      <div class="d-flex justify-center align-center">
        <div>
          <h2 class="sub-hero-text font-rubik-one text-center mb-5">
            <span class="text-color-1-lighten-4">Hey</span> I'm
          </h2>
          <h1 class="hero-title-text font-rubik-one text-center">
            Amit<span class="pl-5">Sahu</span>
            <div class="circle">
              <div class="inner-circle"></div>
            </div>
          </h1>
        </div>
      </div>
      <v-container grid-list-xs class="pt-0">
        <div class="font-rubik-one hero-sub-title-text text-center">
          a web
          <div class="position-relative d-inline px-2">
            <div class="designer-wrapper">
              <div class="cube cube-1"></div>
              <div class="cube cube-2"></div>
              <div class="cube cube-3"></div>
              <div class="cube cube-4"><MousePointer class="mouse-pointer" /></div>
            </div>
            <span class="designe-text">Designer</span>
          </div>

          <!-- <div class="position-relative d-inline">
            <MousePointer class="mouse-pointer" />
          </div> -->
          and <span> {{ devText }}</span>
        </div>
        <div class="v-row justify-center">
          <p
            class="font-weight-medium text-center text-primary pt-10 v-col-md-8 v-col-sm-12"
          >
            Passionate about visual design and technology. I specialized in fullstack
            development and UI/UX design and my passion is about building elegant and
            professional user interfaces and websites.
          </p>
        </div>
      </v-container>
    </div>
  </div>
</template>
<style lang="scss" scoped>
$circleSize: 2vw;

.sub-hero-text {
  font-size: calc(100% + 1vw);
  font-weight: 500;
  color: rgb(var(--v-theme-primary));
  padding-left: 2.2vw;
}
.hero-title-text {
  font-size: calc(100% + 8vw);
  font-weight: bolder;
  color: rgb(var(--v-theme-primary));
  line-height: 115%;
}
.hero-sub-title-text {
  font-size: calc(100% + 1.1vw);
  font-weight: normal;
  line-height: 150%;
  color: rgb(var(--v-theme-primary));

  span:nth-of-type(1) {
    color: rgb(var(--v-theme-color-1));
    display: inline-block;
  }
  .designe-text {
    color: rgb(var(--v-theme-color-3-lighten-1)) !important;
    // -webkit-text-fill-color: rgb(var(--v-theme-background));
    // -webkit-text-stroke: 0.18vw rgb(var(--v-theme-color-3-lighten-1));
    padding: 0px 8px;
  }
}
.designer-wrapper {
  border: solid 2px rgb(var(--v-theme-color-3-lighten-4), 0.5);
  display: inline-block;
  position: absolute;
  animation: expand-box 6s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;

  .cube {
    height: 8px;
    width: 8px;
    background-color: rgb(var(--v-theme-color-3-lighten-4), 0.5);
    position: absolute;
  }
  .cube-1 {
    top: -4px;
    left: -4px;
  }
  .cube-2 {
    top: -4px;
    right: -4px;
  }
  .cube-3 {
    bottom: -4px;
    left: -4px;
  }
  .cube-4 {
    bottom: -4px;
    right: -4px;
  }
}
.circle {
  height: $circleSize;
  width: $circleSize;
  background-color: rgb(var(--v-theme-color-2));
  border-radius: 50%;
  display: inline-block;
  //   margin-left: -10px;
  position: relative;
  animation: move 8s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;

  .inner-circle {
    height: calc($circleSize / 4);
    width: calc($circleSize / 4);
    background-color: rgb(var(--v-theme-background));
    border-radius: 50%;
    z-index: 100;
    margin: 5px;
  }
}
.mouse-pointer {
  position: absolute;
  top: -2px;
  left: -2px;
}
@keyframes expand-box {
  0% {
    height: 0;
    width: 0;
    opacity: 1;
  }
  100% {
    height: 0;
    width: 0;
    opacity: 0;
  }
  85% {
    opacity: 1;
  }
  25%,
  75% {
    height: calc(100% + 0.5vw);
  }
  50% {
    height: calc(100% + 0.5vw);
    width: calc(87%);
  }
}
@keyframes move {
  0%,
  20% {
    left: -15px;
    transform: rotate(0deg);
  }
  50% {
    left: 20px;
    transform: rotate(360deg);
  }
  100% {
    left: -15px;
    transform: rotate(0deg);
  }
}
</style>

<script setup>
let devText = "< Fullstack developer />";
</script>

<template>
    <svg width="87" height="65" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="path-1-inside-1_1126_54" :fill="fill_color">
        <path d="M30.7233 41.6803C26.6819 38.9599 23.6189 35.0156 21.9841 30.4263C20.3493 25.8371 20.2287 20.8446 21.64 16.1818C23.0513 11.5189 25.9202 7.43131 29.8256 4.51894C33.731 1.60657 38.4672 0.0228482 43.3389 0.000245197C48.2106 -0.0223578 52.9612 1.51735 56.8934 4.39336C60.8257 7.26936 63.7324 11.3302 65.1869 15.9797C66.6415 20.6293 66.5672 25.6227 64.975 30.2269C63.3828 34.8311 60.3566 38.8037 56.3406 41.5615L53.4224 37.3118C56.5297 35.1781 58.8711 32.1045 60.103 28.5421C61.3349 24.9797 61.3923 21.1163 60.267 17.5189C59.1416 13.9214 56.8926 10.7795 53.8501 8.55433C50.8077 6.32912 47.1321 5.13783 43.3628 5.15531C39.5935 5.1728 35.929 6.39815 32.9074 8.65149C29.8857 10.9048 27.666 14.0675 26.574 17.6752C25.4821 21.2829 25.5754 25.1456 26.8403 28.6964C28.1052 32.2472 30.475 35.299 33.602 37.4038L30.7233 41.6803Z"/>
        </mask>
        <path d="M30.7233 41.6803C26.6819 38.9599 23.6189 35.0156 21.9841 30.4263C20.3493 25.8371 20.2287 20.8446 21.64 16.1818C23.0513 11.5189 25.9202 7.43131 29.8256 4.51894C33.731 1.60657 38.4672 0.0228482 43.3389 0.000245197C48.2106 -0.0223578 52.9612 1.51735 56.8934 4.39336C60.8257 7.26936 63.7324 11.3302 65.1869 15.9797C66.6415 20.6293 66.5672 25.6227 64.975 30.2269C63.3828 34.8311 60.3566 38.8037 56.3406 41.5615L53.4224 37.3118C56.5297 35.1781 58.8711 32.1045 60.103 28.5421C61.3349 24.9797 61.3923 21.1163 60.267 17.5189C59.1416 13.9214 56.8926 10.7795 53.8501 8.55433C50.8077 6.32912 47.1321 5.13783 43.3628 5.15531C39.5935 5.1728 35.929 6.39815 32.9074 8.65149C29.8857 10.9048 27.666 14.0675 26.574 17.6752C25.4821 21.2829 25.5754 25.1456 26.8403 28.6964C28.1052 32.2472 30.475 35.299 33.602 37.4038L30.7233 41.6803Z" stroke="white" stroke-width="18" mask="url(#path-1-inside-1_1126_54)"/>
        <!-- <ellipse cx="35.7645" cy="28.8758" class="eye-right" rx="2.91391" ry="2.91391" fill="red"/> -->
        <!-- <ellipse cx="50.0633" cy="28.8758" class="eye-left" rx="2.91391" ry="2.91391" fill="red"/> -->
        <circle id="eye-right" cx="50" cy="28.91391" r="3.4" :fill="fill_color" stroke="black" stroke-width="1px" />
        <circle id="eye-left" cx="36" cy="28.91391" r="3.4" :fill="fill_color" stroke="black" stroke-width="1px" />
        <rect  x="51.9131" y="37.0848" width="34.4371" height="4.76821" rx="2.3841" :fill="fill_color"/>
        <!-- <rect x="30" y="46" class="bar" width="4.77" height="26.49" rx="2.385" fill="fill_color"/> -->
        <!-- <rect x="52" y="46" class="bar" width="4.77" height="26.49" rx="2.385" fill="fill_color"/> -->
        <!-- <rect x="41" y="46" class="" width="4.77" height="34.44" rx="2.385" fill="fill_color"/> -->
        <rect  y="37.0848" width="34.4371" height="4.76821" rx="2.3841" :fill="fill_color"/>
    <!-- <path d="M10.958 57.138H7.066L6.422 59H4.364L7.878 49.214H10.16L13.674 59H11.602L10.958 57.138ZM10.426 55.57L9.012 51.482L7.598 55.57H10.426ZM39.6415 49.228V59H37.6815V52.644L35.0635 59H33.5795L30.9475 52.644V59H28.9875V49.228H31.2135L34.3215 56.494L37.4295 49.228H39.6415ZM57.5393 49.228V59H55.5793V49.228H57.5393ZM80.1258 49.228V50.81H77.5218V59H75.5618V50.81H72.9578V49.228H80.1258Z" :fill="fill_color"/> -->
    <!-- <path d="M41 37C45.1005 37 41.6495 37 45.75 37" id="mouth" stroke="white" stroke-width="2" stroke-linecap="round"/> -->
</svg>
</template>
    
    <script>
    import { mapGetters } from "vuex";
    export default {
      name: "CircleOutline",

      computed: {
        ...mapGetters({
          getCurrentTheme: "getCurrentTheme",
        }),
    },
    data() {
        return {
            fill_color:"#fff",
        };
    },
    setup() {
        debugger;
            
            // const eyeLeftInner = document.querySelector('.eye-left-inner');
            // const innerEyeWidth = eyeLeftInner.getBoundingClientRect().width;
            // const innerEyeHeight = eyeLeftInner.getBoundingClientRect().height;

            // const pupilWidth = eyeLeftPupil.getBoundingClientRect().width;
            // const pupilHeight = eyeLeftPupil.getBoundingClientRect().height;
            const xMovement = 7.5;
            const yMovement = 1;
            

            window.addEventListener('mousemove', updateEyePosition);

            function updateEyePosition(event) {
            const posX = ((event.clientX / document.body.clientWidth) * 2 - 1) * xMovement;
            const posY = ((event.clientY / document.body.clientHeight) * 2 - 1) * yMovement;
            
            const eyeRightPupil = document.getElementById('eye-right');
            const eyeLeftPupil = document.getElementById('eye-left');
            const mouthElm = document.getElementById('mouth');
            eyeLeftPupil.style.transform = `translate(${posX}px, ${posY}px)`;
            eyeRightPupil.style.transform = `translate(${posX}px, ${posY}px)`;
            // mouthElm.style.transform = `translate(${posX+2}px, ${posY+2}px)`;
            }
        
    },
    };
    </script>

<style scoped>
.bar {
  animation-name: pulse;
  position: absolute;
  animation-duration: 5s;
  animation-iteration-count: infinite;
}
@keyframes pulse {
  0% {
    left: 1px;
  }
  10% {
    height: 10px;
  }
  30% {
    height: 20px;
  }
  50% {
    height: 26px;
  }
  60% {
    height: 20px;
  }
  80% {
    height: 10px;
  }
  100% {
    height: 1px;
  }
}
</style>
    
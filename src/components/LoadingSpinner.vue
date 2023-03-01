<template>
  <div v-if="loading">
    <div class="loading-spinner">
      <lottie
        :width="135"
        :height="135"
        :options="lottieOptions"
        @animCreated="handleAnimation"
      />
      <p>{{ loadingText }}</p>
    </div>
  </div>
</template>

<script>
import * as animationData from "@/assets/data/PC_preloader.json";
import lottie from "vue-lottie";

export default {
  components: {
    lottie,
  },
  data() {
    return {
      loading: false,
      loadingText: '',
      anima: null,
      lottieOptions: {
        animationData: animationData.default,
        container: "", // Dom Element
        renderer: "svg",
        loop: true,
        autoplay: true,
      },  
    };
  },

  mounted() {
    this.$nextTick(() => {
      this.start();
      
      setTimeout(() => {
        this.finish()  
      }, 5000);
      
    })    
  },

  methods: {
    start() {
      this.loading = true
      this.loadingText = "언젠간 끝이날거에요... 좀만 기둘.."
      console.log('loading...')
    },
    finish() {
      this.loading = false
      console.log('loading...bye')
    },

    handleAnimation(anima) {
      this.anima = anima
    },
  },
};
</script>

<style lang="scss" scoped>
.loading-spinner {
  z-index: 100;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  display: block;
  
}
</style>
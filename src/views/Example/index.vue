<template>
  <div>
    <BaseButton @click="handleClick" label="Click!!!" />
    <!-- images -->
    <div class="flex text-center">
      <figure style="padding: 1rem 0">
        <figcaption>png, 이미지 사용</figcaption>
        <img alt="Vue logo" src="@/assets/images/logo.png" width="100px" />
        <pre>@/assets/images/logo.png</pre>
      </figure>

      <hr />

      <figure style="padding: 1rem 0">
        <figcaption>SVG 컴포넌트</figcaption>
        <SvgImg />
        <pre>import SvgImg from '블라블라.svg'</pre>
      </figure>

      <figure style="padding: 1rem 0">
        <figcaption>SVG inline, sprite</figcaption>
        <img svg-inline src="@/assets/images/pig7.svg" />
        <pre>@/assets/images/pig7.svg</pre>
      </figure>

      <figure style="padding: 1rem 0">
        <figcaption>Image Css, background-image:url()</figcaption>
        <span class="bg-image"></span>
        <pre></pre>
      </figure>
    </div>
    <ToggleBox message="하하핳하" />
  </div>
</template>

<script>
import SvgImg from '@/assets/images/pig7.svg';
import BaseButton from '@/components/Buttons/BaseButton.vue';
import ToggleBox from '@/components/ToggleBox.vue';

export default {
    name: "Example",
    data() {
        return {};
    },
    mounted() {
    },
    methods: {
      handleClick(el){
        alert(`Hello, Button!`)
      }
    },
    components: { SvgImg, ToggleBox, BaseButton }
};
</script>

<style lang="scss" scoped>
.bg-image {
  display: inline-block;
  width: 120px;
  height: 120px;
  background-image: url(@/assets/images/pig7.png);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
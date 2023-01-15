<template>
  <div class="flex flex-col align-center">
    <button @click="goBack" class="btn btn-light">뒤로가기</button>

    <section class="flex text-center">
      <figure style="padding: 1rem 0">
        <figcaption>png, 정적이미지</figcaption>
        <img alt="Vue logo" src="../../public/logo.png" width="100px" />
        <pre>/public/logo.png</pre>
      </figure>

      <hr />

      <figure style="padding: 1rem 0">
        <figcaption>png, 동적이미지</figcaption>
        <img :src="require('@/assets/images/logo.png')" width="100px" />
        <pre>@/assets/images/logo.png</pre>
      </figure>

      <hr />

      <figure style="padding: 1rem 0">
        <figcaption>SVG 컴포넌트 사용</figcaption>
        <SvgImg class="svg-img" />
        <pre>import SvgImg from '...'</pre>
      </figure>
    </section>

    <hr />

    <button class="btn btn-light" id="show-modal" @click="showModal = true">
      Modal Open
    </button>

    <Modal v-if="showModal" @close="showModal = false" title="">
      <template #body>Modal Body Slot</template>
    </Modal>

    <hr />

    <form @submit="onSubmit">
      <!-- baseInput -->
      <div v-for="item in forms" :key="item.id" class="fieldset">
        <label :for="item.id">{{ item.label }}</label>
        <div class="form-input">
          <input
            v-model="item.name"
            :id="item.id"
            :placeholder="item.placeholder"
            :required="item.required"
            type="text"
            autofocus="true"
          />
        </div>
        <div v-if="errors.length" class="text-error text-sm mt-1">
          <p v-for="error in errors" :key="error">{{ error }}</p>
        </div>
      </div>

      <button type="submit">확인</button>
      <button type="reset">reset</button>
    </form>
  </div>
</template>

<script>
  import SvgImg from '@/assets/images/vue.svg';
  import Modal from '@/components/Modal.vue';

  export default {
    name: 'Sample',
    components: { SvgImg, Modal },
    data() {
      return {
        showModal: false,

        errors: '',
        forms: [
          {
            name: null,
            id: 'username',
            label: '사용자명',
            placeholder: '입력하세요',
            required: true,
          },
          {
            name: null,
            id: 'age',
            label: '나이',
            placeholder: '입력하세요',
            required: false,
          },
        ],
      };
    },
    computed: {},

    methods: {
      goBack() {
        window.history.length > 1
          ? this.$router.go(-1)
          : this.$router.push('/');
      },

      // forms
      onSubmit(e) {
        
        this.errors = [];
        
        if (this.forms.name === 'test') {
          alert('success')
          return true;
        } else {
          this.errors.push('기억못함?ㅋ');
        }

        e.preventDefault();
      },
    },
  };
</script>

<style lang="scss" scoped>
  .svg-img {
    width: 100px;
    height: 100px;
  }
</style>

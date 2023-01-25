<template>
  <div class="flex flex-col align-center">
    <button @click="goBack" class="btn btn-light">뒤로가기</button>

    <section class="flex text-center">
      <figure style="padding: 1rem 0">
        <figcaption>png, 정적이미지</figcaption>

        <img alt="Vue logo" src="../../../public/logo.png" width="100px" />

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
        <figcaption>SVG 컴포넌트로만 사용</figcaption>
        
        <SvgImg class="svg-img" />

        <pre>import SvgImg from '...'</pre>
      </figure>
    </section>

    <hr />

    <button class="btn btn-light" id="show-modal" @click="showModal = true">
      Modal Open
    </button>

    <Modal v-if="showModal" @close="showModal = false" title="aaa">
      <template #body>
        <div>
          sadkdfkdlfj
        </div>
      </template>
    </Modal>

    <hr>

    <div class="tab-wrap">
      <ul class="tabs">
        <TabItem v-for="item in list" v-bind="item" :key="item.id" v-model="currentID" />
      </ul>
      <div class="tab-content">
        <transition>
          <section class="item" :key="currentID">
            <router-view>
              {{ current.content }}
            </router-view>
          </section>
        </transition>
      </div>
    </div>

    <div style="display: flex;">
      <div style="margin: 10px;">
        <TableSt01 class="style-01"
          :columns="columns"
          :rows="rows"/>
      </div>
      <div style="margin: 10px;">
        <TableSt01 class="style-01 tb-small" />
      </div>
    </div>

    <!-- <div style="display: flex;">
      <div style="margin: 10px;">
        <TableSt02 class="style-02" />
      </div>
      <div style="margin: 10px;">
        <TableSt02 class="style-02 tb-small" />
      </div>
    </div> -->


    <section class="my-5 flex">
      <div class="w-50 flex flex-col align-center mx-3" style="gap: 1rem">
        <BaseButton label="Button" />
        <BaseButton label="Button" />
        <BaseButton label="Button" block />
      </div>
      <div class="w-50 flex flex-col align-center mx-3" style="gap: 1rem">
        <BaseButton label="Button" />
      </div>
    </section>

    <hr />

    <section class="my-5 flex">  
      <div class="flex flex-col mx-3" style="gap: 1rem">
        <TextField v-model="text0" />
        <TextField v-model="text1" message="일반 메세지 출력....아 없나?" align="right" />
        <TextField :value="text2" invalid="돈이 좀 부족해요.. 😰" message="원" />
        <TextField value="text3" disabled />
      </div>
      <div class="flex flex-col mx-3" style="gap: 1rem">
        <TextField>
          <template #prefix><SvgImg /></template>
        </TextField>
      </div>
    </section>

  </div>
</template>

<script>
  import SvgImg from '@/assets/images/vue.svg';
  import Modal from '@/components/Modal.vue';
  import TabItem from '@/components/Tabs/Tab.vue';
  import TableSt01 from '@/components/TableSt01.vue';
  // import TableSt02 from '@/components/TableSt02.vue'
import TextField from '@/components/Forms/TextField.vue';
import BaseButton from '@/components/Buttons/BaseButton.vue';

  export default {
    name: 'Example',
    components: { SvgImg, Modal, TabItem, TableSt01, TextField, BaseButton },
    data() {
      return {
        showModal: false,
        text0: '',
        text1: 'v-model',
        text2: 'Invalid State',
        text3: '',

        currentID: 1,
        list: [
          { id: 1, label: 'Tab Test', content: '콘텐츠 테스트', path: '' },
          { id: 2, label: 'Tab2', content: '콘텐츠2', path: '' },
          { id: 3, label: 'Tab3', content: '콘텐츠3', path: '' },
        ],

        columns: [
          {
            label: 'name',
            field: 'name',
          },
          {
            label: 'age',
            field: 'age',
            type: 'number',
          },
          {
            label: 'percent',
            field: 'score',
            type: 'percentage',
          },
        ],
        rows: [
          { id: 1, name: "john", age: "20", score: "10.5" },
          { id: 2, name: "jay", age: "20", score: "23.5" },
          { id: 3, name: "jun", age: "20", score: "12.5" },
        ],

      };
    },
    computed: {
      current() {
        return this.list.find(el => el.id === this.currentID) || {}
      }
    },

    methods: {
      goBack() {
        window.history.length > 1
          ? this.$router.go(-1)
          : this.$router.push('/');
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

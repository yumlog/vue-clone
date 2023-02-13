<template>
  <div class="flex flex-col align-center">
    <section>
      <h5>Headings</h5>
      <div class="my-2">
        <h1>H1 - 보다 당신의 일에 가깝게</h1>
        <h2>H2 - 보다 당신의 일에 가깝게</h2>
        <h3>H3 - 보다 당신의 일에 가깝게</h3>
        <h4>H4 - 보다 당신의 일에 가깝게</h4>
        <h5>H5 - 보다 당신의 일에 가깝게</h5>
        <h6>H6 - 보다 당신의 일에 가깝게</h6>
      </div>
      <hr>
      <div class="my-2 flex flex-col">
        <p class="text-lg">Body1 - 보다 당신의 일에 가깝게</p>
        <p class="text-md">Body2 - 보다 당신의 일에 가깝게</p>
        <p class="text-sm">Body3 - 보다 당신의 일에 가깝게</p>
        <p class="text-xs">Body4 - 보다 당신의 일에 가깝게</p>
      </div>
    </section>

    <section>
      <div>
        <h5>Button - Colors</h5>
        <div class="flex align-center" style="gap: 1rem">
          <BaseButton color='primary-1' label="Button" />
          <BaseButton color='primary-2' label="Button" />
          <BaseButton color='primary-3' label="Button" />
          <BaseButton color='primary-4' label="Button" />
          <BaseButton color='primary-5' label="Button" />
          <BaseButton color='gray' label="Button" />
          <BaseButton color='light' label="Button" />
          <BaseButton color='light' label="Disabled" disabled />
        </div>
      </div>
      <div>
        <h5>Button - Outline</h5>
        <div class="flex align-center" style="gap: 1rem">
          <BaseButton color='outline-primary-1' label="Button" />
          <BaseButton color='outline-primary-2' label="Button" />
          <BaseButton color='outline-primary-3' label="Button" />
          <BaseButton color='outline-primary-4' label="Button" />
          <BaseButton color='outline-primary-5' label="Button" />
          <BaseButton color='outline-gray' label="Button" />
          <BaseButton color='outline-light' label="Button" />
        </div>
      </div>
      <div>
        <h5>Button Size</h5>
        <div class="flex align-center" style="gap: 1rem">
          <BaseButton label="xl" size="xl" />
          <BaseButton label="lg" size="lg" />
          <BaseButton label="Default" />
          <BaseButton label="md" size="md" />
          <BaseButton label="sm" size="sm" />
          <BaseButton label="xs" size="xs" />
        </div>
      </div>

      <div>
        <h5>Button Type</h5>
        <div class="flex align-center" style="gap: 1rem">
          <BaseButton label="Block Button" block />
          <BaseButton label="Prefix + Label">
            <template #prefix>
              <SvgImg />
            </template>
          </BaseButton>
          <BaseButton label="Suffix + Label">
            <template #suffix>
              <SvgImg />
            </template>
          </BaseButton>
          <BaseButton>
            <template #prefix>
              <SvgImg />
            </template>
            <template #suffix>
              <SvgImg />
            </template>
          </BaseButton>
          <!-- <BaseButton label="Suffix" suffix  /> -->
        </div>
      </div>
    </section>



    <section class="flex" style="gap: 2rem;">
      <div class="flex flex-col w-50" style="gap: 1rem">
        <h5>TextField</h5>
        
        <TextField v-model="text0" placeholder="Default Input" />
        <TextField value="9,893,573,157" unit="원" placeholder="Default Input" message="구십팔억구천삼백오십칠만삼천백오십칠원" />
        <TextField :value="text2" invalid="돈이 좀 부족해요.. 😰" message="원" />
        <TextField value="text3" disabled />
        <TextField type="search" value="text3" />
        <TextField prefix suffix>
          <template #prefix>
            <SvgImg />
          </template>
          <template #suffix>
            <SvgImg />
          </template>
        </TextField>
      </div>
      <div class="flex flex-col w-50" style="gap: 1rem">
        <h5>Dropdown</h5>
        <p>대기</p>
      </div>
    </section>

    <section class="flex" style="gap: 2rem;">
      <div class="flex flex-col w-50" style="gap: 1rem">
        <h5>Checkbox & RadioButton</h5>
        <Checkbox label="checkbox label" />  
      </div>
      
    </section>

    <section class="flex text-center">
      <figure style="padding: 1rem 0">
        <figcaption>png, 정적이미지</figcaption>
        <img alt="Vue logo" src="../../../public/images/logo.png" width="100px" />
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
        <figcaption>SVG 컴포넌트</figcaption>
        <SvgImg />
        <pre>import SvgImg from '블라블라.svg'</pre>
      </figure>

      <figure style="padding: 1rem 0">
        <figcaption>SVG inline, sprite</figcaption>
        <img svg-inline src="@/assets/images/pig7.svg" />
        <pre>@/assets/images/pig7.svg</pre>
      </figure>
    </section>

    <section>
      <button class="btn btn-outline-gray" id="show-modal" @click="showModal = true">
        Modal Open
      </button>

      <Modal v-if="showModal" @close="showModal = false" title="aaa">
        <template #body>
          <div>
            sadkdfkdlfj
          </div>
        </template>
      </Modal>
    </section>


    <section class="tab-wrap">
      <ul class="tabs">
        <TabItem v-for="item in list" v-bind="item" :key="item.id" v-model="currentID" />
      </ul>
      <div class="tab-content">
        <transition>
          <div class="item" :key="currentID">
            <router-view>
              {{ current.content }}
            </router-view>
          </div>
        </transition>
      </div>
    </section>

    <section style="display: flex;">
      <div style="margin: 10px;">
        <TableSt01 class="style-01" :columns="columns" :rows="rows" />
      </div>
      <div style="margin: 10px;">
        <TableSt01 class="style-01 tb-small" />
      </div>
    </section>

    <!-- <div style="display: flex;">
      <div style="margin: 10px;">
        <TableSt02 class="style-02" />
      </div>
      <div style="margin: 10px;">
        <TableSt02 class="style-02 tb-small" />
      </div>
    </div> -->


  </div>
</template>

<script>
import SvgImg from '@/assets/images/pig7.svg';
import Modal from '@/components/Modal.vue';
import TabItem from '@/components/Tabs/Tab.vue';
import TableSt01 from '@/components/TableSt01.vue';
// import TableSt02 from '@/components/TableSt02.vue'
import TextField from '@/components/Forms/TextField.vue';
import BaseButton from '@/components/Buttons/BaseButton.vue';
import Checkbox from '@/components/Forms/Checkbox.vue';


export default {
  name: 'Example',
  components: { SvgImg, Modal, TabItem, TableSt01, TextField, BaseButton, Checkbox },
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
section {
  width: 100%;
  max-width: 800px;
}

section+section {
  margin-top: 80px;
}

.svg-img {
  width: 100px;
  height: 100px;
}
</style>

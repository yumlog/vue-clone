<template>
  <div>
    <ul class="file-list">
      <li class="thead-li">
        <ul>
          <li>완료여부</li>
          <li>날짜</li>
          <li>화면ID</li>
          <li>1 depth</li>
          <li>2 depth</li>
          <li>3 depth</li>
          <li>4 depth</li>
          <li>5 depth</li>
          <li>6 depth</li>
        </ul>
      </li>
      <li>
        <ul v-for="(item, index) in filelist" :key="index" v-bind:class="{ on: item.complate === '완료', comm_color: item.name6dep === '공통' }">
          <li>{{ item.complate }}</li>
          <li>{{item.date}}</li>
          <li class="txt_left">
            {{ item.pageid }}
            <!-- <router-link :to="item.path">{{ item.pageid }}</router-link> -->
          </li>
          <li class="txt_left">{{ item.name1dep }}</li>
          <li class="txt_left">{{ item.name2dep }}</li>
          <li class="txt_left">{{ item.name3dep }}</li>
          <li class="txt_left">{{ item.name4dep }}</li>
          <li class="txt_left">{{ item.name5dep }}</li>
          <li class="txt_left">{{ item.name6dep }}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

  data() {
    return {
      filelist: [
        {
          complate: '',
          date: '2023-01-99',
          pageid: '화면 ID',
          name1dep: '이체',
          name2dep: '',
          name3dep: '',
          name4dep: '',
          name5dep: '',
          name6dep: '공통'
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: '화면 ID',
          name1dep: '이체',
          name2dep: '',
          name3dep: '',
          name4dep: '',
          name5dep: '',
          name6dep: ''
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: '화면 ID',
          name1dep: '이체',
          name2dep: '',
          name3dep: '',
          name4dep: '',
          name5dep: '',
          name6dep: ''
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: '화면 ID',
          name1dep: '이체',
          name2dep: '',
          name3dep: '',
          name4dep: '',
          name5dep: '',
          name6dep: ''
        },
      ]
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
.file-list {
    width: 100%;
    >li:not(:first-child) {margin-top: -1px;}
    >li.thead-li {
      background-color: rgba(0, 0, 0, .75);
      color: #fff;
    }
    >li>ul {
      display: flex;
      width: 100%;
      transition: all .3s;
      >li {
        width: 160px;
        border: 1px solid rgba(0,0,0,.1);
        font-size: 12px;
        text-align: center;
        padding: 6px;
        flex: none;
      }
      >li.txt_left {
        text-align: left;
      }
      >li:not(:first-child) {
        margin-left: -1px;
      }
      >li:nth-child(1) {
        width: 80px;
      }
      >li:nth-child(2) {
        width: 100px;
      }
      >li:last-child {
        width: 100%;
        flex: auto;
      }
    }
    >li>ul:hover {
      background-color: rgba(0, 0, 0, .15);
    }
    >li>ul.comm_color {
      background-color: rgba(238, 137, 22, 0.2);
    }

    >li>ul.comm_color:hover {
      background-color: rgba(238, 137, 22, 0.4);
    }

    >li>ul.on,
    >li>ul.on.comm_color {
      background-color: rgba(22, 97, 238, .75);
      color: #fff;
    }

    >li>ul.on:hover,
    >li>ul.on.comm_color:hover {
      background-color: rgba(22, 97, 238, .85);
      color: #fff;
    }
    >li>ul:not(:first-child) {
      margin-top: -1px;
    }
  }
</style>
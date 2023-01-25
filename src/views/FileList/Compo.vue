<template>
  <div>
    <ul class="file-list">
      <li class="thead-li">
        <ul>
          <li>완료여부</li>
          <li>날짜</li>
          <li>분류1</li>
          <li>분류2</li>
          <li>2 depth</li>
          <li>3 depth</li>
          <li>4 depth</li>
          <li>5 depth</li>
          <li>6 depth</li>
        </ul>
      </li>
      <li>
        <ul v-for="(item, index) in filelist" :key="index" v-bind:class="{
          on: item.complate ==='완료',
          comm_color_c: item.name6dep === '최문수',
          comm_color_j: item.name6dep === '전유영',
          comm_color_s: item.name6dep === '서상영'
        }">
          <li>{{ item.complate }}</li>
          <li>{{ item.date }}</li>
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
          pageid: 'Common',
          name1dep: 'Typography',
          name2dep: '',
          name3dep: '',
          name4dep: '',
          name5dep: '',
          name6dep: '권서영'
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: '',
          name1dep: 'Colors',
          name2dep: '',
          name3dep: '',
          name4dep: '',
          name5dep: '',
          name6dep: '권서영'
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: '',
          name1dep: 'Rounded',
          name2dep: '',
          name3dep: '',
          name4dep: '',
          name5dep: '',
          name6dep: '권서영'
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: '',
          name1dep: 'Forms',
          name2dep: 'TextField',
          name3dep: '',
          name4dep: '',
          name5dep: '',
          name6dep: '권서영'
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: '',
          name1dep: 'Forms',
          name2dep: 'Select',
          name3dep: '',
          name4dep: '',
          name5dep: '',
          name6dep: '권서영'
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: '',
          name1dep: 'Forms',
          name2dep: 'Checkbox',
          name3dep: '',
          name4dep: '',
          name5dep: '',
          name6dep: '권서영'
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: '',
          name1dep: 'Forms',
          name2dep: 'RadioButton',
          name3dep: '',
          name4dep: '',
          name5dep: '',
          name6dep: '권서영'
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: '',
          name1dep: 'Forms',
          name2dep: 'ToggleSwitch',
          name3dep: '',
          name4dep: '',
          name5dep: '',
          name6dep: '권서영'
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: '',
          name1dep: 'Forms',
          name2dep: 'Form Field',
          name3dep: '',
          name4dep: '',
          name5dep: '',
          name6dep: '권서영'
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: '',
          name1dep: 'Buttons',
          name2dep: '',
          name3dep: '',
          name4dep: '',
          name5dep: '',
          name6dep: '권서영'
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: '',
          name1dep: 'Dropdown',
          name2dep: '',
          name3dep: '',
          name4dep: '',
          name5dep: '',
          name6dep: '최문수'
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: '',
          name1dep: 'Calendar',
          name2dep: '',
          name3dep: '',
          name4dep: '',
          name5dep: '',
          name6dep: '최문수'
        },
        {
          complate: '완료',
          date: '2023-01-99',
          pageid: '',
          name1dep: 'Table',
          name2dep: '',
          name3dep: '',
          name4dep: '',
          name5dep: '',
          name6dep: '서상영'
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: '',
          name1dep: 'Pagination',
          name2dep: '',
          name3dep: '',
          name4dep: '',
          name5dep: '',
          name6dep: '서상영'
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: '',
          name1dep: 'Tabs',
          name2dep: '',
          name3dep: '',
          name4dep: '',
          name5dep: '',
          name6dep: '서상영'
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: '',
          name1dep: 'Tooltips',
          name2dep: '',
          name3dep: '',
          name4dep: '',
          name5dep: '',
          name6dep: '최문수'
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: '',
          name1dep: 'Favorites',
          name2dep: '',
          name3dep: '',
          name4dep: '',
          name5dep: '',
          name6dep: '최문수'
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: '',
          name1dep: 'Steps',
          name2dep: '',
          name3dep: '',
          name4dep: '',
          name5dep: '',
          name6dep: '전유영'
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: '',
          name1dep: 'Modals',
          name2dep: '',
          name3dep: '',
          name4dep: '',
          name5dep: '',
          name6dep: '최문수'
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: '',
          name1dep: 'Badges',
          name2dep: '',
          name3dep: '',
          name4dep: '',
          name5dep: '',
          name6dep: '전유영'
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: '',
          name1dep: 'Avatar',
          name2dep: '',
          name3dep: '',
          name4dep: '',
          name5dep: '',
          name6dep: '최문수'
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: '',
          name1dep: 'SVG image',
          name2dep: '',
          name3dep: '',
          name4dep: '',
          name5dep: '',
          name6dep: '권서영'
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: '',
          name1dep: 'Location',
          name2dep: '',
          name3dep: '',
          name4dep: '',
          name5dep: '',
          name6dep: '권서영'
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: '',
          name1dep: 'Swiper',
          name2dep: '',
          name3dep: '',
          name4dep: '',
          name5dep: '',
          name6dep: '서상영'
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: 'Layout',
          name1dep: 'Global Nav',
          name2dep: '',
          name3dep: '',
          name4dep: '',
          name5dep: '',
          name6dep: '권서영'
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: '',
          name1dep: 'Sidebar',
          name2dep: '',
          name3dep: '',
          name4dep: '',
          name5dep: '',
          name6dep: '권서영'
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: '',
          name1dep: 'OTP token',
          name2dep: '',
          name3dep: '',
          name4dep: '',
          name5dep: '',
          name6dep: ''
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: '',
          name1dep: 'Footer',
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
        width: 100%;
        border: 1px solid rgba(0, 0, 0, .1);
        font-size: 12px;
        text-align: center;
        padding: 6px;
      }
      >li.txt_left {
        text-align: left;
      }
      >li:not(:first-child) {
        margin-left: -1px;
      }
      >li:nth-child(1) {
        width: 90px;
        flex: none;
      }
      >li:nth-child(2) {
        width: 110px;
        flex: none;
      }
    }
    >li>ul:hover {
      background-color: rgba(0, 0, 0, .15);
    }
    >li>ul.comm_color_c {
      background-color: rgba(22, 238, 209, 0.2);
    }

    >li>ul.comm_color_c:hover {
      background-color: rgba(22, 238, 209, 0.4);
    }
    >li>ul.comm_color_j {
      background-color: rgba(238, 22, 123, 0.2);
    }

    >li>ul.comm_color_j:hover {
      background-color: rgba(238, 22, 123, 0.4);
    }
    >li>ul.comm_color_s {
      background-color: rgba(238, 206, 22, 0.2);
    }

    >li>ul.comm_color_s:hover {
      background-color: rgba(238, 206, 22, 0.4);
    }

    >li>ul.on,
    >li>ul.on.comm_color_c,
    >li>ul.on.comm_color_j,
    >li>ul.on.comm_color_s {
      background-color: rgba(22, 97, 238, .75);
      color: #fff;
    }

    >li>ul.on:hover,
    >li>ul.on.comm_color_c:hover,
    >li>ul.on.comm_color_j:hover,
    >li>ul.on.comm_color_s:hover {
      background-color: rgba(22, 97, 238, .85);
      color: #fff;
    }
    >li>ul:not(:first-child) {
      margin-top: -1px;
    }
  }
</style>
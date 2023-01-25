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
        <ul v-for="(item, index) in filelist" :key="index" :class="{ on: item.complate === '완료', comm_color: item.name6dep === '공통'}">
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
          pageid: 'IE_QM050101_01',
          name1dep: '조회',
          name2dep: '조회-안내페이지',
          name3dep: '',
          name4dep: '',
          name5dep: '',
          name6dep: ''
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: 'IE_QM010101_T7',
          name1dep: '조회',
          name2dep: '전체계좌조회',
          name3dep: '[tab] 전체',
          name4dep: '',
          name5dep: '',
          name6dep: ''
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: 'IE_QM010101_T1',
          name1dep: '조회',
          name2dep: '전체계좌조회',
          name3dep: '[tab] 입출금',
          name4dep: '',
          name5dep: '',
          name6dep: ''
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: 'IE_QM010101_T2',
          name1dep: '조회',
          name2dep: '전체계좌조회',
          name3dep: '[tab] 예적금',
          name4dep: '',
          name5dep: '',
          name6dep: ''
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: 'IE_QM010101_T3',
          name1dep: '조회',
          name2dep: '전체계좌조회',
          name3dep: '[tab] 출자금',
          name4dep: '',
          name5dep: '',
          name6dep: ''
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: 'IE_QM010101_T4',
          name1dep: '조회',
          name2dep: '전체계좌조회',
          name3dep: '[tab] 대출',
          name4dep: '',
          name5dep: '',
          name6dep: ''
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: 'IE_QM010101_T5',
          name1dep: '조회',
          name2dep: '전체계좌조회',
          name3dep: '[tab] 휴면/거래중지',
          name4dep: '',
          name5dep: '',
          name6dep: ''
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: 'IE_QM010101_T6',
          name1dep: '조회',
          name2dep: '전체계좌조회',
          name3dep: '[tab] 해지',
          name4dep: '',
          name5dep: '',
          name6dep: ''
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: 'IE_QM060101_01',
          name1dep: '조회',
          name2dep: '전체계좌조회',
          name3dep: '계좌순서변경',
          name4dep: '',
          name5dep: '',
          name6dep: ''
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: 'IE_CM020101_01',
          name1dep: '조회',
          name2dep: '전체계좌조회',
          name3dep: '엑셀다운',
          name4dep: '',
          name5dep: '',
          name6dep: '공통'
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: 'IE_CM010101_01',
          name1dep: '조회',
          name2dep: '전체계좌조회',
          name3dep: 'PDF/인쇄',
          name4dep: '',
          name5dep: '',
          name6dep: '공통'
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: 'IE_QM010301_01',
          name1dep: '조회',
          name2dep: '전체계좌조회',
          name3dep: '계좌정보조회 (입출금)',
          name4dep: '',
          name5dep: '',
          name6dep: ''
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: 'IE_CM010101_01',
          name1dep: '조회',
          name2dep: '전체계좌조회',
          name3dep: '계좌정보조회 (입출금)',
          name4dep: 'PDF/인쇄',
          name5dep: '',
          name6dep: '공통'
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: 'IE_QM010401_01',
          name1dep: '조회',
          name2dep: '전체계좌조회',
          name3dep: '계좌정보조회 (예적금)',
          name4dep: '',
          name5dep: '',
          name6dep: ''
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: 'IE_CM010101_01',
          name1dep: '조회',
          name2dep: '전체계좌조회',
          name3dep: '계좌정보조회 (예적금)',
          name4dep: 'PDF/인쇄',
          name5dep: '',
          name6dep: '공통'
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: 'IE_QM010402_01',
          name1dep: '조회',
          name2dep: '전체계좌조회',
          name3dep: '계좌정보조회 (예적금)',
          name4dep: '적용금리상세조회',
          name5dep: '',
          name6dep: ''
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: 'IE_CM010101_01',
          name1dep: '조회',
          name2dep: '전체계좌조회',
          name3dep: '계좌정보조회 (예적금)',
          name4dep: '적용금리상세조회',
          name5dep: 'PDF/인쇄',
          name6dep: '공통'
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: 'IE_QM010403_01',
          name1dep: '조회',
          name2dep: '전체계좌조회',
          name3dep: '계좌정보조회 (대출)',
          name4dep: '금리산출표',
          name5dep: '',
          name6dep: ''
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: 'IE_CM010101_01',
          name1dep: '조회',
          name2dep: '전체계좌조회',
          name3dep: '계좌정보조회 (대출)',
          name4dep: '금리산출표',
          name5dep: 'PDF/인쇄',
          name6dep: '공통'
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: 'IE_AM020405_01',
          name1dep: '조회',
          name2dep: '전체계좌조회',
          name3dep: '계좌정보조회 (예적금)',
          name4dep: '만기일변경',
          name5dep: '',
          name6dep: ''
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: 'IE_QM010703_02',
          name1dep: '조회',
          name2dep: '전체계좌조회',
          name3dep: '계좌정보조회 (예적금)',
          name4dep: '만기일변경',
          name5dep: '변경완료',
          name6dep: ''
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: 'IE_QM010501_01',
          name1dep: '조회',
          name2dep: '전체계좌조회',
          name3dep: '계좌정보조회 (출자금)',
          name4dep: '',
          name5dep: '',
          name6dep: ''
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: 'IE_CM010101_01',
          name1dep: '조회',
          name2dep: '전체계좌조회',
          name3dep: '계좌정보조회 (출자금)',
          name4dep: 'PDF/인쇄',
          name5dep: '',
          name6dep: '공통'
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: 'IE_QM010601_01',
          name1dep: '조회',
          name2dep: '전체계좌조회',
          name3dep: '계좌정보조회 (대출)',
          name4dep: '',
          name5dep: '',
          name6dep: ''
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: 'IE_CM010101_01',
          name1dep: '조회',
          name2dep: '전체계좌조회',
          name3dep: '계좌정보조회 (대출)',
          name4dep: 'PDF/인쇄',
          name5dep: '',
          name6dep: '공통'
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: 'IE_AM040501_01',
          name1dep: '조회',
          name2dep: '전체계좌조회',
          name3dep: '계좌정보조회 (대출)',
          name4dep: '채권추심안내',
          name5dep: '',
          name6dep: '링크'
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: 'IE_AM040602_01',
          name1dep: '조회',
          name2dep: '전체계좌조회',
          name3dep: '계좌정보조회 (대출)',
          name4dep: '월별상환계획표',
          name5dep: '',
          name6dep: ''
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: 'IE_QM040201_01',
          name1dep: '조회',
          name2dep: '전체계좌조회',
          name3dep: '계좌정보조회 (예적금)',
          name4dep: '인터넷대출허용관리',
          name5dep: 'step 1. 정보입력',
          name6dep: ''
        },
        {
          complate: '',
          date: '2023-01-99',
          pageid: 'IE_QM040202_01',
          name1dep: '조회',
          name2dep: '전체계좌조회',
          name3dep: '계좌정보조회 (예적금)',
          name4dep: '인터넷대출허용관리',
          name5dep: 'step 2. 변경완료',
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
<template>

  <!-- component start -->
  <div class="acco-wrap">
    <section class="acco-area" :class="{active: accoShow == true}">
      <div class="acco-list" v-for="item in list" :key="item.id">
        <button class="acco-main" @click="accoShow = !accoShow" :class="{active: accoShow == true}">
          <div class="tit">
            <h2>{{ item.title }}</h2>
            <!-- 계좌갯수 0개 이상일시 아래 요소에 active클래스 추가 -->
            <input class="active" type="text" id="num-bdg" value="3" readonly />
          </div>
          <h3>{{ item.money }}원</h3>
          <button class="btn-arrow" :class="{active: accoShow == true}">ㅅ</button>
        </button>
        <div v-show="accoShow">
        <div class="acco" v-for="item in acco" :key="item.id">
          <div class="info" @click="showDetail()">
            <div class="txt">
              <div class="tit">
                <h3>{{ item.title }}</h3>
                <h5>{{ item.subtitle }}</h5>
              </div>
              <p class="acct">{{ item.account }}</p>
            </div>
            <h4>{{ item.money }}원</h4>
            <button class="btn-arrow">ㅅ</button>
          </div>
          <div class="detail">
            <div class="info-wrap">
              <div class="info-txt">
                <div class="info-main">
                  <h5 class="tit">{{ item.titleName }}</h5>
                  <h5>{{ item.titleNameOut }}</h5>
                </div>
                <div class="info-sub">
                  <div class="txt">
                    <h5 class="tit">{{ item.dateFirst }}</h5>
                    <h5>{{ item.dateFirstOut }}</h5>
                  </div>
                  <div class="txt">
                    <h5 class="tit">{{ item.dateRecent }}</h5>
                    <h5>{{ item.dateRecentOut }}</h5>
                  </div>
                  <div class="txt">
                    <h5 class="tit">{{ item.dateExpire }}</h5>
                    <h5>{{ item.dateExpireOut }}</h5>
                  </div>
                  <div class="txt">
                    <h5 class="tit">{{ item.titleAccount }}</h5>
                    <h5>{{ item.titleAccountOut }}</h5>
                  </div>
                </div>
              </div>
              <a href="#" class="link-certi">계좌개설확인서 발급</a>
            </div>
            <div class="btn-wrap">
              <button>조회</button>
              <button>거래내역</button>
              <button>일반이체</button>
            </div>
          </div>
        </div>
        <div class="viewall-wrap">
          <button class="btn-viewall">전체보기
            <span class="count">(5/15)</span>
            <div class="btn-arrow">ㅅ</div>
          </button>
        </div>
        </div>
      </div>
    </section>
  </div>
  <!-- component end -->

</template>

<script>
  export default {
    data() {
      return {
        accoShow: false,
        list: [
          {
            title: '입출금',
            money: '100,000,000,000',
          }
        ],
        acco: [
          {
            /* 계좌 */
            title: '별칭열자리별칭열자리',
            subtitle: '우리사옥건축자금예금',
            account: '132-118-36589',
            money: '10,000,000,000',
            /* 계좌 상세항목 */
            titleName: '조합명',
            dateFirst: '개설일',
            dateRecent: '최근거래일',
            dateExpire: '만기이연일',
            titleAccount: '평생계좌',
            titleNameOut: '연세대학교원주의과대학원주세브란스기독병원신협',
            dateFirstOut: '2022.10.01',
            dateRecentOut: '2022.10.01',
            dateExpireOut: '2022.10.01',
            titleAccountOut: '123-1234-1234',
          },
          {
            /* 계좌 */
            title: '별칭열자리별칭열자리',
            subtitle: '우리사옥건축자금예금',
            account: '132-118-36589',
            money: '10,000,000,000',
            /* 계좌 상세항목 */
            titleName: '조합명',
            dateFirst: '개설일',
            dateRecent: '최근거래일',
            dateExpire: '만기이연일',
            titleAccount: '평생계좌',
            titleNameOut: '연세대학교원주의과대학원주세브란스기독병원신협',
            dateFirstOut: '2022.10.01',
            dateRecentOut: '2022.10.01',
            dateExpireOut: '2022.10.01',
            titleAccountOut: '123-1234-1234',
          },
          {
            /* 계좌 */
            title: '별칭열자리별칭열자리',
            subtitle: '우리사옥건축자금예금',
            account: '132-118-36589',
            money: '10,000,000,000',
            /* 계좌 상세항목 */
            titleName: '조합명',
            dateFirst: '개설일',
            dateRecent: '최근거래일',
            dateExpire: '만기이연일',
            titleAccount: '평생계좌',
            titleNameOut: '연세대학교원주의과대학원주세브란스기독병원신협',
            dateFirstOut: '2022.10.01',
            dateRecentOut: '2022.10.01',
            dateExpireOut: '2022.10.01',
            titleAccountOut: '123-1234-1234',
          },
          {
            /* 계좌 */
            title: '별칭열자리별칭열자리',
            subtitle: '우리사옥건축자금예금',
            account: '132-118-36589',
            money: '10,000,000,000',
            /* 계좌 상세항목 */
            titleName: '조합명',
            dateFirst: '개설일',
            dateRecent: '최근거래일',
            dateExpire: '만기이연일',
            titleAccount: '평생계좌',
            titleNameOut: '연세대학교원주의과대학원주세브란스기독병원신협',
            dateFirstOut: '2022.10.01',
            dateRecentOut: '2022.10.01',
            dateExpireOut: '2022.10.01',
            titleAccountOut: '123-1234-1234',
          },
          {
            /* 계좌 */
            title: '별칭열자리별칭열자리',
            subtitle: '우리사옥건축자금예금',
            account: '132-118-36589',
            money: '10,000,000,000',
            /* 계좌 상세항목 */
            titleName: '조합명',
            dateFirst: '개설일',
            dateRecent: '최근거래일',
            dateExpire: '만기이연일',
            titleAccount: '평생계좌',
            titleNameOut: '연세대학교원주의과대학원주세브란스기독병원신협',
            dateFirstOut: '2022.10.01',
            dateRecentOut: '2022.10.01',
            dateExpireOut: '2022.10.01',
            titleAccountOut: '123-1234-1234',
          },
          {
            /* 계좌 */
            title: '별칭열자리별칭열자리',
            subtitle: '우리사옥건축자금예금',
            account: '132-118-36589',
            money: '10,000,000,000',
            /* 계좌 상세항목 */
            titleName: '조합명',
            dateFirst: '개설일',
            dateRecent: '최근거래일',
            dateExpire: '만기이연일',
            titleAccount: '평생계좌',
            titleNameOut: '연세대학교원주의과대학원주세브란스기독병원신협',
            dateFirstOut: '2022.10.01',
            dateRecentOut: '2022.10.01',
            dateExpireOut: '2022.10.01',
            titleAccountOut: '123-1234-1234',
          },
        ]
      }
    },
    methods: {
      showDetail() {
        let target = event.currentTarget;
        target.nextSibling.classList.toggle('active');
        target.lastChild.classList.toggle('rot');
      }
    },
    mounted() {
      const accoNum = this.acco.slice(5, 999);
      console.log(accoNum);
      accoNum.style.display = 'none';
    }
  }
</script>

<style lang="scss" scoped>
div,h1,h2,h3,h4,h5,h6 {
    margin:0;
  }

  @mixin btn-arrow {
    transform:rotate(180deg);
  }

  $Black: #161616;
  $Black2: #555555;
  $Black3: #333333;
  $Gray3: #70747E;
  $Gray4: #96979b;
  $Gray5: #d3d3d3;
  $Gray7: #e8eef2;
  $Graybg: #f9f9f9;
  $Graybg2: #fcfcfe;
  $Bluebg: #f2faff;
  $Blue: #2763f6;

  .acco-wrap {
    width:100%;
    .acco-area {
      width:1060px;
      margin:0 auto 20px;
      border:1px solid $Gray5;
      border-radius:12px;
      overflow:hidden;
      transition:.3s;
      &.active {
        border: 1px solid $Black;
        margin-bottom:60px;
      }
      .acco-list {
        background-color: #fff;
        .acco-main {
          display:flex;
          position:relative;
          align-items:center;
          justify-content:space-between;
          width:100%;
          height: 84px;
          padding:28px 32px;
          background-color:#fff;
          transition:.3s;
          .tit {
            display:flex;
          };
          h2 {
            color:$Black;
            font-size:20px;
            font-weight:700;
          };
          h3 {
            position:absolute;
            top:31px;
            right:58px;
            color:$Black;
            font-size:20px;
            font-weight:700;
          };
          input {
            display:flex;
            align-items:center;
            width:24px;
            height:24px;
            margin-left:8px;
            border:none;
            border-radius:12px;
            background-color:$Gray3;
            color:#fff;
            font-size:14px;
            font-weight:700;
            text-align:center;
            &.active {
              background-color:$Blue;
            };
          };
          &.active {
            background-color: $Bluebg;
          }
          .btn-arrow {
            position:absolute;
            top:34px;
            right:32px;
            @include btn-arrow;
            &.active {
              transform:rotate(0);
            }
          }
        };
        .acco {
          & ~ .acco {
            border-top:1px solid $Gray7;
          }
          padding:30px 0;
          margin:0 26px;
          background-color:#fff;
          h3 {
            margin-right: 8px;
            color:$Black;
            font-size:18px;
            font-weight:600;
          };
          h5 {
            color:$Black;
            font-size:14px;
            font-weight:500;
          };
          .info {
            display:flex;
            position:relative;
            align-items:center;
            justify-content:space-between;
            cursor:pointer;
            .txt {
              display:flex;
              flex-flow:column;
              .tit {
                display:flex;
                align-items:center;
              };
              .acct {
                margin-top:5.5px;
                color:$Black2;
                font-size:14px;
                font-weight:500;
              };
            };
            h4 {
              position:absolute;
              top:11px;
              right:32px;
              color:$Black;
              font-size:18px;
              font-weight:700;
            };
            .btn-arrow {
              position: absolute;
              right:6px;
              @include btn-arrow;
              &.rot {
                transform:rotate(0);
              }
            };
          };
          .detail {
            display:flex;
            justify-content:space-between;
            height:0;
            padding:0 20px;
            background-color:$Graybg2;
            border-radius:0 0 6px 6px;
            overflow:hidden;
            box-sizing:border-box;
            transition:.3s;
            &.active {
              display:flex;
              height:auto;
              padding: 20px 20px;
              margin-top: 28px;
            }
            .info-wrap {
              display:flex;
              flex-flow:column;
              justify-content:space-between;
              .info-txt {
                display:flex;
                flex-flow:column;
                justify-content:space-between;
                .info-main {
                  display:flex;
                  .tit {
                    color: $Gray3;
                    font-size: 14px;
                    font-weight: 500;
                  };
                  h5 {
                    color: $Black3;
                    font-size: 14px;
                    font-weight: 500;
                    & ~ h5 {
                      margin-left: 12px;
                    };
                  }; 
                };
                .info-sub {
                  display:flex;
                  margin-top:12px;
                  .txt {
                    display:flex;
                    .tit {
                      color:$Gray3;
                      font-size:14px;
                      font-weight:500;
                    };
                    h5 {
                      color:$Black3;
                      font-size:14px;
                      font-weight:500;
                    };
                    & ~ .txt::before {
                      content:'|';
                      margin:0 16px;
                      color:$Gray3;
                      font-size:12px;
                      opacity:.4;
                    };
                    h5 {
                      & ~ h5 {
                        margin-left:12px;
                      }
                    }
                  }
                }
              };
              .link-certi {
                margin-top:20px;
                color:$Black;
                font-size:14px;
                font-weight:600;
                text-decoration:underline;
              }
            };
            .btn-wrap {
              display:flex;
              align-items:flex-end;
            }
          }
        };
        .viewall-wrap {
          width:100%;
          padding:0 26px;;
          margin:0 auto;
          box-sizing:border-box;
          .btn-viewall {
            display:flex;
            align-items:center;
            justify-content:center;
            width:100%;
            height:68px;
            border-top: 1px solid $Gray7;
            color:$Black;
            font-size:16px;
            font-weight:700;
            .count {
              color:$Gray4;
              font-weight:500;
              margin:0 14px 0 4px;
            };
            .btn-arrow {
              @include btn-arrow;
            }
          }
        }
      };
    }
  }
</style>
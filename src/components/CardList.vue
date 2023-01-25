<template>
  <div class="card-wrap">
    <section class="card-area">
      <div class="card-group">
        <button
        class="card"
        v-for="(item, index) in cards"
        :key="item.id"
        v-bind:class="{active: current === index}"
        @click="current = index"
        >
          <div>
            <h3>{{ item.title || 'default title' }}</h3>
            <p>{{ item.subtitle }}</p>
          </div>
          <div class="ico"></div>
          <h4>{{ item.number }} <span>{{ item.type }}</span></h4>
        </button>
      </div>
    </section>
    <section class="detail-wrap">
      <div v-show="current==0"></div>
      <div v-show="current==1"></div>
      <div v-show="current==2"></div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      cards: [
        {
          id: 1,
          title: '총 잔액',
          subtitle: '입출금, 예적금, 출자금 잔액 합계',
          number: '100,000,000',
          type: '원'
        },
        {
          id: 2,
          title: '대출',
          subtitle: '대출 잔액 합계',
          number: '72,000,000',
          type: '원'
        },
        {
          id: 3,
          title: '계좌',
          subtitle: '',
          number: '33',
          type: '개'
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
div, h1, h2, h3, h4, h5, h6 {
  margin:0;
}

$Black:#161616;
$Gray3:#70747E;
$Gray5:#d3d3d3;
$Graybg:#f9f9f9;

.card-wrap{
  width:100%;
  .card-area {
    .card-group {
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
    }
    .card {
      display:flex;
      position:relative;
      flex-flow:column;
      justify-content:space-between;
      width:340px;
      height:196px;
      padding:26px 26px;
      border:1px solid $Gray5;
      border-radius:12px;
      background-color:#fff;
      transition:.3s;
      cursor:pointer;
      &.active {
        border: 1px solid $Black;
      }
      & ~ .card {
        margin-left:20px;
      };
      h3 {
        font-size:20px;
        margin-bottom:10px;
        text-align:left;
      };
      p {
        font-size:14px;
        color:$Gray3;
      };
      .ico {
        width:38px;
        height:38px;
        background-color:$Gray5;
      }
      h4 {
        position:absolute;
        right:26px;
        bottom:26px;
        font-size:24px;
        font-weight:700;
        span {
          font-size:16px;
          font-weight:400;
        }
      };
    }
  }
  .detail-wrap {
    width:1000px;
    margin:0 auto;
  }
}
</style>
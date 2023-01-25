<template>
  <div class="flex">
    <div>

      <!-- component start -->
      <!-- 리스트 앞에 은행로고 사용시 아래 요소에 type2 클래스 추가 -->
      <div class="dropdown-wrap" :data-value="value" :data-list="list">
        <!-- 비활성화 시 아래요소에 disabled 클래스 추가 -->
        <div class="selector" @click="toggle()" :class="{expanded: visible}">
          <div id="dropdown-label" class="label">
            <span>{{ value }}</span>
            <div class="btn-arrow" :class="{expanded: visible}">ㅅ</div>
          </div>
          <div class="list">
            <ul>
              <li v-for="item in list" :key="item" @click="select(item)">
                <div id="logo" class="logo"></div>
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
        <!-- 에러 시 아래요소에 active 클래스 추가 -->
        <div class="err">Error Message</div>
      </div>
      <!-- component end -->

      <br />

      <!-- component start -->
      <!-- 리스트 앞에 은행로고 사용시 아래 요소에 type2 클래스 추가 -->
      <div class="dropdown-wrap"  :data-value="value" :data-list="list">
        <!-- 비활성화 시 아래요소에 disabled 클래스 추가 -->
        <div class="selector disabled" @click="toggle()" :class="{expanded: visible}">
          <div id="dropdown-label" class="label">
            <span>{{ value }}</span>
            <div class="btn-arrow" :class="{expanded: visible}">ㅅ</div>
          </div>
          <div class="list">
            <ul>
              <li v-for="item in list" :key="item" @click="select(item)">
                <div id="logo" class="logo"></div>
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
        <!-- 에러 시 아래요소에 active 클래스 추가 -->
        <div class="err">Error Message</div>
      </div>
      <!-- component end -->

      <br />

      <!-- component start -->
      <!-- 리스트 앞에 은행로고 사용시 아래 요소에 type2 클래스 추가 -->
      <div class="dropdown-wrap"  :data-value="value" :data-list="list">
        <!-- 비활성화 시 아래요소에 disabled 클래스 추가 -->
        <div class="selector error" @click="toggle()" :class="{expanded: visible}">
          <div id="dropdown-label" class="label">
            <span>{{ value }}</span>
            <div class="btn-arrow" :class="{expanded: visible}">ㅅ</div>
          </div>
          <div class="list">
            <ul>
              <li v-for="item in list" :key="item" @click="select(item)">
                <div id="logo" class="logo"></div>
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
        <!-- 에러 시 아래요소에 active 클래스 추가 -->
        <div class="err active">Error Message</div>
      </div>
      <!-- component end -->

    </div>
    <div>

      <!-- component start -->
      <!-- 리스트 앞에 은행로고 사용시 아래 요소에 type2 클래스 추가 -->
      <div class="dropdown-wrap type2" :data-value="value" :data-list="list">
        <!-- 비활성화 시 아래요소에 disabled 클래스 추가 -->
        <div class="selector" @click="toggle()" :class="{expanded: visible}">
          <div id="dropdown-label" class="label">
            <span>{{ value }}</span>
            <div class="btn-arrow" :class="{expanded: visible}">ㅅ</div>
          </div>
          <div class="list">
            <ul>
              <li v-for="item in list" :key="item" @click="select(item)">
                <div id="logo" class="logo"></div>
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
        <!-- 에러 시 아래요소에 active 클래스 추가 -->
        <div class="err">Error Message</div>
      </div>
      <!-- component end -->

      <br />
      
      <!-- component start -->
      <!-- 리스트 앞에 은행로고 사용시 아래 요소에 type2 클래스 추가 -->
      <div class="dropdown-wrap type2" :data-value="value" :data-list="list">
        <!-- 비활성화 시 아래요소에 disabled 클래스 추가 -->
        <div class="selector disabled" @click="toggle()" :class="{expanded: visible}">
          <div id="dropdown-label" class="label">
            <span>{{ value }}</span>
            <div class="btn-arrow" :class="{expanded: visible}">ㅅ</div>
          </div>
          <div class="list">
            <ul>
              <li v-for="item in list" :key="item" @click="select(item)">
                <div id="logo" class="logo"></div>
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
        <!-- 에러 시 아래요소에 active 클래스 추가 -->
        <div class="err">Error Message</div>
      </div>
      <!-- component end -->

      <br />
      
      <!-- component start -->
      <!-- 리스트 앞에 은행로고 사용시 아래 요소에 type2 클래스 추가 -->
      <div class="dropdown-wrap type2" :data-value="value" :data-list="list">
        <!-- 비활성화 시 아래요소에 disabled 클래스 추가 -->
        <div class="selector error" @click="toggle()" :class="{expanded: visible}">
          <div id="dropdown-label" class="label">
            <span>{{ value }}</span>
            <div class="btn-arrow" :class="{expanded: visible}">ㅅ</div>
          </div>
          <div class="list">
            <ul>
              <li v-for="item in list" :key="item" @click="select(item)">
                <div id="" class="logo"></div>
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
        <!-- 에러 시 아래요소에 active 클래스 추가 -->
        <div class="err active">Error Message</div>
      </div>
      <!-- component end -->

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 'Select an option',
      list: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5", "Option 6", "Option 7", "Option 8", "Option 9", "Option 10"],
      visible: false,
    }
  },
  methods: {
    toggle() {
      let target = event.currentTarget;
      target.classList.toggle('expanded');
      target.lastChild.classList.toggle('expanded');
      target.firstChild.lastChild.classList.toggle('expanded');
    },
    select(option) {
      this.value = option;
      const drpLabel = document.getElementById('dropdown-label');
      drpLabel.style.color = 'black';
    }
  }
}
</script>

<style lang="scss" scoped>
div,h1,h2,h3,h4,h5,h6 {
  margin: 0;
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
$Graybg3: #f2f2f2;
$Bluebg: #f2faff;
$Blue: #2763f6;
$Errbg: #fff9f9;
$Errfc: #e71f2a;

.flex {
  display:flex;
  justify-content:space-between;
  width:100%;
}

.dropdown-wrap {
  .selector {
    position:relative;
    padding:0 12px;
    width:460px;
    height:auto;
    border:1px solid $Gray5;
    border-radius: 6px;
    background-color:#fff;
    box-sizing:border-box;
    cursor:pointer;
    &.expanded {
      border-color:$Black;
      border-radius: 6px 6px 0 0;
      border-bottom:1px solid #fff;
    };
    .label {
      display:flex;
      align-items:center;
      justify-content:space-between;
      height:46px;
      color:$Gray3;
      font-size:14px;
      font-weight:500;
      .btn-arrow {
        @include btn-arrow;
        transition:.3s;
        &.expanded {
          color:$Black;
          transform:rotate(0);
        };
      };
    };
    .list {
      display:none;
      &.expanded {
        display:block;
      }
      ul {
        position: absolute;
        left:-1px;
        width:460px;
        height:231px;
        padding:0;
        margin:0;
        border:1px solid $Black;
        border-top:none;
        border-radius:0 0 6px 6px;
        background-color:#fff;
        font-size:16px;
        overflow:scroll;
        list-style-type:none;
        z-index:1;
        -ms-overflow-style: none;
        scrollbar-width: none;
        &::-webkit-scrollbar {
          display:none;
        };
        li {
          display: flex;
          align-items: center;
          height:46px;
          padding:0 12px;
          color:$Black;
          font-size:14px;
          font-weight:500;
          &:hover {
            background-color:$Graybg;
          };
        };
      };
    };
    &.disabled {
      background-color:$Graybg3;
      pointer-events: none;
      .label {
        color: $Gray4;
        font-weight:700;
      };
    };
    &.error {
      background-color:$Errbg;
      border-color:$Errfc;
      .label {
        color:$Errfc;
      };
    };
  };
  .err {
    display:none;
    margin-top:5px;
    color:$Errfc;
    font-size:12px;
    font-weight:500;
    &.active {
      display:block;
    };
  };
  &.type2 {
    .logo {
        width: 20px;
        height: 20px;
        margin-right: 6px;
        background-color: $Blue;
        border-radius: 10px;
      }
  }
}
</style>
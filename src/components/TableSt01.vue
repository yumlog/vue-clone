<template>
  <table>
    <thead>
      <tr>
        <th v-for = "(th01, tbk) in theadItems" :key="tbk">
          {{ th01.name }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="">
        <td v-for = "(tb01, tbk) in tbodyItems01" :key="tbk"
          :class="{txtR: typeof tb01.name === 'number'}">
          {{ tb01.name | comma }}
        </td>
      </tr>
      <tr class="error">
        <td v-for="(tb02, tbk) in tbodyItems02" :key="tbk"
          :class="{txtR: typeof tb02.name === 'number'}">
          {{ tb02.name | comma }}
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3">Total</td>
        <td v-for="(tf02, tbk) in tfootItems" :key="tbk"
        :class="{ txtR: typeof tf02.name === 'number' }">
          {{ tf02.name | comma }}
        </td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
export default {
  name: 'TableSt01',
  data() {
    return {
      
      theadItems: [
        { name: '제목1' },
        { name: '제목2' },
        { name: '제목3' },
        { name: '제목4' },
      ],
      tbodyItems01: [
        { name: '내용1' },
        { name: '내용2' },
        { name: '내용3' },
        { name: 22000 },
      ],
      tbodyItems02: [
        { name: '내용1-1' },
        { name: '내용1-2' },
        { name: '내용1-3' },
        { name: 62000 },
      ],
      tfootItems: [
        { name: 84000 },
      ]
    }
  },

  filters: {
    comma(val) {
      return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  },

  computed: {

  },
  methods: {

  },
}
</script>

<style lang="scss" scoped>
table.style-01 {
    th, td {
      border-left: 1px solid #e8eef2;
      border-bottom: 1px solid #e8eef2;
      padding: 26px 15px;
    }
    th {
      font-size: 16px;
      font-weight: 700;
      background-color: #f2faff;
      color: #161616;
    }
    td {
      font-size: 14px;
      background-color: #fff;
    }
    .error td {
      background-color: #fff9f9;
    }
    tr th:first-child,
    tr td:first-child {
      border-left: none;
    }
    // TableSt01
    thead th {border-top: 1px solid #161616;}
    tfoot th,
    tfoot td {
      background-color: #f9f9f9;
      border-bottom: 1px solid #161616;
      font-size: 20px;
      font-weight: 700;
    }
  }
.txtL {
  text-align: left;
}
.txtR {
  text-align: right;
}
.txtC {
  text-align: center;
}
table.style-01.tb-small {
  th {
      padding: 26px 10px;
  }
  td {
    padding: 16px 10px;
  }
}
</style>
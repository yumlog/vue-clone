<template>
  <table>
    <tbody>
      <tr>
        <th v-for="(tbth01, tbk) in tbodyThItems01" :key="tbk">
          {{ tbth01.name }}
        </th>
        <td v-for="(tbtd01, tbk) in tbodyTdItems01" :key="tbk">
          {{ tbtd01.name }}
        </td>
      </tr>
      <tr class="error">
        <th v-for="(tbth02, tbk) in tbodyThItems02" :key="tbk">
          {{ tbth02.name }}
        </th>
        <td v-for="(tbtd02, tbk) in tbodyTdItems02" :key="tbk">
          {{ tbtd02.name }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'TableSt02',

  data() {
    return {
      tbodyThItems01: [
        { name: '제목01' }
      ],
      tbodyTdItems01: [
        { name: '내용입니다.' }
      ],
      tbodyThItems02: [
        { name: '제목02' }
      ],
      tbodyTdItems02: [
        { name: '두번째 내용입니다.' }
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
table.style-02 {
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
    // TableSt02
    tbody tr:first-child th,
    tbody tr:first-child td {border-top: 1px solid #161616;}
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
table.style-02.tb-small {
  th,
  td {
    padding: 9px 10px;
    font-size: 14px;
  }
}
</style>
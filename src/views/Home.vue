<template>
  <div class="hello">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div>
      <img src="@/assets/vue.svg" width="200" />
    </div>
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>

  </div>
</template>

<script>
export default {
  name: 'Home',
 
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.logo {
  width: 100px;
  height: auto;
}
.hello {
  display: grid;
  text-align: center;

  > * {
    place-self: center;
  }
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

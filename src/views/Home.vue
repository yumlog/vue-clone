<template>
  <div class="hello">
    
    <figure style="padding: 1rem 0">
      <figcaption>png, 정적이미지</figcaption>
      <img alt="Vue logo" src="../../public/logo.png" width="100px">
    </figure>
    
    <hr>
    
    <figure style="padding: 1rem 0">
      <figcaption>png, 동적이미지</figcaption>
      <img :src="require('@/assets/images/logo.png')" width="100px" />
    </figure>
    
    <hr>
    
    <figure style="padding: 1rem 0">
      <figcaption>SVG, 동적이미지</figcaption>
      <img src="../assets/images/icon.svg" width="100px" />
    </figure>
    
    


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
  },
  data() {
    return {
      // imageTest: require('../../public/vue.svg'),
      // imageTest: require('@/assets/images/vue.svg'),
    };
  },
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

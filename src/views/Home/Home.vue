<template>
	<div class="container guide">
		<p class="text-center">
			Container Margin <br>
			left: 22px, right: 22px
		</p>
	</div>
</template>

<script>
  export default {
    name: 'Home',

    data() {
      return {
        // imageTest: require('../../public/vue.svg'),
        // imageTest: require('@/assets/images/vue.svg'),
      };
    },
  };
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

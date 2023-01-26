<template>
  <footer class="footer">
    <div class="container">
      <!-- contents -->
      <section class="flex justify-between">
        <div>
          라라라라
        </div>
        <div>
          라라라라
        </div>
        <div class="service-links">
          <router-link to="/example">Example</router-link>
          <router-link to="/fileList">FileList</router-link>
        </div>
      </section>
      <!-- // contents -->
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',

  data() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.footer {
  > .container {
    padding-top: 30px;
    padding-bottom: 80px;
    border-top: 1px solid var(--gray-5);
  }
}
.service-links {
  > a {
    color: var(--gray-2);
  }
  a + a {
    padding-left: 1rem;
  }
}
</style>
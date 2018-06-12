<template>
  <main-layout>
    <div class="hello">
      <h1 class="singlepost ">{{ msg }}</h1>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '@/layout/MainLayout'
export default {
  name: 'SinglePost',
  data () {
    return {
      msg: 'SinglePost Page'
    }
  },
  components: {
    MainLayout
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1{
    background: red;
  }
</style>

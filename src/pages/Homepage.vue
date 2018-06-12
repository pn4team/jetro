<template>
  <main-layout>
    <div class="hello">
      <h1>{{ msg }}</h1>
      <post heading="whatever title" subtitle="Lorem ipsum dolor sit"
      v-for="post in posts"
      v-bind:title = "post.title"
      v-bind:subtitle = "post.title"
      v-bind:key = "post.id"
      />
      <post/>
      <post/>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '@/layout/MainLayout'
import Post from '@/components/Post'
export default {
  name: 'Homepage',
  data () {
    return {
      msg: 'Posts',
      posts: [
        {id: 1, title: 'Blablalbalalala', subtitle: 'subtitle'},
        {id: 2, title: '222Blablalbalalala', subtitle: 'subtitle'},
        {id: 3, title: '333Blablalbalalala', subtitle: 'subtitle'},
        {id: 4, title: '444Blablalbalalala', subtitle: 'subtitle'}
      ]
    }
  },
  components: {
    MainLayout,
    Post
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1{
    background: green;
  }
</style>

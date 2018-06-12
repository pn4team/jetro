<template>
  <div>
  <div class="header">
    <div class="header__logo">Jetro</div>
    <div class="header__nav">
      <router-link to="/">Home</router-link>
      <router-link to="/post">Post</router-link>
    </div>
  </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MainLayout'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang=sass>
@import 'bla.sass'
body
  background: pink
.header
  border-bottom: 100px solid #f1ad9c
  &__logo
    float: left
    font-size: 50px
  &__nav
    float: right
    white-space: nowrap
    font-size: 15px
    text-transform: uppercase
    a
      text-decoration: none
      padding: 10px
      display: inline-block
</style>
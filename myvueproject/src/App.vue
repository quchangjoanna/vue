<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

export default {
  data () {
    return{

    }
  },
  components:{
  },
}
</script>

<style>
  html,body{
    margin: 0;
    padding:0;
  }
  html {
    width: 100%;
    height: 100%;
  }

  body {
    font-family: Helvetica, Arial, "Microsoft Yahei", "Hiragino Sans GB", "Heiti SC", "WenQuanYi Micro Hei", sans-serif;
    width: 100%;
    height: 100%;
  }
  .main-right {
    width: 290px;
    float: right;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden
  }
  .main {
    margin: 0 auto;
    width: 1120px;
  }
  .main-left{
    width: 748px;
    float: left;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    color: #fff;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>

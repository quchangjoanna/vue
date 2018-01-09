<template>
  <div>
    <top-bar></top-bar>
    <div class="main">
      <div class="main-left">
        <top-banner></top-banner>
        <main-info></main-info>
      </div>
      <div class="main-right">
        <fastNews></fastNews>
        <hotNews></hotNews>
        <hotpan></hotpan>
      </div>
    </div>
  </div>
</template>

<script>
  import topBar from './topBar'
  import topBanner from './topBanner'
  import mainInfo from './mainInfo'
  import fastNews from './fastNews'
  import hotNews from './hotNews'
  import hotpan from './hotpan'
  export default {
    components:{
      'top-bar':topBar,
      'top-banner':topBanner,
      'mainInfo':mainInfo,
      'fastNews':fastNews,
      'hotNews':hotNews,
      'hotpan':hotpan,
    }
  }
</script>

<style>
</style>

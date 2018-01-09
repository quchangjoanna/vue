<template>
  <div>
    <ul class="nav_bt clearfix">
      <li v-for="(items,index) in titles" @click="relationClick(index)" :class="{on:index==nowIndex}">{{items.title}}</li>
    </ul>
     <news v-if="nowIndex == 0 || nowIndex == 1"></news>
     <deepnews v-if="nowIndex == 2"></deepnews>
     <flownews v-if="nowIndex == 3"></flownews>
     <sunnews v-if="nowIndex == 4"></sunnews>
  </div>
</template>

<script>
  import news from './common/news'
  import deepnews from './common/deepnews'
  import flownews from './common/flownews'
  import sunnews from './common/sunnews'
    export default {
        data(){
          return{
            titles:[
              {'title':'最新'},
              {'title':'要闻'},
              {'title':'深度'},
              {'title':'追踪'},
              {'title':'光影'},
            ],
            nowIndex:0,
          }
        },
        components: {
          news,
          deepnews,
          flownews,
          sunnews
        },
        methods:{
          relationClick:function(index){
            this.nowIndex=index;
          },
        }
    }
</script>

<style scoped lang="scss">
  .nav_bt {
    margin-top: 10px;
    padding-top: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid #e6e8eb;
    background: #fff;
    height: 30px;
    list-style:none;
    li {
      display: inline-block;
      font-weight: 700;
      line-height: 30px;
      padding-left: 14px;
      margin-right: 33px;
      font-size: 18px;
      color: #828a92;
      cursor: pointer;
      float:left;
    }
    li.on {
      color: #3d464d;
      background: url(../assets/images/list.png) left center no-repeat;
    }
  }

</style>

<template>
  <div>
    <header class="top-container">
      <div class="top-bar clearfix">
        <div class="topbar-nav">
          <ul class="nav-wrap clearfix">
            <li v-for="(item,index) in navs" class="nav">
              <template v-if="item.name === '楼事'">
                <a :href="item.sourceUrl" class="nav-name">{{item.name}}</a>
              </template>
              <template v-else>
                <a :href="item.sourceUrl" class="nav-name" target="_blank">{{item.name}}</a>
              </template>
              <span class="nav-separate" v-show="index !== 4">|</span>
            </li>
          </ul>
        </div>
        <div class="topbar-info">
          <em @click="to('deng')">
            <i class="icon iconfont icon-tuichu"></i>
            登录
          </em>
          <span class="nav-separate">|</span>
          <em @click="to('zhuce')"><i class="icon iconfont icon-wode"></i>注册</em>
          <span class="nav-separate">|</span>
          <em @click="showModal = !showModal">
            <i class="icon iconfont icon-sousuo"></i>
            搜索
          </em>
        </div>
      </div>
    </header>

    <transition name="slide-fade">
      <div class="search_bg"  v-if="showModal">
        <div class="search_bar">
          <div class="group"><input placeholder="请输入内容..." maxlength="30">
            <span class="group-btn"><span>站内搜索 </span><i></i></span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
    export default {
        name: "top-bar",
        data(){
          return{
            navs:[
              {
                name:'楼事',
                sourceUrl:'#'
              },
              {
                name:'每日快讯',
                sourceUrl:'http://nanjing.360loushi.com/'
              },
              {
                name:'排行榜',
                sourceUrl:'http://nanjing.360loushi.com/'
              },
              {
                name:'曝光台',
                sourceUrl:'http://nanjing.360loushi.com/'
              },
              {
                name:'楼事晚报',
                sourceUrl:'http://nanjing.360loushi.com/'
              },
            ],
            showModal:false,
          }
        },
      methods: {
        to(data) {
          this.$router.push("/" + data); //导航跳转
        },
      }
    }
</script>

<style scoped lang="scss">
  .top-container {
    width: 100%;
    height: 60px;
    background: #da3514;
  }
  .top-bar {
    position: relative;
    width: 1120px;
    margin: 0 auto;
    font-size: 14px;
    z-index: 11;
  }
  .topbar-nav{
    float:left;
    display:inline-block;
    height:60px;
    line-height: 60px;
    overflow:hidden;
  }
  .nav-wrap{
    display: inline-block;
    margin:0;
    padding:0;
    list-style: none;
    .nav{
      display:inline-block;
      text-decoration: none;
      height:60px;
      line-height:60px;
      padding-left:5px;
      color:#fff;
      cursor:pointer;
      & :hover{
        color:#fff;
      }
      .nav-name{
        display: inline-block;
        font-size: 14px;
        color: #fff;
        text-decoration: none;
      }
      .nav-separate {
        display: inline-block;
        color: #fff;
        margin-left: 5px;
      }
    }
  }
  .topbar-info{
    float:right;
    color:#fff;
    height:60px;
    line-height:60px;
    cursor:pointer;
    margin-top:8px;
    em{
      position:relative;
      height:60px;
      line-height: 60px;
      display:inline-block;
      margin-left:10px;
      margin-right:10px;
      font-style: normal;
      .icon.iconfont{
        position:absolute;
        top:-17px;
        left:50%;
        transform: translateX(-50%);
        display:inline-block;
        height:16px;
      }
    }
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }
  .search_bg {
    width: 100%;
    background: #f8f8fa;
    border-bottom: 1px solid #fff;
    border-top: 1px solid #fff;
    .search_bar {
      height: 80px;
      width: 850px;
      margin: 0 auto;
      margin-top: 50px;
      .group {
        height: 48px;
        border-radius: 5px;
        overflow: hidden;
        position: relative;
        input {
          width: 680px;
          border-radius: 5px 0 0 5px;
          padding: 10px 15px;
          line-height: 1.5rem;
          border: 1px solid #ccc;
          border-right: 0;
          font-size: 16px;
          outline: none;
          height: 26px;
          line-height: 26px;
        }
        .group-btn {
          position: absolute;
          top: 0;
          right: 0;
          background-color: #d64640;
          border-radius: 0 5px 5px 0;
          color: #fff;
          font-size: 16px;
          display: inline-block;
          margin-bottom: 0;
          padding: 10px 39px;
          height: 28px;
          line-height: 28px;
          vertical-align: middle;
          text-align: center;
          white-space: nowrap;
          border-radius: 0;
          cursor: pointer;
          outline: none;
          i {
            display: inline-block;
            font-style: normal;
            width: 20px;
            height: 18px;
            vertical-align: middle;
            background: url(../assets/images/search.png) no-repeat;
          }
        }
      }
    }
  }
</style>

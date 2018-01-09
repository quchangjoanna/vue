<template>
    <div>
      <div class="rt_bt mtp20">一周内最火文章排行榜</div>
      <ul class="tophot">
        <li v-for="item in hotNews">
          <a href="" class="art_link"><img class="pic" :src="item.imgUrl" :alt="item.text" :title="item.text"></a>
          <a class="bt art_link" href="" :title="item.text">{{item.text}}</a>
          <span class="see">{{item.see}}</span>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "hot-news",
        data(){
          return{
            hotNews:[
              {
                imgUrl:'http://upload.360eol.com/2017/0531/1496227272421.jpg?imageView2/1/w/100/h/70/q/75',
                text:'中海9450元/平刷新镇江地价 宝华中介放话两万五搞定假社保',
                see:'255'
              },
              {
                imgUrl:'http://upload.360eol.com/2017/1219/1513676909403.jpg?imageView2/1/w/100/h/70/q/75',
                text:'曾被王健林寄予厚望的万达飞凡再陷裁员风波',
                see:'255'
              },
              {
                imgUrl:'http://upload.360eol.com/2017/1219/1513675778901.jpg?imageView2/1/w/100/h/70/q/75',
                text:'10平米76万 南京最小学区房真能顺利入学？',
                see:'255'
              },
              {
                imgUrl:'http://upload.360eol.com/2017/1219/1513676909403.jpg?imageView2/1/w/100/h/70/q/75',
                text:'曾被王健林寄予厚望的万达飞凡再陷裁员风波',
                see:'255'
              },
              {
                imgUrl:'http://upload.360eol.com/2017/1219/1513675778901.jpg?imageView2/1/w/100/h/70/q/75',
                text:'10平米76万 南京最小学区房真能顺利入学？',
                see:'255'
              },
            ]
          }
        }
    }
</script>

<style scoped>
  .rt_bt {
    margin-top:50px;
    height: 56px;
    line-height: 56px;
    font-size: 16px;
    font-weight: 700;
    color: #000;
    text-align: center;
    border-top: 2px solid #e8320d;
    border-bottom: 1px dashed #e6e8eb;
  }
  .tophot li {
    margin-top: 20px;
    padding-left: 110px;
    height: 70px;
    position: relative;
  }
  .tophot li .pic {
    position: absolute;
    left: 0;
    top: 0px;
    width: 100px;
    height: 70px;
  }
  .tophot li .bt {
    font-size: 14px;
    color: #000;
    line-height: 18px;
    max-height: 36px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
  }
  .tophot li .see {
    position: absolute;
    right: 0px;
    bottom: 0px;
    width: 60px;
    height: 18px;
    line-height: 18px;
    padding-left: 20px;
    background: url(../assets/images/see.png) left center no-repeat;
    font-size: 14px;
    color: #a4abb1;
  }
</style>

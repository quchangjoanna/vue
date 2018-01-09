<template>
  <div>
    <div class="rt_bt mtp20">热门楼盘</div>
    <ul class="hotlp">
      <li v-for="(item,index) in hotPan" v-if="index>=imgNum && index < imgNum+3">
        <div class="text">
          <p class="bt"><a href="" :title="item.text" target="_blank">{{item.text}}</a></p>
          <p class="price">均价：<span>{{item.price}}元/平</span></p>
        </div>
        <a href="" target="_blank"><img class="pic" :src="item.imgUrl" :alt="item.text" :title="item.text"></a>
      </li>
    </ul>
    <div style="margin-top: 50px;">
      <a class="change" style="margin:0px auto 50px;" @click="change()">换一换</a></div>
  </div>
</template>

<script>
    export default {
        name: "hotpan",
        data(){
          return{
            imgNum:0,
            len:0,
            hotPan:[
              {
                imgUrl:'http://upload.360eol.com/2017/0713/1499941846722.png?imageView2/1/w/290/h/180/q/75',
                text:'华新城璟园',
                price:'20565'
              },
              {
                imgUrl:'http://upload.360eol.com/2017/0713/1499942125742.png?imageView2/1/w/290/h/180/q/75',
                text:'升龙天汇',
                price:'21568'
              },
              {
                imgUrl:'http://upload.360eol.com/2017/0713/1499942101588.png?imageView2/1/w/290/h/180/q/75',
                text:'五矿崇文金城',
                price:'22568'
              },
              {
                imgUrl:'http://upload.360eol.com/2017/0713/1499942218739.png?imageView2/1/w/290/h/180/q/75',
                text:'保利天悦',
                price:'23568'
              },
              {
                imgUrl:'http://upload.360eol.com/2017/0428/1493343458143.jpg?imageView2/1/w/290/h/180/q/75',
                text:'威尼斯水城',
                price:'26568'
              },
              {
                imgUrl:'http://upload.360eol.com/2017/0428/1493342554118.jpg?imageView2/1/w/290/h/180/q/75',
                text:'荣盛鹭岛荣府',
                price:'27568'
              },
              {
                imgUrl:'http://upload.360eol.com/2017/0427/1493281870794.png?imageView2/1/w/290/h/180/q/75',
                text:'雅居乐滨江国际',
                price:'25568'
              }
            ]
          }
        },
      created(){
          this.len = this.hotPan.length;
      },
      methods:{
          change:function(){
            if(this.imgNum + 3>this.len){
              this.imgNum = 0;
            }else{
              this.imgNum += 3;
            }
          }
      }
    }
</script>

<style scoped>
  .rt_bt {
    height: 56px;
    line-height: 56px;
    font-size: 16px;
    font-weight: 700;
    color: #000;
    text-align: center;
    border-top: 2px solid #e8320d;
    border-bottom: 1px dashed #e6e8eb;
    margin-top:50px;
  }
  .change {
    display: block;
    margin: 50px auto;
    color: #e8320d;
    border: 1px solid #e8320d;
    margin-top: 40px;
    width: 118px;
    height: 28px;
    line-height: 28px;
    border-radius: 5px;
    text-align: center;
    font-size: 14px;
  }
  .hotlp li {
    margin-top: 20px;
    width: 290px;
    height: 180px;
    position: relative;
  }
  .hotlp li .text {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 290px;
    height: 80px;
    background: rgba(0,0,0,.6);
    font-size: 18px;
    color: #fff;
  }
  .hotlp li .text .bt {
    margin-top: 18px;
    height: 22px;
    line-height: 22px;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .hotlp li .text .bt a {
    color: #fff;
  }
  .hotlp li .text .price {
    text-align: center;
    line-height: 22px;
  }
  .hotlp li .text .price span {
    color: #e8320d;
  }
</style>

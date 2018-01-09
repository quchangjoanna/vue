<template>
    <div>
      <div class="rt_bt mtp20">每日快讯</div>
      <ul class="accordion">
        <li style="position: relative;" v-for="(item,index) in fastNews">
          <div class="news_bt" @click="showNews(index)">
              <i :class="[index == innfedFlag && rotate?'fa fa-arrow-down go':'fa fa-arrow-down aa']"></i>
            {{item.title}}
          </div>
          <transition name="slideDown">
            <div class="news_wz" style="" v-if="index == innfedFlag && showModal">
              <div class="detalwz" style="position:relative; padding-bottom:25px;">{{item.detail}}
                <a href="/p/42470" target="_blank" style="display:block; width:100px; height:20px;position:absolute; bottom:5px; right:0px; line-height:20px;">查看更多 &gt;</a>
              </div>
              <div class="bdsharebuttonbox bdshare-button-style0-16" data-tag="share_1" style="display:block;height:30px; margin-bottom:6px;position:absolute; bottom:-20px; right:10px;" data-bd-bind="1515051617997">
                <span class="time">6天前</span>
                <span class="bds_more" style="line-height:24px; color: #a4abb1; background-image:none; ">分享到：</span>
                <a class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a>
                <a class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>
                <a class="bds_weixin" data-cmd="weixin" title="分享到微信"></a>
              </div>
            </div>
          </transition>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "fast-news",
        data(){
            return{
              showModal:false,
              rotate:false,
              fastNews:[
                {
                  title:'南京迎来全新定位：亚太门户城市！',
                  detail: '近日，在宁举办南京都市圈规划协调会，会上汇报了《南京总规修编初步方案》，南京新一轮总体规划修编确定新定位——亚太新兴门户,发展目标对标波士顿；！其中，对江北新区、滁州未来发展规划影响深远！\n' +
                  '南京规划调整，东山、仙林、江北，在这一轮规划中正式调整为&ldqu                                '
                },
                {
                  title:'南京迎来全新定位：亚太门户城市！',
                  detail: '近日，在宁举办南京都市圈规划协调会，会上汇报了《南京总规修编初步方案》，南京新一轮总体规划修编确定新定位——亚太新兴门户,发展目标对标波士顿；！其中，对江北新区、滁州未来发展规划影响深远！\n' +
                  '南京规划调整，东山、仙林、江北，在这一轮规划中正式调整为&ldqu                                '
                },
                {
                  title:'南京迎来全新定位：亚太门户城市！',
                  detail: '近日，在宁举办南京都市圈规划协调会，会上汇报了《南京总规修编初步方案》，南京新一轮总体规划修编确定新定位——亚太新兴门户,发展目标对标波士顿；！其中，对江北新区、滁州未来发展规划影响深远！\n' +
                  '南京规划调整，东山、仙林、江北，在这一轮规划中正式调整为&ldqu                                '
                },
                {
                  title:'南京迎来全新定位：亚太门户城市！',
                  detail: '近日，在宁举办南京都市圈规划协调会，会上汇报了《南京总规修编初步方案》，南京新一轮总体规划修编确定新定位——亚太新兴门户,发展目标对标波士顿；！其中，对江北新区、滁州未来发展规划影响深远！\n' +
                  '南京规划调整，东山、仙林、江北，在这一轮规划中正式调整为&ldqu                                '
                },
                {
                  title:'南京迎来全新定位：亚太门户城市！',
                  detail: '近日，在宁举办南京都市圈规划协调会，会上汇报了《南京总规修编初步方案》，南京新一轮总体规划修编确定新定位——亚太新兴门户,发展目标对标波士顿；！其中，对江北新区、滁州未来发展规划影响深远！\n' +
                  '南京规划调整，东山、仙林、江北，在这一轮规划中正式调整为&ldqu                                '
                },
                {
                  title:'南京迎来全新定位：亚太门户城市！',
                  detail: '近日，在宁举办南京都市圈规划协调会，会上汇报了《南京总规修编初步方案》，南京新一轮总体规划修编确定新定位——亚太新兴门户,发展目标对标波士顿；！其中，对江北新区、滁州未来发展规划影响深远！\n' +
                  '南京规划调整，东山、仙林、江北，在这一轮规划中正式调整为&ldqu                                '
                },
              ],
              innfedFlag :0
            }
        },
        methods:{
          showNews:function(index){
            this.innfedFlag = index;
            this.showModal = !this.showModal;
            this.rotate=!this.rotate;
          }
        }
    }
</script>

<style scoped lang="scss">
  .aa{
    transition: all 0.5s;
  }
  .go{
    transform:rotate(90deg);
    transition: all 0.5s;
  }
  .rt_bt {
    height: 56px;
    line-height: 56px;
    font-size: 16px;
    font-weight: 700;
    color: #000;
    text-align: center;
    border-top: 2px solid #e8320d;
    border-bottom: 1px dashed #e6e8eb;
  }
  .accordion>li {
    margin-top: 18px;
    font-size: 14px;
  }
  .news_bt {
     position: relative;
     padding-left: 20px;
     max-height: 40px;
     line-height: 20px;
     color: #000;
     cursor: pointer;
     overflow: hidden;
     text-overflow: ellipsis;
     display: -webkit-box;
     -webkit-line-clamp: 2;
     -webkit-box-orient: vertical;
     word-break: break-all;
    i {
      position: absolute;
      left: 0;
      top: 0;
      width: 20px;
      height: 18px;
      background: url(../assets/images/left.png) center center no-repeat;
    }
   }
  .news_wz {
    width: 260px;
    padding: 10px 10px 10px 20px;
    /*opacity:0;*/
    .detalwz {
      border: 1px solid #e6e8eb;
      color: #757e88;
      padding: 8px 6px;
      line-height: 24px;
      text-indent: 2em;
      .news_wz .detalwz a {
        color: #757e88;
      }
    }
  }
  .bdshare-button-style0-16 {
    margin-right: 0!important;
    .bds_more {
      background-position: 0px 5px;    height: 25px!important;
      padding-left: 14px!important;
      padding-top: 2px!important;
      float:left;
      margin: 6px 6px 6px 0;
    }
    .bds_qzone {
      background-position: 0px -104px!important;
      height: 25px!important;
      padding-left: 20px!important;
      padding-top: 2px!important;
      float:left;
    }
    .bds_tsina {
      background-position: 0 0px!important;
      height: 25px!important;
      padding-left: 20px!important;
      padding-top: 2px!important;
      float:left;
      margin:0 5px;
    }
    .bds_weixin {
      background-position: 0 -48px!important;
      margin-right: 0!important;height: 25px!important;
      padding-left: 20px!important;
      padding-top: 2px!important;
      float:left;

    }
  }
  .bdshare-button-style0-16 a {
    background-image: url(../assets/images/icon_20.png)!important;
    background-repeat: no-repeat;
    margin: 10px 6px 6px 0!important;
  }
  .time {
    margin-top: 13px;
    height: 14px;
    line-height: 14px;
    color: #a4abb1;
    padding-left: 20px;
    float:left;
  }
  .slideDown-enter-active {
    transition: all .5s ease;
  }
  .slideDown-leave-active {
    transition: all .5s ease;
  }
  .slideDown-enter, .slideDown-leave-to {
    transform: translateY(-10px);
    opacity: 0;
  }

  /*.slideDown-enter-active {*/
    /*transition: all .3s ease;*/
    /*display:block;*/
  /*}*/
  /*.slideDown-leave-active {*/
    /*transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);*/
    /*display:block;*/
  /*}*/
  /*.slideDown-enter, .slideDown-leave-to {*/
    /*transform: translateX(10px);*/
    /*display:none;*/
  /*}*/
</style>

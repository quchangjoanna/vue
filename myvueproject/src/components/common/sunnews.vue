<template>
  <div>
    <div class="listcon">
      <div class="nav_list">
        <ul class="article_list">
          <li v-for="(item,index) in deepnews" v-if="index < totalLiNum" :class="{martop:index % 4 == 0 && index != 0}">
            <a href="" target="_blank">
              <img class="pic" :src="item.imgUrl" :alt="item.text" :title="item.text">
            </a>
            <a class="bt" href="" :title="item.text" target="_blank">{{item.text}}</a>
            <h3>{{item.bgTitle}}</h3>
            <div class="botwz">
              <span class="time">{{item.time}}</span>
              <span class="loupan">{{item.loupan}}</span>
            </div>
            <span class="see">{{item.see}}</span>
            <div v-for="(item,index2) in guanggao" v-if=" (index+1) % 4 == 0 && index2 == (index+1)/4-1" class="guanggao">
              <a :href="item.Urlto">
                <div class="picgg">
                  <i class="tuicon">广告</i>
                  <img :src="item.imgUrl">
                </div>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="result more" style="" @click="loadMore()"><a>浏览更多</a></div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        deepnews:[
          {
            imgUrl:'http://upload.360eol.com/2017/1108/1510131590844.jpg?imageView2/1/w/260/h/151/q/75',
            text:'独家回应|河西楼盘地暖施工遭维权，开发商现场砸地检验',
            bgTitle:'业主向开发商提出诉求，质疑地暖管太稀，不利制热。还有部分业主提出，该开发商交付的新风系统，也不是合同约定的品牌。',
            time:'2小时前',
            loupan:'地块 出让 用地 装配式',
            see:'82'
          },
          {
            imgUrl:'http://upload.360eol.com/2017/1023/1508744641163.png?imageView2/1/w/260/h/151/q/75',
            text:'住建部部长发话：房地产调控不松动！四季度成交量增速回落、价格趋稳',
            bgTitle:'昨日上午，十九大新闻中心举行记者招待会，教育部党组书记、部长陈宝生，民政部党组书记、部长黄树贤，人力资源社会保障部党组书记、部长尹蔚民，住房城乡建设部党组书记、部长王蒙徽，国家卫生计生委党组书记、主任李斌介绍满足人民新期待、保障改善民生有关情况，并回答记者提问。',
            time:'1小时前',
            loupan:'7842',
            see:'802'
          },
          {
            imgUrl:'http://upload.360eol.com/2017/1012/1507774295869.png?imageView2/1/w/260/h/151/q/75',
            text:'独家|5分钟揭秘鼓楼滨江最摆江景房',
            bgTitle:'鼓楼滨江自规划实施以来，越来越多品牌开发商入驻提振该板块发展的速递，区域内不少项目都打出江景资源作为卖点，本周六位于该区域的深业滨江半岛二期实景示范区和样板间即将公开，事长提前先带大家探探路，体验下住在江边的房子里能看到多少江上旖旎风光。',
            time:'8天前',
            loupan:'调控 海南 海南省 房地产 三亚',
            see:'9444'
          },
          {
            imgUrl:'http://upload.360eol.com/2017/0905/1504615614854.jpg?imageView2/1/w/260/h/151/q/75',
            text:'南京2017年末土拍大战一触即发，6宗地块最终花落谁家？',
            bgTitle:'南京国土局再次拍卖6宗地块，其中鼓楼2幅、江宁3幅、六合2幅。总出让面积约28.94万方，出让起拍总价38.',
            time:'14天前',
            loupan:'出让 南京',
            see:'9049'
          },
          {
            imgUrl:'http://upload.360eol.com/2017/0908/1504882117961.png?imageView2/1/w/260/h/151/q/75',
            text:'2018首挂地！南京再挂5幅租赁住房用地',
            bgTitle:'租赁住房用地',
            time:'2小时前',
            loupan:'地块 出让 用地 装配式',
            see:'82'
          },
          {
            imgUrl:'http://upload.360eol.com/2017/0908/1504882150370.png?imageView2/1/w/260/h/151/q/75',
            text:'南京首幅租赁用地确定案名：东南·仙林青年汇',
            bgTitle:'“东南·仙林青年汇”，定位主打集人才创业办公及商业配套为一体的复合型青年社区，打造集中式“居住+办公+社交”的全新平台。',
            time:'1小时前',
            loupan:'7842',
            see:'802'
          },
          {
            imgUrl:'http://upload.360eol.com/2017/0922/1506045116744.jpg?imageView2/1/w/260/h/151/q/75',
            text:'海南新政 | 未售房源全部价格重新备案，要求调至2万/㎡以下',
            bgTitle:'短短数日之内，海南房地产市场调控政策迅速升级，严厉的价格调控措施将在短时间内展现影响，开发商将面临前所未有的调控压力。',
            time:'8天前',
            loupan:'调控 海南 海南省 房地产 三亚',
            see:'9444'
          },
          {
            imgUrl:'http://upload.360eol.com/2017/0912/1505205653145.png?imageView2/1/w/260/h/151/q/75',
            text:'南京2017年末土拍大战一触即发，6宗地块最终花落谁家？',
            bgTitle:'南京国土局再次拍卖6宗地块，其中鼓楼2幅、江宁3幅、六合2幅。总出让面积约28.94万方，出让起拍总价38.',
            time:'14天前',
            loupan:'出让 南京',
            see:'9049'
          },
          {
            imgUrl:'http://upload.360eol.com/2017/0912/1505197239905.png?imageView2/1/w/260/h/151/q/75',
            text:'2018首挂地！南京再挂5幅租赁住房用地',
            bgTitle:'租赁住房用地',
            time:'2小时前',
            loupan:'地块 出让 用地 装配式',
            see:'82'
          },
          {
            imgUrl:'http://upload.360eol.com/2017/0908/1504881346766.png?imageView2/1/w/260/h/151/q/75',
            text:'南京首幅租赁用地确定案名：东南·仙林青年汇',
            bgTitle:'“东南·仙林青年汇”，定位主打集人才创业办公及商业配套为一体的复合型青年社区，打造集中式“居住+办公+社交”的全新平台。',
            time:'1小时前',
            loupan:'7842',
            see:'802'
          },
          {
            imgUrl:'http://upload.360eol.com/2017/0908/1504881468599.png?imageView2/1/w/260/h/151/q/75',
            text:'海南新政 | 未售房源全部价格重新备案，要求调至2万/㎡以下',
            bgTitle:'短短数日之内，海南房地产市场调控政策迅速升级，严厉的价格调控措施将在短时间内展现影响，开发商将面临前所未有的调控压力。',
            time:'8天前',
            loupan:'调控 海南 海南省 房地产 三亚',
            see:'9444'
          },
          {
            imgUrl:'http://upload.360eol.com/2017/0908/1504881874326.png?imageView2/1/w/260/h/151/q/75',
            text:'南京2017年末土拍大战一触即发，6宗地块最终花落谁家？',
            bgTitle:'南京国土局再次拍卖6宗地块，其中鼓楼2幅、江宁3幅、六合2幅。总出让面积约28.94万方，出让起拍总价38.',
            time:'14天前',
            loupan:'出让 南京',
            see:'9049'
          }
        ],
        guanggao:[
          {
            Urlto:'http://nanjing.360loushi.com/',
            imgUrl:'http://upload.360eol.com/2018/0103/1514973002121.gif?imageView2/1/w/748/q/75'
          },
          {
            Urlto:'http://nanjing.360loushi.com/',
            imgUrl:'http://upload.360eol.com/2017/1218/1513560702516.gif?imageView2/1/w/748/q/75'
          },
          {
            Urlto:'http://nanjing.360loushi.com/',
            imgUrl:'http://upload.360eol.com/2017/1123/1511407442813.jpg?imageView2/1/w/748/q/75'
          },
        ],
        totalLiNum:8,
        nowIndex:0
      }
    },
    methods:{
      loadMore:function(){
        this.totalLiNum += 4;
      }
    },
  }
</script>

<style scoped lang="scss">
  .martop{
    margin-top:105px;
  }
  li {
    border-bottom: 1px solid #e6e8eb;
    background: #fff;
    padding: 18px 20px 20px 282px;
    height: 152px;
    position: relative;
    .pic {
      position: absolute;
      left: 0;
      top: 20px;
      width: 260px;
      height: 150px;
    }
    .bt {
      font-size: 22px;
      font-weight: 700;
      color: #3d464d;
      line-height: 30px;
      max-height: 60px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      word-break: break-all;
    }
    h3 {
      margin-top: 8px;
      font-size: 14px;
      color: #828a92;
      line-height: 20px;
      max-height: 60px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      word-break: break-all;
      text-align: left;
    }
    .botwz {
      position: absolute;
      left: 282px;
      bottom: 14px;
      width: 320px;
      height: 24px;
      line-height: 24px;
      font-size: 14px;
      color: #a4abb1;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .time {
      width: 130px;
      display: inline-block;
    }
    .loupan {
      color: #f2c056;
      padding-left: 20px;
      background: url(../../assets/images/tip.png) left center no-repeat;
    }
    .see {
      position: absolute;
      right: 20px;
      bottom: 14px;
      width: 28px;
      height: 24px;
      line-height: 24px;
      padding-left: 20px;
      background: url(../../assets/images/see.png) left center no-repeat;
      font-size: 14px;
      color: #a4abb1;
    }
    &:hover {
      box-shadow: 5px 5px 20px #ccc;
    }
  }
  .picgg {
    width: 750px;
    height: 82px;
    margin-top: 20px;
    position: relative;
    .tuicon {
      position: absolute;
      z-index: 200;
      left: 10px;
      top: 10px;
      width: 40px;
      height: 20px;
      border-radius: 20px;
      line-height: 20px;
      color: #fff;
      background: rgba(0,0,0,0.5);
      text-align: center;
      font-style: normal;
      img {
        width: 750px;
        height: 82px;
      }
    }
  }
  .tuicon {
    position: absolute;
    z-index: 200;
    left: 10px;
    top: 10px;
    width: 40px;
    height: 20px;
    border-radius: 20px;
    line-height: 20px;
    color: #fff;
    background: rgba(0,0,0,0.5);
    text-align: center;
    font-style: normal;
  }
  .guanggao
  {
    position: absolute;
    top: 185px;
    left: 0;
  }
  .result.more {
    color: #e8320d;
    border: 1px solid #e8320d;
    margin-bottom: 220px;
    margin-top:133px;
    a {
      color: #e8320d;
    }
  }

  .result {
    margin: 50px auto;
    width: 118px;
    height: 28px;
    line-height: 28px;
    border-radius: 5px;
    text-align: center;
    font-size: 14px;
  }

</style>

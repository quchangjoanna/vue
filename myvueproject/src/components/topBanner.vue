<template>
  <div class="top-banner clearfix">
    <slide :banners="banners"></slide>
    <div class="mod-right-img">
      <ul>
        <li v-for="item in goods">
          <a target="_blank" class="photo_link_text" title="">
            <div class="text">
              <p>{{item.text}}</p>
            </div>
          </a>
          <a target="_blank" class="photo_link">
            <img :src='item.imgUrl' alt="" title="">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import slide from './common/slide'
    export default {
        name: "top-banner",
        data(){
          return{
            banners: [
              {sourceUrl: 'http://nanjing.360loushi.com/', imgUrl: 'http://upload.360eol.com/2017/1109/1510198410573.jpg?imageView2/1/w/492/h/392/q/75'},
              {sourceUrl: 'http://nanjing.360loushi.com/', imgUrl: 'http://upload.360eol.com/2017/1020/1508480695168.png?imageView2/1/w/492/h/392/q/75'},
              {sourceUrl: 'http://nanjing.360loushi.com/', imgUrl: 'http://upload.360eol.com/2017/1020/1508481383496.png?imageView2/1/w/492/h/392/q/75'},
            ],
            goods:[
              {sourceUrl: 'http://nanjing.360loushi.com/', imgUrl: 'http://upload.360eol.com/2017/1109/1510198670429.jpg?imageView2/1/w/240/h/190',text:'租赁时代已经开启！南京人别再炒房子了……'},
              {sourceUrl: 'http://nanjing.360loushi.com/', imgUrl: 'http://upload.360eol.com/2017/1020/1508481706837.jpg?imageView2/1/w/240/h/190',text:'南京三楼盘进全国销售100强，均为高端改善项目'},
            ]
          }
        },
        components: {
          slide
        }
    }
</script>

<style scoped lang="scss">
  .top-banner {
    margin: 10px auto;
    width: 1120px;
  }
  .mod-right-img ul{
    list-style: none;
    float:left;
    margin:0;
    margin-left:10px;
    padding:0;
    li{
      position:relative;
      margin-bottom:11px;
      cursor:pointer;
      .photo_link_text{
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        font-size: 12px;
        height: 0;
        overflow: hidden;
        box-sizing: border-box;
        color: #fff;
        background: rgba(0,0,0,.6);
        opacity: 0;
        transition: all 0.3s;
        text-align:center;
      }
      img{
        vertical-align:middle;
      }
      &:hover {
        transform: translateY(-1px);
        box-shadow: 5px 5px 20px #ccc;
        .photo_link_text {
          height: 50px;
          line-height:40px;
          opacity: 1;
        }
      }
    }
  }
</style>

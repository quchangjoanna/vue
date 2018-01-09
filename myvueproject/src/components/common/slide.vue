<template>
    <div class="banner">
        <span @click="slidePre" class="slide-pre">
          <i class="icon iconfont icon-fanhui"></i>
        </span>
        <span @click="slideNext" class="slide-next">
          <i class="icon iconfont icon-gengduo"></i>
        </span>
      <div>
        <transition name="fadeIn" v-for="(item,index) in banners">
          <div class="slide"  v-show="index === curpage" >
            <a :href="item.sourceUrl" target="_blank">
              <img :src="item.imgUrl" alt="" />
            </a>
          </div>
        </transition>
      </div>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          prevTid: '',
          curpage: 0,
          slideDirection: 1
        }
      },
      props: {
        banners: {
          type: Array,
          required: true
        }
      },
      created: function () {
        this.autoSlide();
      },
      methods: {
        slideNext () {
          const lastPage = this.banners.length - 1
          if (this.curpage < lastPage) {
            this.curpage += 1
          } else {
            this.curpage = 0
          }
        },

        slidePre () {
          const lastPage = this.banners.length - 1
          if (this.curpage > 0) {
            this.curpage -= 1
          } else {
            this.curpage = lastPage
          }
        },
        autoSlide () {
          clearInterval(this.prevTid)
          console.log(111);
          this.prevTid = setInterval(() => {
            this.slideNext()
          }, 3000)
        }
      }
    }
</script>

<style scoped lang="scss">
.banner{
  position:relative;
  width:492px;
  height:392px;
  z-index:0;
  float:left;
}
.slide-pre{
  display: block;
  position:absolute;
  left:0px;
  top:50%;
  width:40px;
  height:70px;
  line-height: 70px;
  margin-top:-35px;
  z-index:10;
  color:#fff;
  cursor:pointer;
  /*&:hover{*/
     /*background: rgba(0, 0, 0, 0.3);*/
   /*}*/
}
.slide-next {
  display: block;
  position: absolute;
  right: 0;
  top: 50%;
  width: 40px;
  color:#fff;
  height: 70px;
  line-height: 70px;
  margin-top: -35px;
  z-index: 10;
  cursor: pointer;
&:hover{
   background: rgba(0, 0, 0, 0.3);
 }
}
.slide {
  position: absolute;
  left: 0;
  top: 0;
  width: 492px;
  height: 392px;
  /*transition: all 0.3s;*/
  img {
    width: 100%;
    height: 100%;
  }
}
.icon-chevron-left, .icon-chevron-right {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 30px;
  height: 30px;
  margin-left: -15px;
  margin-top: -15px;
  color: #ecf0f1;
}
.fadeIn-enter-active {
  transition: all .8s ease;
  opacity: 1;
}
.fadeIn-leave-active {
  transition: all .8s;
  opacity: 1;
}
.fadeIn-enter, .fadeIn-leave-to{
  transition: all .8s;
  opacity: 0;
}
</style>

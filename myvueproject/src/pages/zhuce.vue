<template>
  <div>
    <div class="header">
      <div class="main clearfix">
        <div id="logo" class="logo"><div class="tu"></div></div>
      </div>
    </div>
    <div class="banner">
      <div class="main">
        <div class="goLogin">
          <form action="" class="loginBox">
            <div class="login_top">
              <div class="methodPwd current">
                <div class="mp" id="formPassword">
                  <p class="error"></p>
                  <p><input type="text" placeholder="请输入邮箱/手机号" class="username" id="phoneOrEmail"></p>
                  <p><input type="password" placeholder="请输入密码" class="password" id="password"></p>
                  <p class="btn">
                    <a href="javascript:void(0);" class="loginBtn" onclick="login()" style="background: rgb(232, 50, 13); cursor: pointer;color:#fff;">注册</a>
                  </p>
                </div>
                <div class="div2"></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="footer">
      <p><a href="#">关于我们</a><span class="fline">|</span><a href="#">联系我们</a><span class="fline">|</span><a href="#">广告服务</a><span class="fline">|</span><a href="#">招贤纳士</a><span class="fline">|</span><a href="#">友情链接</a><span class="fline">|</span><a href="#">有害短信举报</a><span class="fline">|</span><a href="#">阳光绿色网络工程</a><span class="fline">|</span><a href="#">网络法制道德教育基地</a><span class="fline">|</span><a href="#">意见反馈</a></p>
      <p>南京三六零网络信息技术有限公司 版权所有</p>
      <p>Copyright © 2011 -All Rights Reserved 苏ICP备08015343号</p>
      <div class="foottu">
        <a><img src="../../src/assets/images/foot_01.png"><span>江苏广电<br>JSBC</span></a>
        <a><img src="../../src/assets/images/foot_03.png"><span>经营性网站<br>备案信息</span></a>
        <a><img src="../../src/assets/images/foot_04.png"><span>网络110<br>报警服务</span></a>
        <a><img src="../../src/assets/images/foot_02.png"><span>不良信息<br>举报中心</span></a>
        <a><img src="../../src/assets/images/foot_05.png"><span>江苏有线<br>JSBC</span></a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: '登录'
      }
    }
  }
</script>

<style scoped>
  .header {
    width: 100%;
    min-width: 1120px;
    height: 61px;
    background-color: #da3514;
    border-bottom: 1px solid #dcdcdc;
  }
  .main {
    margin: 0 auto;
    width: 1120px;
    position: relative;
  }
  .logo {
    float: left;
    width: 72px;
    height: 43px;
    padding: 11px 14px 6px 16px;
  }
  .logo .tu {
    width: 72px;
    height: 43px;
    background-image: url(../../src/assets/images/logo1.png);
    background-image: -webkit-image-set(url(../../src/assets/images/logo1.png) 1x,url(../../src/assets/images/logo2.png) 4x);
    background-image: -moz-image-set(url(../../src/assets/images/logo1.png) 1x,url(../../src/assets/images/logo2.png) 4x);
    background-image: -o-image-set(url(../../src/assets/images/logo1.png) 1x,url(../../src/assets/images/logo2.png) 4x);
    background-image: -ms-image-set(url(../../src/assets/images/logo1.png) 1x,url(../../src/assets/images/logo2.png) 4x);
    background-repeat: no-repeat;
  }
  .banner {
    width: 100%;
    height: 945px;
    background: url(../../src/assets/images/banner.jpg) center;
    position: relative;
  }
  .main {
    margin: 0 auto;
    width: 1120px;
    position: relative;
  }
  .goLogin {
    z-index: 10;
  }
  all.css:121
  .goLogin {
    width: 416px;
    position: absolute;
    right: 0;
    top: 175px;
  }
  .goLogin>ul {
    overflow: hidden;
    width: 100%;
    border-bottom: 1px #dfdfdf solid;
    height: 58px;
  }
  .loginBox {
    width: 296px;
    padding: 0 50px 0 70px;
  }
  .goLogin>ul li {
    float: left;
    width: 50%;
  }
  .goLogin>ul li {
    float: left;
    width: 50%;
  }
  .goLogin>ul li.active a {
    border-bottom: 3px #e8320d solid;
    color: #e8320d;
  }
  .goLogin>ul li a {
    display: block;
    width: 100%;
    height: 55px;
    line-height: 55px;
    text-align: center;
    color:#000;
    font-size: 18px;
  }
  .login_top>div.current {
    display: block;
  }
  .loginBox p {
    margin-top: 20px;
  }
  .registerBox p input, .loginBox p input {
    width: 274px;
    height: 44px;
    border: 1px #ccc solid;
    padding-left: 20px;
    background: none;
  }
  .loginBox .methodPwd .mp p:nth-child(4) span {
    float: left;
    font-size: 14px;
  }
  .loginBox .methodPwd .mp p:nth-child(4) a {
    float: left;
    font-size: 14px;
    color: #6a7fa5;
    text-decoration: underline;
    margin-left: 5px;
  }
  .loginBox .methodPwd .mp p:nth-child(4) a {
    float: left;
    font-size: 14px;
    color: #6a7fa5;
    text-decoration: underline;
    margin-left: 5px;
  }
  .loginBox .methodPwd .mp p:nth-child(4) .forgetPwd {
    float: right;
    text-decoration: none;
  }
  .registerBox .btn a, .loginBox .btn a {
    display: block;
    width: 296px;
    height: 46px;
    background: #999;
    color: #fff;
    font-size: 18px;
    cursor: text;
    text-align: center;
    line-height: 46px;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
  }
  .div2, .div3 {
    width: 416px;
    height: 464px;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }
  .div1, .div2, .div3 {
    background: #fff;
    opacity: 0.7;
    filter: alpha(opacity=70);
  }
  .registerBox .fenge, .loginBox .fenge {
    margin-bottom: 18px;
    overflow: hidden;
  }

  .loginBox p {
    margin-top: 20px;
  }
  .registerBox .fenge span, .loginBox .fenge span {
    float: left;
    width: 135px;
    height: 5px;
    border-bottom: 1px #999 dashed;
  }
  .registerBox .fenge b, .loginBox .fenge b {
    color: #999;
    font-size: 14px;
    line-height: 10px;
    float: left;
    font-weight: normal;
    width: 15px;
  }
  form .actions {
    width: 158px;
    margin: 0 auto;
  }
  .actions span {
    display: block;
    width: 158px;
    height: 15px;
    line-height: 15px;
    font-size: 14px;
    color: #999;
    margin-bottom: 20px;
  }
  .actions ul {
    width: 158px;
    height: 24px;
  }
  .actions ul li {
    float: left;
  }
  .actions ul li a {
    display: block;
    width: 24px;
    height: 24px;
    margin-left: 18px;
  }
  .actions ul li a img {
    display: block;
    width: 24px;
    height: 24px;
  }
  .goLogin {
    z-index: 10;
  }

  .goLogin {
    width: 416px;
    position: absolute;
    right: 0;
    top: 175px;
  }
  .loginBox .methodPwd .mp p:nth-child(4) {
    overflow: hidden;
  }
  .footer { width: 1120px; margin: 0 auto; padding: 7px 0 10px; height:150px; border-top: 3px solid #b42323; text-align: center; color: #7b7b7b; font-size: 12px; }
  .footer p { line-height: 24px; margin: 0; padding: 0; }
  .footer p .fline { color: #bfbfbf; margin: 0 3px; }
  .footer p a { display: inline-block; margin: 0 7px; color: #7b7b7b; text-decoration: none; }
  .footer p a:hover { color: #d60000; }
  .footer p a.footimg { border: 1px solid #c2c2c2; margin: 5px 5px 0; }
  .foottu { width:710px; margin:0 auto; margin-top:6px; text-align:center; overflow:hidden;color:#000;}
  .foottu a { float:left; line-height:20px; text-align:left; margin-right:30px; }
  .foottu img, .foottu span { float:left; margin-right:10px; color:#000;}
  .rt_top{ width: 60px;z-index: 500; position: fixed; _position: absolute; left: 50%; bottom: 105px; margin-left: 615px; }
</style>

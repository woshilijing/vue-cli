<template>

  <div>
   <!-- <h1>{{msg}}</h1>-->
    <div id="banner">
      <a href="#" class="refresh_title"></a>
    </div>
    <Nav></Nav>


  </div>
</template>

<script>
  import Nav from '../src/compoents/nav.vue'
  import 'swiper/dist/css/swiper.min.css'
  import 'swiper/dist/js/swiper.min'
export default {
  name: 'app',
  data(){
      return{
        msg: 'Welcome to Your Vue.js App',
       // recommendData:''
      }
  },
  components:{Nav},

}
</script>

<style>
  #banner {
    background-color: #cb3131;
      height: 1.06rem;
      width: 100%;
      line-height: 1.2rem;
      position: fixed;
      left: 0;
      top: 0;
      text-align: center;
      z-index: 999;

  }
  #banner .refresh_title {
    background: url(http://res1.ynet.com/119/logo.png) no-repeat center;
    width: 100%;
    background-size: 3.1rem;
    height: 1.06rem;
    display: inline-block;


  }
  .swiper-container {
      width: 100%;
      height: 4.3rem;
      margin-top:2.06rem;
  }
  .swiper-wrapper {
      width: 100%;
      height: 100%;

  }
  .swiper-slide {
      position: relative;
     /* background-position: center;*/
      background-size: cover;
      width: 100%;
      height:3.6rem;
  }
  .swiper-slide a{
      display: block;
  }
  .swiper-slide img{
      width:100%;
      height:3.6rem;
  }
  .swiper-pagination-bullet-active{
      background-color: red;
  }

  .wd span{
      display: block;
      width:100%;
      height:.6rem;
      background: rgba(0,0,0,0.5);
      position: absolute;
      bottom: 0;


  }
  .swiper-slide span em{
      font-size: 16px;
      color:white;
      display: block;
      line-height: .6rem;
      text-align: center;
text-overflow: ellipsis;
      white-space: nowrap;/*段落文本不进行换行*/
      overflow: hidden;

  }



  .faW_h5_container {
      margin-top: -.2rem;
  }
  a, a:hover {
      text-decoration: none;
  }
  .faW_h5_container ul li a div {
      border-bottom: 1px solid #f3f3f3;
      padding: 0.2rem 0.15rem;
      color: #000;
  }
  .faW_h5_container ul li a div .faW_h5_imgBox{
      display: block;
      margin-right: 0.2rem;
  }
  .faW_h5_container img{
      width:2.6rem;
      height:1.6rem;
  }
  .faW_h5_container ul li a div p{
      margin-top:.2rem;
      color: #9fa0a0;
      line-height: 0.12rem;
  }
  .faW_h5_container ul li h2 {
      color: #3e3a39;
      font-size: 16px;
      font-weight: normal;
  }
    h1{
        margin-top:2.06rem;
    }

</style>

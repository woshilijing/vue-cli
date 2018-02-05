<template>
    <div>
        <div class="head_wrap">
           <div class="inner">
            <!--3.通过router-link来添加路由跳转-->
            <router-link tag="div"  class="tab_item swiper-slide" to='/recommend'>推荐</router-link>
            <router-link tag="div"  class="tab_item swiper-slide" to='/news'>新闻</router-link>
            <router-link tag="div"  class="tab_item swiper-slide" to='/beijing'>北京</router-link>
            <router-link tag="div"  class="tab_item swiper-slide" to='/ent'>娱乐</router-link>
            <router-link tag="div"  class="tab_item swiper-slide" to='/live'>红人访</router-link>
            <router-link tag="div"  class="tab_item swiper-slide" to='/finance'>财经</router-link>
            <router-link tag="div"  class="tab_item swiper-slide" to='/video'>视频</router-link>
            <router-link tag="div"  class="tab_item swiper-slide" to='/hot'>热点</router-link>
           </div>

        </div>
        <router-view></router-view>
    </div>

</template>
<script>

</script>
<style scoped>
    /*https://www.cnblogs.com/unclekeith/p/7272491.html去掉横向滚动条技巧*/
    .head_wrap{
        width: 100%;
height:1rem;
        overflow: hidden;
        text-align: center;
        position: fixed;
        left: 0;
        top: 1rem;
        background: #f4f5f6;
        font-family: \\5FAE\8F6F\96C5\9ED1;

        z-index: 999;
    }
    .inner{
        height:1.3rem;
        overflow-x: auto;
        white-space: nowrap;
    }


    .tab_item{
        display: inline-block;
        height: 1rem;
        line-height: 1rem;
        width: 1.4rem;
        font-size: 18px;
    }
    .router-link-active {
        color: #ca3133;
    }


</style>
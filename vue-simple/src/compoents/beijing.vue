<template id="beijing">
    <div>
        <div class="swiper-container swiper-container3">
            <div class="swiper-wrapper wd">
                <div class="swiper-slide" v-for="(item,index) in this.recommendData['focus']">
                    <a :href="item.link">
                        <img :src="item.imgs"/>
                        <span><em>{{item.title}}</em></span>

                    </a>
                </div>
            </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination swiper-p3"></div>

       </div>
        <div class="faW_h5_container">
            <ul>
                <li v-for="item in this.recommendData['list']">
                    <a :href="item.link">
                        <div class="clear">
                    <span class="fLeft faW_h5_imgBox">
                        <img :src="item.imgs">
                    </span>
                            <h2>{{item.title}}</h2>
                            <p class="clear">
                                <span class="fLeft">{{item.source}}</span>
                                <span class="fRight">{{item.date}}</span>
                            </p>
                        </div>
                    </a>
                </li>
            </ul>

        </div>
        <router-view></router-view>
    </div>



</template>
<script>
    import 'swiper/dist/css/swiper.min.css'
    import 'swiper/dist/js/swiper.min'
        export default {
    data(){
        return {

            recommendData: ''
        }
    },
    created(){
        this.$http.get('http://res1.ynet.com/app/report.json')
                .then(function (res) {
                    this.recommendData = res.body;
                })
    },
    updated(){
          this.swip();
                //http://blog.csdn.net/molvshan/article/details/78250133
                //https://segmentfault.com/a/1190000008010666
     },
    methods:{
         swip(){

                    var swiper = new Swiper('.swiper-container3', {
                        pagination: '.swiper-p3',
                        paginationClickable: true,
                        loop : true,
                        autoplay : 2000,
                        autoplayDisableOnInteraction : false
                    });

                }
            }


}
</script>
<style>

</style>
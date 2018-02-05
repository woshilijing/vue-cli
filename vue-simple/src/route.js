/**
 * Created by O5 on 2018/1/29.
 */
import Recommend from './compoents/recommend.vue';
import News from './compoents/news.vue';
import Beijing from './compoents/beijing.vue';
import Ent from './compoents/ent.vue';
import Live from './compoents/live.vue';
import Finance from './compoents/finance.vue';
import Video from './compoents/video.vue';
import Hot from './compoents/hot.vue';
export default{
    routes:[
        {
            path:'/recommend',
            component:Recommend

        },
        {
            path:'/news',
            component:News
        },
        {
            path:'/beijing',
            component:Beijing
        },
        {
            path:'/ent',
            component:Ent
        },
        {
            path:'/live',
            component: Live
        },
        {
            path:'/finance',
            component: Finance
        },
        {
            path:'/video',
            component: Video
        },
        {
            path:'/hot',
            component: Hot
        },
        {
            path:'*',
            component:Recommend,
            redirect:'recommend'
        }
    ]
}
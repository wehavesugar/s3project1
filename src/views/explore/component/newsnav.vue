<template> 
    <div id="main">
        <ul class="newsnav">
            <router-link v-for="(item, index) in navlist" :key='index'
            tag='li' :to='item.path'>
                <a href="javascript:;">
                {{item.title}}
                </a>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name:"newsnav",
    data(){
        return{
            navlist:[
                {
                    title:'新闻',
                    path:'/news'
                },
                {
                    title:'预告片',
                    path:'/trailer'
                },
                {
                    title:'排行榜',
                    path:'/toplist'
                },
                {
                    title:'影评',
                    path:'/review'
                }
                ],
                toggleIndex:0
                }
    }
}
</script>

<style scoped>
    #main{
        width:100%;
        overflow-y: scroll;  
    }
    .newsnav {
        display: flex;
        justify-content: space-around;
        text-align: center;
        align-items: center;
        width: 100%;
        color: #000;
    }
    
    .newsnav>li {
        height: .96rem;
        width: 25%;
        line-height: .96rem;
        font-size: .32rem;
    }
    
    .newsnav .router-link-active a {
        color: #1e7dd7;
        font-weight: bold;
    }
    
</style>
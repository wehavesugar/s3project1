<template>
    <div>
        <v-touch class="header" tag='header' @tap="handleback">
            <a href="#" class="back" ></a>
        </v-touch>
        <div id="main">
            <div class="filmpeople">
                <div class="peopletitle">
                    <h2>{{title}}</h2>
                </div>
                <p>{{summary}}</p>
            </div>
            <ul>
                <li v-for="(item, index) in movies" :key="index">
                    <p class="glotop">
                        <span>{{item.rankNum}}</span>
                    </p>
                    <div class="movieinfo">
                        <div class="glotop_pic">
                            <a href="javascript:;">
                                <img class="m_img img_box" :src=item.posterUrl>
                            </a>
                        </div>
                        <div class="td">
                            <dt>
                                <a href="javascript:;">
                                    <strong>{{item.name}}</strong>
                                    <em class="m_score">
                                        <i>{{item.rating}}</i>
                                    </em>
                                </a>
                            </dt>
                            <dd class="entitle">
                                <p>{{item.nameEn}}</p>
                            </dd>
                            <dd class="glo_movieinfo">
                                <a href="javascript:;">
                                    <p>导演：{{item.director}}</p>
                                    <p>主演：{{item.actor}}&nbsp;&nbsp;{{item.actor2}}</p>
                                    <p>{{item.releaseDate}} {{item.releaseLocation}}</p>
                                </a>
                            </dd>
                        </div>
                    </div>
                    <aside class="glo_tip _resonContent">
                        <div class="table">
                            <p class="displayResonContent">
                                {{item.remark.slice(0,38)}}...
                            </p>
                        </div>
                    </aside>
                    <p class="glo_line"></p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {topListDetails} from "@api/explore";
export default {
    async created(id){
        let response = await topListDetails(this.id);
        this.title=response.topList.name;
        this.summary=response.topList.summary;
        this.movies=response.movies;
    },
    props:['id'],
    name:'movie',
    data(){
        return{
            title:'',
            summary:'',
            movies:[]
        }
    },
    methods:{
        handleback(){
            this.$router.back();
        }
    }
}
</script>

<style scoped>
        .header {
            width: 100%;
            height: 1.056rem;
            background: #1c2635;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 0 0.5rem;
            box-sizing: border-box;
            position: relative;
        }
        
        .back {
            display: block;
            width: 1.056rem;
            height: 1.056rem;
            position: absolute;
            top: 0;
            left: 0;
            color: #fff;
            text-align: center;
            background: url(../../../../public/img/h_btn_back.png) no-repeat .3rem center;
            background-size: 20%;
        }
        
        .filmpeople {
            background: #f6f6f6;
            border-bottom: 1px solid #dfdfdf;
            padding: .276rem .36rem .288rem;
        }
        
        .filmpeople .peopletitle {
            padding-bottom: .144rem;
        }
        
        .filmpeople .peopletitle h2 {
            box-sizing: border-box;
            font-size: .3846rem;
            text-align: center;
            line-height: .58rem;
            margin: 0 .228rem;
            font-weight: bold;
        }
        
        .filmpeople p {
            font-size: .257rem;
            color: #777;
            line-height: .4rem;
        }
        
        #main ul {
            padding-top: .36rem;
        }
        
        #main ul li {
            position: relative;
            box-sizing: border-box;
        }
        
        .glotop {
            position: absolute;
            left: .12rem;
            top: 0;
            width: .5518rem;
            height: .5518rem;
            border-radius: 50%;
            background: #bbb;
            text-align: center;
            line-height: .5518rem;
        }
        
        .glotop span {
            display: block;
            color: #fff;
            font-size: .32rem;
        }
        
        li:first-of-type .glotop {
            background: #ff8600;
        }
        
        li:nth-of-type(2) .glotop {
            background: #76c62f;
        }
        
        li:nth-of-type(3) .glotop {
            background: #36b2ec;
        }
        
        .movieinfo {
            width: 100%;
            box-sizing: border-box;
            display: flex;
        }
        
        .movieinfo {
            width: 100%;
        }
        
        .glotop_pic {
            margin-left: .792rem;
            margin-right: .36rem;
        }
        
        .glotop_pic a {
            display: block;
            width: 1.75188rem;
        }
        
        .glotop_pic a img {
            width: 100%;
            height: auto;
            display: block;
            border: 1px solid #ddd;
        }
        
        .movieinfo .td {
            margin-right: .36em;
        }
        
        .movieinfo .td dt {
            margin-top: -.048rem;
        }
        
        .movieinfo .td dt a {
            display: block;
        }
        
        .movieinfo .td dt a strong {
            vertical-align: middle;
            font-size: .34rem;
        }
        
        .movieinfo .td dt a .m_score {
            margin-left: .12em;
            background: #659d0e;
            width: .48rem;
            height: .43188rem;
            color: #fff;
            display: inline-block;
            vertical-align: middle;
            overflow: hidden;
            line-height: .43188rem;
            text-align: center;
        }
        
        .movieinfo .td dt a .m_score i {
            font-size: .26rem;
        }
        
        .movieinfo .td .entitle {
            padding-top: .12rem;
        }
        
        .movieinfo .td .entitle p {
            color: #bbb;
            line-height: .32rem;
            font-size: .28rem;
        }
        
        .movieinfo .td .glo_movieinfo {
            margin-top: .384rem;
        }
        
        .movieinfo .td .glo_movieinfo a {
            display: block;
            box-sizing: border-box;
        }
        
        .movieinfo .td .glo_movieinfo a p {
            font-size: .28rem;
            line-height: .476rem;
            height: .476rem;
            overflow: hidden;
            color: #000;
        }
        
        .glo_tip {
            margin: .276rem .36rem 0 .792rem;
            background: #f6f6f6;
            padding: .12rem .144rem;
            border-radius: .1rem;
            box-sizing: border-box;
        }
        
        .glo_tip .table {
            width: 100%;
        }
        
        .glo_tip .table .displayResonContent {
            line-height: .38rem;
            font-size: .28rem;
            color: #777;
            padding: 0 .2rem;
            text-overflow: ellipsis;
            height: .76rem;
        }
        
        .glo_line {
            height: 1px;
            background: #dfdfdf;
            margin: .36rem 0 .36rem .792rem;
        }
</style>

<template>
  <div class="discovery-container">
    <el-carousel :interval="4000" type="card">
    <el-carousel-item v-for="(item,index) in banners" :key="index">
        <img :src="item.pic" alt="">
    </el-carousel-item>
    </el-carousel>

    <!--推荐音乐-->
    <div class="recommend">
      <h3 class="title">
        推荐歌单
      </h3>
      <div class="items">
        <div class="item" v-for="(item, index) in list" :key="index" @click="toPlaylist(item.id)">
          <div class="img-wrap">
            <div class="desc-wrap">
              <span class="desc">{{ item.copywriter }}</span>
            </div>
            <img :src="item.picUrl" alt="" />
            <span class="iconfont icon-play"></span>
          </div>
          <p class="name">{{ item.name }}</p>
        </div>
      </div>
    </div>
    <!-- 最新音乐 -->
    <div class="news">
      <h3 class="title">
        最新音乐
      </h3>
      <div class="items">
        <div class="item" v-for="(item, index) in songs" :key="index" @click="playMusic(item.id)">
          <div class="img-wrap">
            <img :src="item.picUrl" alt="" />
            <span class="iconfont icon-play"></span>
          </div>
          <div class="song-wrap">
            <div class="song-name">{{ item.name }}</div>
            <div class="singer">{{ item.song.artists[0].name }}</div>
          </div>
        </div>
      </div>
    </div>

 <!-- 推荐MV -->
   <div class="mvs">
      <h3 class="title">推荐MV</h3>
      <div class="items">
        <div class="item" v-for="(item, index) in mvs" :key="index" @click="toMv(item.id)">
          <div class="img-wrap">
            <img :src="item.picUrl+'?param=250y150'" alt="" />
            <span class="iconfont icon-play"></span>
            <div class="num-wrap">
              <div class="iconfont icon-play"></div>
              <div class="num">{{ item.playCount }}</div>
            </div>
          </div>
          <div class="info-wrap">
            <div class="name">{{ item.name }}</div>
            <div class="singer">{{ item.artistName }}</div>
          </div>
        </div>
      </div>
    </div>

      </div>
    </div>
</div> 

</template>

<script>
import {getBanner,getRecommend,getNewSongs,
getPlaySongs,getPersonalizedMv} from "../network/request";
export default {
  name:'discovery',
  data(){
    return{
        banners:[],
        type:1,
        limit:10,
        list:[],
        songs:[],
        mvs:[]
    }
},
   created(){
      this._getBanner()
      this._getRecommend()
      this._getNewSongs()
      this._getNewSongs()
      this._getPersonalizedMv()
    },
    methods:{
        //轮播图数据
        _getBanner(){
              getBanner(this.type).then(res=>{     
            this.banners=res.banners
        })
        },
        //推荐歌单
        _getRecommend(){
        getRecommend(8).then(res=>{
          this.list=res.result
        })
        },
        //最新音乐
        _getNewSongs(){
          getNewSongs(this.limit).then(res=>{
          this.songs=res.result
        })
        },
        //推荐MV
        _getPersonalizedMv(){
           getPersonalizedMv().then(res=>{
            this.mvs=res.result
            console.log(this.mvs);
        })
        },
      playMusic(id){
          getPlaySongs(id).then(res=>{
            let url=res.data[0].url
            this.$parent.musicUrl=url
        })
      },
      toPlaylist(id) {
        this.$router.push('/playlistdetail?q='+id)
      },
      toMv(id) {
        this.$router.push('/mvdetail?q='+id)
    },
    }
}
</script>

<style scoped>

  
</style>

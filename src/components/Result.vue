<template>
  <div class="result-container">
    <div class="title-wrap">
      <h2 class="title" :keywords="(keywords = $route.query.q)">{{ $route.query.q }}</h2>
      <span class="sub-title">为你找到{{ count }}个结果</span>
    </div>
    <el-tabs v-model="activeIndex">
      <el-tab-pane label="歌曲" name="songs">
        <table class="el-table">
          <thead>
            <th></th>
            <th>音乐标题</th>
            <th>歌手</th>
            <th>专辑</th>
            <th>时长</th>
          </thead>
          <tbody>
            <tr class="el-table__row" v-for="(item, index) in songs" :key="index" @click="playMusic(item.id)">
              <td>{{ index + 1 }}</td>
              <td>
                <div class="song-wrap">
                  <div class="name-wrap">
                    <!-- 名称 -->
                    <span>{{ item.name }}</span>
                    <!-- mv图标 -->
                    <span v-if="item.mvid !== 0" class="iconfont icon-mv" @click.stop="toMv(item.mvid)"></span>
                  </div>
                  <!-- 二级标题 -->
                  <span v-if="item.alias.length !== 0">{{ item.alias[0] }}</span>
                </div>
              </td>
              <td>{{ item.artists[0].name }}</td>
              <td>{{ item.album.name }}</td>
              <td>{{ item.duration | playTimeFormat }}</td>
            </tr>
          </tbody>
        </table>
      </el-tab-pane>

      <el-tab-pane label="歌单" name="lists">
        <div class="items">
          <div class="item" v-for="(item, index) in playlists" :key="index" @click="toPlaylist(item.id)">
            <div class="img-wrap">
              <div class="num-wrap">
                播放量:
                <span class="num">{{ item.playCount | playNumFormat }}</span>
              </div>
              <img :src="item.coverImgUrl+'?param=200y200'" alt="" />
              <span class="iconfont icon-play"></span>
            </div>
            <p class="name">{{ item.name }}</p>
          </div>
        </div>
      </el-tab-pane>

      <el-tab-pane label="MV" name="mv">
        <div class="items mv">
          <div class="item" v-for="(item, index) in mvs" :key="index" @click="toMv(item.id)">
            <div class="img-wrap">
              <img :src="item.cover+'?param=250y150'" alt="" />
              <span class="iconfont icon-play"></span>
              <div class="num-wrap">
                <div class="iconfont icon-play"></div>
                <div class="num">{{ item.playCount | playNumFormat }}</div>
              </div>
              <span class="time">{{ item.duration | playTimeFormat }}</span>
            </div>
            <div class="info-wrap">
              <div class="name">{{ item.name }}</div>
              <div class="singer">{{ item.artistName }}</div>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>

    <!-- 分页器 -->
    <el-pagination 
    @current-change="handleCurrentChange" 
    background layout="prev, pager, next" 
    :total="total" 
    :current-page="pageNum" 
    :page-size="limit">
    </el-pagination>
  </div>
</template>

<script>
import {serach,getPlaySongs} from "../network/request";
export default {
  name: 'result',
  data() {
    return {
      // 总条数
      total: 0,
      // 页码
      pageNum: 1,
      limit: 10,
      keywords: '',
      activeIndex: 'songs',
      songs: [],
      count: 0,
      playlists: [],
      mvs: [],
      songId: 0,
      type: 1
    }
  },

  created() {
    this._serach()
  },
  
  watch: {
    activeIndex(){
      switch(this.activeIndex){
        case 'songs':
        this.type=1
        this.pageNum = 1
        break;
        case 'lists':
        this.type=1000
        this.pageNum = 1
        break;
        case 'mv':
        this.type=1004
        this.pageNum = 1
        break;
      }
      this._serach()
    }
  },

  methods: {
    _serach(){
      serach(this.$route.query.q,this.type,this.limit,(this.pageNum-1)*this.limit).then(res=>{
        if(this.type===1){
          this.songs=res.result.songs
          this.count=res.result.songCount
        }else if(this.type===1000){
          this.playlists=res.result.playlists
          this.count=res.result.playlistCount     
        }else if(this.type===1004){
          this.mvs=res.result.mvs
          this.count=res.result.mvCount        
        }
          this.total = this.count
      })
    },
    playMusic(id){
      getPlaySongs(id).then(res=>{
        let url=res.data[0].url
        this.$parent.musicUrl=url
      })
    },
    toPlaylist(id){
      this.$router.push('/playlistdetail?q='+id)
    },
    toMv(id){
      this.$router.push('/mvdetail?q='+id)
    },
    handleCurrentChange(val){
        this.pageNum = val,
        this._serach()
    }
  }
}
</script>

<style >
</style>

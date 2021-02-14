import {request} from "./home";

//type类型： 0: pc 1: android 2: iphone 3: ipad 轮播图数据
export function getBanner(type) {
	return request({
		url: '/banner',
		params: {
			type
		}
	})
}
//获取推荐歌单列表
export function getRecommend(limit) {
	return request({
		url: '/personalized',
		params: {
			limit
		}
	})
}
//获取最新音乐
export function getNewSongs(limit) {
	return request({
		url: '/personalized/newsong',
		params: {
			limit
		}
	})
}
//获取歌单列表
export function getPlaySongs(id) {
	return request({
		url: '/song/url',
		params: {
			id
		}
	})
}
// 获取推荐MV
export function getPersonalizedMv() {
	return request({
		url:'/personalized/mv',
	})
  }

 // 获取歌单详情
 export function getPlaylistDetail(id) {
	return request({
		url:'/playlist/detail',
		param:{
			id
		}
	})
  }
//获取精品歌单
export function getGoodPlaylist(limit,cat){
	return request({
		url:'/top/playlist/highquality',
		params:{
			limit,
			cat
		}
	})
}
//获取歌单列表
export function getPlaylist(limit,offset,cat){
	return request({
		url:'/top/playlist',
		params:{
			limit,
			offset,
			cat
		}
	})
}
//获取最新音乐
export function getSecondNewSongs(type){
	return request({
		url:'/top/song',
		params:{
			type
		}
	})
}
//获取全部MV地址
export function getMvs(area,type,order,offset,limit){
	return request({
		url:'/mv/all',
		params:{
			area,
			type,
			order,
			offset,
			limit
		}
	})
}
//获取搜索
export function serach(keywords,type,limit,offset){
	return request({
		url:'/search',
		params:{
			keywords,
			type,
			limit,
			offset
		}
	})
}
//获取歌单详情
export function getPlaylistinnerDetail(id){
	return request({
		url:'/playlist/detail',
		params:{
			id
		}
	})
}
// 获取MV详情
export function getMvDetail(mvid) {
	return request({
		url:'/mv/detail',
		params:{
			mvid
		}
	})
  }
// 获取歌单评论
export function getPlaylistComments(id,limit,offset) {
	return request({
		url:'/comment/playlist',
		params:{
			id,
			limit,
			offset
		}
	})
  }
// 获取MV播放地址
export function getMvUrl(id,r) {
	return request({
		url:'/mv/url',
		params:{
			id,
			r
		}
	})
  }
// 获取相关MV
export function getSimiMvUrl(mvid) {
	return request({
		url:'/simi/mv',
		params:{
			mvid
		}
	})
  }
// 获取歌手头像
export function getArtistIcon(id) {
	return request({
		url:'/artists',
		params:{
			id
		}
	})
  }
// 获取MV评论
export function getMvComment(id, limit,offset) {
	return request({
		url:'/comment/mv',
		params:{
			id,
			limit,
			offset
		}
	})
  }
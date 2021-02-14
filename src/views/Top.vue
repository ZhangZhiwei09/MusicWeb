<template>
  <div class="top-container">
    <div class="left-box">
      <div class="icon-wrapper">
        <span class="iconfont icon-home" @click="toHomeClick()"></span>
      </div>

    </div>
    <div class="right-box">
      <div class="el-input el-input--small el-input--prefix">
        <input type="text" autocomplete="off" placeholder="搜索" v-model="inputVal" @keyup.enter="toResult" class="el-input__inner" />
        <span class="el-input__prefix">
          <i class="el-input__icon el-icon-search"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'top',
  data() {
    return {
      query: '',
      inputVal: '',
      n: 0,
      btnStatus: 0
    }
  },
  methods: {
    toResult() {
      if (this.inputVal === '') {
        // 提示用户
        this.$message.warning('请输入内容!')
      } else {
        // 携带数据去搜索页面
       this.$router.push(`/result?q=`+this.inputVal)
      }
    },
    toHomeClick() {
      if ('/discovery' === this.$route.path) {
        return
      }
      this.$router.push(`/discovery`)
    }
  }
}
</script>

<style scoped></style>

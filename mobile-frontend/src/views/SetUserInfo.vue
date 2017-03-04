<template>
  <div>
    <mt-header fixed title="修改信息">
      <mt-button slot="left" icon="back" @click="goBack">返回</mt-button>
    </mt-header>
    <div style="margin-top: 40px;">
      <mt-field label="联系电话" placeholder="请输入联系电话" type="tel" v-model="tel"></mt-field>
      <mt-field label="收货地址" placeholder="请输入收货地址" type="textarea" rows="4" v-model="address"></mt-field>
    </div>
    <div style="margin-top: 40px;">
      <mt-button type="primary" size="large" @click="handleSave">保存</mt-button>
      <mt-button size="large" style="margin-top: 20px;" @click="goBack">取消</mt-button>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'SetUserInfo',
    computed:{
      tel:{
          get(){
              return this.$store.state.userInfo.tel
          },
          set(value){
              this.$store.state.userInfo.tel = value
          }
      },
      address: {
          get(){
              return this.$store.state.userInfo.address
          },
          set(value){
              this.$store.state.userInfo.address = value
          }
      }
    },
    methods: {
      goBack(){
        this.$router.go(-1)
      },
      handleSave(){
        this.$store.dispatch('updateUserInfo', {
            username: this.$store.state.login.username,
            tel: this.tel,
            address: this.address
        })
      }
    },
    mounted(){
      this.$store.dispatch('getUserInfo', { username: this.$store.state.login.username })
    }
  }
</script>
<style>

</style>



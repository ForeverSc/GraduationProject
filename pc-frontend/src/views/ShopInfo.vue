<template>
  <el-card class="box-card form-card">
    <div slot="header" class="clearfix">
      <span style="line-height: 36px;">店铺管理</span>
    </div>
    <el-form ref="form" label-width="100px">
      <el-form-item label="店铺名称">
        <el-input v-model="shopName" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="店铺电话">
        <el-input v-model="shopTel"></el-input>
      </el-form-item>
      <el-form-item label="店铺地址">
        <el-input type="textarea" v-model="shopAddr"></el-input>
      </el-form-item>
      <el-form-item label="店铺介绍">
        <el-input type="textarea" v-model="shopDetail"></el-input>
      </el-form-item>
      <!--<el-form-item label="店铺图标">-->
      <!--<el-upload-->
      <!--action="//jsonplaceholder.typicode.com/posts/"-->
      <!--:on-preview="handlePreview"-->
      <!--:on-remove="handleRemove"-->
      <!--:default-file-list="fileList">-->
      <!--<el-button size="small" type="primary">点击上传</el-button>-->
      <!--<div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>-->
      <!--</el-upload>-->
      <!--</el-form-item>-->
      <el-form-item>
        <el-button type="primary" @click="handleSave">保存</el-button>
        <el-button @click="handleCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default{
    name: 'ShopInfo',
    computed: {
      ...mapGetters([
         'shopName'
      ]),
      shopTel: {
        get(){
          return this.$store.state.shopInfo.shopTel
        },
        set(value){
          this.$store.state.shopInfo.shopTel = value
        }
      },
      shopAddr: {
        get(){
          return this.$store.state.shopInfo.shopAddr
        },
        set(value){
          this.$store.state.shopInfo.shopAddr = value
        }
      },
      shopDetail: {
        get(){
          return this.$store.state.shopInfo.shopDetail
        },
        set(value){
          this.$store.state.shopInfo.shopDetail = value
        }
      },
    },
    methods: {
      handleSave(){
        this.$store.dispatch('updateShopInfo', {
          shopName: this.$store.state.login.shopName,
          shopTel: this.shopTel,
          shopAddr: this.shopAddr,
          shopDetail: this.shopDetail
        })
      },
      handleCancel(){
        this.$router.go(-1)
      }
    },
    mounted(){
      this.$store.dispatch('getShopInfo', {shopName: this.$store.state.login.shopName})
    }
  }
</script>
<style>
  .form-card {
    margin: 40px;
  }
</style>

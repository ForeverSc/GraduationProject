<template>
  <div>
    <el-card class="box-card form-card">
      <div slot="header" class="clearfix">
        <span style="line-height: 36px;">菜单管理</span>
      </div>
      <el-table
        :data="shopMenu"
        border
        style="width: 100%">
        <el-table-column
          label="菜名"
          width="180">
          <template scope="scope">
            {{ scope.row.dishName }}
          </template>
        </el-table-column>
        <el-table-column
          label="价格"
          width="180">
          <template scope="scope">
            {{ scope.row.dishPrice }}
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template scope="scope">
            <el-button
              size="small"
              @click="handleEdit(scope.$index, scope.row)">编辑
            </el-button>
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div style="margin-top: 20px;">
        <el-button type="primary" @click="saveMenu">保存</el-button>
        <el-button type="success" @click="addNewDish">新增</el-button>
        <el-button @click="cancel">取消</el-button>
      </div>
    </el-card>
    <el-dialog :title="dialogTitle" v-model="dialogVisible">
      <el-form ref="form" :model="dish" label-width="100px">
        <el-form-item label="菜品名称">
          <el-input v-model="dish.dishName"></el-input>
        </el-form-item>
        <el-form-item label="菜品价格">
          <el-input v-model="dish.dishPrice"></el-input>
        </el-form-item>
        <el-form-item label="菜品介绍">
          <el-input type="textarea" v-model="dish.dishDetail"></el-input>
        </el-form-item>
        <el-form-item label="菜品图标">
          <el-upload
            :action="baseURL + '/uploadFile?name=' + shopName"
            :show-upload-list="false"
            :on-success="handleUploadSuccess">
            <img v-if="dish.dishLogo.url" :src="dish.dishLogo.url" style="width: 100px; height: 100px;">
            <el-button v-if="!dish.dishLogo.url" size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="saveDish">保存</el-button>
          <el-button @click="closeDialog">取消</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import Util from '../util/index'
  import { baseURL } from '../util/axios'
  export default{
    name: 'ShopInfo',
    data() {
      return {
        baseURL,
        dialogVisible: false,
        dialogTitle: '新增菜品',
        dialogOperation: 'add',
        dish: {
          index: '',
          dishName: '',
          dishPrice: '',
          dishDetail: '',
          dishLogo: {
              name: '',
              url: ''
          }
        }
      }
    },
    computed: {
      ...mapGetters([
         'shopName'
      ]),
      shopMenu: {
        get(){
          return this.$store.state.menu.shopMenu
        },
        set(value){
          this.$store.state.menu.shopMenu = value
        }
      }
    },
    methods: {
      handleEdit(index, row){
        this.dialogVisible = true
        this.dialogTitle = '编辑菜品'
        this.dialogOperation = 'edit'
        this.dish = { ...Util.deepClone(this.shopMenu[index]), index}
      },
      handleDelete(index, row){
        this.$confirm('是否确认删除该菜品？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(()=>{
          this.shopMenu.splice(index, 1)
          this.$message({
            type: 'success',
            message: '删除成功！'
          });
        }, ()=>{})
      },
      addNewDish(){
        Object.keys(this.dish).forEach(currentValue => {
          this.dish[currentValue] = ''
        });
        this.dialogVisible = true
        this.dialogOperation = 'add'
      },
      saveDish(){
        if(this.dialogOperation === 'add'){//新增菜品
          let newDish  = Util.deepClone(this.dish)
          this.shopMenu.push(newDish)
        }else{//编辑菜品
          let index = this.dish.index
          this.shopMenu.splice(index, 1, Util.deepClone(this.dish))
        }
        this.dialogVisible = false
      },
      saveMenu(){
        this.$store.dispatch('updateShopMenu', {
          shopName: this.$store.state.login.shopName,
          shopMenu: this.shopMenu
        })
      },
      closeDialog(){
        this.dialogVisible = false
      },
      cancel(){
        this.$router.go(-1)
      },
      handleUploadSuccess(response, file, fileList){
        this.dish.dishLogo = {
          name: response.data.name,
          url: response.data.url
        }
        this.dish.imageUrl = 'http://localhost:3000/' + response.data.url;
      }
    },
    mounted(){
      this.$store.dispatch('getShopMenu', {shopName: this.$store.state.login.shopName})
    }
  }
</script>
<style>
  .form-card {
    margin: 40px;
  }
</style>

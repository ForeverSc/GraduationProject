<template>
  <div>
    <el-card class="box-card form-card">
      <div slot="header" class="clearfix">
        <span style="line-height: 36px;">菜单管理</span>
      </div>
      <el-table
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          label="菜名"
          width="180">
          <template scope="scope">
            {{ scope.row.name }}
          </template>
        </el-table-column>
        <el-table-column
          label="价格"
          width="180">
          <template scope="scope">
            {{ scope.row.price }}
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
        <el-button type="primary">保存</el-button>
        <el-button type="success" @click="addNewDish">新增</el-button>
        <el-button>取消</el-button>
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
            action="//jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :default-file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
          <el-button type="primary">保存</el-button>
          <el-button @click="closeDialog">取消</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
  export default{
    name: 'ShopInfo',
    data() {
      return {
        dialogVisible: false,
        dialogTitle: '新增菜品',
        dish: {
          dishName: '',
          dishPrice: '',
          dishDetail: ''
        },
        tableData: [{
          name: '热干面',
          price: '100.00'
        }, {
          name: '热干面',
          price: '100'
        }, {
          name: '热干面',
          price: '100'
        }]
      }
    },
    methods: {
      handleEdit(){
        this.dialogVisible = true
        this.dialogTitle = '编辑菜品'
      },
      handleDelete(){
        this.$confirm('是否确认删除该菜品？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功！'
          });
        }, () => {
        })
      },
      addNewDish(){
        Object.keys(this.dish).forEach(currentValue => {
          this.dish[currentValue] = ''
        });
        this.dialogVisible = true
      },
      closeDialog(){
        this.dialogVisible = false
      }
    }
  }
</script>
<style>
  .form-card {
    margin: 40px;
  }
</style>

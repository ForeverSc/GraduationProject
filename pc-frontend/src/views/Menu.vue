<template>
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
</template>
<script>
  export default{
    name: 'ShopInfo',
    data() {
      return {
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
      addNewDish(){
          this.$router.push('/editDish?operation=add')
      }
    }
  }
</script>
<style>
  .form-card {
    margin: 40px;
  }
</style>

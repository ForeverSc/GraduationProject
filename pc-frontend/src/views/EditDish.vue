<template>
  <el-card class="box-card form-card">
    <div slot="header" class="clearfix">
      <span style="line-height: 36px;">{{ title }}</span>
    </div>
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="菜品名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="菜品价格">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="菜品介绍">
        <el-input type="textarea" v-model="form.name"></el-input>
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
      <el-form-item>
        <el-button type="primary">保存</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script>
  export default{
    name: 'EditDish',
    data() {
      return {
        title: '新增菜品',
        form: {
          name: ''
        }
      }
    },
    computed:{

    },
    mounted(){
        let operation = this.$route.query.operation
        if(operation === 'edit'){
          this.title = '编辑菜品'
        }
    }
  }
</script>
<style>
  .form-card{
    margin: 40px;
  }
</style>

<template>
  <div>
    <input @change="fileSelected"  type="file">
    <el-button type="primary" size="small" @click="handleUpload">上传</el-button>
  </div>
</template>
<script>
  export default {
      name: 'upload',
      data(){
          return {
            file: ''
          }
      },
      methods:{
        fileSelected(event){
          this.file = event.currentTarget.files[0];
        },
        handleUpload(){
            this.$emit('upload', this.file)
        }
      }
  }
</script>


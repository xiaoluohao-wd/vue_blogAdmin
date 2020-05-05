<template>
  <div>
      <el-card>
          <el-form label-width="80px" :model="articleForm">
            文章主题:
            <el-input v-model="articleForm.name"></el-input><br><br>
            文章分类:
            <el-select v-model="articleForm.category">
                <el-option value="html">html</el-option>
            </el-select><br><br>
            文章内容:
            <quill-editor v-model="articleForm.content"></quill-editor><br>
            <el-button type="primary" @click="addarticle">发表</el-button>
        </el-form>
      </el-card>
      
    
  </div>
</template>

<script>
export default {

    data () {
        return {
            articleForm:{
                name:'',
                category:'',
                content:''
            },
        }
    },

    methods: {
        async addarticle(){
           const res= await this.$http.post('/addarticles',{articleForm:this.articleForm})
           if(res.status!==200){
               return this.$message.error('发表文章失败')
           }
           this. $message.success('发表文章成功')
        }
    }
}

</script>
<style lang='less' scoped>
</style>

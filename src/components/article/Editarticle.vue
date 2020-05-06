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
            <el-button type="primary" @click="editarticle">修改</el-button>
        </el-form>
      </el-card>
      
    
  </div>
</template>

<script>
export default {
    created(){
        this.getarticleById()
    },
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
        //根据id获取要修改的文章
        async getarticleById(){
            const  {data:res}=await this.$http.get(`getarticlebyid/${this.$route.query.id}`)
            if(res.status!==200){
               return this.$message.error('获取文章失败')
           }
            this.articleForm.name=res.data.title
            this.articleForm.category=res.data.category
            this.articleForm.content=res.data.content
        },
        async editarticle(){
           const {data:res}= await this.$http.post(`/editarticles`,{_id:this.$route.query.id,articleForm:this.articleForm})
           console.log(res)
           if(res.status!==201){
               return this.$message.error('修改文章失败')
           }
           this. $message.success('修改文章成功')
           this.$router.push('/articlelist')
        }
    }
}

</script>
<style lang='less' scoped>
</style>

<template>
  <div>
    <el-card>
        <quill-editor v-model="content"></quill-editor><br>
            <el-button type="primary" @click="editshuoshuo">修改</el-button>
    </el-card>
  </div>
</template>

<script>
export default {
    created(){
         this.getshuoshuoById()
    },
    data () {
        return {
            content:''
        }
    },

    methods: {
        async getshuoshuoById(){
            const  {data:res}=await this.$http.get(`getshuoshuobyid/${this.$route.query.id}`)
            if(res.status!==200){
               return this.$message.error('获取说说失败')
           }
           this.content=res.data.content
        },
        async editshuoshuo(){
            const {data:res}= await this.$http.post(`/editshuoshuo`,{_id:this.$route.query.id,content:this.content})
            console.log(res)
            if(res.status!==201){
                return this.$message.error('修改说说失败')
            }
            this. $message.success('修改说说成功')
            this.$router.push({path:'/shuoshuolist'})
        }
    }
}

</script>
<style lang='less' scoped>
</style>

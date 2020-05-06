<template>
  <div>
    <el-card>
         说说内容:<br><br>
            <quill-editor v-model="content"></quill-editor><br>
            <el-button type="primary" @click="addshuoshuo">发表</el-button>
    </el-card>
  </div>
</template>

<script>
export default {

    data () {
        return {
            content:''
        }
    },

    methods: {
        async addshuoshuo(){
           const res= await this.$http.post('addshuoshuo',{content:this.content})
           console.log(res)
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

<template>
  <div>
    <el-card>
        <!-- 文章表格区域 -->
        <el-table :data="articlelist" stripe  border style="width: 100%">
            <el-table-column type="index" label="序号" ></el-table-column>
            <el-table-column label="创建日期">
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.created|dateFormat }}</span>
                </template>
            </el-table-column>
            <el-table-column label="说说内容">
                <template slot-scope="scope">
                    {{scope.row.content}}
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button type="primary" @click="gotoEditShuoshuo(scope.row._id)">
                        <i class="icon el-icon-edit"></i>
                    </el-button>
                    <el-button type="danger" @click="deleteshuoshuo(scope.row._id)">
                        <i class="icon el-icon-delete"></i>
                    </el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- 分页区 -->
        <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="queryinfo.pagenum"
              :page-sizes="[1, 2, 3, 5 , 10, 15, 20]"
              :page-size="queryinfo.pagesize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total" background>
          </el-pagination>
    </el-card>
  </div>
</template>

<script>
export default {
    created(){
        this.getshuoshuolist()
    },
    data () {
        return {
            //文章列表
            articlelist:[],
            //文章的数目
            total:0,
            //查询参数对象
            queryinfo:{
            query:'',
            pagenum:1,
            pagesize:1
            },
        }
    },

    methods: {
        //获取文章列表
        async getshuoshuolist(){
            const res=await this.$http.get('/shuosuolist',{params:this.queryinfo})
            if(res.status!==200){
                return this.$message.error('获取说说列表失败')
            }
            this.$message.success('获取说说列表成功')
            this.articlelist=res.data.data
            this.total=res.data.total
        },
        //监听pagesize改变的函数
        handleSizeChange(newsize){
            this.queryinfo.pagesize=newsize
            this.getshuoshuolist()
        },
        //监听pagenum改变的方法
        handleCurrentChange(newpage){
            this.queryinfo.pagenum=newpage
            this.getshuoshuolist()
        },
        //点击按钮跳转到修改文章页面
        gotoEditShuoshuo(id){
            this.$router.push({path:'/shuoshuolist/edit',query:{id}})
        },
        //删除文章
        async deleteshuoshuo(id){
            const confirmres= await this.$confirm(
            '是否要删除该文章？','提示',
            {
              confirmButtonText:'确定',
              cancelButtonText:'取消',
              type :'warning'
            }
          ).catch(err=>err)
          //根据用户点击的按钮判断是否删除用户
          if(confirmres!=='confirm'){
            return this.$message.info('已经取消删除操作')
          }
          const res= await this.$http.delete(`deleteshuoshuo/${id}`)
          console.log(res)
          if(res.status!==200) return this.$message.error('删除说说失败')
          this.$message.success('删除说说成功')
          this.getshuoshuolist()
        }
    }
}

</script>
<style lang='less' scoped>
</style>

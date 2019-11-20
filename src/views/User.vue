
<template>
  <div>
    <el-form ref="form" :inline="true" size="small">
      <el-form-item label="用户名称：">
        <el-input placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="w80">
          <i class="el-icon-search"></i>
          <em>查询</em>
        </el-button>
      </el-form-item>
    </el-form>

    <template>
      <el-table border :data="tableData" style="width: 100%">
        <el-table-column prop="created_at" align="center" label="日期"></el-table-column>
        <el-table-column prop="user_name" align="center" label="姓名"></el-table-column>
        <el-table-column prop="email" align="center" label="邮箱"></el-table-column>
        <el-table-column prop="sex" align="center" label="性别"></el-table-column>
        <el-table-column prop="headicon" align="center" label="地址"></el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: []
    };
  },

  created() {
    this.loadData();
  },

  methods: {
    loadData() {
      console.log(this.$store);
      this.$store.dispatch("index/selUserList").then(res => {
        console.log(res);
        if (res.code === "0") {
          this.tableData = res.data.list || [];
        }
      });
    }
  }
};
</script>
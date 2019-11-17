<template>
  <div>
    <div class="box20"></div>
    <el-row :gutter="30">
      <el-col :span="12">
        <div class="pad30 border height663 init-scroll">
          <el-timeline v-for="i in 10" :key="i">
            <el-timeline-item timestamp="2018/4/12" placement="top">
              <el-card>
                <h4>更新 Github 模板</h4>
                <p>王小虎 提交于 2018/4/12 20:46</p>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="border">
          <el-calendar v-model="value"></el-calendar>
        </div>
      </el-col>
    </el-row>

    <div class="box20"></div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      value: new Date()
    };
  },

  created() {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.height663 {
  height: 663px;
  overflow-y: auto;
}
.init-scroll::-webkit-scrollbar-track {
  background-color: #eee;
}

.init-scroll::-webkit-scrollbar {
  width: 5px;
}

.init-scroll::-webkit-scrollbar-thumb {
  background-color: #aaa;
  border-radius: 5px;
  display: block;
}
</style>

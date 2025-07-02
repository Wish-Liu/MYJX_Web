<script setup>
import "../CSS/Series.css";
import router from "@/utils/router";
import { onMounted, ref, watch } from "vue";
const Seriesname = ref("");
const seriesLength = ref(0); // 添加存储长度的ref

// 处理子组件发送的长度更新
const handleLengthUpdate = (length) => {
  seriesLength.value = length;
};

// 加载数据的函数
const loadSeriesData = () => {
  const title = router.currentRoute.value.query.title;
  if (title !== "") {
    Seriesname.value = title;
  } else {
    Seriesname.value = ""; // 清空数据
  }
};

// 监听路由变化
watch(
  () => router.currentRoute.value.query.title,
  (newTitle) => {
    loadSeriesData();
  }
);

// 组件挂载时加载数据
onMounted(() => {
  loadSeriesData();
});
</script>

<template>
  <div class="ant-series">
    <!-- 导航栏 -->
    <div class="ant-series-nav">
      <el-row class="ant-series-nav-title">
        <span>{{ Seriesname }}</span>
        <span>{{ seriesLength }}</span>
      </el-row>
      <span class="ant-series-nav-filter">筛选与排序</span>
    </div>
    <!-- 商品列表 -->
    <div>
      <router-view @update-length="handleLengthUpdate"></router-view>
    </div>
  </div>
</template>

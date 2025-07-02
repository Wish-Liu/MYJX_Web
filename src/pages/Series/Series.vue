<script setup>
import "../CSS/Series.css";
</script>

<template>
  <div class="ant-series">
    <!-- 导航栏 -->
    <div class="ant-series-nav">
      <el-row class="ant-series-nav-title">
        <span>蚂蚁系列</span>
        <span>23</span>
      </el-row>
      <span class="ant-series-nav-filter">筛选与排序</span>
    </div>
    <!-- 商品列表 -->
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

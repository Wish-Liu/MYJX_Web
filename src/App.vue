<script setup>
import { Menu, Search, User, ShoppingBag } from '@element-plus/icons-vue'
import './App.css'
</script>

<template>
<el-container class="layout-container">
  <el-header class="header">
    <div class="header-content">
      <div class="left-section">
        <el-icon class="operation-icon"><Operation /></el-icon>
        <el-text style="font-size: 20px; font-weight: bold;">菜单</el-text>
      </div>
      <div class="center-section">
        <h1 class="logo">Surprise Art</h1>
      </div>
      <div class="right-section">
        <el-icon><Search /></el-icon>
        <el-icon><User /></el-icon>
        <el-icon><ShoppingBag /></el-icon>
      </div>
    </div>
  </el-header>
  <el-main class="main">

  </el-main>
</el-container>
</template>

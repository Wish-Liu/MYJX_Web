<script setup>
import {
  Operation,
  Search,
  User,
  ShoppingBag,
  Message,
  Apple,
} from "@element-plus/icons-vue";
import "./CSS/HomePage.css";
import backgroundImage from "../assets/images/beij.png";
</script>

<template>
  <el-container class="layout-container">
    <!-- 导航栏 -->
    <div style="height: 100vh; width: 100%">
      <el-header class="header">
        <div class="header-content">
          <div class="left-section">
            <el-icon>
              <Operation />
            </el-icon>
            <el-text style="font-size: 18px">菜单</el-text>
          </div>
          <div class="center-section">
            <h1 class="logo">Surprise Art</h1>
          </div>
          <div class="right-section">
            <el-icon>
              <Search />
            </el-icon>
            <el-icon>
              <User />
            </el-icon>
            <el-icon>
              <ShoppingBag />
            </el-icon>
          </div>
        </div>
      </el-header>
      <div class="header-img">
        <el-image :src="backgroundImage" fit="cover" />
      </div>
    </div>
    <!-- 主内容区 -->
    <el-main class="main">
      <el-scrollbar>
        <div class="main-one">
          <div class="main-one-content">
            <el-image :src="backgroundImage" fit="cover" />
          </div>
        </div>
        <div class="main-two">
          <div class="main-two-content">
            <el-image :src="backgroundImage" fit="cover" />
          </div>
        </div>
      </el-scrollbar>
    </el-main>
    <!-- 底部 -->
    <el-footer class="footer">
      <div class="footer-text-container">
        <el-text class="footer-text">Surprise Art</el-text>
      </div>
      <div class="footer-content">
        <div class="footer-section">
          <h3>联系中心</h3>
          <ul>
            <li>门店信息</li>
            <li>联系我们</li>
          </ul>
        </div>

        <div class="footer-section">
          <h3>客户关怀</h3>
          <ul>
            <li>订单信息</li>
            <li>服务</li>
            <li>退货与换货</li>
            <li>常见问题</li>
          </ul>
        </div>

        <div class="footer-section">
          <h3>关于Surprise AIT</h3>
          <ul>
            <li>道德与合格</li>
            <li>招贤纳士</li>
          </ul>
        </div>

        <div class="footer-section">
          <h3>隐私政策和法律声明</h3>
          <ul>
            <li>Cookie设定</li>
            <li>隐私中心</li>
            <li>使用条款</li>
            <li>条款与条件</li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="location">
          <span>国家/地区：中国大陆</span>
          <span>语言：简体中文</span>
        </div>
        <div class="social-icons">
          <el-icon>
            <Message />
          </el-icon>
          <el-icon>
            <Apple />
          </el-icon>
        </div>
      </div>
      <div class="footer-text-container">
        <el-text class="footer-text"
          >************************************</el-text
        >
      </div>
    </el-footer>
  </el-container>
</template>

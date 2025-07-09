<script setup>
import {
  Operation,
  Search,
  User,
  ShoppingBag,
  CaretTop,
} from "@element-plus/icons-vue";
import logo from "./assets/images/logo.png";
import { useScrollHideHeader } from "@/components/useScrollHideHeader";
import { ref } from "vue";
import drawer from "./pages/drawer/drawer.vue";
import router from "./utils/router";

// 抽屉控制
const drawers = ref(false);

// 菜单点击处理
const handleMenuClick = () => {
  drawers.value = true;
};

// 抽屉关闭处理
const handleClose = (message) => {
  drawers.value = message;
};

// 点击logo处理
const handleLogoClick = () => {
  // 清空路由栈，回到首页
  router.replace("/");
};

// 使用window滚动监听，不传入容器参数
const { isHeaderVisible, showBackTop, scrollToTop } = useScrollHideHeader();
</script>

<template>
  <div class="app-root">
    <!-- 全局抽屉组件 -->
    <drawer v-model:drawer="drawers" @update:drawer="handleClose" />

    <!-- 全局导航栏 -->
    <header class="header" :class="{ 'header--hidden': !isHeaderVisible }">
      <div class="header-content">
        <!-- 左侧菜单区域 -->
        <div class="left-section" @click="handleMenuClick">
          <el-icon class="menu-icon">
            <Operation />
          </el-icon>
          <span class="menu-text">菜单</span>
        </div>

        <!-- 中间Logo区域 -->
        <div class="center-section">
          <el-image
            :src="logo"
            alt="Surprise Art"
            class="logo-image"
            @click="handleLogoClick"
          />
        </div>

        <!-- 右侧功能区域 -->
        <div class="right-section">
          <el-icon class="action-icon">
            <Search />
          </el-icon>
          <el-icon class="action-icon">
            <User />
          </el-icon>
          <el-icon class="action-icon">
            <ShoppingBag />
          </el-icon>
        </div>
      </div>
    </header>

    <!-- 主内容区域 -->
    <main class="app-content">
      <router-view />
    </main>

    <!-- 回到顶部按钮 -->
    <Transition name="back-top">
      <el-icon
        v-if="showBackTop"
        class="back-top"
        @click="scrollToTop"
        title="回到顶部"
      >
        <CaretTop />
      </el-icon>
    </Transition>
  </div>
</template>

<style scoped>
/* 防止图片被选中和拖拽 */
img {
  user-select: none;
  -webkit-user-drag: none;
}

/* 应用根容器 - 移除高度限制，让内容自然扩展 */
.app-root {
  min-height: 100vh; /* 最小高度为视口高度，但允许内容超出 */
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
}

/* 头部导航栏 */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #ffffff;
  border-bottom: 1px solid #eee;
  z-index: 1000;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  /* Safari 性能优化 */
  will-change: transform;
  -webkit-transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  transform: translateZ(0);
}

.header--hidden {
  transform: translateY(-100%);
  opacity: 0;
  pointer-events: none;
}

/* 头部内容容器 */
.header-content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

/* 左侧菜单区域 */
.left-section {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: color 0.3s ease;
  user-select: none;
}

.left-section:hover {
  color: #282b42;
}

.left-section:active {
  transform: scale(0.98);
}

.menu-icon {
  font-size: 28px;
  transition: transform 0.2s ease;
}

.left-section:hover .menu-icon {
  transform: scale(1.05);
}

.menu-text {
  font-size: 18px;
  font-weight: 500;
}

/* 中间Logo区域 */
.center-section {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.logo-image {
  width: 280px;
  height: 45px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.logo-image:hover {
  transform: scale(1.02);
}

.logo-image:active {
  transform: scale(0.98);
}

/* 右侧功能区域 */
.right-section {
  display: flex;
  align-items: center;
  gap: 25px;
}

.action-icon {
  font-size: 20px;
  cursor: pointer;
  transition: color 0.3s ease, transform 0.2s ease;
  border-radius: 50%;
}

.action-icon:hover {
  color: #282b42;
  background-color: rgba(40, 43, 66, 0.1);
  transform: scale(1.1);
}

.action-icon:active {
  transform: scale(0.95);
}

/* 主内容区域 - 关键修改：移除高度限制，使用window滚动 */
.app-content {
  width: 100%;
  margin-top: 60px; /* 为固定头部预留空间 */
  min-height: calc(100vh - 60px); /* 确保至少占满剩余视口高度 */
  /* 移除 overflow 设置，让页面使用window的滚动 */
}

/* 回到顶部按钮 - 修复图标显示问题 */
.back-top {
  position: fixed;
  right: 30px;
  bottom: 60px;
  width: 40px;
  height: 40px;
  background-color: #000000;
  color: #fff;
  border-radius: 50%;
  font-size: 24px;
  cursor: pointer;
  z-index: 9999;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  user-select: none;
  /* 确保图标居中显示 */
  display: flex;
  align-items: center;
  justify-content: center;
}

.back-top:hover {
  background-color: #333;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
  font-size: 26px;
}

.back-top:active {
  transform: translateY(0) scale(0.95);
}

/* 回到顶部按钮动画 */
.back-top-enter-active,
.back-top-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.back-top-enter-from,
.back-top-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.8);
}

/* 响应式设计 - 大屏幕优化 */
@media screen and (min-width: 1440px) {
  .header-content {
    padding: 0 40px;
  }

  .logo-image {
    width: 320px;
    height: 50px;
  }

  .right-section {
    gap: 30px;
  }

  .action-icon {
    font-size: 22px;
  }
}

/* 响应式设计 - 平板设备 */
@media screen and (max-width: 1024px) {
  .header-content {
    padding: 0 15px;
  }

  .logo-image {
    width: 240px;
    height: 40px;
  }

  .menu-text {
    font-size: 16px;
  }

  .right-section {
    gap: 20px;
  }
}

/* 响应式设计 - 手机设备 */
@media screen and (max-width: 768px) {
  .header {
    height: 55px;
  }

  .app-content {
    margin-top: 55px;
    min-height: calc(100vh - 55px);
  }

  .header-content {
    padding: 0 10px;
  }

  .menu-icon {
    font-size: 24px;
  }

  .menu-text {
    font-size: 16px;
  }

  .logo-image {
    width: 180px;
    height: 32px;
  }

  .right-section {
    gap: 15px;
  }

  .action-icon {
    font-size: 18px;
    padding: 6px;
  }

  .back-top {
    right: 20px;
    bottom: 30px;
    width: 45px;
    height: 45px;
    font-size: 20px;
  }

  .back-top:hover {
    font-size: 22px;
  }
}

/* 响应式设计 - 小屏手机 */
@media screen and (max-width: 480px) {
  .header {
    height: 50px;
  }

  .app-content {
    margin-top: 50px;
    min-height: calc(100vh - 50px);
  }

  .header-content {
    padding: 0 8px;
  }

  .menu-icon {
    font-size: 22px;
  }

  .menu-text {
    font-size: 14px;
  }

  .logo-image {
    width: 150px;
    height: 28px;
  }

  .right-section {
    gap: 12px;
  }

  .action-icon {
    font-size: 16px;
    padding: 5px;
  }

  .back-top {
    right: 15px;
    bottom: 25px;
    width: 40px;
    height: 40px;
    font-size: 18px;
  }

  .back-top:hover {
    font-size: 20px;
  }
}

/* 横屏模式优化 */
@media screen and (max-height: 500px) and (orientation: landscape) {
  .header {
    height: 45px;
  }

  .app-content {
    margin-top: 45px;
    min-height: calc(100vh - 45px);
  }

  .logo-image {
    width: 200px;
    height: 30px;
  }

  .back-top {
    right: 15px;
    bottom: 15px;
    width: 40px;
    height: 40px;
    font-size: 16px;
  }

  .back-top:hover {
    font-size: 18px;
  }
}

/* 触摸设备优化 */
@media (hover: none) {
  .left-section:hover,
  .action-icon:hover,
  .logo-image:hover,
  .back-top:hover {
    transform: none;
    background-color: transparent;
  }

  .left-section:active {
    opacity: 0.8;
  }

  .action-icon:active {
    background-color: rgba(40, 43, 66, 0.1);
    opacity: 0.8;
  }
}

/* 减少动画以提升性能 */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    transition: none !important;
    animation: none !important;
  }
}

/* 确保内容区域正确布局 */
.app-content > * {
  width: 100%;
}
</style>

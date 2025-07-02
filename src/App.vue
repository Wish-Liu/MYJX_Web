<script setup>
import { Operation, Search, User, ShoppingBag } from "@element-plus/icons-vue";
import logo from "./assets/images/logo.png";
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
  //清空路由栈
  router.replace("/");
};
</script>

<template>
  <div style="height: 100%; width: 100%">
    <!-- 全局抽屉组件 -->
    <drawer v-model:drawer="drawers" @update:drawer="handleClose" />

    <!-- 全局导航栏 -->
    <el-header class="header">
      <div class="header-content">
        <div class="left-section" @click="handleMenuClick">
          <el-icon>
            <Operation />
          </el-icon>
          <el-text style="font-size: 18px">菜单</el-text>
        </div>
        <div class="center-section">
          <el-image
            :src="logo"
            alt="Surprise Art"
            style="width: 300px; height: 50px; cursor: pointer"
            @click="handleLogoClick"
          />
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

    <!-- 路由页面内容 -->
    <div class="app-content">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
/* 全局导航栏样式 */
.header {
  padding: 0px 20px;
  background-color: #ffffff;
  border-bottom: 1px solid #eee;
  width: 100%;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.header-content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px 0px 10px;
  width: 100%;
  position: relative;
}

/* 左侧菜单区域 */
.left-section {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-right: px;
}

.left-section:hover {
  color: #282b42;
}

.left-section .el-icon {
  font-size: 30px;
}

/* 中间Logo区域 */
.center-section {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

/* 右侧功能区域 */
.right-section {
  display: flex;
  align-items: center;
  gap: 30px;
}

.right-section .el-icon {
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.right-section .el-icon:hover {
  color: #282b42;
}

/* 为路由内容添加顶部边距，避免被固定导航栏遮挡 */
.app-content {
  margin-top: 80px;
  min-height: calc(100vh - 80px);
  height: calc(100vh - 80px);
}

/* 响应式设计 */
@media screen and (max-width: 768px) {
  .header {
    padding: 10px 5px;
  }

  .header-content {
    padding: 0px 5px;
  }

  .left-section {
    gap: 5px;
  }

  .left-section .el-icon {
    font-size: 24px;
  }

  .right-section {
    gap: 20px;
  }

  .right-section .el-icon {
    font-size: 18px;
  }
}

@media screen and (max-width: 480px) {
  .header-content {
    padding: 0px 5px;
  }

  .left-section .el-icon {
    font-size: 20px;
  }

  .right-section {
    gap: 15px;
  }
}
</style>

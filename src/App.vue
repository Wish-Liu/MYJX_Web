<script setup>
import { Operation, Search, User, ShoppingBag } from "@element-plus/icons-vue";
import logo from "./assets/images/logo.png";
import { useScrollHideHeader } from "@/components/useScrollHideHeader";
import { ref, onMounted, onBeforeUnmount } from "vue";
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

const scrollContainer = ref(null);
let lastScrollTop = 0;
const { isHeaderVisible, showBackTop, scrollToTop } =
  useScrollHideHeader(scrollContainer);
// 滚动事件处理
const handleScroll = () => {
  if (!scrollContainer.value) return;
  const scrollTop = scrollContainer.value.scrollTop;
  // console.log("scrollTop:", scrollTop);

  if (scrollTop - lastScrollTop > 10 && scrollTop > 100) {
    isHeaderVisible.value = false;
  } else if (lastScrollTop - scrollTop > 10) {
    isHeaderVisible.value = true;
  }

  lastScrollTop = scrollTop;
};

onMounted(() => {
  if (scrollContainer.value) {
    scrollContainer.value.addEventListener("scroll", handleScroll);
  }
});

onBeforeUnmount(() => {
  if (scrollContainer.value) {
    scrollContainer.value.removeEventListener("scroll", handleScroll);
  }
});
</script>

<template>
  <div style="height: 100%; width: 100%" class="app-root">
    <!-- 全局抽屉组件 -->
    <drawer v-model:drawer="drawers" @update:drawer="handleClose" />

    <!-- 全局导航栏 -->
    <el-header class="header" :class="{ hide: !isHeaderVisible }">
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
            class="SurpriseArt"
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
    <div class="app-content" ref="scrollContainer">
      <router-view />
    </div>
    <el-icon v-if="showBackTop" class="back-top" @click="scrollToTop">
      <CaretTop />
    </el-icon>
  </div>
</template>

<style scoped>
img {
  user-select: none;
  -webkit-user-drag: none;
}
.app-root {
  height: 100vh;
  height: -webkit-fill-available; /* Safari 100vh 修复 */
  overflow: hidden;
  display: flex;
  flex-direction: column;
  -webkit-overflow-scrolling: touch; /* Safari 滚动优化 */
}

.app-content {
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch; /* Safari 滚动优化 */
  overscroll-behavior-y: contain; /* 防止橡皮筋效果 */
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: white;
  z-index: 1000;
  transition: transform 0.3s ease, opacity 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  will-change: transform, opacity;
  /* Safari 性能优化 */
  -webkit-transform: translateZ(0);
  -webkit-backface-visibility: hidden;
}

.header.hide {
  transform: translateY(-100%);
  opacity: 0;
  pointer-events: none;
}
.back-top {
  position: fixed;
  right: 40px;
  bottom: 60px;
  background-color: #000;
  color: #fff;
  padding: 10px;
  border-radius: 50%;
  font-size: 18px;
  cursor: pointer;
  z-index: 9999;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s ease;
}

.back-top:hover {
  background-color: #333;
}

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
.SurpriseArt {
  width: 300px;
  height: 50px;
  cursor: pointer;
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

@media screen and (max-width: 1440px) {
  .SurpriseArt {
    width: 200px;
    height: 30px;
  }
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
  .SurpriseArt {
    width: 150px;
    height: 20px;
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
  .SurpriseArt {
    width: 100px;
    height: 15px;
  }
}
</style>

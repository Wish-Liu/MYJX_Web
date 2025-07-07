<script setup>
import { Message, Apple, CaretTop } from "@element-plus/icons-vue";
import "./CSS/HomePage.css";
import backgroundImage from "../assets/images/beij.png";
import logo from "../assets/images/logo.png";
import google from "../assets/images/底部谷歌20X20.png";
import facebook from "../assets/images/底部FB20X20.png";
import line from "../assets/images/在线咨询130X32.png";
import { ref, onMounted, onUnmounted } from "vue";
import router from "@/utils/router";
import antSeries1 from "@/assets/首页/轮播.png";
import antSeries2 from "@/assets/首页/轮播2.png";
import antSeries3 from "@/assets/首页/轮播3.png";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const showBackTop = ref(false);
const result = [
  {
    id: 1,
    image: antSeries1,
  },
  {
    id: 2,
    image: antSeries2,
  },
  {
    id: 3,
    image: antSeries3,
  },
];
// 轮播图配置
const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  loop: true,
  grabCursor: true,
  simulateTouch: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    bulletClass: "custom-bullet",
    bulletActiveClass: "custom-bullet-active",
    renderBullet: (index, className) => {
      return `<span class="${className}"></span>`;
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};
</script>

<template>
  <div style="height: 100%; width: 100%">
    <!-- 主内容区 -->
    <div class="content-wrapper">
      <!-- 头部大图 -->
      <div class="header-img">
        <el-image :src="backgroundImage" fit="cover" />
      </div>
      <!-- 轮播图 -->
      <div class="main-one">
        <div class="main-one-content">
          <swiper class="main-swiper" v-bind="swiperOptions">
            <swiper-slide v-for="item in result" :key="item.id">
              <img
                :src="item.image"
                class="slide-image"
                alt="轮播图"
                style="width: 100%; height: 100vh; object-fit: cover"
              />
            </swiper-slide>
            <!-- 分页指示器 -->
            <div class="swiper-pagination"></div>
            <!-- 导航按钮 -->
            <div class="swiper-button-prev custom-nav-btn"></div>
            <div class="swiper-button-next custom-nav-btn"></div>
          </swiper>
        </div>
      </div>
      <!-- 商品展示 -->
      <div
        class="main-two"
        @click="router.push({ path: '/Series', query: { title: '蚂蚁系列' } })"
      ></div>
      <!-- 加入Surprise Ant的智能世界 -->
      <div class="main-three">
        <div class="join-surprise">
          <div class="title-wrapper">
            <el-row justify="center" align="middle">
              <h2 class="join-surprise-title">点击加入</h2>
              <h2>Surprise Ant的智能世界</h2>
            </el-row>
          </div>
          <div class="dotted-line">********************************</div>
        </div>
      </div>
    </div>

    <!-- 底部 -->
    <el-footer class="footer">
      <div class="footer-text-container">
        <el-text>
          <el-image
            :src="logo"
            alt="Surprise Art"
            style="width: 300px; height: 50px"
          />
        </el-text>
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
          <h3>关于Surprise AnT</h3>
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
          <el-image
            :src="google"
            fit="cover"
            style="width: 20px; height: 20px; cursor: pointer"
          />
          <el-image
            :src="facebook"
            fit="cover"
            style="width: 20px; height: 20px; cursor: pointer"
          />
        </div>
      </div>
      <div class="footer-text-container">
        <el-row justify="space-between" align="middle">
          <el-text class="footer-text"
            >************************************</el-text
          >
        </el-row>
      </div>
    </el-footer>

    <!-- 底部工具栏 -->
    <div class="bottom-tools">
      <el-row justify="space-between" align="middle">
        <!-- 在线咨询 -->
        <el-image :src="line" fit="cover" class="line-image" />
      </el-row>
    </div>
  </div>
</template>

<style scoped>
/* 轮播图 */
.main-one {
  width: 100%;
  height: 100vh;
  position: relative;
}

.main-one-content {
  width: 100%;
  height: 100%;
}

.main-swiper {
  width: 100%;
  height: 100%;
}

.slide-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* 分页器样式 */
:deep(.swiper-pagination) {
  bottom: 30px !important;
}

:deep(.custom-bullet) {
  width: 16px;
  height: 16px;
  display: inline-block;
  border-radius: 50%;
  background: rgba(131, 130, 130, 0.4);
  margin: 0 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

:deep(.custom-bullet-active) {
  background: url("@/assets/图标/蚂蚁按钮16X15.png") no-repeat center center;
  background-size: contain;
  opacity: 1;
}

/* 导航按钮样式 */
.custom-nav-btn {
  width: 40px !important;
  height: 40px !important;
  background-color: rgba(189, 184, 184, 0.9) !important;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease;
}

/* 鼠标悬停时显示导航按钮 */
.main-swiper:hover .custom-nav-btn {
  opacity: 1;
}

:deep(.swiper-button-prev) {
  left: 20px !important;
}

:deep(.swiper-button-next) {
  right: 20px !important;
}

:deep(.swiper-button-prev::after),
:deep(.swiper-button-next::after) {
  font-size: 18px !important;
  color: #fff;
}

/* 导航按钮悬停效果 */
.custom-nav-btn:hover {
  background-color: rgba(82, 79, 79, 1) !important;
}

/* 悬停效果 */
:deep(.custom-bullet:hover) {
  background-color: rgba(255, 255, 255, 0.6);
}

:deep(.custom-bullet-active:hover) {
  background: url("@/assets/图标/蚂蚁按钮16X15.png") no-repeat center center;
  background-size: contain;
}

/* 响应式设计 - 大屏幕 */
@media screen and (min-width: 1440px) {
  .main-one {
    height: 100vh;
  }

  .slide-image {
    height: 100%;
    max-height: 100vh;
  }

  .custom-nav-btn {
    width: 50px !important;
    height: 50px !important;
  }

  :deep(.swiper-button-prev::after),
  :deep(.swiper-button-next::after) {
    font-size: 22px !important;
  }
}

/* 响应式设计 - 平板设备 */
@media screen and (max-width: 1024px) {
  .main-one {
    height: 80vh;
    min-height: 500px; /* 设置最小高度 */
  }

  .slide-image {
    height: 100%;
    min-height: 500px;
  }

  .custom-nav-btn {
    width: 35px !important;
    height: 35px !important;
  }

  :deep(.custom-bullet) {
    width: 14px;
    height: 14px;
  }

  :deep(.swiper-button-prev::after),
  :deep(.swiper-button-next::after) {
    font-size: 16px !important;
  }
}

/* 响应式设计 - 手机设备 */
@media screen and (max-width: 768px) {
  .main-one {
    height: 100vw; /* 改用vw单位 */
  }

  .slide-image {
    width: 100%;
    height: 100%;
    object-fit: contain; /* 改用contain确保图片完整显示 */
  }

  .custom-nav-btn {
    width: 30px !important;
    height: 30px !important;
    opacity: 0.8;
  }

  :deep(.custom-bullet) {
    width: 12px;
    height: 12px;
    margin: 0 3px;
  }

  :deep(.swiper-button-prev),
  :deep(.swiper-button-next) {
    top: 50% !important;
  }

  :deep(.swiper-button-prev) {
    left: 10px !important;
  }

  :deep(.swiper-button-next) {
    right: 10px !important;
  }

  :deep(.swiper-button-prev::after),
  :deep(.swiper-button-next::after) {
    font-size: 14px !important;
  }
}

/* 响应式设计 - 小屏手机 */
@media screen and (max-width: 480px) {
  .main-one {
    height: 100vw;
  }

  .slide-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .custom-nav-btn {
    width: 25px !important;
    height: 25px !important;
  }

  :deep(.custom-bullet) {
    width: 10px;
    height: 10px;
    margin: 0 2px;
  }

  :deep(.swiper-button-prev::after),
  :deep(.swiper-button-next::after) {
    font-size: 12px !important;
  }
}

/* 处理横屏模式 */
@media screen and (max-height: 500px) and (orientation: landscape) {
  .main-one {
    height: 100vh;
    min-height: auto; /* 移除最小高度限制 */
  }

  .slide-image {
    height: 100%;
    width: 100%;
    object-fit: contain; /* 横屏模式使用contain确保图片完整显示 */
  }

  :deep(.swiper-pagination) {
    bottom: 15px !important;
  }
}

/* 优化触摸交互 */
@media (hover: none) {
  .custom-nav-btn {
    opacity: 0.8;
  }

  .main-swiper:hover .custom-nav-btn {
    opacity: 0.8;
  }

  .custom-nav-btn:active {
    background-color: rgba(82, 79, 79, 1) !important;
  }
}
</style>

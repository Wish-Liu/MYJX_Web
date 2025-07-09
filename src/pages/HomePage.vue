<script setup>
import { Message, Apple, CaretTop } from "@element-plus/icons-vue";
import "./CSS/HomePage.css";
import backgroundImage from "../assets/images/beij.png";
import logo from "../assets/images/logo.png";
import gmail from "../assets/images/底部邮件24X24.png";
import apple from "../assets/images/底部苹果22X22.png";
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
//轮播图
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
  touchRatio: 1,
  touchAngle: 45,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 0,
  touchMoveStopPropagation: false,
  touchStartPreventDefault: false,
  touchStartForcePreventDefault: false,
  touchReleaseOnEdges: false,
  uniqueNavElements: true,
  resistance: true,
  resistanceRatio: 0.85,
  watchSlidesProgress: false,
  watchSlidesVisibility: false,
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
    stopOnLastSlide: false,
    waitForTransition: true,
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
  breakpoints: {
    // 当屏幕宽度 >= 768px 时
    768: {
      allowTouchMove: true,
      touchRatio: 1,
    },
    // 当屏幕宽度 < 768px 时
    0: {
      allowTouchMove: true,
      touchRatio: 1.5,
      longSwipes: true,
      longSwipesRatio: 0.3,
    },
  },
};
const currentIndex = ref(0);

const onSwiper = (swiper) => {
  // swiper 实例
  // console.log("Swiper instance:", swiper);
};

const onSlideChange = (swiper) => {
  currentIndex.value = swiper.realIndex; // realIndex 是真实索引（loop模式下）
  // console.log("当前激活索引:", currentIndex.value);
};
//映射表
const map = {
  0: "蚂蚁系列",
  1: "耳机仓系列",
  2: "口红管系列",
};
</script>

<template>
  <div class="homepage-container">
    <!-- 主内容区 -->
    <div class="content-wrapper">
      <!-- 头部大图 -->
      <section class="header-img">
        <el-image :src="backgroundImage" fit="cover" />
      </section>
      <!-- 轮播图 -->
      <section class="main-one">
        <div class="main-one-content">
          <swiper
            class="main-swiper"
            v-bind="swiperOptions"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide v-for="item in result" :key="item.id">
              <img
                :src="item.image"
                class="slide-image"
                alt="轮播图"
                style="width: 100%; height: 100%; object-fit: cover"
                @click="
                  router.push({
                    path: '/Series',
                    query: { title: map[currentIndex] },
                  })
                "
              />
            </swiper-slide>
            <!-- 分页指示器 -->
            <div class="swiper-pagination"></div>
            <!-- 导航按钮 -->
            <div class="swiper-button-prev custom-nav-btn"></div>
            <div class="swiper-button-next custom-nav-btn"></div>
          </swiper>
        </div>
      </section>
      <!-- 商品展示 -->
      <section
        class="main-two"
        @click="router.push({ path: '/Series', query: { title: '蚂蚁系列' } })"
      ></section>
      <!-- 加入Surprise Ant的智能世界 -->
      <section class="main-three">
        <div class="join-surprise">
          <div class="title-wrapper">
            <el-row justify="center" align="middle">
              <h2 class="join-surprise-title">点击加入</h2>
              <h2>Surprise Ant的智能世界</h2>
            </el-row>
          </div>
          <div class="dotted-line">********************************</div>
        </div>
      </section>
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
          <el-image
            :src="gmail"
            fit="cover"
            style="width: 20px; height: 20px; cursor: pointer"
          />
          <el-image
            :src="apple"
            fit="cover"
            style="width: 20px; height: 20px; cursor: pointer"
          />
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
/* 样式已全部移至 src/pages/CSS/HomePage.css 文件中 */
</style>

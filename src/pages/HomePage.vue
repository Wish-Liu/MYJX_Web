<script setup>
import { Message, Apple, CaretTop } from "@element-plus/icons-vue";
import "./CSS/HomePage.css";
import backgroundImage from "../assets/首页/Web首图.png";
import logo from "../assets/images/logo.png";
import gmail from "../assets/images/底部邮件24X24.png";
import apple from "../assets/images/底部苹果22X22.png";
import google from "../assets/images/底部谷歌20X20.png";
import facebook from "../assets/images/底部FB20X20.png";
import line from "../assets/images/在线咨询130X32.png";
import { ref, onMounted, onUnmounted, watch } from "vue";
import router from "@/utils/router";
import antSeries1 from "@/assets/首页/轮播.png";
import antSeries2 from "@/assets/首页/轮播2.png";
import antSeries3 from "@/assets/首页/轮播3.png";
import antSeries4 from "@/assets/APP/吊筒仓191X304.png";
import antSeries5 from "@/assets/APP/耳机仓177x150.png";
import antSeries6 from "@/assets/APP/蚂蚁项链165X249.png";
import jia from "@/assets/图标/+16X16.png";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// 导入响应式设计组合式函数
import { useResponsiveDesign } from "@/components/useResponsiveDesign";

const showBackTop = ref(false);

// 使用响应式设计组合式函数
const {
  deviceType,
  isDesktop,
  isTablet,
  isMobile,
  isSmallMobile,
  isMobileDevice,
  screenOrientation,
  isPortrait,
  isLandscape,
  isLowLandscape,
  windowWidth,
  windowHeight,
  isTouchDevice,
  getResponsiveClasses,
  getResponsiveSizes,
} = useResponsiveDesign();

// 监听设备变化，输出当前设备信息（调试用）
watch([deviceType, screenOrientation], ([newDeviceType, newOrientation]) => {
  // console.log(`当前设备类型: ${newDeviceType}`);
  // console.log(`当前屏幕方向: ${newOrientation}`);
  // console.log(`屏幕尺寸: ${windowWidth.value}x${windowHeight.value}`);
  // console.log(`是否为触摸设备: ${isTouchDevice.value}`);
});

//Web轮播图
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

//APP轮播图
const resultapp = [
  {
    id: 1,
    image: antSeries6,
    title: "蚂蚁系列",
    synopsis:
      "蚂蚁系列，智能珠宝，声临其境。金属平面振膜扬声器技术搭载听力呵护技术。人体工学耳蜗贴合，久戴不痛；超长续航，随行不断电。智能降噪，只听你想听。",
  },
  {
    id: 2,
    image: antSeries5,
    title: "耳机仓系列",
    synopsis:
      "耳机仓系列，极简美学，智慧随行。掌心收纳，轻松续航。磁吸快充，开合即连，告别电量焦虑。多种质感，轻巧防滑，随身无负担。",
  },
  {
    id: 3,
    image: antSeries4,
    title: "口红桶系列",
    synopsis:
      "吊筒仓系列，艺术与科技的平衡。以口红为灵感，独创吊筒式开合设计。磁吸悬浮舱体，取放耳机如行云流水。皮质面工艺，高级质感，优雅随行，声声入心。",
  },
];
// 轮播图配置 - 根据设备类型动态调整
const swiperOptions = ref({
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
  preventClicks: false, // 修改为false，允许点击
  preventClicksPropagation: false, // 修改为false，允许点击事件传播
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
});

// 根据设备类型调整轮播图配置
watch([deviceType, isTouchDevice], () => {
  if (isMobileDevice.value) {
    // 手机端优化配置
    swiperOptions.value.autoplay.delay = 4000;
    swiperOptions.value.touchRatio = 1.2;
    swiperOptions.value.longSwipesRatio = 0.4;
  } else {
    // 桌面端配置
    swiperOptions.value.autoplay.delay = 5000;
    swiperOptions.value.touchRatio = 1;
    swiperOptions.value.longSwipesRatio = 0.5;
  }
});

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

// 获取响应式样式类名
const responsiveClasses = ref([]);
const responsiveSizes = ref({});

onMounted(() => {
  updateResponsiveData();
});

// 更新响应式数据
const updateResponsiveData = () => {
  responsiveClasses.value = getResponsiveClasses();
  responsiveSizes.value = getResponsiveSizes();
};

// 监听设备变化更新数据
watch([deviceType, screenOrientation], () => {
  updateResponsiveData();
});
</script>

<template>
  <div class="homepage-container" :class="responsiveClasses">
    <!-- 主内容区 -->
    <div class="content-wrapper">
      <!-- 头部大图 -->
      <section class="header-img">
        <el-image :src="backgroundImage" fit="cover" />
      </section>

      <!-- 轮播图 -->
      <section class="main-one">
        <!-- 手机端专用内容区域 -->
        <div v-if="isMobileDevice" class="main-one-content-mobile">
          <span style="font-size: 1.3rem">智能珠宝</span>
          <div class="main-two-content-mobile-title">
            {{ resultapp[currentIndex].title }}
          </div>
          <div class="main-two-content-mobile-body">
            {{ resultapp[currentIndex].synopsis }}
          </div>
          <div
            class="main-two-content-mobile-footer"
            @click="
              router.push({
                path: '/Series',
                query: { title: map[currentIndex] },
              })
            "
          >
            探索此系列
          </div>
        </div>

        <!-- 轮播图容器 -->
        <div class="main-one-content">
          <swiper
            class="main-swiper"
            v-bind="swiperOptions"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide
              v-for="(item, index) in isMobileDevice ? resultapp : result"
              :key="item.id"
              class="main-swiper-slide"
            >
              <img
                :src="item.image"
                class="slide-image"
                :class="{
                  'slide-image-special': index === 1 && isMobileDevice,
                }"
                alt="轮播图"
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
            <!-- 导航按钮 - 电脑端和平板端显示 -->
            <div class="swiper-button-prev custom-nav-btn"></div>
            <div class="swiper-button-next custom-nav-btn"></div>
          </swiper>
        </div>
      </section>

      <!-- 商品展示 -->
      <section
        class="main-two"
        @click="router.push({ path: '/Series', query: { title: '蚂蚁系列' } })"
      >
        <!-- 手机端专用商品信息 -->
        <div v-if="isMobileDevice" class="main-two-content">
          <div class="main-two-content-title">智能珠宝</div>
          <div class="main-two-content-body">
            轻巧如蚁，声临其境。蚂蚁系列耳机以金属平面振膜扬声器技术搭载听力呵护技术。人体工学耳蜗贴合，久戴不痛；超长续航，随行不断电。智能降噪，只听你想听。
          </div>
          <div class="main-two-content-footer">探索此系列</div>
        </div>
      </section>

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
          <el-image :src="logo" alt="Surprise Art" class="footer-logo" />
        </el-text>
      </div>

      <!-- 电脑端和平板端底部内容 -->
      <div class="footer-content" v-if="!isMobileDevice">
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

      <!-- 手机端底部内容 -->
      <div class="footer-content" v-if="isMobileDevice">
        <div class="footer-section">
          <span>联系中心</span>
          <img :src="jia" alt="" />
        </div>
        <div class="footer-section">
          <span>客户关怀</span>
          <img :src="jia" alt="" />
        </div>
        <div class="footer-section">
          <span>关于Surprise AnT</span>
          <img :src="jia" alt="" />
        </div>
        <div class="footer-section">
          <span>隐私政策和法律声明</span>
          <img
            :src="jia"
            alt=""
            style="width: 1.2rem; height: 1.2rem; margin-right: 1.5rem"
          />
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
      <!-- 在线咨询 -->
      <el-image
        :src="line"
        fit="cover"
        class="line-image"
        :style="{
          width: isMobileDevice ? '105px' : '130px',
          height: isMobileDevice ? '25px' : '32px',
        }"
      />
    </div>
  </div>
</template>

<style scoped>
/* 样式已全部移至 src/pages/CSS/HomePage.css 文件中 */
</style>

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
// 监听滚动
const handleScroll = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const viewportHeight = window.innerHeight;
  showBackTop.value = scrollTop > viewportHeight * 0.7;
};

// 回到顶部
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// 生命周期钩子
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
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
          <el-carousel
            height="100vh"
            :interval="3000"
            arrow="hover"
            indicator-position="onne"
          >
            <el-carousel-item v-for="item in result" :key="item.id">
              <el-image
                :src="item.image"
                fit="cover"
                style="width: 100%; height: 100%; object-fit: cover"
              />
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <!-- 商品展示 -->
      <div class="main-two"></div>
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

        <!-- 回到顶部 -->
        <div
          class="back-to-top"
          :class="{ show: showBackTop }"
          @click="scrollToTop"
        >
          <el-icon><CaretTop /></el-icon>
        </div>
      </el-row>
    </div>
  </div>
</template>

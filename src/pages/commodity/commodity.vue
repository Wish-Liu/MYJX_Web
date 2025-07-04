<script setup>
import "./commodity.css";
import antSeries1 from "@/assets/蚂蚁系列/耳机/1绿色详情大图600X600.png";
import antSeries2 from "@/assets/蚂蚁系列/耳机/1金色详情大图600X600.png";
import antSeries3 from "@/assets/蚂蚁系列/耳机/1紫色详情大图600X600.png";
import antSeries4 from "@/assets/蚂蚁系列/耳机/2绿色详情大图600X600.png";
import antSeries5 from "@/assets/蚂蚁系列/耳机/2金色详情大图600X600.png";
import antSeries6 from "@/assets/蚂蚁系列/耳机/2紫色详情大图600X600.png";
import antSeries7 from "@/assets/蚂蚁系列/耳机/3紫色详情大图600X600.png";
import antSeries8 from "@/assets/蚂蚁系列/耳机/3金色详情大图600X600.png";
import antSeries9 from "@/assets/蚂蚁系列/耳机/3紫色详情大图600X600.png";
import antSeries10 from "@/assets/图标/服务大使22X22.png";
import antSeries11 from "@/assets/图标/致电20X20.png";
import antSeries12 from "@/assets/图标/礼物20X20.png";
import antSeries16 from "@/assets/图标/位置23X25.png";
import antSeries17 from "@/assets/图标/材质24X24.png";
import antSeries13 from "@/assets/模特/一模特580X900.png";
import antSeries14 from "@/assets/模特/二模特580X900.png";
import antSeries15 from "@/assets/模特/三模特580X900.png";
import antIcon from "@/assets/图标/蚂蚁按钮16X15.png";

// 导入Swiper相关组件
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ref } from "vue";
// 导入Swiper样式
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const result = [
  {
    id: 1,
    name: "蚂蚁系列 耳机",
    subtitle:
      "蚂蚁系列 耳机*****************************************************************",
    price: 3980,
    tax: true,
    image: [
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
    ],
    model: [
      {
        id: 1,
        image: antSeries13,
      },
      {
        id: 2,
        image: antSeries14,
      },
      {
        id: 3,
        image: antSeries15,
      },
    ],
  },
];
const imageList = result[0].image.map((i) => i.image);

const showViewer = ref(false);
const viewerIndex = ref(0);

const handleImageClick = (index) => {
  viewerIndex.value = index;
  showViewer.value = true;
};

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  direction: "vertical",
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".custom-pagination",
    clickable: true,
    bulletClass: "custom-bullet",
    bulletActiveClass: "custom-bullet-active",
    renderBullet: function (index, className) {
      return `<span class="${className}"></span>`;
    },
  },
};

const isExpanded = ref(false);

const toggleDescription = () => {
  isExpanded.value = !isExpanded.value;
};

// 最近浏览数据
const recentViews = [
  {
    id: 1,
    name: "蚂蚁系列 耳机",
    price: "¥2980",
    image: antSeries1,
  },
  {
    id: 2,
    name: "A系列 戒指",
    price: "¥3980",
    image: antSeries2,
  },
  {
    id: 3,
    name: "A系列 粉饼盒装",
    price: "¥2980",
    image: antSeries3,
  },
  {
    id: 4,
    name: "A系列 口红耳机",
    price: "¥3580",
    image: antSeries4,
  },
  {
    id: 5,
    name: "A系列 口红耳机",
    price: "¥3580",
    image: antSeries4,
  },
];
</script>

<template>
  <div class="commodity-container">
    <!-- 商品轮播图片 -->
    <div class="commodity-one">
      <swiper class="product-swiper" v-bind="swiperOptions">
        <swiper-slide v-for="item in result[0].image" :key="item.id">
          <img :src="item.image" class="slide-image" alt="商品图片" />
        </swiper-slide>
        <div class="custom-pagination"></div>
      </swiper>
    </div>
    <!-- 商品详情 -->
    <div class="commodity-two">
      <div class="commodity-two-title">
        <span>珠宝</span>
        <span>/</span>
        <span>蚂蚁系列</span>
      </div>
      <span class="commodity-two-title-name">蚂蚁系列 耳机</span>
      <div class="commodity-two-price">
        <span>￥3980</span>
        <span>含税</span>
      </div>

      <span style="margin-top: 10px; margin-bottom: 10px">
        价格视所选配而定
      </span>

      <div class="commodity-two-description">
        蚂蚁系列耳机以金属平面振膜扬声器技术搭载听力呵护技术。人体工学耳蜗贴合，久戴不痛；超长续航，随行不断电。
      </div>
      <div>更多款式：</div>
      <div class="image-scroll-container">
        <div class="image-scroll-wrapper">
          <div
            v-for="(item, index) in result[0].image"
            :key="item.id"
            class="scroll-item"
            @click="handleImageClick(index)"
          >
            <el-image
              :src="item.image"
              fit="cover"
              class="thumbnail-image"
              style="width: 100px; height: 100px"
            />
          </div>
        </div>
      </div>
      <div>款式指南：耳夹式</div>
      <div class="commodity-two-consult">
        <div class="commodity-two-consult-item">
          <el-image :src="antSeries10" fit="cover" class="thumbnail-image" />
          <span>咨询客服</span>
        </div>
        <div class="commodity-two-consult-item">
          <el-image :src="antSeries11" fit="cover" class="thumbnail-image" />
          <span> 致电 000-000-0000</span>
        </div>
      </div>
      <div class="commodity-two-consult-item-wx">
        <span style="color: #fff; font-size: 20px; font-weight: 400">
          微信选购
        </span>
      </div>
      <div class="commodity-two-consult-item-G">
        <span class="commodity-two-consult-item-G-span"> 添加至购物袋 </span>
        <span class="commodity-two-consult-item-G-span"> 立即购买 </span>
      </div>
      <div class="commodity-two-consult-item-G-LW">
        <el-image :src="antSeries12" fit="cover" class="thumbnail-image" />
        <span>与特别的人分享</span>
      </div>
    </div>
  </div>
  <!-- 商品模特详情 -->
  <div class="commodity-three">
    <div class="commodity-three-swiper">
      <swiper
        :modules="[Navigation, Pagination]"
        :slides-per-view="2.7"
        :space-between="1"
        :navigation="{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }"
        :pagination="{
          el: '.swiper-pagination',
          clickable: true,
        }"
        class="three-swiper"
      >
        <swiper-slide
          v-for="(img, index) in result[0].model"
          :key="index"
          class="three-slide"
        >
          <img :src="img.image" class="three-image" />
        </swiper-slide>
        <!-- 自定义导航按钮 -->
        <div class="swiper-button-prev custom-nav-btn"></div>
        <div class="swiper-button-next custom-nav-btn"></div>
        <!-- 分页指示器 -->
        <div class="swiper-pagination"></div>
      </swiper>
    </div>
  </div>

  <div class="commodity-four">
    <div class="commodity-four-one">
      <div class="section-title">描述+</div>
      <div :class="['description-text', { expanded: isExpanded }]">
        蚂蚁系列耳机以金属平面振膜扬声器技术搭载听力呵护技术。人体工学耳蜗贴合，久戴不痛；超长续航，随行不断电。
        蚂蚁系列耳机以金属平面振膜扬声器技术搭载听力呵护技术。人体工学耳蜗贴合，久戴不痛；超长续航，随行不断电。
      </div>
      <div class="view-more" @click="toggleDescription">
        {{ isExpanded ? "收起" : "查看更多" }}
      </div>
    </div>
    <div class="commodity-four-two">
      <div class="section-title">详情</div>
      <div class="commodity-four-two-item">
        <div class="item">
          <span class="label">编号：</span>
          <span class="value">A09-2</span>
        </div>
        <div class="item">
          <el-image :src="antSeries16" fit="cover" class="icon-image" />
          <span class="label">制造：</span>
          <span class="value">中国大陆</span>
        </div>
        <div class="item">
          <span class="label">性别：</span>
          <span class="value">男女皆宜</span>
        </div>
        <div class="item">
          <el-image :src="antSeries17" fit="cover" class="icon-image" />
          <span class="label">材质：</span>
          <span class="value">不锈钢</span>
        </div>
      </div>
    </div>
  </div>
  <!-- 图片查看器 -->
  <el-image-viewer
    v-if="showViewer"
    :url-list="imageList"
    :initial-index="viewerIndex"
    :hide-on-click-modal="false"
    @close="showViewer = false"
  />

  <!-- 最近浏览 -->
  <div class="recent-views">
    <h2 class="recent-title">最近浏览</h2>
    <div class="recent-container">
      <swiper
        :modules="[Navigation, Pagination]"
        :slides-per-view="4"
        :space-between="20"
        :navigation="{
          nextEl: '.recent-button-next',
          prevEl: '.recent-button-prev',
        }"
        :pagination="{
          el: '.recent-pagination',
          clickable: true,
        }"
        class="recent-swiper"
      >
        <swiper-slide
          v-for="item in recentViews"
          :key="item.id"
          class="recent-slide"
        >
          <div class="recent-item">
            <img :src="item.image" :alt="item.name" class="recent-image" />
            <div class="recent-info">
              <div class="recent-name">{{ item.name }}</div>
              <div class="recent-price">{{ item.price }}</div>
            </div>
          </div>
        </swiper-slide>
        <!-- 自定义导航按钮 -->
        <div class="recent-button-prev custom-nav-btn"></div>
        <div class="recent-button-next custom-nav-btn"></div>
        <!-- 分页指示器 -->
        <div class="recent-pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<style scoped>
.custom-pagination {
  position: absolute;
  top: 50%;
  left: 40px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 10;
}
/* 默认圆点样式 */
:deep(.custom-bullet) {
  width: 16px;
  height: 16px;
  display: block;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
}

/* 激活状态的圆点样式 */
:deep(.custom-bullet-active) {
  background: url("@/assets/图标/蚂蚁按钮16X15.png") no-repeat center center;
  background-size: contain;
  opacity: 1;
}

/* 悬停效果 */
:deep(.custom-bullet:hover) {
  background-color: rgba(0, 0, 0, 0.4);
}

:deep(.custom-bullet-active:hover) {
  background: url("@/assets/图标/蚂蚁按钮16X15.png") no-repeat center center;
  background-size: contain;
}

.commodity-three-swiper {
  width: 100%;
  height: 860px;
  position: relative;
}

.three-swiper {
  width: 100%;
  height: 860px;
}

.three-slide {
  width: 580px;
  height: 860px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.three-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 自定义导航按钮样式 */
.custom-nav-btn {
  width: 40px !important;
  height: 40px !important;
  background-color: rgba(255, 255, 255, 0.9) !important;
  border-radius: 50%;
  top: 40px !important;
}

:deep(.swiper-button-prev) {
  right: 70px !important;
  left: auto !important;
}

:deep(.swiper-button-next) {
  right: 20px !important;
}

:deep(.swiper-button-prev::after),
:deep(.swiper-button-next::after) {
  font-size: 18px !important;
  color: #333;
}

/* 分页器样式 */
:deep(.swiper-pagination) {
  bottom: 80px !important;
}

:deep(.swiper-pagination-bullet) {
  width: 16px;
  height: 16px;
  background: rgba(0, 0, 0, 0.2);
  margin: 0 5px;
  opacity: 1;
  cursor: pointer;
  transition: all 0.3s ease;
}

:deep(.swiper-pagination-bullet-active) {
  background: url("@/assets/图标/蚂蚁按钮16X15.png") no-repeat center center;
  background-size: contain;
  opacity: 1;
}

/* 悬停效果 */
:deep(.swiper-pagination-bullet:hover) {
  background-color: rgba(0, 0, 0, 0.4);
}

:deep(.swiper-pagination-bullet-active:hover) {
  background: url("@/assets/图标/蚂蚁按钮16X15.png") no-repeat center center;
  background-size: contain;
}

.recent-views {
  padding: 40px;
  background: #fff;
}

.recent-title {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 30px;
  color: #333;
}

.recent-container {
  position: relative;
  padding: 0 40px;
  margin-bottom: 50px;
}

.recent-swiper {
  width: 100%;
  height: auto;
}

.recent-slide {
  height: 360px;
}

.recent-item {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: #fff;
  transition: all 0.3s ease;
}

.recent-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.recent-image {
  width: 100%;
  height: 280px;
  object-fit: contain;
  background: #f8f8f8;
  padding: 20px;
}

.recent-info {
  padding: 15px;
}

.recent-name {
  font-size: 14px;
  color: #333;
  margin-bottom: 8px;
}

.recent-price {
  font-size: 16px;
  color: #000;
  font-weight: 500;
}

/* 导航按钮样式 */
.recent-container .custom-nav-btn {
  top: 40% !important;
  transform: translateY(-50%);
}
/* 分页器样式 */
.recent-pagination {
  width: 100%;
  /* background-color: #b9b6b6; */
  position: absolute;
  left: 50%;
}
</style>

<script setup>
import antSeries1 from "@/assets/蚂蚁系列/耳机/2绿色详情大图600X600.png";
import antSeries2 from "@/assets/蚂蚁系列/项链/1项链详情图500X500.png";
import antSeries3 from "@/assets/蚂蚁系列/戒指/2银戒指详情图600X600.png";
import router from "@/utils/router";
import { onMounted, ref, watch } from "vue";

// 定义emit事件
const emit = defineEmits(["update-length"]);

// 使用ref创建响应式数据
const Series = ref([]);

// 监听Series变化并发送长度
watch(
  Series,
  (newValue) => {
    emit("update-length", newValue.length);
  },
  { deep: true }
);

// 蚂蚁系列数据
const AntSeries = [
  {
    id: 1,
    name: "蚂蚁系列 耳机",
    subtitle: "",
    price: 3980,
    image: antSeries1,
  },
  {
    id: 2,
    name: "蚂蚁系列 项链",
    subtitle: "",
    price: 2980,
    image: antSeries2,
  },
  {
    id: 3,
    name: "蚂蚁系列 戒指",
    subtitle: "",
    price: 2980,
    image: antSeries3,
  },
];

// 加载数据的函数
const loadSeriesData = () => {
  const title = router.currentRoute.value.query.title;
  if (title === "蚂蚁系列") {
    Series.value = [...AntSeries];
    // 发送初始长度
    emit("update-length", Series.value.length);
  } else {
    Series.value = []; // 清空数据
    emit("update-length", 0);
  }
};

// 监听路由变化
watch(
  () => router.currentRoute.value.query.title,
  (newTitle) => {
    loadSeriesData();
  }
);

// 组件挂载时加载数据
onMounted(() => {
  loadSeriesData();
});
</script>

<template>
  <div v-if="Series.length > 0">
    <div class="product-grid">
      <!-- 产品列表 -->
      <div class="product-item">
        <div class="product-item-div" v-for="item in Series" :key="item.id">
          <img
            :src="item.image"
            alt="产品图片"
            style="width: 300px; height: 300px"
          />
          <div class="product-item-div-text">
            <div class="product-item-div-text-name">{{ item.name }}</div>
            <div class="product-item-div-text-subtitle">
              {{ item.subtitle }}
            </div>
            <div class="product-item-div-text-price">￥{{ item.price }}</div>
          </div>
        </div>
      </div>
      <!-- 产品详情 -->
      <div class="product-itemtwo">
        <span>Surprise珠宝系列</span>
        <span>探索系列</span>
      </div>
    </div>
  </div>
  <div v-else>
    <!-- 可以添加加载中或无数据的提示 -->
    <div style="text-align: center; padding: 20px">暂无相关系列数据</div>
  </div>
</template>

<style scoped>
.product-grid {
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
}
.product-item {
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  background-color: #ffffff;
}
.product-itemtwo {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;
  /* background-color: #ff13ff; */
}
.product-itemtwo span:first-child {
  font-size: 20px;
  font-weight: bold;
  color: #000000;
  margin-left: 30px;
}
.product-itemtwo span:last-child {
  font-size: 16px;
  font-weight: bold;
  color: #5a5959;
  border-bottom: 1px solid #000000;
  cursor: pointer;
  margin-top: 10px;
  margin-left: 30px;
  margin-bottom: 40px;
}
.product-itemtwo span:last-child:hover {
  color: #000000;
}
.product-detail {
  width: 100%;
  height: 100vh;
  /* background-color: #db194a; */
}
.product-item-div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.product-item-div-text {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  margin-left: 220px;
}
</style>

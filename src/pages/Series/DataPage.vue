<script setup>
//蚂蚁系列
import antSeries1 from "@/assets/蚂蚁系列/耳机/2绿色详情大图600X600.png";
import antSeries2 from "@/assets/蚂蚁系列/项链/1项链详情图500X500.png";
import antSeries3 from "@/assets/蚂蚁系列/戒指/2银戒指详情图600X600.png";
//吊桶仓系列
import lipstickSeries1 from "@/assets/吊筒仓系列/吊桶耳机360X334.png";
//耳机仓系列
import headphoneSeries1 from "@/assets/耳机盒系列/1银耳机仓详情图700X700.png";
import headphoneSeries2 from "@/assets/耳机盒系列/2彩色耳机仓详情图700X700.png";
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
    id: "ant_1",
    name: "蚂蚁系列 耳机",
    price: 3980,
    image: antSeries1,
  },
  {
    id: "ant_2",
    name: "蚂蚁系列 项链",
    price: 2980,
    image: antSeries2,
  },
  {
    id: "ant_3",
    name: "蚂蚁系列 戒指",
    price: 2980,
    image: antSeries3,
  },
];
//吊桶仓系列
const lipstickSeries = [
  {
    id: "bucket_1",
    name: "口红管系列 耳机",
    price: 2980,
    image: lipstickSeries1,
  },
];
//耳机仓系列
const headphoneSeries = [
  {
    id: "headphone_1",
    name: "耳机仓系列 银",
    price: 2980,
    image: headphoneSeries1,
  },
  {
    id: "headphone_2",
    name: "耳机仓系列 彩色",
    price: 2980,
    image: headphoneSeries2,
  },
];
const seriesMap = {
  蚂蚁系列: AntSeries,
  口红管系列: lipstickSeries,
  耳机仓系列: headphoneSeries,
  // 可继续添加其他系列，如：
  // "蜂鸟系列": BeeSeries,
  // "鲸鱼系列": WhaleSeries,
};

const loadSeriesData = () => {
  const title = router.currentRoute.value.query.title;
  const matchedSeries = seriesMap[title];

  if (matchedSeries) {
    Series.value = [...matchedSeries];
    emit("update-length", Series.value.length);
  } else {
    Series.value = [];
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

// 打开产品详情
const openProductDetail = (item) => {
  // 取出已有历史
  const historyStr = localStorage.getItem("history");
  let historyArr = [];

  if (historyStr) {
    try {
      historyArr = JSON.parse(historyStr);
      // console.log("当前历史记录数量:", historyArr.length);
      // console.log("历史记录内容:", historyArr);

      if (!Array.isArray(historyArr)) {
        // console.warn("历史记录不是数组，重置为空数组");
        historyArr = [];
      }
    } catch (e) {
      // console.error("解析历史记录出错:", e);
      historyArr = [];
    }
  }

  // 检查新添加的商品
  // console.log("新添加商品:", item);

  // 去重：如果已有相同商品，先删除旧的
  const beforeLength = historyArr.length;
  historyArr = historyArr.filter((i) => i.id !== item.id);
  if (beforeLength !== historyArr.length) {
    // console.log("移除了重复商品");
  }

  // 新的放最前面
  historyArr.unshift(item);
  console.log("添加新商品后数量:", historyArr.length);

  // 限制最多30条
  if (historyArr.length > 30) {
    historyArr = historyArr.slice(0, 30);
    // console.log("裁剪到30条后数量:", historyArr.length);
  }

  // 保存回localStorage
  localStorage.setItem("history", JSON.stringify(historyArr));
  // console.log("最终保存的历史记录数量:", historyArr.length);

  // 跳转页面
  router.push({
    path: "/commodity",
    query: {
      title: item.name,
    },
  });
};
</script>

<template>
  <div v-if="Series.length > 0">
    <div class="product-grid">
      <!-- 产品列表 -->
      <div class="product-item">
        <div
          class="product-item-div"
          v-for="item in Series"
          :key="item.id"
          @click="openProductDetail(item)"
        >
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
  width: 100%;
}

.product-item {
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  padding: 20px;
  background-color: #ffffff;
}

.product-itemtwo {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;
  padding: 20px;
}

.product-itemtwo span:first-child {
  font-size: clamp(16px, 3vw, 20px);
  font-weight: bold;
  color: #000000;
  margin-left: 30px;
}

.product-itemtwo span:last-child {
  font-size: clamp(14px, 2.5vw, 16px);
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
  cursor: pointer;
  padding: 10px;
  transition: transform 0.3s ease;
}

.product-item-div:hover {
  transform: translateY(-5px);
}

.product-item-div img {
  width: 100%;
  height: auto;
  max-width: 300px;
  object-fit: contain;
}

.product-item-div-text {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  padding: 15px 0;
}

/* 响应式设计 */
@media screen and (max-width: 1024px) {
  .product-grid {
    flex-direction: column;
  }

  .product-item,
  .product-itemtwo {
    width: 100%;
  }

  .product-item {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
}

@media screen and (max-width: 768px) {
  .product-item {
    grid-template-columns: 1fr;
    padding: 15px;
  }

  .product-item-div img {
    max-width: 250px;
  }

  .product-itemtwo {
    padding: 15px;
  }

  .product-itemtwo span:first-child {
    margin-left: 15px;
  }

  .product-itemtwo span:last-child {
    margin-left: 15px;
    margin-bottom: 20px;
  }
}

@media screen and (max-width: 480px) {
  .product-item {
    padding: 10px;
  }

  .product-item-div img {
    max-width: 200px;
  }

  .product-item-div-text {
    padding: 10px 0;
  }
}

/* 处理横屏模式 */
@media screen and (max-height: 500px) and (orientation: landscape) {
  .product-grid {
    flex-direction: row;
  }

  .product-item,
  .product-itemtwo {
    width: 50%;
  }
}
</style>

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
import antSeries9 from "@/assets/蚂蚁系列/耳机/3绿色详情大图600X600.png";
import antSeries18 from "@/assets/蚂蚁系列/耳机/2绿色详情大图600X600.png";
import antSeries19 from "@/assets/蚂蚁系列/项链/1项链详情图500X500.png";
import antSeries20 from "@/assets/蚂蚁系列/戒指/2金戒指详情图600X600.png";
import antSeries28 from "@/assets/蚂蚁系列/戒指/1金戒指详情图600X600.png";
import antSeries29 from "@/assets/蚂蚁系列/戒指/3金戒指详情图600X600.png";
import antSeries35 from "@/assets/蚂蚁系列/戒指/4金戒指详情图600X600.png";
import antSeries36 from "@/assets/蚂蚁系列/戒指/5金戒指详情图600X600.png";
import antSeries37 from "@/assets/蚂蚁系列/戒指/6金戒指详情图600X600.png";
import antSeries26 from "@/assets/蚂蚁系列/戒指/2银戒指详情图600X600.png";
import antSeries30 from "@/assets/蚂蚁系列/戒指/1银戒指详情图600X600.png";
import antSeries31 from "@/assets/蚂蚁系列/戒指/3银戒指详情图600X600.png";
import antSeries38 from "@/assets/蚂蚁系列/戒指/4银戒指详情图600X600.png";
import antSeries39 from "@/assets/蚂蚁系列/戒指/5银戒指详情图600X600.png";
import antSeries40 from "@/assets/蚂蚁系列/戒指/6银戒指详情图600X600.png";
import antSeries27 from "@/assets/蚂蚁系列/戒指/2粉戒指详情图600X600.png";
import antSeries32 from "@/assets/蚂蚁系列/戒指/1粉戒指详情图600X600.png";
import antSeries33 from "@/assets/蚂蚁系列/戒指/3粉戒指详情图600X600.png";
import antSeries41 from "@/assets/蚂蚁系列/戒指/4粉戒指详情图600X600.png";
import antSeries42 from "@/assets/蚂蚁系列/戒指/5粉戒指详情图600X600.png";
import antSeries43 from "@/assets/蚂蚁系列/戒指/6粉戒指详情图600X600.png";
import antSeries10 from "@/assets/图标/服务大使22X22.png";
import antSeries11 from "@/assets/图标/致电20X20.png";
import antSeries12 from "@/assets/图标/礼物20X20.png";
import antSeries16 from "@/assets/图标/位置23X25.png";
import antSeries17 from "@/assets/图标/材质24X24.png";
import antSeries13 from "@/assets/模特/一模特580X900.png";
import antSeries14 from "@/assets/模特/二模特580X900.png";
import antSeries15 from "@/assets/模特/三模特580X900.png";
import antSeries22 from "@/assets/蚂蚁系列/项链/1项链详情图500X500.png";
import antSeries23 from "@/assets/蚂蚁系列/项链/2项链详情图600X600.png";
import antSeries24 from "@/assets/蚂蚁系列/项链/3项链详情图500X500.png";
import antSeries25 from "@/assets/蚂蚁系列/项链/4项链详情图600X600.png";
import antSeries34 from "@/assets/蚂蚁系列/项链/小框项链70X70.png";
//吊筒仓图片
import lipstickSeries1 from "@/assets/吊筒仓系列/4吊桶详情图600X600.png";
import lipstickSeries2 from "@/assets/吊筒仓系列/4粉吊桶详情图800X800.png";
import lipstickSeries3 from "@/assets/吊筒仓系列/4金吊桶详情图800X800.png";

//银吊筒仓图片
import lipstickSeries4 from "@/assets/吊筒仓系列/4吊桶详情图600X600.png";
import lipstickSeries5 from "@/assets/吊筒仓系列/1银吊桶详情图600X600.png";
import lipstickSeries6 from "@/assets/吊筒仓系列/2银吊桶详情图600X600.png";
import lipstickSeries7 from "@/assets/吊筒仓系列/3银吊桶详情图600X600.png";
//金吊筒仓图片
import lipstickSeries8 from "@/assets/吊筒仓系列/4金吊桶详情图800X800.png";
import lipstickSeries9 from "@/assets/吊筒仓系列/1金吊桶详情图600X600.png";
import lipstickSeries10 from "@/assets/吊筒仓系列/2金吊桶详情图600X600.png";
import lipstickSeries11 from "@/assets/吊筒仓系列/3金吊桶详情图600X600.png";
//粉吊筒仓图片
import lipstickSeries12 from "@/assets/吊筒仓系列/4粉吊桶详情图800X800.png";
import lipstickSeries13 from "@/assets/吊筒仓系列/1粉吊桶详情图600X600.png";
import lipstickSeries14 from "@/assets/吊筒仓系列/2粉吊桶详情图600X600.png";
import lipstickSeries15 from "@/assets/吊筒仓系列/3粉吊桶详情图600X600.png";
//绿戒指包装
import packagIng1 from "@/assets/包装/绿戒指包装/1绿700x700.png";
import packagIng2 from "@/assets/包装/绿戒指包装/2绿750x750.png";
import packagIng3 from "@/assets/包装/绿戒指包装/3绿700x700.png";
//绿蚂蚁包装
import packaging4 from "@/assets/包装/绿蚂蚁包装/1绿700x700.png";
import packaging5 from "@/assets/包装/绿蚂蚁包装/2绿700x700.png";
import packaging6 from "@/assets/包装/绿蚂蚁包装/3绿700x700.png";
//项链包装
import packaging7 from "@/assets/包装/项链包装/1项链700x700.png";
import packaging8 from "@/assets/包装/项链包装/2项链800x800.png";
import packaging9 from "@/assets/包装/项链包装/3项链700x700.png";
//耳机仓系列 银
import headphoneSeries1 from "@/assets/耳机盒系列/3银耳机仓详情图700X700.png";
import headphoneSeries2 from "@/assets/耳机盒系列/3金耳机仓详情图700X700.png";
import headphoneSeries3 from "@/assets/耳机盒系列/3粉耳机仓详情图700X700.png";
//耳机仓系列 银 -银
import headphoneSeries4 from "@/assets/耳机盒系列/3银耳机仓详情图700X700.png";
import headphoneSeries5 from "@/assets/耳机盒系列/2银耳机仓详情图700X700.png";
import headphoneSeries6 from "@/assets/耳机盒系列/1银耳机仓详情图700X700.png";
//耳机仓系列 银 -金
import headphoneSeries7 from "@/assets/耳机盒系列/3金耳机仓详情图700X700.png";
import headphoneSeries8 from "@/assets/耳机盒系列/2金耳机仓详情图700X700.png";
import headphoneSeries9 from "@/assets/耳机盒系列/1金耳机仓详情图700X700.png";
//耳机仓系列 银 -粉
import headphoneSeries10 from "@/assets/耳机盒系列/3粉耳机仓详情图700X700.png";
import headphoneSeries11 from "@/assets/耳机盒系列/2粉耳机仓详情图700X700.png";
import headphoneSeries12 from "@/assets/耳机盒系列/1粉耳机仓详情图700X700.png";
//耳机仓系列 彩色
import headphoneSeries13 from "@/assets/耳机盒系列/4彩色耳机仓详情图700X700.png";
import headphoneSeries14 from "@/assets/耳机盒系列/2彩色耳机仓详情图700X700.png";
import headphoneSeries15 from "@/assets/耳机盒系列/3彩色耳机仓详情图700X700.png";
import headphoneSeries16 from "@/assets/耳机盒系列/1彩色耳机仓详情图600X600.png";

// 导入Swiper相关组件
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ref, watch, onMounted } from "vue";
import router from "@/utils/router";

// 导入Swiper样式
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// 最近浏览数据
const recentViews = ref([]);

onMounted(async () => {
  await loadSeriesData();
  // 获取历史记录
  let history = localStorage.getItem("history");
  if (history) {
    // 解析字符串
    recentViews.value = JSON.parse(history);
    console.log(recentViews.value);
  }
});
// 监听路由变化
watch(
  () => router.currentRoute.value.query.title,
  async (newTitle) => {
    await loadSeriesData();
  }
);
// 数据
const result = [
  //蚂蚁系列 耳机
  {
    id: 1,
    name: "蚂蚁系列 耳机",
    subtitle:
      "蚂蚁系列耳机以金属平面振膜扬声器技术搭载听力呵护技术。人体工学耳蜗贴合，久戴不痛；超长续航，随行不断电。",
    describe:
      "轻巧如蚁，声动不凡！蚂蚁系列耳机以仅3.2g的超轻机身，带来全天候舒适佩戴。金属平面振膜扬声器技术，低频震撼，人声细腻。AI双麦降噪，通勤、运动、通话清晰无干扰。搭配充电仓续航长达6小时，支持快充.磁吸充电仓防丢设计，安卓/iOS全兼容，轻松驾驭各种场景。蚂蚁耳机——以极致小巧，成就震撼听感！",
    price: 3980,
    StyleGuide: "耳夹式",
    tax: true, //true-含税，false-不含税
    serialNumber: "A09-2",
    manufacturing: "中国大陆",
    gender: "男女皆宜",
    material: "不锈钢",
    ProductImage: [
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
    green: [
      {
        id: 1,
        image: antSeries1,
      },
      {
        id: 2,
        image: antSeries4,
      },
      {
        id: 3,
        image: antSeries9,
      },
      {
        id: 4,
        image: packaging4,
      },
      {
        id: 5,
        image: packaging5,
      },
      {
        id: 6,
        image: packaging6,
      },
    ],
    purple: [
      {
        id: 1,
        image: antSeries3,
      },
      {
        id: 2,
        image: antSeries6,
      },
      {
        id: 3,
        image: antSeries7,
      },
    ],
    golden: [
      {
        id: 1,
        image: antSeries2,
      },
      {
        id: 2,
        image: antSeries5,
      },
      {
        id: 3,
        image: antSeries8,
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
  //蚂蚁系列 项链
  {
    id: 2,
    name: "蚂蚁系列 项链",
    subtitle:
      "蚂蚁系列项链充电仓，迷你便携，超强续航。采用磁吸快充设计，耳机放入即充，15分钟补电50%。",
    describe:
      "蚂蚁系列小巧项链装饰充电仓，却能给耳机充满电4次！采用磁吸快充设计，耳机放入即充，15分钟补电50%。Type-C接口充电，随手一放就能回血。磨砂防滑外壳，IPX4生活防水，丢包里也不怕刮花。",
    price: 3980,
    StyleGuide: "穿戴式",
    tax: true, //true-含税，false-不含税
    serialNumber: "A09-2",
    manufacturing: "中国大陆",
    gender: "男女皆宜",
    material: "不锈钢",
    ProductImage: [
      {
        id: 1,
        image: antSeries34,
      },
    ],
    silver: [
      {
        id: 1,
        image: antSeries22,
      },
      {
        id: 2,
        image: antSeries23,
      },
      {
        id: 3,
        image: antSeries24,
      },
      {
        id: 4,
        image: antSeries25,
      },
      {
        id: 5,
        image: packaging7,
      },
      {
        id: 6,
        image: packaging8,
      },
      {
        id: 7,
        image: packaging9,
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
  //蚂蚁系列 戒指
  {
    id: 3,
    name: "蚂蚁系列 戒指",
    subtitle:
      "蚂蚁系列智能戒指。轻若无物，却掌控全局——蚂蚁智能戒指，重新定义穿戴体验。",
    describe:
      "蚂蚁系列智能戒指，指尖上的智慧健康伴侣3.5g超轻设计，24小时无感佩戴，支持血氧、心率、体温、睡眠多维健康监测。50米防水，15种运动自动识别。磁吸快充30分钟续航7天。不锈钢材质，闪耀金、月光银、玫瑰金三色可选。",
    price: 3980,
    StyleGuide: "穿戴式",
    tax: true, //true-含税，false-不含税
    serialNumber: "A09-2",
    manufacturing: "中国大陆",
    gender: "男女皆宜",
    material: "不锈钢",
    ProductImage: [
      {
        id: 1,
        image: antSeries26,
      },
      {
        id: 2,
        image: antSeries20,
      },
      {
        id: 3,
        image: antSeries27,
      },
    ],
    silver: [
      {
        id: 1,
        image: antSeries30,
      },
      {
        id: 2,
        image: antSeries31,
      },
      {
        id: 3,
        image: antSeries26,
      },
      {
        id: 4,
        image: antSeries38,
      },
      {
        id: 5,
        image: antSeries39,
      },
      {
        id: 6,
        image: antSeries40,
      },
      {
        id: 7,
        image: packagIng1,
      },
      {
        id: 8,
        image: packagIng2,
      },
      {
        id: 9,
        image: packagIng3,
      },
    ],
    golden: [
      {
        id: 1,
        image: antSeries28,
      },
      {
        id: 2,
        image: antSeries20,
      },
      {
        id: 3,
        image: antSeries29,
      },
      {
        id: 4,
        image: antSeries36,
      },
      {
        id: 5,
        image: antSeries37,
      },
      {
        id: 6,
        image: antSeries35,
      },
    ],
    pink: [
      {
        id: 1,
        image: antSeries32,
      },
      {
        id: 2,
        image: antSeries33,
      },
      {
        id: 3,
        image: antSeries27,
      },
      {
        id: 4,
        image: antSeries41,
      },
      {
        id: 5,
        image: antSeries42,
      },
      {
        id: 6,
        image: antSeries43,
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
  //吊桶仓系列 耳机
  {
    id: 4,
    name: "吊桶仓系列 耳机",
    subtitle:
      "蚂蚁系列智能戒指。轻若无物，却掌控全局——蚂蚁智能戒指，重新定义穿戴体验。",
    describe:
      "蚂蚁系列智能戒指，指尖上的智慧健康伴侣3.5g超轻设计，24小时无感佩戴，支持血氧、心率、体温、睡眠多维健康监测。50米防水，15种运动自动识别。磁吸快充30分钟续航7天。不锈钢材质，闪耀金、月光银、玫瑰金三色可选。",
    price: 3980,
    StyleGuide: "穿戴式",
    tax: true, //true-含税，false-不含税
    serialNumber: "A09-2",
    manufacturing: "中国大陆",
    gender: "男女皆宜",
    material: "不锈钢",
    ProductImage: [
      {
        id: 1,
        image: lipstickSeries1,
      },
      {
        id: 2,
        image: lipstickSeries2,
      },
      {
        id: 3,
        image: lipstickSeries3,
      },
    ],
    silver: [
      {
        id: 1,
        image: lipstickSeries4,
      },
      {
        id: 2,
        image: lipstickSeries5,
      },
      {
        id: 3,
        image: lipstickSeries6,
      },
      {
        id: 4,
        image: lipstickSeries7,
      },
    ],
    golden: [
      {
        id: 1,
        image: lipstickSeries8,
      },
      {
        id: 2,
        image: lipstickSeries9,
      },
      {
        id: 3,
        image: lipstickSeries10,
      },
      {
        id: 4,
        image: lipstickSeries11,
      },
    ],
    pink: [
      {
        id: 1,
        image: lipstickSeries12,
      },
      {
        id: 2,
        image: lipstickSeries13,
      },
      {
        id: 3,
        image: lipstickSeries14,
      },
      {
        id: 4,
        image: lipstickSeries15,
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
  //耳机仓系列 银
  {
    id: 5,
    name: "耳机仓系列 银",
    subtitle:
      "蚂蚁系列智能戒指。轻若无物，却掌控全局——蚂蚁智能戒指，重新定义穿戴体验。",
    describe:
      "蚂蚁系列智能戒指，指尖上的智慧健康伴侣3.5g超轻设计，24小时无感佩戴，支持血氧、心率、体温、睡眠多维健康监测。50米防水，15种运动自动识别。磁吸快充30分钟续航7天。不锈钢材质，闪耀金、月光银、玫瑰金三色可选。",
    price: 3980,
    StyleGuide: "穿戴式",
    tax: true, //true-含税，false-不含税
    serialNumber: "A09-2",
    manufacturing: "中国大陆",
    gender: "男女皆宜",
    material: "不锈钢",
    ProductImage: [
      {
        id: 1,
        image: headphoneSeries1,
      },
      {
        id: 2,
        image: headphoneSeries3,
      },
      {
        id: 3,
        image: headphoneSeries2,
      },
    ],
    silver: [
      {
        id: 1,
        image: headphoneSeries4,
      },
      {
        id: 2,
        image: headphoneSeries5,
      },
      {
        id: 3,
        image: headphoneSeries6,
      },
    ],
    golden: [
      {
        id: 1,
        image: headphoneSeries7,
      },
      {
        id: 2,
        image: headphoneSeries8,
      },
      {
        id: 3,
        image: headphoneSeries9,
      },
    ],
    pink: [
      {
        id: 1,
        image: headphoneSeries10,
      },
      {
        id: 2,
        image: headphoneSeries11,
      },
      {
        id: 3,
        image: headphoneSeries12,
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
  //耳机仓系列 彩色
  {
    id: 6,
    name: "耳机仓系列 彩色",
    subtitle:
      "蚂蚁系列智能戒指。轻若无物，却掌控全局——蚂蚁智能戒指，重新定义穿戴体验。",
    describe:
      "蚂蚁系列智能戒指，指尖上的智慧健康伴侣3.5g超轻设计，24小时无感佩戴，支持血氧、心率、体温、睡眠多维健康监测。50米防水，15种运动自动识别。磁吸快充30分钟续航7天。不锈钢材质，闪耀金、月光银、玫瑰金三色可选。",
    price: 3980,
    StyleGuide: "穿戴式",
    tax: true, //true-含税，false-不含税
    serialNumber: "A09-2",
    manufacturing: "中国大陆",
    gender: "男女皆宜",
    material: "不锈钢",
    ProductImage: [
      {
        id: 1,
        image: headphoneSeries13,
      },
    ],
    colours: [
      {
        id: 1,
        image: headphoneSeries13,
      },
      {
        id: 2,
        image: headphoneSeries14,
      },
      {
        id: 3,
        image: headphoneSeries15,
      },
      {
        id: 4,
        image: headphoneSeries16,
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
// 当前数据
const currentData = ref(null);

// 加载状态
const isLoading = ref(true);

// 当前选中的索引
const viewerIndex = ref(0);

// 当前显示的图片组
const currentImages = ref([]);

// 映射表
const defaultColorMap = {
  "蚂蚁系列 项链": "silver",
  "蚂蚁系列 耳机": "green",
  "蚂蚁系列 戒指": "silver",
  "吊桶仓系列 耳机": "silver",
  "耳机仓系列 银": "silver",
  "耳机仓系列 彩色": "colours",
};
// 加载数据的函数
const loadSeriesData = async () => {
  isLoading.value = true;
  try {
    const title = router.currentRoute.value.query.title;
    console.log(title);
    // 查找对应的商品数据
    const matchedData = result.find((item) => item.name === title);
    if (matchedData) {
      currentData.value = matchedData;
      const colorKey = defaultColorMap[matchedData.name];
      if (colorKey && matchedData[colorKey]) {
        currentImages.value = matchedData[colorKey];
      } else {
        currentImages.value = matchedData.ProductImage || []; // 防止为空
      }

      viewerIndex.value = 0;
    }
  } catch (error) {
    console.error("数据加载失败:", error);
  } finally {
    isLoading.value = false;
  }
};
// 图片点击映射
const productImageMap = {
  "蚂蚁系列 项链": () => currentData.value?.silver,
  "蚂蚁系列 耳机": (index) => {
    const map = ["green", "golden", "purple"];
    const key = map[index];
    return currentData.value?.[key];
  },
  "蚂蚁系列 戒指": (index) => {
    const map = ["silver", "golden", "pink"];
    const key = map[index];
    return currentData.value?.[key];
  },
  "吊桶仓系列 耳机": (index) => {
    const map = ["silver", "pink", "golden"];
    const key = map[index];
    return currentData.value?.[key];
  },
  "耳机仓系列 银": (index) => {
    const map = ["silver", "pink", "golden"];
    const key = map[index];
    return currentData.value?.[key];
  },
  "耳机仓系列 彩色": (index) => {
    const map = ["colours"];
    const key = map[index];
    return currentData.value?.[key];
  },
};
// 图片点击
const handleImageClick = (index) => {
  viewerIndex.value = index;

  const productName = currentData.value?.name;
  const mapper = productImageMap[productName];

  if (typeof mapper === "function") {
    const result = mapper(index);
    if (result) {
      currentImages.value = result;
    }
  }
};

// 轮播图配置
const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  direction: "vertical",
  grabCursor: true,
  simulateTouch: true,
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
// 描述展开
const isExpanded = ref(false);
// 描述展开
const toggleDescription = () => {
  isExpanded.value = !isExpanded.value;
};

// 最近浏览Swiper配置
const recentSwiperOptions = {
  modules: [Pagination],
  slidesPerView: 4,
  spaceBetween: 20,
  pagination: {
    el: ".recent-pagination",
    clickable: true,
    bulletClass: "custom-bullet",
    bulletActiveClass: "custom-bullet-active",
    renderBullet: (index, className) => {
      return `<span class="${className}"></span>`;
    },
  },
};

// 最近浏览点击
const handleRecentClick = (item) => {
  router.replace({
    path: "/commodity",
    query: {
      title: item.name,
    },
  });
};
</script>

<template>
  <div v-if="!isLoading && currentData">
    <div class="commodity-container">
      <!-- 商品轮播图片 -->
      <div class="commodity-one">
        <swiper class="product-swiper" v-bind="swiperOptions">
          <swiper-slide v-for="item in currentImages" :key="item.id">
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
        <span class="commodity-two-title-name">{{ currentData.name }}</span>
        <div class="commodity-two-price">
          <span>￥{{ currentData.price }}</span>
          <span>{{ currentData.tax ? "含税" : "不含税" }}</span>
        </div>

        <span style="margin-top: 10px; margin-bottom: 10px">
          价格视所选配而定
        </span>

        <div class="commodity-two-description">
          {{ currentData.subtitle }}
        </div>
        <div>更多款式：</div>
        <div class="image-scroll-container">
          <div class="image-scroll-wrapper">
            <div
              v-for="(item, index) in currentData.ProductImage"
              :key="item.id"
              class="scroll-item"
              :class="{ active: viewerIndex === index }"
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
        <div>款式指南：{{ currentData.StyleGuide }}</div>
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
          {{ currentData.describe }}
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
            <span class="value">{{ currentData.serialNumber }}</span>
          </div>
          <div class="item">
            <el-image :src="antSeries16" fit="cover" class="icon-image" />
            <span class="label">制造：</span>
            <span class="value">{{ currentData.manufacturing }}</span>
          </div>
          <div class="item">
            <span class="label">性别：</span>
            <span class="value">{{ currentData.gender }}</span>
          </div>
          <div class="item">
            <el-image :src="antSeries17" fit="cover" class="icon-image" />
            <span class="label">材质：</span>
            <span class="value">{{ currentData.material }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 最近浏览 -->
    <div class="recent-views">
      <h1 class="recent-title">最近浏览</h1>
      <div class="recent-container">
        <swiper class="recent-swiper" v-bind="recentSwiperOptions">
          <swiper-slide
            v-for="item in recentViews"
            :key="item.id"
            class="recent-slide"
            @click="handleRecentClick(item)"
          >
            <div class="recent-item">
              <img :src="item.image" :alt="item.name" class="recent-image" />
              <div class="recent-info">
                <div class="recent-name">{{ item.name }}</div>
                <div class="recent-price">￥{{ item.price }}</div>
              </div>
            </div>
          </swiper-slide>
          <!-- 分页指示器 -->
          <div class="recent-pagination"></div>
        </swiper>
      </div>
    </div>
  </div>
  <div v-else class="loading-container">
    <div class="loading-spinner"></div>
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
  display: inline-block;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.2);
  margin: 0 5px;
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
  background-color: rgba(82, 79, 79, 0.9) !important;
  border-radius: 50%;
  top: 80px !important;
  z-index: 1000px;
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
  width: 100%;
  padding: 40px 0;
  background: #fff;
}

.recent-container {
  height: 500px;
  position: relative;
  margin-left: 40px;
}

.recent-title {
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 30px;
  margin-left: 40px;
  color: #333;
}

.recent-swiper {
  width: 100%;
  height: auto;
}

.recent-item {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 15px;
  border-radius: 12px;
  transition: all 0.3s ease;
  background: url("@/assets/最近浏览/最近浏览渐变.png") no-repeat center center;
  background-size: cover;
}

.recent-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.recent-image {
  width: 100%;
  height: 280px;
  object-fit: contain;
  padding: 20px;
}

.recent-info {
  padding: 15px;
  margin-left: 50px;
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

.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #333;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.commodity-four {
  width: 100%;
  height: auto;
  min-height: 200px;
  background: #fff;
  margin-top: 20px;
}

.commodity-four-one {
  padding: 20px;
  height: auto;
  min-height: 100px;
}

.description-text {
  font-size: 14px;
  line-height: 1.5;
  color: #333;
  overflow: hidden;
  height: 45px; /* 默认两行 */
  transition: all 0.3s ease;
}

.description-text.expanded {
  height: auto;
  overflow: visible;
}

.view-more {
  color: #666;
  cursor: pointer;

  padding: 10px 0;
}

.section-title {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 15px;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.scroll-item {
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
  padding: 2px;
}

.scroll-item.active {
  border-color: #333;
}

.scroll-item:hover {
  opacity: 0.8;
}
.recent-pagination {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.recent-slide {
  cursor: pointer;
}
</style>

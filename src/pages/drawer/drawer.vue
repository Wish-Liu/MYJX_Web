<!-- Drawer.vue -->
<script setup>
import "../CSS/Drawer.css";
import { ref, computed, watch } from "vue";
import router from "@/utils/router";
// 图标
import plusIcon from "@/assets/images/+16X16.png";
import antImage from "@/assets/蚂蚁系列/耳机/蚂蚁系列框148X110.png";
import SuspendedSilo from "@/assets/吊筒仓系列/吊桶系列.png";
import earphoneCase from "@/assets/耳机盒系列/耳机仓系列框142X92.png";
const props = defineProps({
  drawer: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["update:drawer"]);

// 控制子抽屉显示与选中的一级菜单
const subDrawerVisible = ref(false);
const selectedMenuTitle = ref("");
// 记录当前选中的二级菜单项
const selectedSubItem = ref("");
// 控制二级抽屉显示与选中的二级菜单
const handleClose = () => {
  emit("update:drawer", false);
  // 当主抽屉关闭时，同时关闭二级抽屉并重置所有状态
  subDrawerVisible.value = false;
  selectedMenuTitle.value = "";
  selectedSubItem.value = "";
};
// 打开二级抽屉
const openSubDrawer = (title) => {
  const menuItem = res.find((item) => item.title === title);
  if (menuItem) {
    selectedMenuTitle.value = title;
    subDrawerVisible.value = true;
  }
};
// 关闭二级抽屉
const handleSubDrawerClose = () => {
  subDrawerVisible.value = false;
};
// 处理二级菜单项点击
const handleSubItemClick = (item) => {
  selectedSubItem.value = item;
  // 这里可以根据需要添加跳转逻辑
  console.log("选择了二级菜单:", selectedMenuTitle.value, "->", item);
};
// 菜单数据
const res = [
  {
    title: "高级珠宝",
    subTitle: ["项链", "戒指", "耳饰", "手镯", "个性定制"],
    series: [],
  },
  {
    title: "珠宝",
    subTitle: ["项链", "戒指", "耳饰", "手镯", "个性定制", "浏览全部"],
    series: [
      {
        title: "蚂蚁系列",
        subTitle: {
          title: "蚂蚁系列",
          img: antImage,
          path: "/AntSeries",
        },
      },
      {
        title: "吊桶仓系列",
        subTitle: {
          title: "吊桶仓系列",
          img: SuspendedSilo,
          path: "/SuspendedSilo",
        },
      },
      {
        title: "耳机仓系列",
        subTitle: {
          title: "耳机仓系列",
          img: earphoneCase,
          path: "/EarphoneCase",
        },
      },
    ],
  },
  {
    title: "穿搭",
    subTitle: ["上衣", "裤装", "裙装", "外套", "配饰"],
    series: [],
  },
  {
    title: "美妆",
    subTitle: ["护肤", "彩妆", "香水", "美容仪器"],
    series: [],
  },
  {
    title: "音响",
    subTitle: ["耳机", "音箱", "配件"],
    series: [],
  },
  {
    title: "礼品定制",
    subTitle: ["个性定制", "企业定制", "节日礼品"],
    series: [],
  },
];

// 当前选中菜单的数据
const currentMenuData = computed(() => {
  return res.find((item) => item.title === selectedMenuTitle.value) || {};
});

// 当前子菜单项内容
const currentSubList = computed(() => {
  return (
    res.find((item) => item.title === selectedMenuTitle.value)?.subTitle || []
  );
});
// 处理系列点击
const open = (title) => {
  try {
    console.log(`跳转系列${title}`);
    router.push({
      path: "/Series",
      query: {
        title: title,
      },
    });
    handleClose();
  } catch (error) {
    console.error("路由跳转错误:", error);
  }
};

// 处理走进Surprise Ant点击
const handleSurpriseClick = () => {
  handleClose();
};

// 处理联系我们点击
const handleContactClick = (type) => {
  switch (type) {
    case "客服":
      break;
    case "门店信息":
      break;
  }
  handleClose();
};

// 监听主抽屉关闭事件
watch(
  () => props.drawer,
  (newVal) => {
    if (!newVal) {
      // 主抽屉关闭时，重置二级抽屉状态
      subDrawerVisible.value = false;
      selectedMenuTitle.value = "";
      selectedSubItem.value = "";
    } else {
      // 主抽屉打开时，确保二级抽屉是关闭状态
      subDrawerVisible.value = false;
      selectedMenuTitle.value = "";
      selectedSubItem.value = "";
    }
  }
);
</script>

<template>
  <!-- 主抽屉 -->
  <el-drawer
    :model-value="props.drawer"
    direction="ltr"
    :size="subDrawerVisible ? '1100px' : '300px'"
    @close="handleClose"
    class="main-drawer"
  >
    <template #header>
      <div class="drawer-title-wrapper">
        <h2 class="drawer-title">系列</h2>
      </div>
    </template>

    <div class="drawer-content">
      <!-- 一级菜单 -->
      <div class="menu-sectionone">
        <div class="menu-items">
          <div
            v-for="item in res"
            :key="item.title"
            @click="openSubDrawer(item.title)"
            class="menu-item"
            :class="{ active: selectedMenuTitle === item.title }"
          >
            {{ item.title }}
          </div>
        </div>
      </div>

      <!-- 第二部分 -->
      <div class="menu-sectiontwo">
        <el-row class="menu-row" @click="handleSurpriseClick">
          <div class="menu-title">走进Surprise Ant</div>
          <el-image
            :src="plusIcon"
            fit="cover"
            style="width: 16px; height: 16px; margin-left: 50px"
          />
        </el-row>
      </div>

      <!-- 第三部分 -->
      <div class="menu-sectionthree">
        <div class="menu-title">联系我们</div>
        <div class="menu-items">
          <div @click="handleContactClick('客服')">客服</div>
          <div @click="handleContactClick('门店信息')">门店信息</div>
        </div>
      </div>
    </div>

    <!-- 二级抽屉 -->
    <div
      class="sub-drawer"
      :class="{ open: subDrawerVisible }"
      v-show="subDrawerVisible"
    >
      <el-row style="display: flex; justify-content: space-between">
        <div class="sub-one">
          <div class="sub-drawer-header">
            <div @click="handleSubDrawerClose" class="back-button">← 返回</div>
            <h3>{{ selectedMenuTitle }}</h3>
          </div>
          <div class="sub-drawer-content">
            <div
              v-for="(item, index) in currentSubList"
              :key="index"
              class="sub-menu-item"
              :class="{ active: selectedSubItem === item }"
              @click="handleSubItemClick(item)"
            >
              {{ item }}
            </div>
          </div>
        </div>
        <div class="sub-two" v-if="selectedMenuTitle === '珠宝'">
          <div
            class="sub-two-item"
            v-for="item in res[1].series"
            :key="item.title"
            @click="open(item.title)"
          >
            <img :src="item.subTitle.img" alt="" class="sub-two-item" />
            <span>{{ item.title }}</span>
          </div>
        </div>
      </el-row>
    </div>
  </el-drawer>
</template>

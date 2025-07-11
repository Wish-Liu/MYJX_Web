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
  console.log(`当前设备类型: ${newDeviceType}`);
  console.log(`当前屏幕方向: ${newOrientation}`);
  console.log(`屏幕尺寸: ${windowWidth.value}x${windowHeight.value}`);
  console.log(`是否为触摸设备: ${isTouchDevice.value}`);
});
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
        title: "口红管系列",
        subTitle: {
          title: "口红管系列",
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

// 动态计算抽屉宽度
const drawerSize = computed(() => {
  // 移动设备
  if (isMobileDevice.value) {
    return "100%"; // 移动设备全屏显示
  }

  // PC设备，根据是否显示二级抽屉调整宽度
  if (subDrawerVisible.value) {
    // 如果屏幕宽度小于1200px，使用百分比
    return windowWidth.value < 1200 ? "90%" : "1100px";
  } else {
    // 主抽屉宽度也根据屏幕大小调整
    return windowWidth.value < 768 ? "80%" : "300px";
  }
});

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
    :size="drawerSize"
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
          <el-image :src="plusIcon" fit="cover" class="plus-icon" />
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
      <!-- 移动端 -->
      <div class="mobile-sub-drawer" v-if="isMobileDevice">
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
        <div class="mobile-sub-drawer-two" v-if="selectedMenuTitle === '珠宝'">
          <div
            v-for="item in res[1].series"
            :key="item.title"
            @click="open(item.title)"
            class="mobile-sub-drawer-div"
          >
            <div class="mobile-sub-drawer-img-container">
              <img
                :src="item.subTitle.img"
                :alt="item.title"
                class="mobile-sub-drawer-img"
              />
            </div>
            <span>{{ item.title }}</span>
          </div>
        </div>
      </div>
      <!-- PC端 -->
      <el-row class="pc-sub-drawer-row" v-else>
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
            <img
              :src="item.subTitle.img"
              :alt="item.title"
              class="sub-two-img"
            />
            <span class="sub-two-name">{{ item.title }}</span>
          </div>
        </div>
      </el-row>
    </div>
  </el-drawer>
</template>

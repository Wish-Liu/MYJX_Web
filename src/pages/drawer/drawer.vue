<script setup>
const props = defineProps({
  drawer: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(["update:drawer"]);

// 导入图片
import plusIcon from "@/assets/images/+16X16.png";

const handleClose = () => {
  emit("update:drawer", false);
};
</script>

<template>
  <div>
    <el-drawer
      v-model="props.drawer"
      direction="ltr"
      size="300px"
      @close="handleClose"
    >
      <template #header>
        <div class="drawer-title-wrapper">
          <h2 class="drawer-title">系列</h2>
        </div>
      </template>
      <div class="drawer-content">
        <div class="menu-sectionone">
          <div class="menu-items">
            <div>高级珠宝</div>
            <div>珠宝</div>
            <div>穿搭</div>
            <div>美妆</div>
            <div>音响</div>
            <div>礼品定制</div>
          </div>
        </div>
        <div class="menu-sectiontwo">
          <el-row justify="space-between" align="middle" class="menu-row">
            <div class="menu-title">走进Surprise Ant</div>
            <el-image
              :src="plusIcon"
              fit="cover"
              style="width: 16px; height: 16px"
            />
          </el-row>
        </div>
        <div class="menu-sectionthree">
          <div class="menu-title">联系我们</div>
          <div class="menu-items">
            <div>客服</div>
            <div>门店信息</div>
          </div>
        </div>
      </div>
    </el-drawer>
  </div>
</template>
<style scoped>
.join-surprise {
  text-align: center;
  padding: 20px 0;
}

.join-surprise h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
}

.dotted-line {
  color: #666;
  letter-spacing: 2px;
}

.drawer-content {
  padding: 20px;
}

.menu-title {
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 0;
  color: #333;
}

.menu-items {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.menu-items div {
  color: #666;
  cursor: pointer;
  font-size: 16px;
}

.menu-items div:hover {
  color: #333;
}

.drawer-title-wrapper {
  display: inline-block;
}

.drawer-title {
  padding-bottom: 10px;
  border-bottom: 1px solid #000;
  margin: 0;
  display: inline-block;
}

:deep(.el-drawer__header) {
  margin-bottom: 0;
  padding: 15px;
  border-bottom: none;
}

:deep(.el-drawer__body) {
  padding: 0;
}

.menu-sectionone {
  margin-bottom: 40px;
}
.menu-sectiontwo {
  margin-bottom: 390px;
}

.menu-row {
  display: flex;
  align-items: center;
  padding: 10px 0;
}
</style>

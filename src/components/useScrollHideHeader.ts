// useScrollHideHeader.ts
import { ref, onMounted, onUnmounted, Ref, nextTick } from "vue";

// 防抖函数
function debounce(func: Function, wait: number) {
  let timeout: NodeJS.Timeout | null = null;
  return function (this: any, ...args: any[]) {
    const context = this;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}

// 节流函数
function throttle(func: Function, limit: number) {
  let inThrottle: boolean;
  return function (this: any, ...args: any[]) {
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

export function useScrollHideHeader(scrollContainer?: Ref<HTMLElement | null>) {
  const isHeaderVisible = ref(true);
  const showBackTop = ref(false);
  let lastScrollTop = 0;
  let scrollTimeout: NodeJS.Timeout | null = null;

  const handleScroll = throttle(() => {
    const scrollTop = scrollContainer?.value
      ? scrollContainer.value.scrollTop
      : window.pageYOffset || document.documentElement.scrollTop;

    // console.log("滚动位置:", scrollTop);

    // 控制导航栏显示/隐藏 - 优化逻辑
    const scrollDiff = scrollTop - lastScrollTop;
    const threshold = 10; // 滚动阈值
    const minScrollTop = 80; // 最小滚动距离才开始隐藏

    if (Math.abs(scrollDiff) > threshold) {
      if (scrollDiff > 0 && scrollTop > minScrollTop) {
        // 向下滚动且超过阈值 - 隐藏头部
        isHeaderVisible.value = false;
      } else if (scrollDiff < 0) {
        // 向上滚动 - 显示头部
        isHeaderVisible.value = true;
      }
    }

    // 控制回到顶部按钮显示
    showBackTop.value = scrollTop > 300;
    
    // 当滚动到顶部时确保头部显示
    if (scrollTop <= 0) {
      isHeaderVisible.value = true;
    }

    lastScrollTop = scrollTop;
  }, 16); // 约60fps

  const scrollToTop = () => {
    const target = scrollContainer?.value || window;
    if (scrollContainer?.value) {
      scrollContainer.value.scrollTo({ 
        top: 0, 
        behavior: "smooth" 
      });
    } else {
      window.scrollTo({ 
        top: 0, 
        behavior: "smooth" 
      });
    }
  };

  onMounted(async () => {
    // 使用 nextTick 确保 DOM 完全渲染后再添加事件监听器
    await nextTick();
    
    if (scrollContainer) {
      // 等待scrollContainer准备就绪
      const checkContainer = () => {
        if (scrollContainer.value) {
          scrollContainer.value.addEventListener("scroll", handleScroll, { 
            passive: true 
          });
          console.log("滚动监听器已添加到容器");
        } else {
          console.warn('滚动容器未准备好，将在下次检查时重试');
          setTimeout(checkContainer, 100);
        }
      };
      checkContainer();
    } else {
      window.addEventListener("scroll", handleScroll, { 
        passive: true 
      });
      console.log("滚动监听器已添加到window");
    }
  });

  onUnmounted(() => {
    if (scrollContainer?.value) {
      scrollContainer.value.removeEventListener("scroll", handleScroll);
      console.log("滚动监听器已从容器移除");
    } else {
      window.removeEventListener("scroll", handleScroll);
      console.log("滚动监听器已从window移除");
    }
    
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }
  });

  return {
    isHeaderVisible,
    showBackTop,
    scrollToTop,
  };
}

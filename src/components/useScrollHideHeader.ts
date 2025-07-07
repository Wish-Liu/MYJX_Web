// useScrollHideHeader.ts
import { ref, onMounted, onUnmounted, Ref } from "vue";

export function useScrollHideHeader(scrollContainer?: Ref<HTMLElement | null>) {
  const isHeaderVisible = ref(true);
  const showBackTop = ref(false);
  let lastScrollTop = 0;

  const handleScroll = () => {
    const scrollTop = scrollContainer?.value
      ? scrollContainer.value.scrollTop
      : window.pageYOffset || document.documentElement.scrollTop;

    // 控制导航栏显示/隐藏
    if (scrollTop - lastScrollTop > 10 && scrollTop > 100) {
      isHeaderVisible.value = false;
    } else if (lastScrollTop - scrollTop > 10) {
      isHeaderVisible.value = true;
    }

    // 控制回到顶部按钮显示
    showBackTop.value = scrollTop > 300;
    lastScrollTop = scrollTop;
  };

  const scrollToTop = () => {
    if (scrollContainer?.value) {
      scrollContainer.value.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  onMounted(() => {
    const target = scrollContainer?.value || window;
    target.addEventListener("scroll", handleScroll);
  });

  onUnmounted(() => {
    const target = scrollContainer?.value || window;
    target.removeEventListener("scroll", handleScroll);
  });

  return {
    isHeaderVisible,
    showBackTop,
    scrollToTop,
  };
}

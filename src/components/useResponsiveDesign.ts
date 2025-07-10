// useResponsiveDesign.ts - 响应式设计组合式函数
import { ref, onMounted, onUnmounted, computed } from "vue";

// 设备类型枚举
export enum DeviceType {
  DESKTOP = 'desktop',
  TABLET = 'tablet', 
  MOBILE = 'mobile',
  SMALL_MOBILE = 'small-mobile'
}

// 屏幕方向枚举
export enum ScreenOrientation {
  PORTRAIT = 'portrait',
  LANDSCAPE = 'landscape'
}

// 断点配置
export const BREAKPOINTS = {
  SMALL_MOBILE: 480,
  MOBILE: 768,
  TABLET: 1024,
  DESKTOP: 1440
} as const;

export function useResponsiveDesign() {
  // 响应式数据
  const windowWidth = ref(0);
  const windowHeight = ref(0);
  const isTouchDevice = ref(false);

  // 计算设备类型
  const deviceType = computed(() => {
    if (windowWidth.value <= BREAKPOINTS.SMALL_MOBILE) {
      return DeviceType.SMALL_MOBILE;
    } else if (windowWidth.value <= BREAKPOINTS.MOBILE) {
      return DeviceType.MOBILE;
    } else if (windowWidth.value <= BREAKPOINTS.TABLET) {
      return DeviceType.TABLET;
    } else {
      return DeviceType.DESKTOP;
    }
  });

  // 计算屏幕方向
  const screenOrientation = computed(() => {
    return windowWidth.value > windowHeight.value 
      ? ScreenOrientation.LANDSCAPE 
      : ScreenOrientation.PORTRAIT;
  });

  // 设备类型判断
  const isDesktop = computed(() => deviceType.value === DeviceType.DESKTOP);
  const isTablet = computed(() => deviceType.value === DeviceType.TABLET);
  const isMobile = computed(() => deviceType.value === DeviceType.MOBILE);
  const isSmallMobile = computed(() => deviceType.value === DeviceType.SMALL_MOBILE);
  
  // 是否为移动设备（包含手机和小屏手机）
  const isMobileDevice = computed(() => 
    deviceType.value === DeviceType.MOBILE || 
    deviceType.value === DeviceType.SMALL_MOBILE
  );

  // 屏幕方向判断
  const isPortrait = computed(() => screenOrientation.value === ScreenOrientation.PORTRAIT);
  const isLandscape = computed(() => screenOrientation.value === ScreenOrientation.LANDSCAPE);

  // 特殊情况：横屏且高度小于500px
  const isLowLandscape = computed(() => 
    isLandscape.value && windowHeight.value <= 500
  );

  // 获取响应式样式类名
  const getResponsiveClasses = () => {
    const classes = [];
    
    // 设备类型类名
    classes.push(`device-${deviceType.value}`);
    
    // 屏幕方向类名
    classes.push(`orientation-${screenOrientation.value}`);
    
    // 触摸设备类名
    if (isTouchDevice.value) {
      classes.push('touch-device');
    }
    
    // 特殊情况类名
    if (isLowLandscape.value) {
      classes.push('low-landscape');
    }
    
    return classes;
  };

  // 获取响应式尺寸配置
  const getResponsiveSizes = () => {
    const config = {
      header: {
        height: '60px',
        padding: '0 20px'
      },
      logo: {
        width: '280px',
        height: '45px'
      },
      backTop: {
        size: '50px',
        fontSize: '24px',
        right: '30px',
        bottom: '60px'
      },
      menuIcon: {
        fontSize: '28px'
      },
      actionIcon: {
        fontSize: '20px',
        gap: '25px'
      }
    };

    // 根据设备类型调整配置
    switch (deviceType.value) {
      case DeviceType.MOBILE:
        config.header.height = '55px';
        config.header.padding = '0 10px';
        config.logo.width = '180px';
        config.logo.height = '32px';
        config.backTop.size = '45px';
        config.backTop.fontSize = '20px';
        config.backTop.right = '20px';
        config.backTop.bottom = '30px';
        config.menuIcon.fontSize = '24px';
        config.actionIcon.fontSize = '18px';
        config.actionIcon.gap = '15px';
        break;
        
      case DeviceType.SMALL_MOBILE:
        config.header.height = '50px';
        config.header.padding = '0 8px';
        config.logo.width = '150px';
        config.logo.height = '28px';
        config.backTop.size = '40px';
        config.backTop.fontSize = '18px';
        config.backTop.right = '15px';
        config.backTop.bottom = '25px';
        config.menuIcon.fontSize = '22px';
        config.actionIcon.fontSize = '16px';
        config.actionIcon.gap = '12px';
        break;
        
      case DeviceType.TABLET:
        config.header.padding = '0 15px';
        config.logo.width = '240px';
        config.logo.height = '40px';
        config.actionIcon.gap = '20px';
        break;
        
      case DeviceType.DESKTOP:
        if (windowWidth.value >= BREAKPOINTS.DESKTOP) {
          config.header.padding = '0 40px';
          config.logo.width = '320px';
          config.logo.height = '50px';
          config.actionIcon.fontSize = '22px';
          config.actionIcon.gap = '30px';
        }
        break;
    }

    // 横屏特殊处理
    if (isLowLandscape.value) {
      config.header.height = '45px';
      config.logo.width = '200px';
      config.logo.height = '30px';
      config.backTop.size = '40px';
      config.backTop.fontSize = '16px';
      config.backTop.right = '15px';
      config.backTop.bottom = '15px';
    }

    return config;
  };

  // 检测触摸设备
  const detectTouchDevice = () => {
    isTouchDevice.value = 'ontouchstart' in window || 
                         navigator.maxTouchPoints > 0 ||
                         (window as any).DocumentTouch && document instanceof (window as any).DocumentTouch;
  };

  // 更新窗口尺寸
  const updateWindowSize = () => {
    windowWidth.value = window.innerWidth;
    windowHeight.value = window.innerHeight;
  };

  // 防抖函数
  const debounce = (func: Function, wait: number) => {
    let timeout: NodeJS.Timeout;
    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  // 防抖的resize处理函数
  const debouncedResize = debounce(updateWindowSize, 100);

  // 生命周期钩子
  onMounted(() => {
    updateWindowSize();
    detectTouchDevice();
    window.addEventListener('resize', debouncedResize);
    window.addEventListener('orientationchange', () => {
      // 延迟更新，等待orientation change完成
      setTimeout(updateWindowSize, 100);
    });
  });

  onUnmounted(() => {
    window.removeEventListener('resize', debouncedResize);
  });

  // 返回所有响应式数据和方法
  return {
    // 基础数据
    windowWidth,
    windowHeight,
    isTouchDevice,
    
    // 设备类型
    deviceType,
    isDesktop,
    isTablet,
    isMobile,
    isSmallMobile,
    isMobileDevice,
    
    // 屏幕方向
    screenOrientation,
    isPortrait,
    isLandscape,
    isLowLandscape,
    
    // 工具方法
    getResponsiveClasses,
    getResponsiveSizes,
    
    // 常量
    BREAKPOINTS,
    DeviceType,
    ScreenOrientation
  };
} 
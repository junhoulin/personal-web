<template>
  <n-layout-header bordered class="has">
    <div class="header-content">
      <div class="logo">
        <router-link to="/">
          <h2>林晉豪的部落格</h2>
        </router-link>
      </div>
      <n-menu
        v-if="!isMobile"
        mode="horizontal"
        :options="menuOptions"
        @update:value="handleMenuClick"
      />
      <div class="user-section">
        <n-space>
          <n-button type="primary" ghost> 中文 </n-button>
          <n-button type="primary" @click="toggle"> 主題 </n-button>
        </n-space>
      </div>
    </div>
  </n-layout-header>
</template>

<script setup>
import { h, ref, computed } from "vue";
import { useRouter } from "vue-router";
import { NIcon } from "naive-ui";
import {
  HomeOutline,
  PersonOutline,
  CallOutline,
  MenuOutline,
} from "@vicons/ionicons5";
import { useWindowSize } from "@vueuse/core";

const router = useRouter();
const { width } = useWindowSize();
const isMobileMenuOpen = ref(false);

const emit = defineEmits(["toggleTheme"]);
const toggle = () => {
  // 當按鈕被點擊時，觸發父組件的 toggle-theme 事件
  emit("toggleTheme");
};

// 建立一個函數來包裝 NIcon
const renderIcon = (icon) => () => h(NIcon, null, { default: () => h(icon) });

const menuOptions = [
  {
    label: "首頁",
    key: "home",
    path: "/",
    icon: renderIcon(HomeOutline),
  },
  {
    label: "關於",
    key: "introdution",
    path: "/introdution",
    icon: renderIcon(PersonOutline),
  },
  {
    label: "聯絡",
    key: "contact",
    path: "/contact",
    icon: renderIcon(CallOutline),
  },
];

const handleMenuClick = (key) => {
  const menuItem = menuOptions.find((item) => item.key === key);
  if (menuItem) {
    router.push(menuItem.path);
  }
};

// 使用 computed 替代原本的 checkMobile 函數
const isMobile = computed(() => {
  const mobileWidth = width.value <= 768;
  // 如果切換到桌面版，自動關閉手機選單
  if (!mobileWidth) {
    isMobileMenuOpen.value = false;
  }
  return mobileWidth;
});
</script>

<style lang="scss" scoped>
.header-content {
  margin: 0 auto;
  padding: 0 20px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--n-color);
}

.logo {
  display: flex;
  align-items: center;
  h2 {
    font-size: 18px;
    font-weight: 500;
    color: var(--n-text-color);
    margin: 0;
  }
  &:hover {
    h2 {
      color: var(--n-primary-color);
    }
  }
}

.user-section {
  display: flex;
  align-items: center;
}

:deep(.n-menu) {
  flex: 1;
  justify-content: center;
  background-color: var(--n-color);
}

:deep(.n-menu-item) {
  display: flex;
  align-items: center;
  padding: 0 16px;
  height: 64px;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--n-item-color-hover);
  }
}

:deep(.n-icon) {
  font-size: 16px;
  margin-right: 2px;
}

:deep(.n-button.n-button--quaternary) {
  &:hover {
    background-color: var(--n-item-color-hover);
  }
}

:deep(.n-layout-header) {
  background-color: var(--n-color);
  border-bottom: 1px solid var(--n-border-color);
}
</style>

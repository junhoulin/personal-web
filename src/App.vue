<script setup>
  import MouseEffect from './components/MouseEffect.vue';
  import Header from './components/header.vue';
  import Side from './components/side.vue';
  import { ref, onMounted } from 'vue';
  import { darkTheme, lightTheme } from 'naive-ui';
  import { useWindowSize } from '@vueuse/core';

  const isDark = ref(true); // 新增一個布林值表示目前是不是暗黑主題
  const theme = ref(darkTheme);

  const { width } = useWindowSize();

  // 控制側邊欄收合
  const collapsed = ref(false);

  // 添加處理收合的函數
  const handleCollapse = value => {
    collapsed.value = value;
  };

  onMounted(() => {
    if (width.value <= 720) {
      collapsed.value = true;
    }
  });

  const toggleTheme = () => {
    isDark.value = !isDark.value;
    theme.value = isDark.value ? darkTheme : lightTheme;
  };
</script>

<template>
  <n-config-provider :theme="theme">
    <MouseEffect />
    <n-loading-bar-provider>
      <n-message-provider>
        <n-notification-provider>
          <n-modal-provider>
            <n-dialog-provider>
              <n-layout class="app-container">
                <Header @toggle-theme="toggleTheme" />
                <n-layout has-sider class="main-layout">
                  <n-layout-sider
                    bordered
                    collapse-mode="width"
                    :collapsed="collapsed"
                    :collapsed-width="4"
                    :width="240"
                    show-trigger
                    @collapse="handleCollapse(true)"
                    @expand="handleCollapse(false)"
                    class="sider"
                  >
                    <Side />
                  </n-layout-sider>
                  <n-layout-content class="content">
                    <router-view v-slot="{ Component }">
                      <transition name="fade" mode="out-in">
                        <component :is="Component" />
                      </transition>
                    </router-view>
                  </n-layout-content>
                </n-layout>
              </n-layout>
            </n-dialog-provider>
          </n-modal-provider>
        </n-notification-provider>
      </n-message-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<style scoped>
  .app-container {
    height: 100vh;
    overflow: hidden;
  }

  :deep(.n-layout),
  :deep(.n-layout-header),
  :deep(.n-layout-content),
  :deep(.n-card),
  :deep(.n-menu),
  :deep(.n-button),
  :deep(.n-input),
  :deep(.n-select),
  :deep(.n-tag) {
    transition:
      background-color 0.3s ease,
      color 0.3s ease,
      border-color 0.3s ease;
  }

  .main-layout {
    height: calc(100vh - 64px);
    overflow: hidden;
  }

  .content {
    padding: 20px;
    background-color: var(--n-color);
    overflow-y: auto;
    height: 100%;
  }

  .sider {
    background-color: var(--n-color);
    height: 100%;
    position: relative;
  }

  :deep(.n-layout-header) {
    height: 64px;
    padding: 0;
  }

  :deep(.n-layout-content) {
    background-color: var(--n-color);
  }

  /* 滚动条样式 */
  .content::-webkit-scrollbar,
  .sider::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  .content::-webkit-scrollbar-track,
  .sider::-webkit-scrollbar-track {
    background: var(--n-color);
  }

  .content::-webkit-scrollbar-thumb,
  .sider::-webkit-scrollbar-thumb {
    background-color: var(--n-scrollbar-color);
    border-radius: 3px;
  }

  :deep(.n-layout-sider-scroll-content) {
    height: calc(100% - 48px);
    overflow-y: auto;
  }

  :deep(.n-layout-sider-scroll-content::-webkit-scrollbar) {
    width: 6px;
    height: 6px;
  }

  :deep(.n-layout-sider-scroll-content::-webkit-scrollbar-track) {
    background: var(--n-color);
  }

  :deep(.n-layout-sider-scroll-content::-webkit-scrollbar-thumb) {
    background-color: var(--n-scrollbar-color);
    border-radius: 3px;
  }

  :deep(.n-layout-sider-trigger) {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 48px;
    background-color: var(--n-color);
    border-top: 1px solid var(--n-border-color);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
    box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.1);
  }

  /* 滑入滑出動畫 */
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.3s ease;
  }

  .fade-enter-from {
    opacity: 0;
    transform: translateX(30px);
  }

  .fade-leave-to {
    opacity: 0;
    transform: translateX(-30px);
  }

  .fade-enter-to,
  .fade-leave-from {
    opacity: 1;
    transform: translateX(0);
  }
</style>

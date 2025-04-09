<template>
  <div class="project">
    <n-space vertical size="large">
      <!-- 页面标题 -->
      <n-card>
        <n-h1 class="page-title">我的作品集</n-h1>
        <n-text class="page-description">
          這裡展示了我開發的網站和應用程序，每個項目都凝聚了我的創意和技術。
        </n-text>
      </n-card>

      <!-- 项目展示区 -->
      <n-grid :cols="1" :x-gap="12" :y-gap="12" responsive="screen">
        <!-- 项目1 -->
        <n-grid-item>
          <n-card class="project-card" hoverable>
            <n-grid :cols="24" :x-gap="12">
              <n-grid-item :span="screenConfig.span">
                <div class="project-image">
                  <n-image
                    width="100%"
                    height="300"
                    object-fit="cover"
                    src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
                    preview-disabled
                  />
                </div>
              </n-grid-item>
              <n-grid-item :span="screenConfig.span">
                <div class="project-content">
                  <n-h2>個人部落格網站</n-h2>
                  <n-tag type="success" class="project-tag">Vue 3</n-tag>
                  <n-tag type="info" class="project-tag">TypeScript</n-tag>
                  <n-tag type="warning" class="project-tag">Naive UI</n-tag>
                  <n-divider />
                  <n-text>
                    這是一個使用 Vue 3 和 TypeScript 開發的個人部落格網站，採用
                    Naive UI 作為 UI 框架。
                    網站具有響應式設計，支持深色/淺色主題切換，並實現了文章分類、標籤等功能。
                  </n-text>
                  <n-divider />
                  <n-space>
                    <n-button
                      type="primary"
                      @click="openLink('https://github.com/yourusername/blog')"
                    >
                      <template #icon>
                        <n-icon><LogoGithub /></n-icon>
                      </template>
                      GitHub
                    </n-button>
                    <n-button
                      type="info"
                      @click="openLink('https://your-blog-site.com')"
                    >
                      <template #icon>
                        <n-icon><GlobeOutline /></n-icon>
                      </template>
                      訪問網站
                    </n-button>
                  </n-space>
                </div>
              </n-grid-item>
            </n-grid>
          </n-card>
        </n-grid-item>

        <!-- 项目2 -->
        <n-grid-item>
          <n-card class="project-card" hoverable>
            <n-grid :cols="24" :x-gap="12">
              <n-grid-item :span="screenConfig.span">
                <div class="project-image">
                  <n-image
                    width="100%"
                    height="300"
                    object-fit="cover"
                    src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
                    preview-disabled
                  />
                </div>
              </n-grid-item>
              <n-grid-item :span="screenConfig.span">
                <div class="project-content">
                  <n-h2>電商平台</n-h2>
                  <n-tag type="success" class="project-tag">Vue 3</n-tag>
                  <n-tag type="info" class="project-tag">Vuex</n-tag>
                  <n-tag type="warning" class="project-tag">Element Plus</n-tag>
                  <n-divider />
                  <n-text>
                    這是一個電商平台的前端項目，使用 Vue 3 和 Vuex
                    開發，實現了商品展示、購物車、訂單管理等功能。
                    項目採用模塊化設計，具有良好的可擴展性和維護性。
                  </n-text>
                  <n-divider />
                  <n-space>
                    <n-button
                      type="primary"
                      @click="
                        openLink('https://github.com/yourusername/ecommerce')
                      "
                    >
                      <template #icon>
                        <n-icon><LogoGithub /></n-icon>
                      </template>
                      GitHub
                    </n-button>
                    <n-button
                      type="info"
                      @click="openLink('https://your-ecommerce-site.com')"
                    >
                      <template #icon>
                        <n-icon><GlobeOutline /></n-icon>
                      </template>
                      訪問網站
                    </n-button>
                  </n-space>
                </div>
              </n-grid-item>
            </n-grid>
          </n-card>
        </n-grid-item>

        <!-- 项目3 -->
        <n-grid-item>
          <n-card class="project-card" hoverable>
            <n-grid :cols="24" :x-gap="12">
              <n-grid-item :span="screenConfig.span">
                <div class="project-image">
                  <n-image
                    width="100%"
                    height="300"
                    object-fit="cover"
                    src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
                    preview-disabled
                  />
                </div>
              </n-grid-item>
              <n-grid-item :span="screenConfig.span">
                <div class="project-content">
                  <n-h2>任務管理系統</n-h2>
                  <n-tag type="success" class="project-tag">Vue 3</n-tag>
                  <n-tag type="info" class="project-tag">Pinia</n-tag>
                  <n-tag type="warning" class="project-tag">Tailwind CSS</n-tag>
                  <n-divider />
                  <n-text>
                    這是一個任務管理系統，使用 Vue 3 和 Pinia 開發，採用
                    Tailwind CSS 進行樣式設計。
                    系統支持任務創建、編輯、刪除、標記完成等功能，並具有拖拽排序功能。
                  </n-text>
                  <n-divider />
                  <n-space>
                    <n-button
                      type="primary"
                      @click="
                        openLink('https://github.com/yourusername/task-manager')
                      "
                    >
                      <template #icon>
                        <n-icon><LogoGithub /></n-icon>
                      </template>
                      GitHub
                    </n-button>
                    <n-button
                      type="info"
                      @click="openLink('https://your-task-manager.com')"
                    >
                      <template #icon>
                        <n-icon><GlobeOutline /></n-icon>
                      </template>
                      訪問網站
                    </n-button>
                  </n-space>
                </div>
              </n-grid-item>
            </n-grid>
          </n-card>
        </n-grid-item>
      </n-grid>
      <n-back-top :right="70" />
    </n-space>
  </div>
</template>

<script setup>
import {
  NCard,
  NSpace,
  NGrid,
  NGridItem,
  NH1,
  NH2,
  NText,
  NDivider,
  NButton,
  NIcon,
  NImage,
  NTag,
} from "naive-ui";
import { LogoGithub, GlobeOutline } from "@vicons/ionicons5";
import { useWindowSize } from "@vueuse/core";
import { computed } from "vue";
const { width } = useWindowSize();
const screenConfig = computed(() => {
  // 平板、手機
  if (width.value <= 1024) {
    return {
      span: 24,
    };
  }
  // 桌面
  return {
    span: 12,
  };
});

const openLink = (url) => {
  window.open(url, "_blank");
};
</script>

<style scoped lang="scss">
@use "../assets/_variables.scss" as *;
.project {
  height: 100%;
  overflow: hidden;
}

:deep(.n-space) {
  height: 100%;
  overflow-y: auto;
}

.page-title {
  margin: 0;
  font-size: 28px;
  font-weight: 600;
  background: linear-gradient(45deg, #2080f0, #18a058);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.page-description {
  display: block;
  margin-top: 8px;
  font-size: 16px;
  color: var(--n-text-color-2);
}

.project-card {
  overflow: hidden;
}

.project-image {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
}

.project-content {
  padding: 16px;

  h2 {
    margin: 0 0 12px 0;
    font-size: 22px;
    font-weight: 600;
  }
}

.project-tag {
  margin-right: 8px;
  margin-bottom: 8px;
}

:deep(.n-card) {
  background-color: var(--n-color);
  transition: background-color 0.3s ease;
}

:deep(.n-button) {
  margin-top: 8px;
}

@media (max-width: 768px) {
  .project-card {
    .n-grid-item {
      &:first-child {
        margin-bottom: 16px;
      }
    }
  }
}
</style>

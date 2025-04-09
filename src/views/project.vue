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
        <n-grid-item v-for="(project, index) in projects" :key="index">
          <n-card class="project-card" hoverable>
            <n-grid :cols="24" :x-gap="12">
              <n-grid-item :span="screenConfig.span">
                <div class="project-image">
                  <n-image
                    width="100%"
                    height="300"
                    object-fit="cover"
                    :src="project.image"
                    preview-disabled
                  />
                </div>
              </n-grid-item>
              <n-grid-item :span="screenConfig.span">
                <div class="project-content">
                  <n-h2>{{ project.title }}</n-h2>
                  <n-text class="project-time"
                    >專案時間 : {{ project.time }}</n-text
                  >
                  <n-tag
                    v-for="(tag, tagIndex) in project.tags"
                    :key="tagIndex"
                    :type="tag.type"
                    class="project-tag"
                  >
                    {{ tag.name }}
                  </n-tag>
                  <n-divider />
                  <n-text>{{ project.description }}</n-text>
                  <n-divider />
                  <n-space>
                    <n-button
                      v-if="project.github"
                      type="primary"
                      @click="openLink(project.github)"
                    >
                      <template #icon>
                        <n-icon><LogoGithub /></n-icon>
                      </template>
                      GitHub
                    </n-button>
                    <n-button
                      v-if="project.website"
                      type="info"
                      @click="openLink(project.website)"
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
  if (width.value <= 1024) {
    return {
      span: 24,
    };
  }
  return {
    span: 12,
  };
});

// 專案資料
const projects = [
  {
    title: "個人部落格網站",
    image: "https://temp-picture.s3.ap-northeast-1.amazonaws.com/temp1.png",
    time: "2025.04",
    tags: [
      { type: "success", name: "Vue 3" },
      { type: "info", name: "SCSS" },
      { type: "warning", name: "JavaScript" },
      { type: "warning", name: "Naive UI" },
    ],
    description:
      "這是一個使用 Vue 3 開發的個人部落格網站，採用 Naive UI 作為 UI 框架。網站具有響應式設計，支持深色/淺色主題切換，並實現了文章分類、標籤等功能。",
    github: "https://github.com/junhoulin/personal-web",
    website: "https://junhoulin.github.io/personal-web/",
  },
  {
    title: "電商平台",
    image:
      "https://temp-picture.s3.ap-northeast-1.amazonaws.com/shopping-store-img/banner.png",
    time: "2025.02 - 2024.03",
    tags: [
      { type: "success", name: "NUXT 3" },
      { type: "info", name: "Node.js" },
      { type: "warning", name: "MongoDB" },
      { type: "error", name: "AWS" },
      { type: "default", name: "Ubuntu" },
      { type: "success", name: "Nginx" },
    ],
    description: `這是一個全端電商平台，採用前後端分離架構。前端使用 NUXT 3 開發，實現了商品展示、購物車、訂單管理、會員系統等功能；
    後端使用 Node.js + Express 建構 RESTful API，並使用 MongoDB 作為資料庫。
    整個系統部署在 AWS EC2 (Ubuntu) 上，使用 Nginx 作為反向代理，並配置 SSL 證書實現 HTTPS 安全連接。
    同時使用 Route 53 進行 DNS 管理，實現域名解析服務。`,
    github: "https://github.com/junhoulin",
    website: "https://yushinshop.com/",
  },
  {
    title: "排球預約平台",
    image: "https://temp-picture.s3.ap-northeast-1.amazonaws.com/temp2.png",
    time: "2024.11 - 2024.12",
    tags: [
      { type: "success", name: "Vue 3" },
      { type: "warning", name: "JavaScript" },
    ],
    description:
      "這是一個排球場地預約平台，使用 Vue 3 生態系統開發，包含 Vue Router 進行路由管理，" +
      "，系統功能包括：場地預約、地點查詢等。" +
      "，並實現響應式設計，讓使用者在各種設備上都能方便預約場地。",
    github: "https://github.com/junhoulin/VUE_finalProject",
    website: "https://junhoulin.github.io/VUE_finalProject/#/",
  },
  {
    title: "飯店預約系統",
    image: "https://temp-picture.s3.ap-northeast-1.amazonaws.com/temp2.png",
    time: "2025.01",
    tags: [
      { type: "success", name: "NUXT 3" },
      { type: "warning", name: "JavaScript" },
    ],
    description:
      "這是一個飯店預約系統，使用 NUXT 3 開發，包含 NUXT Router 進行路由管理，" +
      "，系統功能包括：場地預約、地點查詢等。" +
      "，並實現響應式設計，讓使用者在各種設備上都能方便預約場地。",
    github: "https://github.com/junhoulin/nuxt3-demo",
    website: "https://nuxt3-demo-d241.onrender.com/",
  },
];

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

.project-time {
  display: block;
  margin-bottom: 12px;
  color: var(--n-text-color-3);
  font-size: 14px;
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

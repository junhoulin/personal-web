<template>
  <div class="home">
    <n-space vertical size="large">
      <!-- 页面标题 -->
      <n-card>
        <n-h1 class="page-title">自我介紹</n-h1>
        <n-text class="page-description">
          我是一位熱愛網頁與應用程式開發的工程師，擅長將創意轉化為實際的產品，並在每個專案中投入細緻的技術與設計思維。
        </n-text>
      </n-card>

      <n-grid
        :x-gap="screenConfig.gap"
        :y-gap="8"
        :cols="screenConfig.cols"
        responsive="screen"
      >
        <!-- 个人信息卡片 -->
        <n-grid-item :span="screenConfig.profileSpan">
          <n-card class="profile-card">
            <template v-if="loading">
              <n-skeleton circle size="large" class="avatar" />
              <n-skeleton text style="width: 60%; margin: 16px auto" />
              <n-divider />
              <n-space vertical>
                <n-skeleton text :repeat="4" />
              </n-space>
            </template>
            <template v-else>
              <n-avatar
                round
                size="large"
                src="https://temp-picture.s3.ap-northeast-1.amazonaws.com/R0008959.JPG"
                class="avatar"
              />
              <n-h2 class="name">林晉豪</n-h2>
              <n-text class="title">IT / 網頁全端工程師</n-text>
              <n-divider />
              <n-space vertical>
                <n-text class="info-item">
                  <n-icon class="info-icon"><MailOutline /></n-icon>
                  <span>Email: example@email.com</span>
                </n-text>
                <n-text class="info-item">
                  <n-icon class="info-icon"><LocationOutline /></n-icon>
                  <span>台中市 西屯區</span>
                </n-text>
                <n-text class="info-item">
                  <n-icon class="info-icon"><CodeSlashOutline /></n-icon>
                  <span>技術棧: Vue.js, JS, Naive UI, Node.js</span>
                </n-text>
                <n-text class="info-item">
                  <span> AI , Python , SQL , Git , MongoDB , AWS , Docker</span>
                </n-text>
              </n-space>
            </template>
          </n-card>
        </n-grid-item>

        <!-- 右侧内容区域 -->
        <n-grid-item :span="screenConfig.contentSpan">
          <n-space vertical size="large">
            <!-- 关于我 -->
            <n-card title="關於我">
              <template v-if="loading">
                <n-skeleton text :repeat="6" />
              </template>
              <template v-else>
                <n-text>
                  嗨，我是林晉豪，一名熱愛程式開發的工程師，同時也是個活潑愛挑戰的人。從一開始接觸程式設計，我就被這種從
                  0 到 1 創造出產品的過程深深吸引，現在主要使用 Vue 3 + Nuxt 3
                  搭配 Node.js + Express
                  開發前後端，並且能夠獨立完成專案，包含系統架設、API
                  串接與部署管理。
                  除了寫程式，我的興趣是打排球，享受團隊合作與快速應變的節奏。個性上，我喜歡與人交流，對於人際關係的經營與問題解決充滿自信，無論是技術上的挑戰，還是與團隊協作，我總是願意主動尋找方法、突破困境。
                  對我來說，寫程式不只是工作，而是一種不斷學習與挑戰的過程。我喜歡探索新技術，也期待能與更多有熱情的夥伴一起打造有價值的產品！
                </n-text>
              </template>
            </n-card>

            <!-- 技能展示 -->
            <n-card title="技能專長">
              <template v-if="loading">
                <n-skeleton text :repeat="4" />
              </template>
              <template v-else>
                <n-space vertical>
                  <n-progress
                    type="line"
                    :percentage="90"
                    :color="color"
                    :indicator-placement="'inside'"
                  >
                    前端開發
                  </n-progress>
                  <n-progress
                    type="line"
                    :percentage="75"
                    :color="color"
                    :indicator-placement="'inside'"
                  >
                    後端開發
                  </n-progress>
                  <n-progress
                    type="line"
                    :percentage="50"
                    :color="color"
                    :indicator-placement="'inside'"
                  >
                    UI/UX 設計
                  </n-progress>
                  <n-progress
                    type="line"
                    :percentage="80"
                    :color="color"
                    :indicator-placement="'inside'"
                  >
                    AWS雲端建置
                  </n-progress>
                </n-space>
              </template>
            </n-card>
            <n-card title="技能專長">
              <template v-if="loading">
                <n-skeleton text :repeat="4" />
              </template>
              <template v-else>
                <n-space justify="space-around">
                  <n-space vertical align="center">
                    <n-progress type="circle" :percentage="90" size="small" />
                    <span>Vue.js</span>
                  </n-space>
                  <n-space vertical align="center">
                    <n-progress type="circle" :percentage="85" size="small" />
                    <span>JavaScript</span>
                  </n-space>
                  <n-space vertical align="center">
                    <n-progress type="circle" :percentage="80" size="small" />
                    <span>HTML/CSS</span>
                  </n-space>
                  <n-space vertical align="center">
                    <n-progress type="circle" :percentage="75" size="small" />
                    <span>Node.js</span>
                  </n-space>
                </n-space>
              </template>
            </n-card>
          </n-space>
        </n-grid-item>
      </n-grid>
    </n-space>
  </div>
</template>

<script setup>
  import { ref, onMounted, computed } from 'vue';
  import {
    MailOutline,
    LocationOutline,
    CodeSlashOutline
  } from '@vicons/ionicons5';
  import { useLoadingBar } from 'naive-ui';
  import { useWindowSize } from '@vueuse/core';

  const { width } = useWindowSize();

  const color = ref('#2080f0');
  const loadingBar = useLoadingBar();
  const loading = ref(true);

  // 響應式配置
  const screenConfig = computed(() => {
    // 手機
    if (width.value <= 640) {
      return {
        cols: 1,
        profileSpan: 1,
        contentSpan: 1,
        gap: 12
      };
    }
    // 平板
    if (width.value <= 1024) {
      return {
        cols: 12,
        profileSpan: 12,
        contentSpan: 12,
        gap: 16
      };
    }
    // 桌面
    return {
      cols: 24,
      profileSpan: 8,
      contentSpan: 16,
      gap: 20
    };
  });

  onMounted(() => {
    loadingBar.start();
    setTimeout(() => {
      loading.value = false;
      loadingBar.finish();
    }, 1500);
  });
</script>

<style scoped lang="scss">
  @use '../assets/_variables.scss' as *;

  // 基礎樣式
  .home {
    height: 100%;
    overflow-y: auto;
    padding: clamp(10px, 2vw, 20px);
  }

  // 頁面標題響應式
  .page-title {
    margin: 0;
    font-size: clamp(24px, 4vw, 28px);
    font-weight: 600;
    background: linear-gradient(45deg, #2080f0, #18a058);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .page-description {
    display: block;
    margin-top: 8px;
    font-size: clamp(14px, 2vw, 16px);
  }

  // 個人資料卡片響應式
  .profile-card {
    text-align: center;
    padding: clamp(15px, 3vw, 20px);

    .avatar {
      width: clamp(80px, 15vw, 120px);
      height: clamp(80px, 15vw, 120px);
      margin: 0 auto 16px;
    }

    .name {
      margin: 0;
      font-size: clamp(20px, 3vw, 24px);
      font-weight: 600;
    }

    .title {
      display: block;
      margin: 8px 0;
      font-size: clamp(14px, 2vw, 16px);
      color: var(--n-text-color-3);
    }

    .info-item {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      font-size: clamp(12px, 1.5vw, 14px);

      .info-icon {
        font-size: clamp(16px, 2vw, 18px);
      }
    }
  }
</style>

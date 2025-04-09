<script setup>
const photos = [
  {
    src: "https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg",
    title: "畢業典禮",
    date: "2023-06-15",
    description: "大學畢業的特別時刻，與同學們的合影。",
  },
  {
    src: "https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg",
    title: "旅行回憶",
    date: "2023-08-20",
    description: "第一次獨自旅行的美好回憶。",
  },
  {
    src: "https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg",
    title: "工作日常",
    date: "2023-10-05",
    description: "辦公室的一天，與同事們的歡樂時光。",
  },
  {
    src: "https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg",
    title: "家庭聚會",
    date: "2023-12-25",
    description: "聖誕節的家庭團聚，溫馨的時刻。",
  },
  {
    src: "https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel5.jpeg",
    title: "興趣愛好",
    date: "2024-01-15",
    description: "閒暇時光的興趣活動，放鬆心情。",
  },
  {
    src: "https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel6.jpeg",
    title: "學習時刻",
    date: "2024-02-20",
    description: "持續學習，不斷進步的過程。",
  },
];
</script>

<template>
  <div class="introduction">
    <n-space vertical size="large">
      <!-- 页面标题 -->
      <n-card>
        <n-h1 class="page-title">關於我</n-h1>
        <n-text class="page-description">
          這裡記錄了我的生活點滴和重要時刻，每一張照片都承載著特別的回憶。
        </n-text>
      </n-card>

      <!-- 照片集 -->
      <n-grid :cols="3" :x-gap="12" :y-gap="12" responsive="screen">
        <!-- 照片1 -->
        <n-grid-item v-for="(photo, index) in photos" :key="index">
          <n-card class="photo-card" hoverable>
            <n-image
              width="100%"
              height="300"
              object-fit="cover"
              :src="photo.src"
              :preview-src="photo.src"
            />
            <div class="photo-info">
              <n-h3>{{ photo.title }}</n-h3>
              <n-text class="photo-date">{{ photo.date }}</n-text>
              <n-text class="photo-description">{{ photo.description }}</n-text>
            </div>
          </n-card>
        </n-grid-item>
      </n-grid>
      <n-back-top :right="70" />
    </n-space>
  </div>
</template>

<style scoped lang="scss">
.introduction {
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

.photo-card {
  overflow: hidden;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: translateY(-5px);
  }
}

.photo-info {
  padding: 16px;

  h3 {
    margin: 0 0 8px 0;
    font-size: 18px;
    font-weight: 600;
  }
}

.photo-date {
  display: block;
  font-size: 14px;
  color: var(--n-text-color-2);
  margin-bottom: 8px;
}

.photo-description {
  display: block;
  font-size: 14px;
  color: var(--n-text-color-3);
}

@media (max-width: 768px) {
  :deep(.n-grid) {
    grid-template-columns: repeat(1, 1fr) !important;
  }
}
</style>

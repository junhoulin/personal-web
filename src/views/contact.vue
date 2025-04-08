<template>
  <div class="contact">
    <n-space vertical size="large">
      <!-- 页面标题 -->
      <n-card class="title-card">
        <n-h1 class="page-title">聯絡我</n-h1>
        <n-text class="page-description">
          如果您有任何問題或合作機會，歡迎隨時與我聯繫。
        </n-text>
      </n-card>

      <!-- 联系卡片 -->
      <n-grid :cols="2" :x-gap="12" :y-gap="12" responsive="screen">
        <!-- 联系方式 -->
        <n-grid-item>
          <n-card class="contact-card" hoverable>
            <div class="contact-info">
              <n-h2 class="contact-title">聯絡方式</n-h2>
              <n-space vertical size="large">
                <div
                  class="contact-item"
                  v-for="(item, index) in contactInfo"
                  :key="index"
                >
                  <n-icon :component="item.icon" class="contact-icon" />
                  <div class="contact-text">
                    <n-text class="contact-label">{{ item.label }}</n-text>
                    <n-text class="contact-value">{{ item.value }}</n-text>
                  </div>
                </div>
              </n-space>
            </div>
          </n-card>
        </n-grid-item>

        <!-- 社交媒体 -->
        <n-grid-item>
          <n-card class="social-card" hoverable>
            <div class="social-info">
              <n-h2 class="social-title">社交媒體</n-h2>
              <n-space vertical size="large">
                <div
                  class="social-item"
                  v-for="(item, index) in socialMedia"
                  :key="index"
                  @click="openLink(item.link)"
                >
                  <n-icon :component="item.icon" class="social-icon" />
                  <div class="social-text">
                    <n-text class="social-label">{{ item.label }}</n-text>
                    <n-text class="social-value">{{ item.value }}</n-text>
                  </div>
                </div>
              </n-space>
            </div>
          </n-card>
        </n-grid-item>
      </n-grid>
    </n-space>
  </div>
</template>

<script setup>
import {
  MailOutline,
  CallOutline,
  LocationOutline,
  LogoGithub,
  LogoLinkedin,
  LogoTwitter,
} from "@vicons/ionicons5";

const contactInfo = [
  {
    icon: MailOutline,
    label: "電子郵件",
    value: "your.email@example.com",
  },
  {
    icon: CallOutline,
    label: "電話",
    value: "+886 123 456 789",
  },
  {
    icon: LocationOutline,
    label: "地址",
    value: "台灣台北市",
  },
];

const socialMedia = [
  {
    icon: LogoGithub,
    label: "GitHub",
    value: "github.com/yourusername",
    link: "https://github.com/yourusername",
  },
  {
    icon: LogoLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/yourusername",
    link: "https://linkedin.com/in/yourusername",
  },
  {
    icon: LogoTwitter,
    label: "Twitter",
    value: "@yourusername",
    link: "https://twitter.com/yourusername",
  },
];

const openLink = (url) => {
  window.open(url, "_blank");
};
</script>

<style scoped lang="scss">
.contact {
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

.contact-card,
.social-card,
.map-card {
  overflow: hidden;
  transition: all 0.3s ease;
}

.contact-info,
.social-info {
  padding: 16px;
}

.contact-title,
.social-title,
.map-title {
  margin: 0 0 16px 0;
  font-size: 22px;
  font-weight: 600;
  position: relative;
  padding-bottom: 8px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    background: linear-gradient(45deg, #2080f0, #18a058);
    animation: width 1s ease forwards;
  }
}

@keyframes width {
  0% {
    width: 10px;
  }
  100% {
    width: 100px;
  }
}

.contact-item,
.social-item {
  display: flex;
  align-items: center;
  padding: 12px;
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: var(--n-item-color-hover);
    transform: translateX(10px);
  }
}

.social-item {
  &:hover {
    .social-icon {
      transform: scale(1.2);
    }
  }
}

.contact-icon,
.social-icon {
  font-size: 24px;
  margin-right: 16px;
  color: var(--n-primary-color);
  transition: all 0.3s ease;
}

.contact-text,
.social-text {
  flex: 1;
}

.contact-label,
.social-label {
  display: block;
  font-size: 14px;
  color: var(--n-text-color-2);
  margin-bottom: 4px;
}

.contact-value,
.social-value {
  display: block;
  font-size: 16px;
  font-weight: 500;
}

@media (max-width: 768px) {
  :deep(.n-grid) {
    grid-template-columns: repeat(1, 1fr) !important;
  }
}
</style>

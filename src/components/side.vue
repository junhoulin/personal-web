<template>
  <div class="side">
    <n-menu
      :collapsed="collapsed"
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="menuOptions"
      @update:value="handleMenuClick"
    />
  </div>
</template>

<script setup>
import { h, ref } from "vue";
import { useRouter } from "vue-router";
import { NMenu, NIcon } from "naive-ui";
import {
  HomeOutline,
  PersonOutline,
  SettingsOutline,
  FolderOutline,
  CalendarOutline,
} from "@vicons/ionicons5";

const router = useRouter();
const collapsed = ref(false);
const renderIcon = (icon) => () => h(NIcon, null, { default: () => h(icon) });
const menuOptions = [
  {
    label: "首頁",
    key: "home",
    icon: renderIcon(HomeOutline),
    path: "/",
  },
  {
    label: "專案、作品",
    key: "project",
    icon: renderIcon(CalendarOutline),
    path: "/project",
  },
  {
    label: "關於",
    key: "introdution",
    icon: renderIcon(PersonOutline),
    path: "/introdution",
  },
  {
    label: "技術文章",
    key: "categories",
    icon: renderIcon(FolderOutline),
    children: [
      {
        label: "技術文章",
        key: "tech",
        path: "/categories/tech",
      },
      {
        label: "生活隨筆",
        key: "life",
        path: "/categories/life",
      },
    ],
  },
  {
    label: "設置",
    key: "settings",
    icon: renderIcon(SettingsOutline),
    path: "/settings",
  },
];

const handleMenuClick = (key) => {
  const findPath = (items) => {
    for (const item of items) {
      if (item.key === key) {
        return item.path;
      }
      if (item.children) {
        const path = findPath(item.children);
        if (path) return path;
      }
    }
    return null;
  };

  const path = findPath(menuOptions);
  if (path) {
    router.push(path);
  }
};
</script>

<style scoped>
.side {
  height: 100%;
  width: 100%;
  background-color: var(--n-color);
  border-right: 1px solid var(--n-border-color);
  overflow-y: auto;
  flex: 1;
}

:deep(.n-menu) {
  height: auto;
  width: 100%;
}

:deep(.n-menu-item) {
  display: flex;
  align-items: center;
}

:deep(.n-menu-item-content) {
  width: 100%;
}

:deep(.n-menu-item-content__border) {
  display: none;
}
</style>

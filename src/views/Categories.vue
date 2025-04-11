<template>
  <div class="categories-container">
    <n-card class="categories-card">
      <template #header>
        <div class="categories-header">
          <n-h2>技術文章</n-h2>
          <n-space>
            <n-input-group>
              <n-input
                v-model:value="searchText"
                placeholder="搜索文章..."
                clearable
              >
                <template #prefix>
                  <n-icon><Search /></n-icon>
                </template>
              </n-input>
              <n-button type="primary">
                <template #icon>
                  <n-icon><Search /></n-icon>
                </template>
                搜索
              </n-button>
            </n-input-group>
          </n-space>
        </div>
      </template>

      <n-tabs
        type="line"
        animated
        v-model:value="activeTab"
        @update:value="handleTabChange"
      >
        <n-tab-pane name="all" tab="全部文章">
          <n-grid :cols="screenConfig.cols" :x-gap="20" :y-gap="20">
            <n-gi v-for="article in filteredArticles" :key="article.id">
              <n-card
                class="article-card"
                hoverable
                @click="goToArticle(article.id)"
              >
                <template #cover>
                  <img :src="article.cover" class="article-cover" />
                </template>
                <template #header>
                  <div class="article-title">{{ article.title }}</div>
                </template>
                <template #header-extra>
                  <n-tag :type="article.type">{{ article.category }}</n-tag>
                </template>
                <div class="article-meta">
                  <n-space>
                    <n-icon><Calendar /></n-icon>
                    <span>{{ article.date }}</span>
                    <n-icon><Eye /></n-icon>
                    <span>{{ article.views }}</span>
                    <n-icon><Heart /></n-icon>
                    <span>{{ article.likes }}</span>
                  </n-space>
                </div>
                <template #footer>
                  <div class="article-excerpt">{{ article.excerpt }}</div>
                </template>
              </n-card>
            </n-gi>
          </n-grid>
        </n-tab-pane>
        <n-tab-pane name="frontend" tab="前端開發">
          <n-grid :cols="screenConfig.cols" :x-gap="20" :y-gap="20">
            <n-gi v-for="article in filteredArticles" :key="article.id">
              <n-card
                class="article-card"
                hoverable
                @click="goToArticle(article.id)"
              >
                <template #cover>
                  <img :src="article.cover" class="article-cover" />
                </template>
                <template #header>
                  <div class="article-title">{{ article.title }}</div>
                </template>
                <template #header-extra>
                  <n-tag :type="article.type">{{ article.category }}</n-tag>
                </template>
                <div class="article-meta">
                  <n-space>
                    <n-icon><Calendar /></n-icon>
                    <span>{{ article.date }}</span>
                    <n-icon><Eye /></n-icon>
                    <span>{{ article.views }}</span>
                    <n-icon><Heart /></n-icon>
                    <span>{{ article.likes }}</span>
                  </n-space>
                </div>
                <template #footer>
                  <div class="article-excerpt">{{ article.excerpt }}</div>
                </template>
              </n-card>
            </n-gi>
          </n-grid>
        </n-tab-pane>
        <n-tab-pane name="backend" tab="後端開發">
          <n-grid :cols="screenConfig.cols" :x-gap="20" :y-gap="20">
            <n-gi v-for="article in filteredArticles" :key="article.id">
              <n-card
                class="article-card"
                hoverable
                @click="goToArticle(article.id)"
              >
                <template #cover>
                  <img :src="article.cover" class="article-cover" />
                </template>
                <template #header>
                  <div class="article-title">{{ article.title }}</div>
                </template>
                <template #header-extra>
                  <n-tag :type="article.type">{{ article.category }}</n-tag>
                </template>
                <div class="article-meta">
                  <n-space>
                    <n-icon><Calendar /></n-icon>
                    <span>{{ article.date }}</span>
                    <n-icon><Eye /></n-icon>
                    <span>{{ article.views }}</span>
                    <n-icon><Heart /></n-icon>
                    <span>{{ article.likes }}</span>
                  </n-space>
                </div>
                <template #footer>
                  <div class="article-excerpt">{{ article.excerpt }}</div>
                </template>
              </n-card>
            </n-gi>
          </n-grid>
        </n-tab-pane>
        <n-tab-pane name="life" tab="生活隨筆">
          <n-grid :cols="screenConfig.cols" :x-gap="20" :y-gap="20">
            <n-gi v-for="article in filteredArticles" :key="article.id">
              <n-card
                class="article-card"
                hoverable
                @click="goToArticle(article.id)"
              >
                <template #cover>
                  <img :src="article.cover" class="article-cover" />
                </template>
                <template #header>
                  <div class="article-title">{{ article.title }}</div>
                </template>
                <template #header-extra>
                  <n-tag :type="article.type">{{ article.category }}</n-tag>
                </template>
                <div class="article-meta">
                  <n-space>
                    <n-icon><Calendar /></n-icon>
                    <span>{{ article.date }}</span>
                    <n-icon><Eye /></n-icon>
                    <span>{{ article.views }}</span>
                    <n-icon><Heart /></n-icon>
                    <span>{{ article.likes }}</span>
                  </n-space>
                </div>
                <template #footer>
                  <div class="article-excerpt">{{ article.excerpt }}</div>
                </template>
              </n-card>
            </n-gi>
          </n-grid>
        </n-tab-pane>
      </n-tabs>

      <template #footer>
        <div class="pagination">
          <n-pagination
            v-model:page="currentPage"
            :page-count="totalPages"
            :page-size="pageSize"
            show-size-picker
            :page-sizes="[9, 18, 27, 36]"
            @update:page="handlePageChange"
            @update:page-size="handlePageSizeChange"
          />
        </div>
      </template>
    </n-card>
    <n-back-top :right="20" />
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import { useWindowSize } from '@vueuse/core';
  import { useRouter } from 'vue-router';
  import { Search, Calendar, Eye, Heart } from '@vicons/ionicons5';
  import { createDiscreteApi } from 'naive-ui';

  // 配置 Naive UI 使用被动事件监听器
  const { message } = createDiscreteApi(['message'], {
    configProviderProps: {
      scrollbar: {
        passive: true
      }
    }
  });

  const { width } = useWindowSize();
  const router = useRouter();
  const searchText = ref('');
  const currentPage = ref(1);
  const pageSize = ref(9);
  const totalPages = ref(5);
  const activeTab = ref('all'); // 当前激活的标签页
  const currentCategory = ref('全部文章'); // 当前选中的分类

  // 模拟文章数据
  const articles = ref([
    {
      id: 1,
      title: 'Vue 3 组合式 API 实战指南',
      cover: 'https://picsum.photos/400/200?random=1',
      category: '前端開發',
      type: 'success',
      date: '2024-03-15',
      views: 1234,
      likes: 56,
      excerpt: '深入探讨 Vue 3 组合式 API 的使用方法和最佳实践...'
    },
    {
      id: 2,
      title: 'Node.js 性能优化技巧',
      cover: 'https://picsum.photos/400/200?random=2',
      category: '後端開發',
      type: 'warning',
      date: '2024-03-14',
      views: 2345,
      likes: 78,
      excerpt: '分享 Node.js 应用性能优化的实用技巧和工具...'
    },
    {
      id: 3,
      title: '我的编程学习之路',
      cover: 'https://picsum.photos/400/200?random=3',
      category: '生活隨筆',
      type: 'info',
      date: '2024-03-13',
      views: 3456,
      likes: 89,
      excerpt: '记录我从零开始学习编程的历程和心得体会...'
    },
    {
      id: 4,
      title: 'Vue 3 组合式 API 实战指南',
      cover: 'https://picsum.photos/400/200?random=1',
      category: '前端開發',
      type: 'success',
      date: '2024-03-15',
      views: 1234,
      likes: 56,
      excerpt: '深入探讨 Vue 3 组合式 API 的使用方法和最佳实践...'
    },
    {
      id: 5,
      title: 'Node.js 性能优化技巧',
      cover: 'https://picsum.photos/400/200?random=2',
      category: '後端開發',
      type: 'warning',
      date: '2024-03-14',
      views: 2345,
      likes: 78,
      excerpt: '分享 Node.js 应用性能优化的实用技巧和工具...'
    },
    {
      id: 6,
      title: '我的编程学习之路',
      cover: 'https://picsum.photos/400/200?random=3',
      category: '生活隨筆',
      type: 'info',
      date: '2024-03-13',
      views: 3456,
      likes: 89,
      excerpt: '记录我从零开始学习编程的历程和心得体会...'
    },
    {
      id: 7,
      title: 'Vue 3 组合式 API 实战指南',
      cover: 'https://picsum.photos/400/200?random=1',
      category: '前端開發',
      type: 'success',
      date: '2024-03-15',
      views: 1234,
      likes: 56,
      excerpt: '深入探讨 Vue 3 组合式 API 的使用方法和最佳实践...'
    }
  ]);

  // 处理标签页切换
  const handleTabChange = value => {
    activeTab.value = value;
    switch (value) {
      case 'all':
        currentCategory.value = '全部文章';
        break;
      case 'frontend':
        currentCategory.value = '前端開發';
        break;
      case 'backend':
        currentCategory.value = '後端開發';
        break;
      case 'life':
        currentCategory.value = '生活隨筆';
        break;
    }
  };

  // 根据分类和搜索文本过滤文章
  const filteredArticles = computed(() => {
    let filtered = articles.value;

    // 按分类过滤
    if (currentCategory.value !== '全部文章') {
      filtered = filtered.filter(
        article => article.category === currentCategory.value
      );
    }

    // 按搜索文本过滤
    if (searchText.value) {
      filtered = filtered.filter(
        article =>
          article.title
            .toLowerCase()
            .includes(searchText.value.toLowerCase()) ||
          article.excerpt.toLowerCase().includes(searchText.value.toLowerCase())
      );
    }

    return filtered;
  });

  // 跳转到文章详情
  const goToArticle = id => {
    router.push(`/tech/${id}`);
  };

  // 处理分页变化
  const handlePageChange = page => {
    currentPage.value = page;
    // 这里可以添加加载对应页数据的逻辑
  };

  // 处理每页显示数量变化
  const handlePageSizeChange = size => {
    pageSize.value = size;
    currentPage.value = 1;
    // 这里可以添加重新加载数据的逻辑
  };

  const screenConfig = computed(() => {
    if (width.value >= 1600) {
      return {
        cols: 4
      };
    } else if (width.value <= 900) {
      return {
        cols: 1
      };
    } else {
      return {
        cols: 3
      };
    }
  });
</script>

<style scoped lang="scss">
  .categories-container {
    padding: 20px;
    margin: 0 auto;
    -webkit-overflow-scrolling: touch; /* 启用平滑滚动 */
    scroll-behavior: smooth; /* 启用平滑滚动 */
  }

  .categories-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .article-card {
    height: 100%;
    transition: transform 0.3s;
    &:hover {
      transform: translateY(-3px);
    }
  }

  .article-cover {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .article-title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .article-meta {
    color: #666;
    font-size: 14px;
    margin: 10px 0;
  }

  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  /* 为滚动容器添加优化 */
  .n-card {
    touch-action: pan-y; /* 优化触摸滚动 */
  }
</style>

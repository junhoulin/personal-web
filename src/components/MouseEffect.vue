<template>
  <div
    class="mouse-effect"
    :class="{ 'light-theme': !isDark }"
    :style="mouseStyle"
  ></div>
</template>

<script setup>
  import { ref, onMounted, onUnmounted, computed } from 'vue';
  import { useThemeVars } from 'naive-ui'; // 引入 naive-ui 的主題變數

  const themeVars = useThemeVars();
  const isDark = computed(() => themeVars.value.baseColor === '#000');

  const mouseStyle = ref({
    transform: 'translate(0px, 0px)',
    opacity: 0
  });

  let timeout;

  const handleMouseMove = e => {
    // 清除之前的 timeout
    if (timeout) {
      clearTimeout(timeout);
    }

    // 更新光暈位置
    mouseStyle.value = {
      transform: `translate(${e.clientX - 75}px, ${e.clientY - 75}px)`,
      opacity: 1
    };

    // 設置淡出效果
    timeout = setTimeout(() => {
      mouseStyle.value.opacity = 0;
    }, 1000);
  };

  onMounted(() => {
    window.addEventListener('mousemove', handleMouseMove);
  });

  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove);
    if (timeout) {
      clearTimeout(timeout);
    }
  });
</script>

<style scoped>
  .mouse-effect {
    pointer-events: none;
    position: fixed;
    width: 160px;
    height: 160px;
    border-radius: 50%;
    z-index: 9999;
    transition: all 0.15s ease;
  }

  /* 暗色主題 */
  .mouse-effect {
    background: radial-gradient(
      circle,
      rgba(24, 160, 88, 0.4) 0%,
      rgba(24, 160, 88, 0.2) 40%,
      rgba(24, 160, 88, 0) 70%
    );
    mix-blend-mode: screen;
  }

  /* 亮色主題 */
  .mouse-effect.light-theme {
    background: radial-gradient(
      circle,
      rgba(24, 160, 88, 0.15) 0%,
      /* 降低透明度 */ rgba(24, 160, 88, 0.1) 40%,
      rgba(24, 160, 88, 0) 70%
    );
    mix-blend-mode: multiply; /* 改變混合模式 */
  }
</style>

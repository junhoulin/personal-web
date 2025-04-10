<template>
  <div class="timeline-container">
    <n-timeline horizontal>
      <n-timeline-item type="success">
        <div class="timeline-box">
          <div class="timeline-content">
            <p>林晉豪出生</p>
            <span style="font-size: 12px; color: #999">2018-04-03 20:46</span>
          </div>
        </div>
      </n-timeline-item>
      <n-timeline-item content="啊" />
      <n-timeline-item
        type="success"
        title="成功"
        content="哪里成功"
        time="2018-04-03 20:46"
      />
      <n-timeline-item
        type="error"
        content="哪里失败"
        time="2018-04-03 20:46"
      />
      <n-timeline-item
        type="warning"
        title="警告"
        content="哪里警告"
        time="2018-04-03 20:46"
      />
      <n-timeline-item
        type="info"
        title="信息"
        content="是的"
        time="2018-04-03 20:46"
      />
    </n-timeline>
  </div>
</template>

<script setup>
  // 這裡可以添加你的邏輯代碼
</script>

<style scoped></style>

<script setup lang="ts">
  const year = new Date().getFullYear()
</script>

<template>
  <div class="main-footer">
    <!-- rel using to prevent phishing tabnabbing -->
    <a href="https://github.com/Idricealy" target="_blank" rel="noopener noreferrer">
      <font-awesome-icon icon="fa-brands fa-github" class="footer-logo" size="2xl" />
    </a>
    <a href="https://www.linkedin.com/in/idricealymourtadhoi/" target="_blank" rel="noopener noreferrer">
      <font-awesome-icon icon="fa-brands fa-linkedin" class="footer-logo" size="2xl" />
    </a>
  </div>
</template>

<style scoped>

  .main-footer {
    background-color: rgb(53, 55, 59);
    display: flex;
    gap: 20px;
    justify-content: center;
    padding: 16px;
  }

  .footer-logo {
    color : var(--main-font-secondary);
  }

  .footer-logo:hover {
    color: rgba(255,255,255,.9);
  }

</style>
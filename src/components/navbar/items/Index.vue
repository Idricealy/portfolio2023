<script setup lang="ts">

</script>

<template>
  <div class="main-navbar-items">
    <ul>
      <nav class="nav-main">
        <li><span class="navbar-item">{{ $t("home.navbar.projects")}}</span></li>
        <li><span class="navbar-item">{{ $t("home.navbar.techno")}}</span></li>
        <li><span class="navbar-item">{{ $t("home.navbar.about")}}</span></li>
      </nav>
    </ul>
  </div>
</template>

<style scoped>
  .nav-main {
    display: grid;
    grid-auto-flow: column;
    gap: 32px;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    position: relative;
  }

  .navbar-item {
    display: block;
    line-height: 60px!important;
    color: rgba(255,255,255,.75);
    border-bottom: 2px solid transparent;
    text-decoration: none;
    cursor: pointer;
  }

  .navbar-item:hover {
    border-bottom: 2px solid rgba(255,255,255,.4);
    color: rgba(255,255,255,.9);
  }

  @media screen and (max-width: 500px) {
    .nav-main {
      flex-direction: column;
      grid-auto-flow: row;
      gap: 8px;
    }
    .navbar-item {
      padding-left: 8px;
    }
  }
</style>
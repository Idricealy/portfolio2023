<script setup lang="ts">
  import ItemsNavBar from "./items/Index.vue"
  import {ref} from "vue";

  const props = defineProps(['isSmallWindow', 'pathRoute'])
  const versionApp = import.meta.env.VITE_VERSION
  const appName = import.meta.env.VITE_APP_NAME
  const displayItems = ref(false);
  const isOnRootPath =  ref(props.pathRoute !== '/')

</script>

<template>
  <div class="main-navbar">
    <div class="main-navbar-left" v-if=isOnRootPath>
      <img class="main-image-kodee" src="@/assets/img/kodee.png" alt="Kodee">
      <div class="main-title">
        <div class="title">
          {{ appName }}
        </div>
        <div class="title-version">
          v{{ versionApp }}
        </div>
      </div>
    </div>

    <div class="main-navbar-right" >
      <ItemsNavBar v-if="!props.isSmallWindow"/>
      <div v-else class="nav-main-toogle" @click="displayItems = !displayItems">
        <font-awesome-icon v-if="!displayItems" icon="fa-solid fa-bars" />
        <font-awesome-icon v-else icon="fa-solid fa-xmark" />
      </div>
    </div>
  </div>
  <hr class="line-navbar" v-if="isOnRootPath" />
  <div class="main-navbar-items" v-show="displayItems && props.isSmallWindow">
    <ItemsNavBar />
  </div>
</template>

<style scoped>
  .main-navbar {
    display: flex;
    padding-left: 16px;
    padding-right: 16px;
    height: 64px;
    align-items:center;
  }

  .line-navbar {
    border: solid 0.5px rgba(255,255,255,.3);
  }

  .main-navbar-left {
    margin-right: auto;
  }

  .main-navbar-right {
    margin-left: auto;
  }

  /* left */
  .main-navbar-left {
    display: flex;
  }
  .main-image-kodee {
    width: 64px;
    height: 64px;
  }
  .main-title {
    vertical-align: center;
    display: flex;
    align-items:center;
    justify-content:center;
  }
  .title {
    font-size: 1.6em;
  }
  .title-version {
    font-size: 0.9em;
    line-height: 29px;
    padding-left: 2px;
    color: var(--main-font-secondary);
  }

  .nav-main-toogle {
    cursor: pointer;
  }

</style>
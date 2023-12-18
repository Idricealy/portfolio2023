<script setup lang="ts">
import {computed, onMounted, ref} from "vue";
import {useRoute} from 'vue-router'
import Navbar from "@/components/navbar/Index.vue";
import Footer from "@/components/footer/Index.vue";
import Maintenance from "@/views/Maintenance.vue";

const route=useRoute();
const path = computed(() =>route.path)
const isOnMaintenance = import.meta.env.VITE_MAINTENANCE != 1;
const isSmallWindow = ref(false)

onMounted(() => {
  listenerWidth();
  window.addEventListener("resize", listenerWidth);
})

function listenerWidth() {
  if(window.innerWidth <= 500) {
    isSmallWindow.value = true
  } else {
    isSmallWindow.value = false
  }
}
</script>

<template>
  <div class="root-div">
      <div v-if="isOnMaintenance" class="root-div-navbar">
        <Navbar :path-route="path" :is-small-window="isSmallWindow"/>
      </div>
      <div class="root-div-main-content">
        <RouterView v-if="isOnMaintenance"  />
        <Maintenance v-else />
      </div>
      <Footer class="root-div-footer" />
  </div>

</template>

<style scoped>
  .root-div {
    display: flex;
    min-height: 100svh;
    flex-direction: column;
  }

  .root-div-navbar {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 999;
  }
  .root-div-main-content {
    flex: 1;
    padding: 32px;
    overflow-y: auto;
  }

  .root-div-footer {
    margin-top: auto;
  }

  @media screen and (max-width: 400px) {
    .root-div-navbar {
     position: relative;
    }
    .root-div-main-content {
      padding: 8px;
    }
  }
</style>

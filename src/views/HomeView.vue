<script setup lang="ts">
const appName = import.meta.env.VITE_APP_NAME

</script>

<template>
  <div class="main-home">
    <div class="main-home-img">
      <img class="kodee-img" src="@/assets/img/kodee.png">
    </div>
    <div class="main-home-texts">
      <p class="main-home-app-name">{{ appName }}</p>
      <p class="main-home-solution">{{ $t("home.solution") }}</p>
      <button class="main-home-btn-show">{{ $t("home.btn-show") }}</button>
    </div>
  </div>
</template>

<style>
  .main-home {
    display: flex;
  }

  .main-home-img {
    width: auto;
    height: 100%;
  }

  .kodee-img {
    width: 700px;
    height: auto;
  }

  .main-home-texts {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 10%;
    padding-bottom: 10%;
  }

  .main-home-app-name {
    font-size: 5em;
    margin-bottom: 2.5%
  }

  .main-home-solution {
    font-size: 2.8em;
    margin-bottom: 5%
  }

  .main-home-btn-show {
    background-color: var(--main-kotlin-color);
    padding: 12px 32px;
    border-radius: 56px;
    font-size: 1.2em;
    font-weight: lighter;
  }
  .main-home-btn-show:hover {
    transition: 0.2s;
    background-color: #5637ac;
  }

  @media screen and (max-width: 630px) {
    .main-home {
      flex-direction: column;
    }

    .main-home-texts {
      align-items: center;
      justify-content: center;
      padding: 0;
    }

    .main-home-app-name {
      font-size: 3em;
    }

    .main-home-solution {
      font-size: 2em;
      margin-bottom: 10%
    }
  }

  @media screen and (max-width: 521px) {
    .main-home-btn-show {
      font-size: 1em;
    }
    .main-home-app-name {
      font-size: 2.5em;
    }

    .main-home-solution {
      font-size: 1.5em;
    }
  }

  @media screen and (max-width: 400px) {
    .main-home-app-name {
      font-size: 2em;
    }

    .main-home-solution {
      font-size: 1.2em;
    }
  }
</style>

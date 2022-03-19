<template>
<div class="navbar">
  <div class="brand">
    <img src="../assets/logo-transparent.svg" class="mr-2.5" alt="logo-img">
    <p class="text-white font-bold">ERPEELONE</p>
  </div>
  <!-- Menu -->
  <div class="menu-list">
    <div class="menu-item">
      <router-link class="text-white" to="/about-us"><i class="fa-solid fa-message"></i> {{ $t('navbar.aboutUs') }}</router-link>
    </div>
    <div class="menu-item">
      <router-link class="text-white" to="/about-us"><i class="fa-solid fa-user-group"></i> {{ $t('navbar.classAdministrator') }}</router-link>
    </div>
    <div class="menu-item">
      <router-link class="text-white" to="/about-us"><i class="fa-solid fa-images"></i> {{ $t('navbar.gallery') }}</router-link>
    </div>
  </div>
  <!-- Menu End -->
  <div class="menu-list-end">
    <div class="menu-item">
      <router-link class="text-white" to="/about-us"><i class="fa-brands fa-github"></i></router-link>
    </div>
    <div class="menu-item">
      <router-link class="text-white" to="/about-us"><i class="fa-brands fa-youtube"></i></router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "navbar"
}
</script>

<style scoped>
.navbar {
  @apply fixed top-0 items-center flex w-screen justify-between p-4
}
.brand {
  @apply flex justify-start
}
.menu-list {
  @apply flex mr-auto ml-3
}
.menu-item {
  @apply p-1 mx-2
}
.menu-list-end {
  @apply flex ml-auto
}
</style>
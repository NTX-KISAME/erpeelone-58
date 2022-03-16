<template>
  <!-- Background -->
  <div class="vid-container">
    <video src="../../assets/MMASD.mp4" class="vid-bg" autoplay preload="metadata" loop></video>
    <div class="overlay"></div>
  </div>
  <!-- Main Content -->
  <div class="container">
    <div class="content-wrapper">
      <div class="home-content">
        <img src="../../assets/logo-transparent.svg" class="w-96 h-96" alt="class-logo">
        <h1 class="font-bold text-5xl mx-4">X</h1>
        <div class="text-wrapper">
          <h1 class="font-bold text-5xl">XI RPL 1 ERPEELONE</h1>
          <h4>Class 58 of SKENSA | We Proud of Our Creativity | Manusia Kompetatif</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index"
}
</script>

<style scoped>
.text-wrapper {
  @apply flex flex-col text-center text-white
}
.vid-container {
  @apply -z-10 fixed bg-neutral-900
}
.vid-bg {
  @apply w-screen object-cover blur-sm opacity-40
}
.content-wrapper {
  @apply flex h-screen w-screen justify-center
}
.home-content {
  @apply flex gap-4 justify-center w-screen h-screen items-center
}
.overlay {
  @apply bg-black w-screen h-screen fixed;
}
</style>
<template>
  <!-- About Us View -->
  <div class="aboutUsPage">
    <div class="vid-container">
      <video src="../../assets/about-us.mp4" class="vid-bg" autoplay loop></video>
    </div>
    <div class="content-wrap">
      <div class="content-left">
        <div class="title-box">
          <p>{{ $t('aboutView.aboutTitle') }}</p>
        </div>
        <div class="sec-title">
          <h1>{{ $t('aboutView.aboutSecTitle') }}</h1>
        </div>
        <div class="subtitle-box">
          <p>{{ $t('aboutView.aboutSubtitle') }}</p>
          <p class="font-bold mt-2">{{ $t('aboutView.aboutRegards') }}</p>
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
.vid-container {
  @apply absolute min-h-screen bg-neutral-900;
  z-index: -1;
}
.vid-bg {
  @apply h-screen w-screen object-cover opacity-80
}
.aboutUsPage {
  @apply flex h-screen items-stretch
}
.title-box {
  @apply text-white text-2xl
}
.content-wrap {
  @apply flex items-center ml-40
}
.content-left {
  @apply flex flex-col justify-start content-center;
  width: 35rem;
  line-height: 1.3rem !important;;
}
.subtitle-box {
  @apply text-white
}
.sec-title {
  @apply text-8xl text-white font-bold mb-7 mt-1
}
</style>
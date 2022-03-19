<template>
  <navbar/>
  <home/>
  <aboutUs/>
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/navbar";
import home from "@/components/home";
import aboutUs from "@/components/aboutus";

export default {
  name: 'HomeView',
  components: {
    navbar,
    home,
    aboutUs
  }
}
</script>
<style scoped>
</style>

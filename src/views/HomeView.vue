<template>
  <navbar/>
  <home/>
  <aboutUs/>
  <administration/>
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/navbar";
import home from "@/components/home";
import aboutUs from "@/components/aboutus";
import administration from "@/components/administration";

export default {
  name: 'HomeView',
  components: {
    navbar,
    home,
    aboutUs,
    administration
  }
}
</script>
<style scoped>
</style>

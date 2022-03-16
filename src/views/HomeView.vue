<template>
  <navbar/>
  <home/>
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/navbar";
import home from "@/components/home";

export default {
  name: 'HomeView',
  components: {
    navbar,
    home
  }
}
</script>
<style scoped>
</style>

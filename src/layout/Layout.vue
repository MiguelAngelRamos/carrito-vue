<template>
  <Navbar/>
  <div class="container mt-5">
    <slot/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
  export default {
    name: 'Layout',
    components: {
      Navbar
    }
  }
</script>

<style scoped>
</style>
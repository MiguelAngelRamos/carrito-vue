<template>
  <Layout>
    <Products/>
  </Layout>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Products from '@/components/Products.vue'
import Layout from '@/layout/Layout.vue'
export default {
  name: 'home',
  components: {
    Navbar,
    Products,
    Layout
  }
}
</script>

<style></style>
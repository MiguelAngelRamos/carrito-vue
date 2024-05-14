<template>
  <Layout>
    <Products/>
  </Layout>
</template>

<script>
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';
import Navbar from '@/components/Navbar.vue'
import Products from '@/components/Products.vue'
import Layout from '@/layout/Layout.vue'
export default {
  name: 'home',
  components: {
    Navbar,
    Products,
    Layout
  },
  setup() {
    const store = useStore();

    onMounted ( () => {
      store.dispatch('getProductosApi')
    });

    const getProductos = computed(() => store.state.productos);

    return {
      getProductos
    }
  }

}
</script>

<style></style>
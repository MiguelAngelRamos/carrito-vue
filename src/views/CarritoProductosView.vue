<template>
  <Layout>
    <h2>Detalle del carrito de compras</h2>

    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Image</th>
          <th>Item</th>
          <th>Cantidad</th>
          <th>Acción</th>
          <th>Total</th>
        </tr>
      </thead>

      <tbody>
        <Item v-for="item in carrito" :key="item.id" :itemProp="item"/>
      </tbody>

      <tfoot>
   
        <tr>
          <td colspan="5" v-if="Object.keys(carrito).length === 0">Carrito Vacio, Ningún producto seleccionado</td> 
          <FooterTotal/>
        </tr>
      </tfoot>
    </table>
  </Layout>
</template>

<script>
import Layout from '../layout/Layout.vue';
import Item from '@/components/Item.vue';
import FooterTotal from '@/components/FooterTotal.vue';
export default {
  name: 'CarritoView',
  components: {
    Layout,
    Item,
    FooterTotal
  },
  computed: {
    carrito() {
      return this.$store.state.carrito;
    }
  }
}
</script>

<style>

</style>
<template>
  <td colspan="4"> Total Producto</td>
  <td>{{ totalCantidad }}</td>
  <td>
    <button class="btn btn-warning btn-sm" @click="cancelar">Cancelar Orden</button>
  </td>
  <td class="font-weight-bold">
    <span>{{ totalPrecio.toLocaleString('es-CL', {
      style: 'currency',
      currency: 'CLP'
      }) }}
      </span>
  </td>
</template>



<script>
export default {
  name: 'FooterTotal',
  computed: {
    totalCantidad() {
      return this.$store.getters.totalCantidad;
    },
    totalPrecio() {
      return this.$store.getters.totalPrecio;
    }
  },
  methods:{
    cancelar() {
      this.$store.commit('cancelarOrden')
    }
  }

}
</script>

<style></style>
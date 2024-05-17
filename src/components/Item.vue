<template>
  <tr>
    <td>{{ itemProp.id}}</td>
    <td><img v-bind:src="itemProp.image" class="img-fluid" style="max-width: 100px;"></td>
    <td>{{  itemProp.nombre }}</td>
    <td>{{ itemProp.precio.toLocaleString('es-CL', {
                style: 'currency',
                currency: 'CLP'
            }) }} 
    </td>
    <td>{{ itemProp.cantidad }}</td>
    <td>
      <button class="btn btn-success btn-sm" @click="aumentar(itemProp.id)">+</button>
      <button class="btn btn-danger btn-sm" @click="disminuir(itemProp.id)">-</button>
    </td>
 
    <td>{{ (itemProp.precio * itemProp.cantidad).toLocaleString('es-CL',{
                style: 'currency',
                currency: 'CLP'
              }) }}</td>
  </tr>
</template>

<script>
export default {
  name: 'Item',
  props: {
    itemProp: Object
  },
  methods: {
    aumentar(id) {
      console.log(id);
      // llamado directo al mutation
      this.$store.commit('aumentar', id);
    },
    disminuir(id) {
      console.log(id);
      this.$store.commit('disminuir', id);
    }
  }
}
</script>

<style scoped>
  button {
    border-radius: 50% !important;
    margin-right: 2px;
    width:29px;
    font-weight: 800;
  }
</style>

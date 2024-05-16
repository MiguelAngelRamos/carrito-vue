<template>
  <tr>
    <td>{{ itemProp.id}}</td>
    <td><img v-bind:src="itemProp.image" class="img-fluid" style="max-width: 100px;"></td>
    <td>{{  itemProp.nombre }}</td>
    <td>{{ itemProp.cantidad }}</td>
    <td>
      <button class="btn btn-success btn-sm">+</button>
      <button class="btn btn-danger btn-sm">-</button>
    </td>
    <td>{{ itemProp.precio * itemProp.cantidad  }}</td>
  </tr>
</template>

<script>
export default {
  name: 'Item',
  props: {
    itemProp: Object
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

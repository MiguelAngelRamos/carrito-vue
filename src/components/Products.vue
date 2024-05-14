<template>
  <div class="container">

    <input v-model="searchQuery" class="mt-5 form-control" placeholder="Buscar Productos" />
    <div v-if="products.length === 0">Cargando productos...</div>
    <div class="row mt-3">
      <template v-for="product in filterProduct">
        <!-- los productos con stock superior a cero, son los productos que necesitamos renderizar  -->
        <div v-if="product && product.stock > 0" :key="product.id" class="col-sm-6 col-md-4 col-lg-3 mb-4">
          <div class="card h-100">
            <img v-bind:src="product.image" class="card-img-top" alt="producto">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title mb-2">{{ product.nombre }}</h5>
              <p class="card-text text-center fw-bold">{{ product.precio.toLocaleString('es-CL', {
                style: 'currency',
                currency: 'CLP'
              }) }}</p>
              <div class="mt-auto">
                <div class="input-group mb-3">
                  <!-- Estos botones son para aumentar la cantidad o disminuir la cantidad -->
                  <button class="btn btn-outline-danger" @click="changeQuantity(product, -1)">-</button>
                  <input class="form-control text-center" type="text" v-model="product.cantidad" readonly>
                  <button class="btn btn-outline-success" @click="changeQuantity(product, 1)">+</button>
                </div>

                <button class="btn btn-success w-100 mb-2" @click="addCart(product)">Añadir al carrito</button>
                <button class="btn btn-dark w-100" @click="openModal(product)">
                  Ver el detalle
                </button>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>

  </div>

  <AppModal v-bind:product="selectProduct" />
</template>

<script>
import productService from '@/services/api';
import AppModal from '@/components/AppModal.vue';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default {
  name: 'Products',
  components: {
    AppModal
  },
  data() {
    return {
      products: [],
      searchQuery: '',
      selectProduct: null
    };
  },
  computed: {
    filterProduct() {
      const result = this.products.filter(product => product.nombre && product.nombre.toLowerCase().includes(this.searchQuery.toLowerCase()));
      return result;
    }
  },
  methods: {
    loadProducts() {
      productService.all()
        .then(data => {
          this.products = data.map(product => ({ ...product, cantidad: 0 }));
        }).catch(error => console.log(error))
    },
    changeQuantity(product, change) {
      const nuevaCantidad = product.cantidad + change;
      if (nuevaCantidad >= 0 && nuevaCantidad <= product.stock) {
        product.cantidad = nuevaCantidad;
      }

    },
    addCart(product) {
      if (product.cantidad > 0) {
        let carrito = JSON.parse(localStorage.getItem('carrito')) || {};
        let productId = product.id.toString();
        let cantidadActualEnCarrito = carrito[productId] ? carrito[productId].cantidad : 0;
        let cantidadTotalDeseada = cantidadActualEnCarrito + product.cantidad;

        if (cantidadTotalDeseada <= product.stock) {
          if (carrito[productId]) {
            carrito[productId].cantidad = cantidadTotalDeseada;
          } else {
            // Si el producto no está en el carrito, agrégalo directamente.
            carrito[productId] = {
              ...product,
              cantidad: product.cantidad
            };
          }
          localStorage.setItem('carrito', JSON.stringify(carrito));
        } else {
          alert(`No se puede agregar esa cantidad. Stock disponible: ${product.stock - cantidadActualEnCarrito}`);
        }
      } else {
        alert('Seleccione una cantidad válida para agregar al carrito.');
      }
    }
    ,
    openModal(product) {
      this.selectProduct = product;
      this.$nextTick(() => {
        const modalElement = document.getElementById('staticBackdrop');
        const modalInstance = new bootstrap.Modal(modalElement);
        modalInstance.show();
      });
    }
  },
  // filters: {
  //   currency(value) {
  //     return '$' + value.toLocalString();
  //   }
  // },
  created() {
    this.loadProducts();
  },
}
</script>

<!-- 
   V && V  = V
   V && F = F
   F && V = F
   F && F = F
 
 -->
<style scoped>
img {
  padding: 0.5rem;
  width: 200px;
  height: 100%;
  object-fit: contain;
  margin: 0 auto;
}
</style>
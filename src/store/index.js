import { createStore } from 'vuex';
import productService from '@/services/api';

export default createStore({
  state: {
    productos: [],
    carrito: JSON.parse(localStorage.getItem('carrito')) || {}
  },
  mutations: {
    setProductos(state, productos) {
      state.productos = productos;
    },
    setCarrito(state, carrito) {
      state.carrito = {...carrito};
      localStorage.setItem('carrito', JSON.stringify(carrito));
    },
    aumentar(state, payload){
      if(state.carrito[payload]) {
        state.carrito[payload].cantidad = state.carrito[payload].cantidad + 1;
      }

     localStorage.setItem('carrito', JSON.stringify(state.carrito));
      // state.carrito[payload].cantidad++;
    },
    disminuir(state, payload) {

      if(state.carrito[payload]) {
        state.carrito[payload].cantidad = state.carrito[payload].cantidad - 1;
        if(state.carrito[payload].cantidad == 0) {
          delete state.carrito[payload]
        }
      }

      localStorage.setItem('carrito', JSON.stringify(state.carrito));
     
    },
    cancelarOrden(state) {
      state.carrito = {}
      localStorage.setItem('carrito', JSON.stringify(state.carrito));
    }
  },
  actions: {
    async getProductosApi({commit}) {
      try {
        const data = await productService.all();
        let products = data.map(product => ({ ...product, cantidad: 0 }));

        commit('setProductos', products);
      } catch (error) {
        console.log(error);
      }
    },
    agregarAlCarrito({commit}, carrito) {
    
      commit('setCarrito', carrito)
    }
  },
  getters: {
    // getters toman algo del state y pueden devolver un resultado de calculo sobre el state.
    //* carrito es un objeto {}
    totalCantidad(state) {
      // acc = es el acumulador
      return Object.values(state.carrito).reduce((acc, {cantidad}) => acc + cantidad, 0);
    },
    totalPrecio(state) {
      return Object.values(state.carrito).reduce((acc, {cantidad, precio}) => acc + (cantidad * precio), 0);
    }
  }
})
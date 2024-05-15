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
})
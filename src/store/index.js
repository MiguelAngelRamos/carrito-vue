import { createStore } from 'vuex';
import productService from '@/services/api';

export default createStore({
  state: {
    productos: [],
    carrito: {}
  },
  mutations: {
    setProductos(state, productos) {
      state.productos = productos;
    }
  },
  actions: {
    async getProductosApi({commit}) {
      try {
        const data = await productService.all();
        console.log(data);
        commit('setProductos', data);
      } catch (error) {
        console.log(error);
      }
    }
  },
})
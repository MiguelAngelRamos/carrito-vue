<template>
  <div class="container mt-5">
    <div class="row">
      <div class="offset-4 col-4">
        <h1 class="text-center">Inicio Sesión</h1>

        <form @submit.prevent="login" class="p-4 shadow">
          
          <div class="mb-3">
            <label for="email" class="form-label">Correo Eletronico: </label>
            <input type="email" class="form-control" id="email" v-model="email" required>
          </div>

          <div class="mb-3">
            <label for="password" class="form-label">Contraseña: </label>
            <input type="password" class="form-control" id="password" v-model="password" required>
          </div>

          <button type="submit" class="btn btn-primary w-100">Ingresar</button>
        </form>

      </div>
    </div>
  </div>
</template>

<script>

import { login as authenticate } from '@/services/authService';

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      const isAuthenticated = await authenticate(this.email, this.password);
      if(isAuthenticated) {
        console.log('Es un usuario valido');
        this.$router.push('/');
        localStorage.setItem('isAuthenticated', 'true');
      } else {
        alert('Credenciales incorrectas')
      }
    }
  }

}
</script>

<style></style>
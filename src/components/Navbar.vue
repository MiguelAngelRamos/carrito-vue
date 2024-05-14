<template>
  <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- .d-none .d-md-none .d-lg-block -->
      <router-link class="navbar-brand" to="/">CarritoVue</router-link>

      <router-link to="/carrito">
        <div class="icon-carrito d-md-block d-lg-none mx-3">
          <i class="fa-solid fa-cart-shopping"></i>
        </div>
      </router-link>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" to="/">Home</router-link>
            <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
          </li>
        </ul>

        <router-link to="/carrito">
          <div class="icon-carrito d-none d-md-none d-lg-block mx-3">
            <i class="fa-solid fa-cart-shopping"></i>
          </div>
        </router-link>

        <button class="btn btn-outline-light btn-sm" @click="logout">Cerrar Sesión</button>
        <!-- <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form> -->
        <!-- .d-md-block .d-lg-none -->

      </div>
    </div>
  </nav>
</template>


<script>
export default {
  name: 'Navbar',
  methods: {
    logout() {
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('carrito');
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>
.icon-carrito {
  color: white;
  font-size: 1.3rem;
}
</style>
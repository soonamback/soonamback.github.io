<template>
    <nav class="navbar navbar-expand-lg bg-vue navbar-dark">
      <div class="container">
        <router-link to="/shop" class="navbar-brand">The Shop</router-link>
        <ul class="navbar-nav me-auto">
          <li class="nav-item active">
            <a class="nav-link">Start Page</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">New Article</a>
          </li>
        </ul>
        <button class="btn bg-vue me-3">
          <i class="fas fa-shopping-card"></i> Cart (10 €)
        </button>
        <button class="btn bg-vue2">
          <i class="fas fa-sign-out-alt"></i> Logout
        </button>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "TheNavbar",
  };
  </script>
  
  <style scoped>
  </style>
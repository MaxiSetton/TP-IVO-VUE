<template>
  <div class="nav-container">
    <!-- Header with logo -->
    <div class="header">
      <img src="/promiedos_logo.png" alt="Logo Promiedos" class="logo" />

    </div>
    
    <!-- Tab navigation -->
    <div class="tab-nav">
      <router-link 
        to="/tablas"
        class="tab"
        :class="{ active: isActive('/tablas') }"
      >
        FIXTURE Y TABLAS
      </router-link>
      <router-link 
        to="/estadisticas"
        class="tab"
        :class="{ active: isActive('/estadisticas') }"
      >
        ESTADÍSTICAS
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const isActive = (path) => route.path === path
</script>

<style scoped>
.nav-container {
  background-color: #0E4230;
  padding: 0;
  margin: 0;
}

.header {
  text-align: center;
  padding: 15px 0 10px 0;
}

.logo {
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  letter-spacing: 1px;
}

.tab-nav {
  display: flex;
  background-color: #0E4230;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid #16A34A;
}

.tab {
  flex: 1;
  text-align: center;
  padding: 15px 10px;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  font-size: 14px;
  color: white;
  border-bottom: 3px solid transparent;
  transition: all 0.3s ease;
  text-transform: uppercase;
}

.tab:hover {
  background-color: #0E4230;
}

.tab.active {
  border-bottom: 3px solid #16A34A;
  background-color: transparent;
}
</style>
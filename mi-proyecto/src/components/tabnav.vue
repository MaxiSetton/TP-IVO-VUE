<template>
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
      :class="{ active: isActive('/estadisticas'), estadisticas: isActive('/estadisticas') }"
    >
      ESTADÍSTICAS
    </router-link>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()

const isActive = (path) => route.path === path
</script>

<style scoped>
.tab-nav {
  display: flex;
  border-bottom: 2px solid #16A34A;
  margin-bottom: 20px;
  padding: 10px 0;
}

.tab {
  flex: 1;
  text-align: center;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  font-size: 16px;
  border-bottom: 3px solid transparent;
}

.tab.active {
  background-color: #16A34A;
  color: white;
  font-size: 18px;
  border-radius: 4px;
}

.tab.estadisticas {
  background-color: #0A2B1D;
  color: white;
}
</style>

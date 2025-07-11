<script setup>
import TabNav from '../components/tabnav.vue'
</script>

<template>
  <div class="pagina-estadisticas">
    <tabnav />
    <div class="contenido-estadisticas">
      <h2>Acá van las estadísticas</h2>
      <!-- Podés agregar más contenido acá luego -->
    </div>
  </div>
</template>

<style scoped>
.pagina-estadisticas {
  background-color: #0E4230;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
}

.contenido-estadisticas {
  background-color: #0A2B1D;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
  color: white;
  text-align: center;
}

h2 {
  font-size: 24px;
  margin: 0;
}
</style>

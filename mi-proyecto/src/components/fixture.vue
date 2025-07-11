<template>
  <div class="fixture-container">
    <div class="fixture-header">
      <h2 class="header-title">Partidos futuros</h2>
    </div>
    
    <div class="lista-partidos">
      <div 
        v-for="partido in partidos" 
        :key="partido.id"
        class="partido-row"
      >
        <span class="equipo local">{{ partido.local }}</span>
        <span class="vs">vs</span>
        <span class="equipo visitante">{{ partido.visitante }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const partidos = ref([
  { id: 1, local: 'River', visitante: 'Boca' },
  { id: 2, local: 'Racing', visitante: 'Ind' },
  { id: 3, local: 'Slo', visitante: 'Hur' },
  { id: 4, local: 'Tall', visitante: 'Bel' },
  { id: 5, local: 'Tigre', visitante: 'Velez' },
  { id: 6, local: 'River', visitante: 'Boca' }
])
</script>

<style scoped>
.fixture-container {
  background-color: #0F4C2C;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  margin: 0 auto;
}

.fixture-header {
  background-color: #16A34A;
  padding: 12px 16px;
  text-align: center;
}

.header-title {
  color: white;
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  text-transform: uppercase;
}

.lista-partidos {
  padding: 0;
}

.partido-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background-color: #0A2B1D;
  border-bottom: 1px solid #16A34A;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.partido-row:hover {
  background-color: #0E4230;
}

.partido-row:last-child {
  border-bottom: none;
}

.equipo {
  color: white;
  font-weight: 500;
  font-size: 14px;
  flex: 1;
}

.local {
  text-align: left;
}

.visitante {
  text-align: right;
}

.vs {
  color: white;
  font-size: 14px;
  font-weight: bold;
  margin: 0 8px;
  opacity: 0.8;
}
</style>
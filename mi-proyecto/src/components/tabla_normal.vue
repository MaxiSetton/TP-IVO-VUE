<script setup>
import { ref, computed } from 'vue'

const { columnas, equipos, resaltarPosiciones = false } = defineProps({
  columnas: { type: Array, required: true },
  equipos:   { type: Array, required: true },
  resaltarPosiciones: { type: Boolean, default: false }
})

const getCellValue = (equipo, key, idx) => {
  return key === 'position'
    ? idx + 1
    : equipo[key]
}
const getClass = (pos) => {
  if (pos <= 3) return 'libertadores'
  if (pos <= 6) return 'sudamericana'
  if (pos === 10) return 'descenso'
  return ''
}

</script>

<template>
  <div class="container">
    <table class="tabla">
      <thead>
        <tr class="cabecera">
          <th v-for="col in columnas" :key="col.key">
            {{ col.label }}
          </th>
        </tr>
      </thead>
      
      <tbody>
        <tr 
          v-for="(equipo, index) in equipos" 
          :key="equipo.id"
          class="fila-equipo"
        >
          <td 
            v-for="col in columnas" 
            :key="col.key"
            :class="resaltarPosiciones && col.key === 'position' ? getClass(index + 1) : ''"
          >
            {{ getCellValue(equipo, col.key, index) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 10px;
  background: #0A2B1D;
}

.tabla {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #16A34A;
  border-radius: 5px;          
  overflow: hidden;            
}

.cabecera {
  background-color: #16A34A;
}

.cabecera th {
  color: white; /* Texto blanco */
  padding: 12px 8px;
  text-align: center;
  font-weight: bold;
  border: none;
}

.fila-equipo {
  background-color: #0A2B1E;
}

.fila-equipo td {
  color: white; /* Texto blanco */
  padding: 10px 8px;
  text-align: center;
  border: 1px solid #16A34A;
}

.libertadores {
  background-color: #4caf50;
  color: white;
  padding: 4px;
  border-radius: 4px;
}
.sudamericana {
  background-color: #ffc107;
  color: black;
  padding: 4px;
  border-radius: 4px;
}
.descenso {
  background-color: #f44336;
  color: white;
  padding: 4px;
  border-radius: 4px;
}
</style>
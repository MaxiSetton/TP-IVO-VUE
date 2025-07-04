<script setup>
import { ref, computed } from 'vue'

// en lugar de "const props = defineProps(...)"
const { columnas, equipos } = defineProps({
  columnas: { type: Array, required: true },
  equipos:   { type: Array, required: true }
})
const getCellValue = (equipo, key, idx) => {
  return key === 'position'
    ? idx + 1
    : equipo[key]
}

</script>

<template>
  <div class="container">
    <!-- TABLA -->
    <table class="tabla">
      <!-- CABECERA -->
      <thead>
        <tr class="cabecera">
          <th v-for="col in columnas" :key="col.key">
            {{ col.label }}
          </th>
        </tr>
      </thead>
      
      <!-- FILAS DE EQUIPOS -->
      <tbody>
        <tr 
          v-for="(equipo, index) in equipos" 
          :key="equipo.id"
          class="fila-equipo"
        >
          <td v-for="col in columnas" :key="col.key">
            {{ getCellValue(equipo, col.key, index) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
/* CONTENEDOR PRINCIPAL */
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 10px;
  background: #0A2B1D;
}

/* TABLA COMPLETA */
.tabla {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid #16A34A;
  border-radius: 5px;          
  overflow: hidden;            
}


/* CABECERA */
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

/* FILAS DE LOS EQUIPOS */
.fila-equipo {
  background-color: #0A2B1E;
}

.fila-equipo td {
  color: white; /* Texto blanco */
  padding: 10px 8px;
  text-align: center;
  border: 1px solid #16A34A;
}

/* cuando pasa el mouse por encima */
.fila-equipo:hover {
  background-color: #0F3D2A;
}
</style>
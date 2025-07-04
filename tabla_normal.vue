<script setup>
import { ref, computed } from 'vue'

// DATOS DE LOS EQUIPOS
const equipos = ref([
  { id: 1, equipo: 'Rosario Central', pts: 45, goles: 32, diferencia: '+8', g: 14, e: 3, p: 1 },
  { id: 2, equipo: 'Argentinos', pts: 42, goles: 28, diferencia: '+5', g: 13, e: 3, p: 2 },
  { id: 3, equipo: 'Boca Jrs.', pts: 40, goles: 35, diferencia: '+12', g: 12, e: 4, p: 2 },
  { id: 4, equipo: 'River Plate', pts: 38, goles: 41, diferencia: '+15', g: 11, e: 5, p: 2 },
  { id: 5, equipo: 'Independiente', pts: 35, goles: 25, diferencia: '+2', g: 10, e: 5, p: 3 },
  { id: 6, equipo: 'Racing', pts: 33, goles: 29, diferencia: '+4', g: 9, e: 6, p: 3 },
  { id: 7, equipo: 'Huracan', pts: 30, goles: 22, diferencia: '-1', g: 8, e: 6, p: 4 },
  { id: 8, equipo: 'Tigre', pts: 28, goles: 20, diferencia: '-3', g: 7, e: 7, p: 4 },
  { id: 9, equipo: 'San Lorenzo', pts: 25, goles: 18, diferencia: '-5', g: 6, e: 7, p: 5 },
  { id: 10, equipo: 'Tigre', pts: 22, goles: 15, diferencia: '-8', g: 5, e: 7, p: 6 }
])

// CONFIGURACIÓN DE LAS COLUMNAS
const columnas = ref([
  { key: 'position', label: '#' },
  { key: 'equipo', label: 'Equipo' },
  { key: 'pts', label: 'PTS' },
  { key: 'goles', label: 'Goles' },
  { key: 'diferencia', label: '+/-' },
  { key: 'g', label: 'G' },
  { key: 'e', label: 'E' },
  { key: 'p', label: 'P' }
])

// FUNCIÓN PARA OBTENER EL VALOR DE CADA CELDA
const getCellValue = (equipo, key, index) => {
  // Si la columna es 'position', devolvemos el número de fila + 1
  if (key === 'position') {
    return index + 1
  }
  // Si no, devolvemos el valor del equipo para esa propiedad
  return equipo[key]
}
</script>

<template>
  <div class="container">
    <!-- TÍTULO DE LA TABLA -->
    <h2 class="titulo">Tabla de Posiciones</h2>
    
    <!-- TABLA -->
    <table class="tabla">
      <!-- CABECERA DE LA TABLA (parte verde) -->
      <thead>
        <tr class="cabecera">
          <th v-for="col in columnas" :key="col.key">
            {{ col.label }}
          </th>
        </tr>
      </thead>
      
      <!-- CUERPO DE LA TABLA (filas de equipos) -->
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
  padding: 20px;
  background: #f9f9f9;
}

/* TÍTULO */
.titulo {
  text-align: center;
  color: #16A34A;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
}

/* TABLA COMPLETA */
.tabla {
  width: 100%;
  border-collapse: collapse; /* Une los bordes */
  border-radius: 8px;
  overflow: hidden; /* Para que el border-radius funcione */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* CABECERA (parte de arriba - VERDE) */
.cabecera {
  background-color: #16A34A; /* Verde que pediste */
}

.cabecera th {
  color: white; /* Texto blanco */
  padding: 12px 8px;
  text-align: center;
  font-weight: bold;
  border: none;
}

/* FILAS DE LOS EQUIPOS (parte de abajo - VERDE OSCURO) */
.fila-equipo {
  background-color: #0A2B1E; /* Verde oscuro que pediste */
}

.fila-equipo td {
  color: white; /* Texto blanco */
  padding: 10px 8px;
  text-align: center;
  border: 1px solid #16A34A; /* Borde verde claro */
}

/* EFECTO HOVER (cuando pasas el mouse por encima) */
.fila-equipo:hover {
  background-color: #0F3D2A; /* Un poco más claro al pasar el mouse */
}
</style>
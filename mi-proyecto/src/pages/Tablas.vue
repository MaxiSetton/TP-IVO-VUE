<script setup>
import { ref } from 'vue'
import TabNav from '../components/tabnav.vue'
import tabla_normal from '../components/tabla_normal.vue'

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

const equipos_tabla_anual = ref([
  { id: 1, equipo: 'Rosario Central', pts: 60, goles: 45, diferencia: '+15', g: 18, e: 6, p: 3 },
  { id: 2, equipo: 'Boca Jrs.', pts: 58, goles: 50, diferencia: '+18', g: 17, e: 7, p: 3 },
  { id: 3, equipo: 'River Plate', pts: 56, goles: 47, diferencia: '+16', g: 17, e: 5, p: 5 },
  { id: 4, equipo: 'Argentinos', pts: 54, goles: 40, diferencia: '+10', g: 16, e: 6, p: 5 },
  { id: 5, equipo: 'Racing', pts: 50, goles: 38, diferencia: '+5', g: 15, e: 5, p: 6 },
  { id: 6, equipo: 'Independiente', pts: 48, goles: 34, diferencia: '+4', g: 14, e: 6, p: 6 },
  { id: 7, equipo: 'Huracan', pts: 30, goles: 22, diferencia: '-5', g: 8, e: 6, p: 12 },
  { id: 8, equipo: 'San Lorenzo', pts: 28, goles: 21, diferencia: '-7', g: 7, e: 7, p: 12 },
  { id: 9, equipo: 'Tigre', pts: 24, goles: 18, diferencia: '-10', g: 6, e: 6, p: 14 },
  { id: 10, equipo: 'Platense', pts: 18, goles: 15, diferencia: '-15', g: 4, e: 6, p: 16 }
])

</script>

<template>
  <div class="container">
    <div class="tablas">
      <tabla_normal :columnas="columnas" :equipos="equipos" />
      <tabla_normal :columnas="columnas" :equipos="equipos_tabla_anual" :resaltar-posiciones="true" />
    </div>
    <div class="derecha">
      <div class="partidos-futuros">
        <>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container{
  height: 100%;
  width: 70%;
  display: flex;
  flex-direction: row;
  background-color: #0E4230;
  padding: 30px;
  gap: 40px;
}

.tablas{
  flex: 7;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.derecha{
  flex: 3;
}
</style>

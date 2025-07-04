<script setup>
import { ref } from 'vue'
import tabla_normal from './components/tabla_normal.vue'

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


</script>

<template>
  <tabla_normal :columnas="columnas" :equipos="equipos" />
</template>

<style scoped>

</style>

<template>
  <div class="publicidad-carousel">
    <img :src="publicidades[indiceActual]" alt="Publicidad" class="imagen-publicidad" />
    <div class="flechas">
      <button @click="anterior">&#9664;</button>
      <button @click="siguiente">&#9654;</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const publicidades = [
  '/publicidad1.jpg',
  '/publicidad2.jpg'
]

const indiceActual = ref(0)

const siguiente = () => {
  indiceActual.value = (indiceActual.value + 1) % publicidades.length
}

const anterior = () => {
  indiceActual.value = (indiceActual.value - 1 + publicidades.length) % publicidades.length
}
</script>

<style scoped>
.publicidad-carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
}

.imagen-publicidad {
  width: 180px;
  height: 100px;
  object-fit: cover; /* recorta y llena */
  border: 2px solid white;
  border-radius: 5px;
}

.flechas {
  margin-top: 0.5rem;
  display: flex;
  gap: 10px;
}

button {
  background-color: #0A2B1D;
  color: white;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
}

button:hover {
  background-color: #16A34A;
}
</style>


<template>
  <div class="fixture-container">
    <!-- Header -->
    <div class="fixture-header">
      <h2 class="header-title">Partidos futuros</h2>
    </div>
    
    <!-- Matches list -->
    <div class="matches-list">
      <div 
        v-for="match in matches" 
        :key="match.id"
        class="match-row"
        @click="selectMatch(match)"
      >
        <span class="team home-team">{{ match.homeTeam }}</span>
        <span class="vs">vs</span>
        <span class="team away-team">{{ match.awayTeam }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Sample matches data - you can replace this with real data
const matches = ref([
  { id: 1, homeTeam: 'River', awayTeam: 'Boca' },
  { id: 2, homeTeam: 'Racing', awayTeam: 'Ind' },
  { id: 3, homeTeam: 'Slo', awayTeam: 'Hur' },
  { id: 4, homeTeam: 'Tall', awayTeam: 'Bel' },
  { id: 5, homeTeam: 'Tigre', awayTeam: 'Velez' },
  { id: 6, homeTeam: 'River', awayTeam: 'Boca' }
])

// Function to handle match selection
const selectMatch = (match) => {
  console.log('Selected match:', match)
  // You can emit an event or perform any action here
}
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

.matches-list {
  padding: 0;
}

.match-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background-color: #0A2B1D;
  border-bottom: 1px solid #16A34A;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.match-row:hover {
  background-color: #0E4230;
}

.match-row:last-child {
  border-bottom: none;
}

.team {
  color: white;
  font-weight: 500;
  font-size: 14px;
  flex: 1;
}

.home-team {
  text-align: left;
}

.away-team {
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
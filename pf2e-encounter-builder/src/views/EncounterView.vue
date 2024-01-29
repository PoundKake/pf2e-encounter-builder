<script setup>
import EncounterBudget from '@/components/EncounterBudget.vue'
</script>

<template>
  <div class="about">
    <h1>This is a basic Encounter Builder Tool for Pathfinder Second Edition</h1>
  </div>
  <div>
    <EncounterBudget />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

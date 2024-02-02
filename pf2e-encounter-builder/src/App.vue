<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const tab = ref(null)
</script>

<template>
  <v-card>
    <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
      <RouterLink to="/"><v-tab :value="1">Home</v-tab></RouterLink>
      <RouterLink to="/about"><v-tab :value="2">About</v-tab></RouterLink>
      <RouterLink to="/encounter"><v-tab :value="3">Encounter</v-tab></RouterLink>
    </v-tabs>
  </v-card>
  <RouterView />
</template>

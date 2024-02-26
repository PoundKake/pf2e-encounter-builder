<script setup>
import { RouterView } from 'vue-router'
import { ref } from 'vue'

const tab = ref(null)
</script>

<template>
  <v-card>
    <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
      <v-tab to="/">Home</v-tab>
      <v-tab to="/about">About</v-tab>
      <v-tab to="/encounter">Encounter</v-tab>
    </v-tabs>
  </v-card>
  <RouterView />
</template>

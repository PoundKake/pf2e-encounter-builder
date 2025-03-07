<script setup>
import EncountersCollectionView from '@/components/EncountersCollectionView.vue'
</script>
<template>
  <div>
    <v-container class="d-flex justify-center">
      <v-row>
        <v-col cols="3">
          <v-container>
            <v-list-item subtitle="My Encounters"></v-list-item>
            <v-divider></v-divider>
            <v-list-item title="List Item 1"></v-list-item>
            <v-divider></v-divider>
            <v-btn> Add </v-btn>
            <v-btn> Remove </v-btn>
          </v-container>
        </v-col>
        <v-col class="d-flex justify-start">
          <v-sheet>
            <EncountersCollectionView />
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

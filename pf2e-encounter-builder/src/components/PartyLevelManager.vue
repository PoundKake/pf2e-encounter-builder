<script setup>
const elevationValue = 2
</script>
<template>
  <v-container>
    <v-sheet :elevation="elevationValue">
      <v-container>
        <v-row align="center" justify="center">
          <v-col>
            <h1>Current Party Level</h1>
          </v-col>
          <v-col cols="auto">
            <v-btn density="compact" icon="mdi-plus"></v-btn>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col>
            <p>1</p>
          </v-col>
          <v-col cols="auto">
            <v-btn density="compact" icon="mdi-plus"></v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </v-container>
</template>

<script setup>
import { usePartyLevelStore } from '@/stores/partylevel'

var partylevelstore = usePartyLevelStore()
const elevationValue = 2
</script>
<template>
  <v-container>
    <v-sheet :elevation="elevationValue">
      <v-container>
        <v-row align="center" justify="center">
          <v-col>
            <h1 class="h1-text-class">Current Party Level</h1>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col align="center">
            <v-container> {{ partylevelstore.partylevel }} </v-container>
          </v-col>
          <v-col>
            <v-row>
              <v-col align="center">
                <v-btn density="compact" icon="mdi-plus"></v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col align="center">
                <v-btn density="compact" icon="mdi-plus"></v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </v-container>
</template>

<style scoped>
h1 {
  font-size: 100%;
}
</style>

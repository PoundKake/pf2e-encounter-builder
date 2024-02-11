<script setup>
import { usePlayerCountStore } from '@/stores/playercount'

const playercountstore = usePlayerCountStore() 

const elevationValue = 2
</script>
<template>
  <v-container>
    <v-sheet :elevation="elevationValue">
      <v-container>
        <v-row align="center" justify="center">
          <v-col>
            <h1 class="h1-text-class">Current Player Count</h1>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col align="center">
            <v-text-field label=""> {{ playercountstore.defaultPlayerCount }} </v-text-field>
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
  font-size: 1.5em;
}
</style>

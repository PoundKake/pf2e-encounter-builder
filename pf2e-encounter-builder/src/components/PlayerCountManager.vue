<script setup>
import { usePlayerCountStore } from '@/stores/playercount'
import { ref, watch } from 'vue'

const playercountstore = usePlayerCountStore()

const playercount = ref(playercountstore.defaultPlayerCount)

// update party level store with the value of the party level
watch(playercount, (updatedPlayerCount) => {
  playercountstore.playerCount = updatedPlayerCount
  console.log(`Player Count Store Value: ${playercountstore.playerCount}`)
})
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
            <v-text-field label=""> {{ playercount }} </v-text-field>
          </v-col>
          <v-col>
            <v-row>
              <v-col align="center" @click="playercount++">
                <v-btn icon="add"></v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col align="center" @click="playercount--">
                <v-btn icon="remove"></v-btn>
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

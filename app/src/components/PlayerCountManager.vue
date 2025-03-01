<script setup>
import { usePlayerCountStore } from '@/stores/playercount'
import { ref, watch } from 'vue'
import { XPCalc } from './scripts/xpbudgetCalculations'

const xpcal = new XPCalc()
const playercountstore = usePlayerCountStore()
const playercount = ref(playercountstore.defaultPlayerCount)

// update party level store with the value of the party level
watch(playercount, (updatedPlayerCount) => {
  playercountstore.playerCount = updatedPlayerCount
  xpcal.adjustXPThreatForPlayerCount()
})

const elevationValue = 2
</script>
<template>
  <v-container>
    <v-sheet :elevation="elevationValue">
      <v-container>
        <v-row align="center" justify="center">
          <v-col>
            <v-sheet class="text-h5">Current Player Count</v-sheet>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col align="center">
            <v-text-field label=""> {{ playercount }} </v-text-field>
          </v-col>
          <v-col>
            <v-row>
              <v-col align="center">
                <v-btn @click="playercount++" icon="add"></v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col align="center">
                <v-btn @click="playercount--" icon="remove"></v-btn>
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

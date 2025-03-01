<script setup>
import { ref, watch } from 'vue'
import { usePartyLevelStore } from '@/stores/partylevel'
import { XPCalc } from './scripts/xpbudgetCalculations'

const xpcal = new XPCalc()
const partylevelstore = usePartyLevelStore()
const partylevel = ref(partylevelstore.defaultPartyLevel)

// update party level store with the value of the party level
watch(partylevel, (updatedPartyLevel) => {
  partylevelstore.currentpartylevel = updatedPartyLevel
  xpcal.adjustCreatureXPForPartyLevel()
})

const elevationValue = 2
</script>
<template>
  <v-container>
    <v-sheet :elevation="elevationValue">
      <v-container>
        <v-row align="center" justify="center">
          <v-col>
            <v-sheet class="text-h5">Current Party Level</v-sheet>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col align="center">
            <v-text-field label=""> {{ partylevel }} </v-text-field>
          </v-col>
          <v-col>
            <v-row>
              <v-col align="center">
                <v-btn @click="partylevel++" icon="add"></v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col align="center">
                <v-btn @click="partylevel--" icon="remove"></v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </v-container>
</template>

<style scoped></style>

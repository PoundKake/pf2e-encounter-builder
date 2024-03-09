<script setup>
import { ref } from 'vue'
import { usePartyLevelStore } from '@/stores/partylevel'
import { watch } from 'vue'

const partylevelstore = usePartyLevelStore()

const partylevel = ref(partylevelstore.defaultPartyLevel)

// update party level store with the value of the party level
watch(partylevel, (updatedPartyLevel) => {
  partylevelstore.partylevel = updatedPartyLevel
  console.log(`Party Level Store Value: ${partylevelstore.partylevel}`)
})
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

<style scoped>
h1 {
  font-size: 1.5em;
}
</style>

<script setup>
import EncounterBudget from '@/components/EncounterBudget.vue'
import CurrentEncounterBudget from '@/components/CurrentEncounterBudget.vue'
import PartyLevelManager from '@/components/PartyLevelManager.vue'
import PlayerCountManager from '@/components/PlayerCountManager.vue'

const elevationValue = 2
</script>

<template>
  <div class="flex-class">
    <h1>This is a basic Encounter Builder Tool for Pathfinder Second Edition</h1>
  </div>

  <v-container>
    <v-row no-gutters class="flex-class">
      <v-col></v-col>
      <v-col>
        <v-sheet class="flex-class">
          <PartyLevelManager />
        </v-sheet>
      </v-col>
      <v-col></v-col>
    </v-row>
    <v-row no-gutters class="flex-class">
      <v-col></v-col>
      <v-col>
        <v-sheet class="flex-class">
          <PlayerCountManager/>
        </v-sheet>
      </v-col>
      <v-col></v-col>
    </v-row>
    <v-row no-gutters class="flex-class">
      <v-col class="margin-class">
        <v-sheet :elevation="elevationValue">
          <CurrentEncounterBudget />
        </v-sheet>
      </v-col>
      <v-col class="margin-class">
        <v-sheet :elevation="elevationValue">
          <EncounterBudget />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.flex-class {
  display: flex;
  justify-content: center;
}

.margin-class {
  margin: 1%;
}
</style>

<script setup>
import EncounterBudget from '@/components/EncounterBudget.vue'
import CurrentEncounterBudget from '@/components/CurrentEncounterBudget.vue'
import PartyLevelManager from '@/components/PartyLevelManager.vue'
import PlayerCountManager from '@/components/PlayerCountManager.vue'
import CreatureXPandRoleView from '@/components/CreatureXPandRoleView.vue'

const elevationValue = 2
</script>

<template>
  <v-container>
    <!-- Spacer Row -->
    <v-row><v-col></v-col></v-row>
    <v-row>
      <v-col>
        <v-sheet class="d-flex justify-center text-h4">
          Pathfinder Second Edition Basic Encounter Builder Tool
        </v-sheet>
      </v-col>
    </v-row>
    <!-- Spacer Row -->
    <v-row><v-col></v-col></v-row>

    <!-- Party Level and Player Count Managers -->
    <v-row no-gutters class="d-flex">
      <!-- Party Level Manager -->
      <v-col>
        <v-sheet class="d-flex w-20">
          <PartyLevelManager />
        </v-sheet>
      </v-col>
      <!-- Player Count Manager -->
      <v-col>
        <v-sheet class="d-flex w-20">
          <PlayerCountManager />
        </v-sheet>
      </v-col>
    </v-row>

    <!-- Encounter Budgets -->
    <v-row no-gutters class="d-flex">
      <!-- Current Encounter Budget -->
      <v-col cols="5" class="justify-center mx-auto">
        <v-sheet :elevation="elevationValue">
          <div class="d-flex justify-center text-h5">Current Encounter Budget</div>
          <CurrentEncounterBudget />
        </v-sheet>
      </v-col>

      <!-- Default Encounter Budget -->
      <v-col cols="5" class="justify-center mx-auto">
        <v-sheet :elevation="elevationValue">
          <div class="d-flex justify-center text-h5">Encounter Budget Adjustments</div>
          <EncounterBudget />
        </v-sheet>
      </v-col>
    </v-row>

    <!-- Spacer Row -->
    <v-row><v-col></v-col></v-row>

    <!-- Creature XP and Role -->
    <v-row no-gutters class="d-flex mx-auto">
      <v-col></v-col>
      <v-col cols="8">
        <v-sheet :elevation="elevationValue">
          <div class="d-flex justify-center text-h5">Creature XP and Roles</div>
          <CreatureXPandRoleView />
        </v-sheet>
      </v-col>
      <v-col></v-col>
    </v-row>
  </v-container>
</template>

<style>
</style>

<script setup>
import EncounterBudget from '@/components/EncounterBudget.vue'
import CurrentEncounterBudget from '@/components/CurrentEncounterBudget.vue'
import PartyLevelManager from '@/components/PartyLevelManager.vue'
import PlayerCountManager from '@/components/PlayerCountManager.vue'
import CreatureXPandRoleView from '@/components/CreatureXPandRoleView.vue'
import EncountersCollectionView from '@/components/EncountersCollectionView.vue'

const elevationValue = 1
</script>

<template>
  <v-container>
    <v-row class="d-flex justify-center text-h4">
      Pathfinder Second Edition Basic Encounter Builder Tool
    </v-row>
  </v-container>

  <!-- Party Level and Player Count Managers -->
  <v-container>
    <v-row no-gutters class="d-flex justify-center">
      <!-- Party Level Manager -->
      <v-sheet class="d-flex w-20">
        <PartyLevelManager />
      </v-sheet>
      <!-- Player Count Manager -->
      <v-sheet class="d-flex w-20">
        <PlayerCountManager />
      </v-sheet>
    </v-row>
  </v-container>

  <!-- Encounter Budgets -->
  <v-container>
    <v-expansion-panels class="mx-auto">
      <v-expansion-panel>
        <v-expansion-panel-title>
          <template v-slot:default="{ expanded }">
            <v-row no-gutters>
              <v-col> Charts for Nerds</v-col>
              <v-col>
                <v-fade-transition leave-absolute>
                  <span v-if="expanded">
                    <v-container>
                      <v-row no-gutters class="d-flex">
                        <!-- Current Encounter Budget -->
                        <v-col cols="5" class="justify-center mx-auto">
                          <v-sheet :elevation="elevationValue">
                            <div class="d-flex justify-center text-h5">
                              Current Encounter Budget
                            </div>
                            <CurrentEncounterBudget />
                          </v-sheet>
                        </v-col>

                        <!-- Default Encounter Budget -->
                        <v-col cols="5" class="justify-center mx-auto">
                          <v-sheet :elevation="elevationValue">
                            <div class="d-flex justify-center text-h5">
                              Encounter Budget Adjustments
                            </div>
                            <EncounterBudget />
                          </v-sheet>
                        </v-col>
                      </v-row>

                      <!-- Spacer -->
                      <v-row>
                        <v-col></v-col>
                      </v-row>

                      <!-- Creature XP and Role -->
                      <v-row no-gutters class="d-flex mx-auto justify-center">
                        <v-col cols="8">
                          <v-sheet :elevation="elevationValue">
                            <div class="d-flex justify-center text-h5">Creature XP and Roles</div>
                            <CreatureXPandRoleView />
                          </v-sheet>
                        </v-col>
                      </v-row>
                    </v-container>
                  </span>
                </v-fade-transition>
              </v-col>
            </v-row>
          </template>
        </v-expansion-panel-title>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>

  <!-- Encounters Encounters Collection -->
  <v-container>
    <v-row no-gutters class="d-flex justify-center mx-auto">
      <v-sheet :elevation="elevationValue">
        <div class="d-flex justify-center text-h5">Encounters Collection</div>
        <EncountersCollectionView />
      </v-sheet>
    </v-row>
  </v-container>
</template>

<style></style>

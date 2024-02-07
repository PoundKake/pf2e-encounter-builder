<script setup>
import { useXpBudgetStore } from '@/stores/xpbudgets'
import { usePlayerCountStore } from '@/stores/playercount'
import { usePartyLevelStore } from '@/stores/partylevel'

const xpbudgetstore = useXpBudgetStore()
const playercountstore = usePlayerCountStore()
const partylevelstore = usePartyLevelStore()

// Set default player Count
playercountstore.defaultPlayerCount = 4

// Set default party level
partylevelstore.partylevel = 1
</script>

<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">Threat</th>
        <th class="text-left">XP Budget</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in xpbudgetstore.currentXpBudgetValues" :key="item.threat">
        <td>{{ item.threat }}</td>
        <td>{{ item.xp }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

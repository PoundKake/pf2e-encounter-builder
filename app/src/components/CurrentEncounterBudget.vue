<script setup>
import { useXpBudgetStore } from '@/stores/xpbudgets'
import { usePartyLevelStore } from '@/stores/partylevel'

const xpbudgetstore = useXpBudgetStore()
const partylevelstore = usePartyLevelStore()

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

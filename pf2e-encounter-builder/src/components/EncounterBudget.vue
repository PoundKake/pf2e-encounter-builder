<script setup>
import { useXpBudgetStore } from '@/stores/xpbudgets'

const xpbudgetstore = useXpBudgetStore()
</script>

<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">Threat</th>
        <th class="text-left">XP Budget</th>
        <th class="text-left">Character Adjustment</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in xpbudgetstore.defaultXpBudgetValues" :key="item.threat">
        <td>{{ item.threat }}</td>
        <td>{{ item.xp }}</td>
        <td>{{ item.ca }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

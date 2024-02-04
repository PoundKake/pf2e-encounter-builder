<script setup>
import { useXpBudgetStore } from '@/stores/xpbudgets'
// import { usePlayerCountStore } from '@/stores/playercount'

const xpbudgetstore = useXpBudgetStore()
// const playercountstore = usePlayerCountStore()
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

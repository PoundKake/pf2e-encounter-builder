<script setup>
import { usePartyLevelStore } from '@/stores/partylevel'

const partylevelstore = usePartyLevelStore()
</script>

<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">Creature Level Calculations</th>
        <th class="text-left">Creature Level</th>
        <th class="text-left">XP</th>
        <th class="text-left">Suggested Role</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in partylevelstore.currentCreatureLevelXPValues" :key="item">
        <td>{{ item.calctext }}</td>
        <td>{{ item.level }}</td>
        <td>{{ item.xp }}</td>
        <td>{{ item.role }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

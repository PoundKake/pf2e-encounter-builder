import { defineStore } from 'pinia'

export const usePlayerCountStore = defineStore('playerCount', () => {
  const playerCount = 0
  const defaultPlayerCount = 4

  return { playerCount, defaultPlayerCount }
})

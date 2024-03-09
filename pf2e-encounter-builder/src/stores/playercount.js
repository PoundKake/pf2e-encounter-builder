import { defineStore } from 'pinia'

export const usePlayerCountStore = defineStore('playerCount', () => {
  const playerCount = 0
  const defaultPlayerCount = 4

  function increment() {
    playerCount.value++
  }

  function decrement() {
    playerCount.value--
  }
  return { playerCount, defaultPlayerCount, increment, decrement }
})

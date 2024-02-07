import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePlayerCountStore = defineStore('playerCount', () => {
  const playerCount = ref(0)

  const defaultPlayerCount = ref(4)

  function increment() {
    playerCount.value++
  }

  function decrement() {
    playerCount.value--
  }
  return { playerCount, defaultPlayerCount, increment, decrement }
})

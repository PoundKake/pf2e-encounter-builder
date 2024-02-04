import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePlayerCountStore = defineStore('playerCount', () => {
  const playerCount = ref(0)

  function increment() {
    playerCount.value++
  }

  function decrement() {
    playerCount.value--
  }
  return { playerCount, increment, decrement }
})

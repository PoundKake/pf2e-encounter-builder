import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePartyLevelStore = defineStore('partylevel', () => {
  const partylevel = ref(0)

  const partylevelMinus4 = computed(() => partylevel.value - 4)
  const partylevelMinus3 = computed(() => partylevel.value - 3)
  const partylevelMinus2 = computed(() => partylevel.value - 2)
  const partylevelMinus1 = computed(() => partylevel.value - 1)
  const partylevelPlus1 = computed(() => partylevel.value + 1)
  const partylevelPlus2 = computed(() => partylevel.value + 2)
  const partylevelPlus3 = computed(() => partylevel.value + 3)
  const partylevelPlus4 = computed(() => partylevel.value + 4)

  function increment() {
    partylevel.value++
  }

  function decrement() {
    partylevel.value--
  }

  function setPartyLevel(level) {
    partylevel.value = level
  }

  return {
    partylevel,
    partylevelMinus4,
    partylevelMinus3,
    partylevelMinus2,
    partylevelMinus1,
    partylevelPlus1,
    partylevelPlus2,
    partylevelPlus3,
    partylevelPlus4,
    increment,
    decrement,
    setPartyLevel
  }
})

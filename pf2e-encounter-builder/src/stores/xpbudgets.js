import { ref } from 'vue'
import { defineStore } from 'pinia'

const defaultXpBudgetValues = [
  {
    threat: 'Trivial',
    xp: '40',
    ca: '10' //ca = Character Adjustment
  },
  {
    threat: 'Low',
    xp: '60',
    ca: '15' //ca = Character Adjustment
  },
  {
    threat: 'Moderate',
    xp: '80',
    ca: '20' //ca = Character Adjustment
  },
  {
    threat: 'Severe',
    xp: '120',
    ca: '30' //ca = Character Adjustment
  },
  {
    threat: 'Extreme',
    xp: '160',
    ca: '40' //ca = Character Adjustment
  }
]

export const useXpBudgetStore = defineStore('xpbudget', () => {
  const xpbudget = ref(0)

  return { xpbudget, defaultXpBudgetValues }
})

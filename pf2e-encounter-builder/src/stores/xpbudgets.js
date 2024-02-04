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

var currentXpBudgetValues = [
  {
    threat: '',
    xp: ''
  },
  {
    threat: '',
    xp: ''
  },
  {
    threat: '',
    xp: ''
  },
  {
    threat: '',
    xp: ''
  },
  {
    threat: '',
    xp: ''
  }
]

export const useXpBudgetStore = defineStore('xpbudget', () => {
  const xpbudget = ref(0)
  // Trivial encounter XP budget. Default assumes party of 4.
  console.log(defaultXpBudgetValues[0])
  currentXpBudgetValues[0].threat = defaultXpBudgetValues[0].threat
  currentXpBudgetValues.Trivial = ref(40)

  // Low encounter XP budget. Default assumes party of 4.
  console.log(defaultXpBudgetValues[1])
  currentXpBudgetValues[1].threat = defaultXpBudgetValues[1].threat
  currentXpBudgetValues.Low = ref(60)

  // Moderate encounter XP budget. Default assumes party of 4.
  console.log(defaultXpBudgetValues[2])
  currentXpBudgetValues[2].threat = defaultXpBudgetValues[2].threat
  currentXpBudgetValues.Moderate = ref(80)

  // Severe encounter XP budget. Default assumes party of 4.
  console.log(defaultXpBudgetValues[3])
  currentXpBudgetValues[3].threat = defaultXpBudgetValues[3].threat
  currentXpBudgetValues.Severe = ref(120)

  // Extreme encounter XP budget. Default assumes party of 4.
  console.log(defaultXpBudgetValues[4])
  currentXpBudgetValues[4].threat = defaultXpBudgetValues[4].threat
  currentXpBudgetValues.Extreme = ref(160)

  return { xpbudget, defaultXpBudgetValues, currentXpBudgetValues }
})

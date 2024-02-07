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
  currentXpBudgetValues[0].threat = defaultXpBudgetValues[0].threat
  currentXpBudgetValues[0].xp = ref(40)
  // console.log(currentXpBudgetValues[0])

  // Low encounter XP budget. Default assumes party of 4.
  currentXpBudgetValues[1].threat = defaultXpBudgetValues[1].threat
  currentXpBudgetValues[1].xp = ref(60)
  // console.log(currentXpBudgetValues[1])

  // Moderate encounter XP budget. Default assumes party of 4.
  currentXpBudgetValues[2].threat = defaultXpBudgetValues[2].threat
  currentXpBudgetValues[2].xp = ref(80)
  // console.log(currentXpBudgetValues[2])

  // Severe encounter XP budget. Default assumes party of 4.
  currentXpBudgetValues[3].threat = defaultXpBudgetValues[3].threat
  currentXpBudgetValues[3].xp = ref(120)
  // console.log(currentXpBudgetValues[3])

  // Extreme encounter XP budget. Default assumes party of 4.
  currentXpBudgetValues[4].threat = defaultXpBudgetValues[4].threat
  currentXpBudgetValues[4].xp = ref(160)
  // console.log(currentXpBudgetValues[4])

  return { xpbudget, defaultXpBudgetValues, currentXpBudgetValues }
})

import { defineStore } from 'pinia'

const defaultXpBudgetValues = [
  {
    threat: 'Trivial',
    xp: 40,
    ca: 10 //ca = Character Adjustment
  },
  {
    threat: 'Low',
    xp: 60,
    ca: 15 //ca = Character Adjustment
  },
  {
    threat: 'Moderate',
    xp: 80,
    ca: 20 //ca = Character Adjustment
  },
  {
    threat: 'Severe',
    xp: 120,
    ca: 30 //ca = Character Adjustment
  },
  {
    threat: 'Extreme',
    xp: 160,
    ca: 40 //ca = Character Adjustment
  }
]
let currentXpBudgetValues = [
  {
    threat: '',
    xp: 0
  },
  {
    threat: '',
    xp: 0
  },
  {
    threat: '',
    xp: 0
  },
  {
    threat: '',
    xp: 0
  },
  {
    threat: '',
    xp: 0
  }
]

let challengeAdjustments = {
  trivial: 10,
  low: 15,
  moderate: 20,
  severe: 30,
  extreme: 40
}

export const useXpBudgetStore = defineStore('xpbudget', () => {
  const xpbudget = 0

  // Trivial encounter XP budget. Default assumes party of 4.
  currentXpBudgetValues[0].threat = defaultXpBudgetValues[0].threat
  currentXpBudgetValues[0].xp = defaultXpBudgetValues[0].xp

  // Low encounter XP budget. Default assumes party of 4.
  currentXpBudgetValues[1].threat = defaultXpBudgetValues[1].threat
  currentXpBudgetValues[1].xp = defaultXpBudgetValues[1].xp

  // Moderate encounter XP budget. Default assumes party of 4.
  currentXpBudgetValues[2].threat = defaultXpBudgetValues[2].threat
  currentXpBudgetValues[2].xp = defaultXpBudgetValues[2].xp

  // Severe encounter XP budget. Default assumes party of 4.
  currentXpBudgetValues[3].threat = defaultXpBudgetValues[3].threat
  currentXpBudgetValues[3].xp = defaultXpBudgetValues[3].xp

  // Extreme encounter XP budget. Default assumes party of 4.
  currentXpBudgetValues[4].threat = defaultXpBudgetValues[4].threat
  currentXpBudgetValues[4].xp = defaultXpBudgetValues[4].xp

  return { xpbudget, defaultXpBudgetValues, currentXpBudgetValues, challengeAdjustments }
})

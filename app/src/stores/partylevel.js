import { defineStore } from 'pinia'

export const usePartyLevelStore = defineStore('partylevel', () => {
  const currentpartylevel = 1
  const defaultPartyLevel = 1

  let currentCreatureLevelXPValues = {
    partylevelminus4: { calctext: 'Party Level - 4', level: -3, xp: 10, role: 'Low-threat lackey' },
    partylevelminus3: {
      calctext: 'Party Level - 3',
      level: -2,
      xp: 15,
      role: 'Low- or moderate-threat lackey'
    },
    partylevelminus2: {
      calctext: 'Party Level - 2',
      level: -1,
      xp: 20,
      role: 'Any lackey or standard creature'
    },
    partylevelminus1: {
      calctext: 'Party Level - 1',
      level: 0,
      xp: 30,
      role: 'Any standard creature'
    },
    partylevel: {
      calctext: 'Party Level',
      level: 1,
      xp: 40,
      role: 'Any standard creature or low-threat boss'
    },
    partylevelplus1: {
      calctext: 'Party Level + 1',
      level: 2,
      xp: 60,
      role: 'Low- or moderate-threat boss'
    },
    partylevelplus2: {
      calctext: 'Party Level + 2',
      level: 3,
      xp: 80,
      role: 'Moderate- or severe-threat boss'
    },
    partylevelplus3: {
      calctext: 'Party Level + 3',
      level: 4,
      xp: 120,
      role: 'Severe- or extreme-threat boss'
    },
    partylevelplus4: {
      calctext: 'Party Level + 4',
      level: 5,
      xp: 160,
      role: 'Extreme-threat solo boss'
    }
  }

  return {
    currentpartylevel,
    defaultPartyLevel,
    currentCreatureLevelXPValues
  }
})

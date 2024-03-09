import { defineStore } from 'pinia'

export const usePartyLevelStore = defineStore('partylevel', () => {
  const partylevel = 0
  const defaultPartyLevel = 1

  const partylevelMinus4 = partylevel.value - 4
  const partylevelMinus3 = partylevel.value - 3
  const partylevelMinus2 = partylevel.value - 2
  const partylevelMinus1 = partylevel.value - 1
  const partylevelPlus1 = partylevel.value + 1
  const partylevelPlus2 = partylevel.value + 2
  const partylevelPlus3 = partylevel.value + 3
  const partylevelPlus4 = partylevel.value + 4

  return {
    partylevel,
    defaultPartyLevel,
    partylevelMinus4,
    partylevelMinus3,
    partylevelMinus2,
    partylevelMinus1,
    partylevelPlus1,
    partylevelPlus2,
    partylevelPlus3,
    partylevelPlus4
  }
})

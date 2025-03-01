import { usePartyLevelStore } from '@/stores/partylevel'
import { usePlayerCountStore } from '@/stores/playercount'
import { useXpBudgetStore } from '@/stores/xpbudgets'

const partylevelstore = usePartyLevelStore()
const playercountstore = usePlayerCountStore()
const xpbudgetstore = useXpBudgetStore()

class XPCalc {
  constructor() {}

  adjustXPThreatForPlayerCount() {
    if (playercountstore.playerCount > playercountstore.defaultPlayerCount) {
      const levelDifference = playercountstore.playerCount - playercountstore.defaultPlayerCount
      for (let i = 0; i < xpbudgetstore.currentXpBudgetValues.length; i++) {
        xpbudgetstore.currentXpBudgetValues[i].xp =
          xpbudgetstore.defaultXpBudgetValues[i].xp +
          xpbudgetstore.defaultXpBudgetValues[i].ca * levelDifference
      }
    } else if (
      playercountstore.playerCount < playercountstore.defaultPlayerCount &&
      playercountstore.playerCount > 0
    ) {
      const levelDifference = playercountstore.defaultPlayerCount - playercountstore.playerCount
      for (let i = 0; i < xpbudgetstore.currentXpBudgetValues.length; i++) {
        xpbudgetstore.currentXpBudgetValues[i].xp =
          xpbudgetstore.defaultXpBudgetValues[i].xp -
          xpbudgetstore.defaultXpBudgetValues[i].ca * levelDifference
      }
    } else {
      for (let i = 0; i < xpbudgetstore.currentXpBudgetValues.length; i++) {
        xpbudgetstore.currentXpBudgetValues[i].xp = xpbudgetstore.defaultXpBudgetValues[i].xp
      }
    }
  }

  adjustCreatureXPForPartyLevel() {
    partylevelstore.currentCreatureLevelXPValues.partylevelminus4.level =
      partylevelstore.currentpartylevel - 4
    partylevelstore.currentCreatureLevelXPValues.partylevelminus3.level =
      partylevelstore.currentpartylevel - 3
    partylevelstore.currentCreatureLevelXPValues.partylevelminus2.level =
      partylevelstore.currentpartylevel - 2
    partylevelstore.currentCreatureLevelXPValues.partylevelminus1.level =
      partylevelstore.currentpartylevel - 1
    partylevelstore.currentCreatureLevelXPValues.partylevel.level =
      partylevelstore.currentpartylevel
    partylevelstore.currentCreatureLevelXPValues.partylevelplus1.level =
      partylevelstore.currentpartylevel + 1
    partylevelstore.currentCreatureLevelXPValues.partylevelplus2.level =
      partylevelstore.currentpartylevel + 2
    partylevelstore.currentCreatureLevelXPValues.partylevelplus3.level =
      partylevelstore.currentpartylevel + 3
    partylevelstore.currentCreatureLevelXPValues.partylevelplus4.level =
      partylevelstore.currentpartylevel + 4
  }
}

export { XPCalc }

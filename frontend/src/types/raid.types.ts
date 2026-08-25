export type RaidInstance = 'ICC' | 'SR'
export type RaidDifficulty = 'Normal' | 'Heroic'
export type RaidCapacity = '10' | '25'
export type PlayerClass =
  | 'WARRIOR'
  | 'PALADIN'
  | 'HUNTER'
  | 'ROGUE'
  | 'PRIEST'
  | 'DEATH_KNIGHT'
  | 'SHAMAN'
  | 'MAGE'
  | 'WARLOCK'
  | 'DRUID'

export interface RaidPlayer {
  id: string
  name: string
  class: PlayerClass
  spec: string
}

export interface Raid {
  id: string
  date: string
  instance: RaidInstance
  players: RaidPlayer[]
  difficulty: RaidDifficulty
  capacity: RaidCapacity
  coreName: string
  leader: string
  uploader: string
  initDateCombat: string
  timeTotalcombat: string
  boss: string
  Totalwipes: string
  wipesInFinalBoss: string
}

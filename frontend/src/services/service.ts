import { mockRaids } from '../mocks/raid.mock'
import type { Raid, RaidPlayer } from '../types/raid.types'

const STORAGE_KEY = 'raid-manager-raids'

const getStoredRaids = (): Raid[] => {
  const data = localStorage.getItem(STORAGE_KEY)

  if (!data) {
    return mockRaids
  }

  try {
    return JSON.parse(data) as Raid[]
  } catch {
    return mockRaids
  }
}

const saveRaids = (raids: Raid[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(raids))
}

export const raidService = {
  async getRaids(): Promise<Raid[]> {
    return getStoredRaids()
  },

  /*
  cuando se conecte el backend
  async getRaids(): Promise<Raid[]> {
  const response = await fetch("/api/raids");

  return response.json();
  }
  */
  async getRaidById(id: string): Promise<Raid | undefined> {
    const raids = getStoredRaids()

    return raids.find((raid) => raid.id === id)
  },

  async createRaid(
    instance: Raid['instance'],
    date: string,
    players: RaidPlayer[],
  ): Promise<Raid> {
    const raids = getStoredRaids()

    const newRaid: Raid = {
      id: crypto.randomUUID(),
      date,
      instance,
      players,
      difficulty: 'Heroic',
      capacity: '25',
      coreName: 'CORE #1',
      leader: 'Rakis',
      uploader: 'Traps',
      initDateCombat: '2026-08-18T23:45:00.000Z',
      timeTotalcombat: '1h 45m 10s',
      boss: 'The Lich King',
      Totalwipes: '3',
      wipesInFinalBoss: '1',
    }

    const updatedRaids = [...raids, newRaid]

    saveRaids(updatedRaids)

    return newRaid
  },
}

import type { Raid, PlayerClass } from '../types/raid.types'

const validClasses: PlayerClass[] = [
  'WARRIOR',
  'PALADIN',
  'HUNTER',
  'ROGUE',
  'PRIEST',
  'DEATH_KNIGHT',
  'SHAMAN',
  'MAGE',
  'WARLOCK',
  'DRUID',
]

export const parseRaidData = (input: string): Omit<Raid, 'id'> => {
  const parts = input.trim().split('|')

  if (parts.length !== 4) {
    throw new Error('Formato de raid inválido.')
  }

  const [version, date, instance, playersData] = parts

  if (version !== 'CW1') {
    throw new Error('Versión de datos no compatible.')
  }

  if (instance !== 'ICC' && instance !== 'SR') {
    throw new Error('Mazmorra no válida.')
  }

  if (!date) {
    throw new Error('La fecha no es válida.')
  }

  const players = playersData.split(',').map((playerData, index) => {
    const [name, playerClass, spec, leader, uploader] = playerData.split(':')

    if (!name || !playerClass) {
      throw new Error(`Jugador inválido en posición ${index + 1}.`)
    }

    if (!validClasses.includes(playerClass as PlayerClass)) {
      throw new Error(`Clase inválida para ${name}.`)
    }

    return {
      id: crypto.randomUUID(),
      name,
      class: playerClass as PlayerClass,
      spec,
      leader,
      uploader,
    }
  })

  return {
    date,
    instance,
    players,
    difficulty: 'Heroic', // Valores por defecto requeridos por Raid
    capacity: '25',
    coreName: 'CORE #1',
    leader: 'none',
    uploader: 'none',
    initDateCombat: '2026-08-18T23:45:00.000Z',
    timeTotalcombat: '1h 45m 10s',
    boss: 'The Lich King',
    Totalwipes: '3',
    wipesInFinalBoss: '1',
  }
}

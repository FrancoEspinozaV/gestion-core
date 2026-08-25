import type { RaidPlayer } from '../types/raid.types'

export type RoleType = 'tank' | 'healer' | 'melee' | 'ranged'

export interface RoleConfig {
  id: RoleType
  title: string
  color: string
  icon: string
}

// Colores oficiales de clases de WoW
export const classNameColors = {
  WARRIOR: '#C69B6D',
  PALADIN: '#F48CBA',
  HUNTER: '#AAD372',
  ROGUE: '#FFF468',
  PRIEST: '#FFFFFF',
  DEATH_KNIGHT: '#C41E3A',
  SHAMAN: '#0070DD',
  MAGE: '#3FC7EB',
  WARLOCK: '#8788EE',
  DRUID: '#FF7D0A',
}

// Mapeo automático de Rol según Especialización
export const getPlayerRole = (player: RaidPlayer): RoleType => {
  const spec = player.spec.toLowerCase()

  if (['protección', 'sangre'].includes(spec)) return 'tank'
  if (['restauración', 'sagrado', 'disciplina'].includes(spec)) return 'healer'
  if (
    [
      'furia',
      'armas',
      'profano',
      'reprensión',
      'combate',
      'feral',
      'mejora',
      'sombra',
    ].includes(spec) &&
    player.class !== 'PRIEST'
  ) {
    return 'melee'
  }
  return 'ranged' // Magos, Brujos, Cazadores, Sombra, Equilibrio
}

export const ROLE_CONFIGS: Record<RoleType, RoleConfig> = {
  tank: { id: 'tank', title: 'Tanques', color: '#F59E0B', icon: '🛡️' },
  healer: { id: 'healer', title: 'Sanadores', color: '#22C55E', icon: '➕' },
  melee: {
    id: 'melee',
    title: 'DPS Cuerpo a Cuerpo',
    color: '#EF4444',
    icon: '⚔️',
  },
  ranged: {
    id: 'ranged',
    title: 'DPS a Distancia',
    color: '#A855F7',
    icon: '🏹',
  },
}

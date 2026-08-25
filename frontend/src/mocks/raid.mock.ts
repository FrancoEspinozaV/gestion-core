import type { Raid } from '../types/raid.types'

export const mockRaids: Raid[] = [
  // --- RAID 1: ICC 25H ---
  {
    id: 'raid-001',
    date: '2026-08-18T23:45:00.000Z',
    instance: 'ICC',
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
    players: [
      // Tanques (2)
      { id: 'p-001', name: 'Arthas', class: 'PALADIN', spec: 'Protección' },
      { id: 'p-002', name: 'Mograine', class: 'DEATH_KNIGHT', spec: 'Sangre' },

      // Healers (5)
      { id: 'p-003', name: 'Malfurion', class: 'DRUID', spec: 'Restauración' },
      { id: 'p-004', name: 'Uther', class: 'PALADIN', spec: 'Sagrado' },
      { id: 'p-005', name: 'Thrall', class: 'SHAMAN', spec: 'Restauración' },
      { id: 'p-006', name: 'Nobundo', class: 'SHAMAN', spec: 'Restauración' },
      { id: 'p-007', name: 'Anduin', class: 'PRIEST', spec: 'Disciplina' },

      // Meles (8)
      { id: 'p-008', name: 'Rengar', class: 'DRUID', spec: 'Feral' },
      { id: 'p-009', name: 'Garrosh', class: 'WARRIOR', spec: 'Furia' },
      { id: 'p-010', name: 'Varian', class: 'WARRIOR', spec: 'Furia' },
      { id: 'p-011', name: 'Saurfang', class: 'WARRIOR', spec: 'Armas' },
      { id: 'p-012', name: 'Darion', class: 'DEATH_KNIGHT', spec: 'Profano' },
      { id: 'p-013', name: 'Tirion', class: 'PALADIN', spec: 'Reprensión' },
      { id: 'p-014', name: 'Turalyon', class: 'PALADIN', spec: 'Reprensión' },
      { id: 'p-015', name: 'Valeera', class: 'ROGUE', spec: 'Combate' },

      // Casters & Ranged (10)
      { id: 'p-016', name: 'Rexxar', class: 'HUNTER', spec: 'Puntería' },
      { id: 'p-017', name: 'Sylvanas', class: 'HUNTER', spec: 'Puntería' },
      { id: 'p-018', name: 'Voljin', class: 'PRIEST', spec: 'Sombras' },
      { id: 'p-019', name: 'Moira', class: 'PRIEST', spec: 'Sombras' },
      { id: 'p-020', name: 'Jaina', class: 'MAGE', spec: 'Fuego' },
      { id: 'p-021', name: 'Kaelthas', class: 'MAGE', spec: 'Fuego' },
      { id: 'p-022', name: 'Khadgar', class: 'MAGE', spec: 'Arcano' },
      { id: 'p-023', name: 'Guldan', class: 'WARLOCK', spec: 'Demonología' },
      { id: 'p-024', name: 'Kelthuzad', class: 'WARLOCK', spec: 'Aflicción' },
      { id: 'p-025', name: 'Hamuul', class: 'DRUID', spec: 'Equilibrio' },
    ],
  },

  // --- RAID 2: SR 25H ---
  {
    id: 'raid-002',
    date: '2026-08-17T22:10:00.000Z',
    instance: 'SR',
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
    players: [
      // Tanques (2)
      { id: 'p-026', name: 'Baine', class: 'PALADIN', spec: 'Protección' },
      { id: 'p-027', name: 'Koltira', class: 'DEATH_KNIGHT', spec: 'Sangre' },

      // Healers (5)
      { id: 'p-028', name: 'Velen', class: 'PRIEST', spec: 'Disciplina' },
      { id: 'p-029', name: 'Liadrin', class: 'PALADIN', spec: 'Sagrado' },
      { id: 'p-030', name: 'Akama', class: 'SHAMAN', spec: 'Restauración' },
      { id: 'p-031', name: 'Senjin', class: 'PRIEST', spec: 'Sagrado' },
      { id: 'p-032', name: 'Eredar', class: 'DRUID', spec: 'Restauración' },

      // Meles (8)
      { id: 'p-033', name: 'Illidan', class: 'ROGUE', spec: 'Asesinato' },
      { id: 'p-034', name: 'Maiev', class: 'ROGUE', spec: 'Combate' },
      { id: 'p-035', name: 'Muradin', class: 'WARRIOR', spec: 'Furia' },
      { id: 'p-036', name: 'Grommash', class: 'WARRIOR', spec: 'Furia' },
      {
        id: 'p-037',
        name: 'Thassarian',
        class: 'DEATH_KNIGHT',
        spec: 'Escarcha',
      },
      { id: 'p-038', name: 'Alexandros', class: 'PALADIN', spec: 'Reprensión' },
      { id: 'p-039', name: 'Jarod', class: 'DRUID', spec: 'Feral' },
      { id: 'p-040', name: 'Rokhan', class: 'SHAMAN', spec: 'Mejora' },

      // Casters & Ranged (10)
      { id: 'p-041', name: 'Alleria', class: 'HUNTER', spec: 'Puntería' },
      { id: 'p-042', name: 'Shandris', class: 'HUNTER', spec: 'Puntería' },
      { id: 'p-043', name: 'Antonidas', class: 'MAGE', spec: 'Fuego' },
      { id: 'p-044', name: 'Rhonin', class: 'MAGE', spec: 'Fuego' },
      { id: 'p-045', name: 'Medivh', class: 'MAGE', spec: 'Arcano' },
      { id: 'p-046', name: 'ChoGall', class: 'WARLOCK', spec: 'Aflicción' },
      { id: 'p-047', name: 'MalGanis', class: 'WARLOCK', spec: 'Demonología' },
      {
        id: 'p-048',
        name: 'Archimonde',
        class: 'WARLOCK',
        spec: 'Destrucción',
      },
      { id: 'p-049', name: 'Faerin', class: 'DRUID', spec: 'Equilibrio' },
      { id: 'p-050', name: 'Zebrax', class: 'PRIEST', spec: 'Sombras' },
    ],
  },

  // --- RAID 3: ICC 25N ---
  {
    id: 'raid-003',
    date: '2026-08-16T23:00:00.000Z',
    instance: 'ICC',
    difficulty: 'Normal',
    capacity: '25',
    coreName: 'CORE #1',
    leader: 'Rakis',
    uploader: 'Traps',
    initDateCombat: '2026-08-18T23:45:00.000Z',
    timeTotalcombat: '1h 45m 10s',
    boss: 'The Lich King',
    Totalwipes: '3',
    wipesInFinalBoss: '1',
    players: [
      // Tanques (2)
      { id: 'p-051', name: 'Cairne', class: 'WARRIOR', spec: 'Protección' },
      { id: 'p-052', name: 'Yrel', class: 'PALADIN', spec: 'Protección' },

      // Healers (5)
      { id: 'p-053', name: 'Maraad', class: 'PALADIN', spec: 'Sagrado' },
      { id: 'p-054', name: 'Reghar', class: 'SHAMAN', spec: 'Restauración' },
      { id: 'p-055', name: 'Broll', class: 'DRUID', spec: 'Restauración' },
      { id: 'p-056', name: 'Tandred', class: 'PRIEST', spec: 'Disciplina' },
      { id: 'p-057', name: 'Alonsus', class: 'PRIEST', spec: 'Sagrado' },

      // Meles (8)
      { id: 'p-058', name: 'Chen', class: 'WARRIOR', spec: 'Furia' },
      { id: 'p-059', name: 'Eitrigg', class: 'WARRIOR', spec: 'Armas' },
      { id: 'p-060', name: 'Lilian', class: 'ROGUE', spec: 'Asesinato' },
      { id: 'p-061', name: 'Shaw', class: 'ROGUE', spec: 'Combate' },
      { id: 'p-062', name: 'Nazgrim', class: 'DEATH_KNIGHT', spec: 'Profano' },
      { id: 'p-063', name: 'Teron', class: 'DEATH_KNIGHT', spec: 'Escarcha' },
      { id: 'p-064', name: 'Sunwalker', class: 'PALADIN', spec: 'Reprensión' },
      { id: 'p-065', name: 'Zenkiki', class: 'DRUID', spec: 'Feral' },

      // Casters & Ranged (10)
      { id: 'p-066', name: 'Halduron', class: 'HUNTER', spec: 'Puntería' },
      { id: 'p-067', name: 'Vereesa', class: 'HUNTER', spec: 'Supervivencia' },
      { id: 'p-068', name: 'Aegwynn', class: 'MAGE', spec: 'Fuego' },
      { id: 'p-069', name: 'Millhouse', class: 'MAGE', spec: 'Arcano' },
      { id: 'p-070', name: 'Nielas', class: 'MAGE', spec: 'Fuego' },
      { id: 'p-071', name: 'TeronGore', class: 'WARLOCK', spec: 'Aflicción' },
      { id: 'p-072', name: 'Kanrethad', class: 'WARLOCK', spec: 'Demonología' },
      { id: 'p-073', name: 'Talanji', class: 'PRIEST', spec: 'Sombras' },
      { id: 'p-074', name: 'MalfurionB', class: 'DRUID', spec: 'Equilibrio' },
      { id: 'p-075', name: 'Magatha', class: 'SHAMAN', spec: 'Elemental' },
    ],
  },
  {
    id: 'raid-10-001',
    date: '2026-08-19T21:00:00.000Z',
    instance: 'ICC',
    difficulty: 'Heroic',
    coreName: 'CORE #1',
    capacity: '10',
    leader: 'Rakis',
    uploader: 'Traps',
    initDateCombat: '2026-08-18T23:45:00.000Z',
    timeTotalcombat: '1h 45m 10s',
    boss: 'The Lich King',
    Totalwipes: '3',
    wipesInFinalBoss: '1',
    players: [
      // Tanques (2)
      { id: 'p-101', name: 'Arthas', class: 'PALADIN', spec: 'Protección' },
      { id: 'p-102', name: 'Mograine', class: 'DEATH_KNIGHT', spec: 'Sangre' },

      // Healers (2)
      { id: 'p-103', name: 'Anduin', class: 'PRIEST', spec: 'Disciplina' },
      { id: 'p-104', name: 'Uther', class: 'PALADIN', spec: 'Sagrado' },

      // Meles (3)
      { id: 'p-105', name: 'Garrosh', class: 'WARRIOR', spec: 'Furia' },
      { id: 'p-106', name: 'Valeera', class: 'ROGUE', spec: 'Combate' },
      { id: 'p-107', name: 'Darion', class: 'DEATH_KNIGHT', spec: 'Profano' },

      // Casters & Ranged (3)
      { id: 'p-108', name: 'Sylvanas', class: 'HUNTER', spec: 'Puntería' },
      { id: 'p-109', name: 'Jaina', class: 'MAGE', spec: 'Fuego' },
      { id: 'p-110', name: 'Guldan', class: 'WARLOCK', spec: 'Demonología' },
    ],
  },

  // --- RAID 2: SR 10N (10 Jugadores - Normal) ---
  {
    id: 'raid-10-002',
    date: '2026-08-20T20:30:00.000Z',
    instance: 'SR',
    difficulty: 'Normal',
    coreName: 'CORE #1',
    capacity: '10',
    leader: 'Rakis',
    uploader: 'Traps',
    initDateCombat: '2026-08-18T23:45:00.000Z',
    timeTotalcombat: '1h 45m 10s',
    boss: 'The Lich King',
    Totalwipes: '3',
    wipesInFinalBoss: '1',
    players: [
      // Tanques (2)
      { id: 'p-111', name: 'Baine', class: 'WARRIOR', spec: 'Protección' },
      { id: 'p-112', name: 'Yrel', class: 'PALADIN', spec: 'Protección' },

      // Healers (2)
      { id: 'p-113', name: 'Malfurion', class: 'DRUID', spec: 'Restauración' },
      { id: 'p-114', name: 'Thrall', class: 'SHAMAN', spec: 'Restauración' },

      // Meles (3)
      { id: 'p-115', name: 'Tirion', class: 'PALADIN', spec: 'Reprensión' },
      { id: 'p-116', name: 'Rengar', class: 'DRUID', spec: 'Feral' },
      { id: 'p-117', name: 'Illidan', class: 'ROGUE', spec: 'Asesinato' },

      // Casters & Ranged (3)
      { id: 'p-118', name: 'Rexxar', class: 'HUNTER', spec: 'Puntería' },
      { id: 'p-119', name: 'Voljin', class: 'PRIEST', spec: 'Sombras' },
      { id: 'p-120', name: 'Kaelthas', class: 'MAGE', spec: 'Arcano' },
    ],
  },
]

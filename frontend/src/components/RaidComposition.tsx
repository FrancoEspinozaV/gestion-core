import React, { useMemo } from 'react';
import { RoleColumn } from './RoleColumn';
import type { Raid, RaidPlayer } from '../types/raid.types';
import { getPlayerRole, ROLE_CONFIGS, type RoleType } from '../utils/wow-config';

interface RaidCompositionProps {
  raidData: Raid;
}

export const RaidComposition: React.FC<RaidCompositionProps> = ({ raidData }) => {
  const groupedPlayers = useMemo(() => {
    const groups: Record<RoleType, RaidPlayer[]> = {
      tank: [],
      healer: [],
      melee: [],
      ranged: [],
    };

    raidData.players.forEach((player) => {
      const role = getPlayerRole(player);
      groups[role].push(player);
    });

    return groups;
  }, [raidData.players]);

  const roleOrder: RoleType[] = ['tank', 'healer', 'melee', 'ranged'];
  const isSR = false
  return (
    <div className="w-full bg-bg text-slate-100 p-4 rounded-xl border border-slate-800/80 min-w-0">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-slate-200">
          Ultima Composición de Raid / <span className="font-light text-slate-400 uppercase">{raidData.coreName}</span> / <span className={!isSR ? "font-light text-info uppercase" : "font-semibold text-warning uppercase"}>{raidData.capacity} {raidData.difficulty}</span>
        </h2>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-3 w-full min-w-0">
        {roleOrder.map((roleId) => (
          <RoleColumn
            key={roleId}
            config={ROLE_CONFIGS[roleId]}
            players={groupedPlayers[roleId]}
          />
        ))}
      </div>
    </div>
  );
};
import React from 'react';
import { classNameColors, type RoleConfig, type RoleType } from '../utils/wow-config';
import type { RaidPlayer } from '../types/raid.types';
import { Shield } from './icons/Shield';
import { Plus } from './icons/Plus';
import { Swords } from './icons/Swords';
import { Wand } from './icons/Wand';

interface RoleColumnProps {
  config: RoleConfig;
  players: RaidPlayer[];
}


function getIconRole ({ role }: { role: RoleType }) {
  if (role === 'tank') {
    return <Shield className="w-6 h-6 text-primary" />
  } else if (role === 'healer') {
    return <Plus className="w-6 h-6 text-success" />
  } else if (role === 'melee') {
    return <Swords className="w-6 h-6 text-danger" />
  } else if (role === 'ranged') {
    return <Wand className="w-6 h-6 text-accent" />
  }
}

export const RoleColumn: React.FC<RoleColumnProps> = ({ config, players }) => {
  return (
    <div className="flex-1 min-w-50 bg-surface/20 border border-slate-800 rounded-lg p-3 flex flex-col">
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="text-sm">{config.icon}</span>
          <h3 className="font-bold text-xs tracking-wide uppercase" style={{ color: config.color }}>
            {config.title}
          </h3>
        </div>
        <span className="text-xs text-slate-400 font-bold">
          ({players.length})
        </span>
      </div>

      <div className="flex-1 space-y-2 overflow-y-auto pr-1">
        {players.map((player) => {
          const classColor = classNameColors[player.class];

          return (
            <div
              key={player.id}
              className="flex items-center justify-between bg-bg hover:bg-surface border border-slate-800/80 rounded-md p-2 transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <div
                  className="w-7 h-7 rounded"
                >
                  <img src={`/clases/${player.class}.jpg`} />
                </div>

                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-slate-200 group-hover:text-white leading-tight">
                    {player.name}
                  </span>
                  <span className="text-xs font-medium" style={{ color: classColor }}>
                    {player.spec}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center w-7 h-7">
                {getIconRole({ role: config.id })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
import React, { useMemo } from 'react';
import { useAppSelector } from '../../services/store';

import style from './gamePage.module.scss';
import MySelect from '../../components/Select/select';
import { Match } from '../../modules/matches/matches.slice';
import { capitalizeFirstLetter } from '../../helpers/string';
import MatchItem from '../../components/MatchItem/matchItem';

interface GroupedMatches {
  [key: string]: Match[];
}

const GamePage: React.FC = () => {
  const matches = useAppSelector((state) => state.matches.data);

  const groupedMatches: GroupedMatches = useMemo(() => {
    return matches.reduce((acc, match) => {
      let month = match.date.toLocaleString('default', {
        month: 'long',
        year: 'numeric',
      });

      month = capitalizeFirstLetter(month);

      if (!acc[month]) {
        acc[month] = [];
      }

      acc[month].push(match);

      return acc;
    }, {} as GroupedMatches);
  }, [matches]);

  return (
    <div className={style.page}>
      <div className={style.breadcrumb}>123123123</div>
      <img
        alt="football"
        src="/src/pages/svg/football.png"
        className={style.img}
      />
      <div className={style.pageContainer}>
        <div className={style.pageTop}>
          <h3 className={style.title}>Календарь сезона</h3>
          <MySelect data={['2024/2025', '2023/2024', '2022/2023']} />
          <div className={style.titleText}>Все матчи</div>
        </div>
        <div className={style.category}>Все матчи</div>
        <div className={style.contentContainer}>
          {Object.entries(groupedMatches).map(([month, games]) => (
            <div key={month} className={style.monthContainer}>
              <h4 className={style.month}>{month}</h4>
              <div className={style.matchesContainer}>
                {games.map((game) => (
                  <MatchItem key={game.enemy} match={game} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React.memo(GamePage);

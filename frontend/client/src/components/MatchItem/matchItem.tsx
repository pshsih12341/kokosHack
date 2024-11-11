import React from 'react';

import style from './MatchItem.module.scss';
import { Match } from '../../modules/matches/matches.slice';
import {
  formatDateToMoscowNumeric,
  formatTimeToMoscow,
} from '../../helpers/time';

const MatchItem: React.FC<{ match: Match }> = ({ match }) => {
  return (
    <div className={style.lastMatch}>
      <div className={style.team}>
        <i />
        <p>Кокос</p>
      </div>
      <div className={style.normalText}>против</div>
      <div className={style.team}>
        <i />
        <p>{match.enemy}</p>
      </div>
      <div className={style.normalText}>
        {formatDateToMoscowNumeric(match.date)}
      </div>
      <div className={style.normalText}>{formatTimeToMoscow(match.date)}</div>
      <div className={style.normalText}>{match.place}</div>
    </div>
  );
};

export default React.memo(MatchItem);

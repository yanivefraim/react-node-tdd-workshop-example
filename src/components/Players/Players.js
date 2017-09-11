import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Players = ({nextPlayer, winCount}) => {
  const classNameX = classNames('player', {
    next: nextPlayer === 'X'
  });
  const classNameO = classNames('player', {
    next: nextPlayer === 'O'
  });
  return (<div>
    <span className={classNameX}>{'X'}</span><span data-hook="x-win-count">{winCount.x}</span>
    <span className={classNameO}>{'O'}</span><span data-hook="o-win-count">{winCount.o}</span>
  </div>);
};

Players.propTypes = {
  nextPlayer: PropTypes.string,
  winCount: PropTypes.object
};

export default Players;

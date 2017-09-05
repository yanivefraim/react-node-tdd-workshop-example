import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Players = ({nextPlayer}) => {
  const classNameX = classNames('player', {
    next: nextPlayer === 'X'
  });
  const classNameO = classNames('player', {
    next: nextPlayer === 'O'
  });
  return (<div>
    <span className={classNameX}>{'X'}</span>
    <span className={classNameO}>{'O'}</span>
  </div>);
};

Players.propTypes = {
  nextPlayer: PropTypes.string
};

export default Players;

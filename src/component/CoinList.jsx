import React from 'react';
import PropTypes from 'prop-types';

function CoinList({children}) {
  return (
    <ul id='coin-list' className='CoinList'>
      {children}
    </ul>
  );
}

CoinList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
export default CoinList;

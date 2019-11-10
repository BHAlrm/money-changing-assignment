import React from 'react';
import PropTypes from 'prop-types'


function CoinItem({title, value}) {
  return (
    <li className='CoinItem'>
      {title}: {value}
    </li>
  );
}


CoinItem.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
};

export default CoinItem;

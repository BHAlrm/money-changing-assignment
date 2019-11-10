import React from 'react';
import PropTypes from 'prop-types';

function MoneyInput({onChange: passedOnChange}) {
  const onChange = (e) => {
    e.preventDefault();

    const {target: {value}} = e;
    if (passedOnChange && {}.toString.call(passedOnChange) === '[object Function]'){
      passedOnChange(value);
    }
  };

  return (
    <div className='MoneyInput'>
      <input type='number' id='money-input' onChange={onChange}/>
    </div>
  );
}

MoneyInput.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default MoneyInput;

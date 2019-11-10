import React from 'react';
import ReactDOM from 'react-dom';
import MoneyInput from './MoneyInput';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const onChange = jest.fn();

  ReactDOM.render(<MoneyInput onChange={onChange}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

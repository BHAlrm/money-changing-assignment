import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn()
}));

jest.mock('./hook/useMoneyChangingStore', () => (
  {
    __esModule: true,
    default: () => ({coins: new Array(10).fill(0)})
  }
));

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

const useMockDispatch = jest.fn();
const useMockSelector = {};

module.exports = {
  __esModule: true,
  useMockDispatch,
  useMockSelector,
  useDispatch: () => useMockDispatch,
  useSelector: () => useMockSelector,
};

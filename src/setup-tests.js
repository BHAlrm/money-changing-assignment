import {cleanup, render, act, fireEvent} from '@testing-library/react';

// React 16 Enzyme adapter
// configure({adapter: new Adapter()});

// Make functions available in all test files without importing
global.render = render;
global.cleanup = cleanup;
global.act = act;
global.fireEvent = fireEvent;

// to solve an issue:- Mocking methods which are not implemented in JSDOM
// more information please follow the link below
// https://jestjs.io/docs/en/manual-mocks.html#mocking-methods-which-are-not-implemented-in-jsdom
window.matchMedia = jest.fn().mockImplementation(query => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(),
  removeListener: jest.fn()
}));

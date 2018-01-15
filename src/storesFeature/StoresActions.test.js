// import * as actions from './StoresActions';
// import * as types from './StoresActionsTypes';
//
// describe('States', () => {
//   const showFavs = false;
//
//   it('should create an action to toggle the Favorites List', () => {
//     expect(actions.toggleFavsList()).toEqual({
//       type: types.TOGGLE_FAVORITES_LIST,
//       showFavs,
//     });
//   });
// });

const thunk = ({ dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }

  return next(action);
};

const create = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  };
  const next = jest.fn();

  const invoke = action => thunk(store)(next)(action);

  return { store, next, invoke };
};

it('passes through non-function action', () => {
  const { next, invoke } = create();
  const action = { type: 'TEST' };
  invoke(action);
  expect(next).toHaveBeenCalledWith(action);
});

it('calls the function', () => {
  const { invoke } = create();
  const fn = jest.fn();
  invoke(fn);
  expect(fn).toHaveBeenCalled();
});

it('passes dispatch and getState', () => {
  const { store, invoke } = create();
  invoke((dispatch, getState) => {
    dispatch('TEST DISPATCH');
    getState();
  });
  expect(store.dispatch).toHaveBeenCalledWith('TEST DISPATCH');
  expect(store.getState).toHaveBeenCalled();
});

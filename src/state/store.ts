import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { RootState, rootReducer } from './rootReducer';

const initialState: RootState = {
  user: {
    info: { name: '' },
  },
};

export default createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

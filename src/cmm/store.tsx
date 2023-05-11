import { AnyAction, Store, createStore } from 'redux';

interface AuthState {
  accessToken: string;
  refreshToken: string;
}

interface AuthAction extends AnyAction {
  type: string;
  payload?: {
    accessToken: string;
    refreshToken: string;
  };
}

const initialState: AuthState = {
  accessToken: '',
  refreshToken: '',
};

const reducer = (state: AuthState = initialState, action: AuthAction) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        accessToken: action.payload?.accessToken ?? '',
        refreshToken: action.payload?.refreshToken ?? '',
      };
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }
};

const store: Store<AuthState, AuthAction> = createStore(reducer);

export default store;
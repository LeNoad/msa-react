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
  accessToken: localStorage.getItem('accessToken') || '',
  refreshToken: localStorage.getItem('refreshToken') || '',
};

const reducer = (state: AuthState = initialState, action: AuthAction) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('accessToken', action.payload?.accessToken ?? '');
      localStorage.setItem('refreshToken', action.payload?.refreshToken ?? '');
      return {
        ...state,
        accessToken: action.payload?.accessToken ?? '',
        refreshToken: action.payload?.refreshToken ?? '',
      };
    case 'LOGOUT':
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      return initialState;
    default:
      return state;
  }
};

const store: Store<AuthState, AuthAction> = createStore(reducer);

export default store;
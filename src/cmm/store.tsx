import { AnyAction, Store, createStore } from 'redux';

export interface IUser {
  userName:string,
}
interface AuthState {
  accessToken: string;
  refreshToken: string;
  user?: IUser
}

interface AuthAction extends AnyAction {
  type: string;
  payload?: {
    accessToken: string;
    refreshToken: string;
    user?: IUser
  };
}

const initialState: AuthState = {
  accessToken: localStorage.getItem('accessToken') || '',
  refreshToken: localStorage.getItem('refreshToken') || '',
  user: {
    userName: localStorage.getItem('userName') || '',
  },
};

const reducer = (state: AuthState = initialState, action: AuthAction) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem('accessToken', action.payload?.accessToken ?? '');
      localStorage.setItem('refreshToken', action.payload?.refreshToken ?? '');
      localStorage.setItem('userName', action.payload?.user?.userName ?? '');
      return {
        ...state,
        accessToken: action.payload?.accessToken ?? '',
        refreshToken: action.payload?.refreshToken ?? '',
        user: action.payload?.user,
      };
    case 'LOGOUT':
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('userName');
      return initialState;
    default:
      return state;
  }
};

const store: Store<AuthState, AuthAction> = createStore(reducer, initialState);

export default store;
import { atom } from 'recoil';

export const LoginState = atom({
  key: 'LoginState',
  default: {
    isLogin: false,
    userId: 0,
    userRole: '',
  },
});

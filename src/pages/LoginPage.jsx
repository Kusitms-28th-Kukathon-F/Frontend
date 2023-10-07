import { useState } from 'react';
import Axios from '../apis';

const LoginPage = () => {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async e => {
    e.preventDefault();
    await Axios.post('users', {
      loginId,
      password,
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => console.error(err));
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <input onChange={e => setLoginId(e.target.value)} />
        <input onChange={e => setPassword(e.target.value)} />
        <button>로그인</button>
      </form>
    </>
  );
};

export default LoginPage;

import { useState, useContext } from 'react';
import AuthContext from '../Store/auth_context';

const TeacherLogin = () => {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const context = useContext(AuthContext);

  const onChangeUsernameHandler = (e) => {
    const value = e.target.value;
    setUsername(value);

    if (password.length > 0 && value.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };
  const onChangePasswordHandler = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (value.length > 0 && username.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };

  const onSave = (e) => {
    e.preventDefault();

    context.onLogin({
      userName: username,
      password,
    });
  };

  return (
    <section className='container' data-testid="teacher-login-component"> 
      <h1 className='page-title'>Login för lärare</h1>
      <form onSubmit={onSave}>
        <div className='form-control'>
          <label htmlFor='username'>Användarnamn</label>
          <input
            id='username'
            placeholder='Användarnamn/Email'
            value={username}
            onChange={onChangeUsernameHandler}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='password'>Lösenord</label>
          <input
            type='password'
            id='password'
            placeholder='Lösenord'
            value={password}
            onChange={onChangePasswordHandler}
          />
        </div>
        <div className='form-control'>
          <input
            className='btn btn-primary'
            type='submit'
            value='Login'
            disabled={buttonDisabled}
          />
        </div>
      </form>
    </section>
  );
};

export default TeacherLogin;

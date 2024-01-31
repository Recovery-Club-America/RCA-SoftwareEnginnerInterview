import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function LogOutButton(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    history.push('/login');
  };
  return (
    <button
      className={props.className}
      onClick={handleLogout}
    >
      Log Out
    </button>
  );
}

export default LogOutButton;

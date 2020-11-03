import React, { useReducer } from 'react';
import alertContext from './alertContext';
import alertReducer from './alertReducer';
import { SHOW_ALERT, HIDE_ALERT } from 'types/index';

const AlertState = props => {
  //Estado inicial
  const initialState = {
    alert: null,
  }
  // Reducer
  const [state, dispatch] = useReducer(alertReducer, initialState);

  //Funciones
  const showAlert = (msg, category) => {
    dispatch({
      type: SHOW_ALERT, payload: { msg, category }
    });
    setTimeout(() => {
      dispatch({ type: HIDE_ALERT })
    }, 5000)
  }

  return (
    <alertContext.Provider value={{
      alert: state.alert,
      showAlert
    }}>
      {props.children}
    </alertContext.Provider>
  );
}
 
export default AlertState;
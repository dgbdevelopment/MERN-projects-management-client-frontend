import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({msg, category}) => {
  return (<div className={`alerta ${category}`}>
    {msg.map((message, index)=> <p key={`alert${index}`}>{message.msg}</p>)}
  </div> );
}

Alert.propTypes = {
  msg: PropTypes.arrayOf(PropTypes.shape({ msg: PropTypes.string.isRequired })).isRequired,
  category: PropTypes.string.isRequired,
};
 
export default Alert
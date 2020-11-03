import {SHOW_ALERT, HIDE_ALERT} from 'types/index';

const taskReducer = (state, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return { alert: action.payload };
    case HIDE_ALERT:
      return {alert: null}
    default:
      return state;
  }
}
export default taskReducer;
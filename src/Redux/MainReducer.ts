import { api } from '../api/api';

let initialState = {
  IP: '',
  Weather: {},
};
interface ActionInterface {
  type: string;
  IP: string;
  Weather: object;
}

const SET_IP = 'main/SET_IP';

const MainReducer = (state = initialState, action: ActionInterface) => {
  switch (action.type) {
    case SET_IP:
      return {
        ...state,
        IP: action.IP,
      };

    default:
      return state;
  }
};

export const SetIp = (IP: ActionInterface) => ({
  type: SET_IP,
  IP: IP,
});

export default MainReducer;

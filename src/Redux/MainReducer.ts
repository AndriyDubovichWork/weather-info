import { api } from '../api/api';

let initialState = {
  IP: '',
  Weather: {},
};
interface IAction {
  type: string;
  IP: string;
  Weather: any;
}

const SET_IP = 'main/SET_IP';
const GET_WEATHER = 'main/GET_WEATHER';

const MainReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case SET_IP:
      return {
        ...state,
        IP: action.IP,
      };
    case GET_WEATHER:
      return {
        ...state,
        Weather: action.Weather,
      };

    default:
      return state;
  }
};

const SetIp = (IP: string) => ({
  type: SET_IP,
  IP,
});
const SetWeather = (Weather: IAction) => ({
  type: GET_WEATHER,
  Weather,
});

export const GetWeatherByIP = () => async (dispatch: Function) => {
  const IP: string = await api.GetIP();
  dispatch(SetIp(IP));
  dispatch(GetWeather(IP));
};
export const GetWeather = (IP: string) => async (dispatch: Function) => {
  let Weather: any = await api.GetWeather(IP);
  let Place = Weather.location;
  Weather = Weather.current;

  let DateNow: any = new Date(Date.now());
  const DateNum = DateNow.getDate();
  const Day = DateNow.getDay();
  var DayNames = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  const Month = DateNow.getMonth();
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  DateNow = `${DayNames[Day - 2]}, ${DateNum} ${monthNames[Month]}`;
  Weather.DateNow = DateNow;
  Weather.Place = Place;
  dispatch(SetWeather(Weather));
};

export default MainReducer;

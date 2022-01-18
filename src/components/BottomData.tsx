import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { Box, Typography } from '@mui/material';
import CuteText from './CuteText';

interface IData {
  Weather: {
    temp_c: number;
    wind_kph: number;
    humidity: number;
    DateNow: string;
    condition: { text: string };
  };
}

function BottomData(props: IData) {
  return (
    <Box
      sx={{
        height: '50%',
        width: '90%',
        bgcolor: 'rgba(250,250,250,0.5)',
        backdropFilter: 'blur(5px)',
        margin: '30px 5%',
        borderRadius: 5,
        border: 2,
        borderColor: '#fff',
        position: 'absolute',
        display: 'inline-block',

        bottom: 0,
        left: 0,
      }}
    >
      <CuteText FSZ='0.9rem'>{props.Weather.DateNow}</CuteText>
      <CuteText FSZ='6rem'>
        {props.Weather.temp_c}
        <sup>°</sup>
      </CuteText>
      <CuteText FSZ='1.6rem'>{props.Weather.condition.text}</CuteText>
      <CuteText FSZ='1.4rem'>wind | {props.Weather.wind_kph} kmph</CuteText>
      <CuteText FSZ='1.4rem'>Hum | {props.Weather.humidity}%</CuteText>
    </Box>
  );
}
interface Istate {
  main: { IP: string; Weather: object };
}

const MapStateToProps = (state: Istate) => {
  return {
    state: state.main,
  };
};
const MapDispatchToProps = (dispatch: Function) => {
  return {};
};
export default compose(connect(MapStateToProps, MapDispatchToProps))(
  BottomData
);

import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { Box, Typography } from '@mui/material';

import CloudIcon from '@mui/icons-material/Cloud';
import NotificationsIcon from '@mui/icons-material/Notifications';

import { api } from './../api/api';
import BottomData from './BottomData';
import TopData from './TopData';

function WeatherMainCard() {
  useEffect(() => {
    // const IP = api.GetIP();
    // console.log(api.GetWeather(IP));
  }, []);
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
      }}
    >
      <Box
        sx={{
          fontFamily: 'Be Vietnam Pro',
          position: 'relative',
          display: 'inline-block',
          width: '300px',
          height: '500px',
          verticalAlign: 'middle',
          textAlign: 'center',
          backgroundColor: '#47BFDF',
          borderRadius: 3,
        }}
      >
        <TopData />

        <CloudIcon sx={{ fontSize: '200px' }} />
        <BottomData />
      </Box>
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
  WeatherMainCard
);

import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { Box, Typography } from '@mui/material';

import CuteText from './CuteText';
import NotificationsIcon from '@mui/icons-material/Notifications';

import { api } from './../api/api';
import BottomData from './BottomData';

function CellingData(props: { place: { name: string } }) {
  useEffect(() => {
    // const IP = api.GetIP();
    // console.log(api.GetWeather(IP));
  }, []);
  return (
    <Box sx={{ position: 'relative', top: '10px' }}>
      <Box sx={{ position: 'absolute', left: '25px', fontSize: '1rem' }}>
        {props.place.name}
      </Box>
      <Box sx={{ position: 'absolute', right: '25px' }}>
        <NotificationsIcon />
      </Box>
    </Box>
  );
}

const MapStateToProps = (state: any) => {
  return {};
};
const MapDispatchToProps = (dispatch: Function) => {
  return {};
};
export default compose(connect(MapStateToProps, MapDispatchToProps))(
  CellingData
);

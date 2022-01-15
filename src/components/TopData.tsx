import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { Box, Typography } from '@mui/material';

import CloudIcon from '@mui/icons-material/Cloud';
import NotificationsIcon from '@mui/icons-material/Notifications';

import { api } from './../api/api';
import BottomData from './BottomData';

function TopData() {
  useEffect(() => {
    // const IP = api.GetIP();
    // console.log(api.GetWeather(IP));
  }, []);
  return (
    <Box sx={{ position: 'relative', top: '10px' }}>
      <Box sx={{ position: 'absolute', left: '25px' }}>City</Box>
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
export default compose(connect(MapStateToProps, MapDispatchToProps))(TopData);

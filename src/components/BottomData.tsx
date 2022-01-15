import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { Box, Typography } from '@mui/material';
import CuteText from './CuteText';

function BottomData() {
  return (
    <Box
      sx={{
        height: '50%',
        width: '90%',
        bgcolor: 'rgba(250,250,250,0.5)',
        backdropFilter: 'blur(20px)',
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
      <CuteText FSZ='1.5rem'>date</CuteText>
      <Typography
        sx={{ padding: 0, margin: 0, lineHeight: 1, fontSize: '6rem' }}
      >
        29<sup>°</sup>
      </Typography>
      <CuteText FSZ='1.8rem'>skyies</CuteText>
      <CuteText FSZ='1.4rem'>wind | data</CuteText>
      <CuteText FSZ='1.4rem'>Hum | data</CuteText>
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

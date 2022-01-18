import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { Box, Typography } from '@mui/material';

interface IText {
  children: any;
  FSZ: string;
}

function CuteText(props: IText) {
  return (
    <Typography
      variant={'h1'}
      sx={{
        fontFamily: 'Be Vietnam Pro',
        color: '#123',
        textShadow: '0 1px 0 rgb(30, 130, 230)',
        fontSize: `${props.FSZ}`,
        fontWeigth: '500',
      }}
    >
      {props.children}
    </Typography>
  );
}
interface Istate {}

const MapStateToProps = (state: Istate) => {
  return {};
};
const MapDispatchToProps = (dispatch: Function) => {
  return {};
};
export default compose(connect(MapStateToProps, MapDispatchToProps))(CuteText);

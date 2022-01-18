import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { Box, Typography } from '@mui/material';

import { CardMedia } from '@mui/material';

import BottomData from './BottomData';
import CellingData from './CellingData';

import { GetWeather, GetWeatherByIP } from './../Redux/MainReducer';

import Preloader from './preloader/preloader';

interface IWeatherMainCard {
  state: { IP: string; Weather: any };
  GetWeatherByIP: Function;
  GetWeather: Function;
}

function WeatherMainCard(props: IWeatherMainCard) {
  useEffect(() => {
    props.GetWeatherByIP();
  }, []);
  // useEffect(() => {
  //   const Weather = props.state.Weather;
  // });

  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
      }}
    >
      {!props.state.Weather.condition ? (
        <Preloader />
      ) : (
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
            color: '#123',
          }}
        >
          <CellingData place={props.state.Weather.Place} />

          <Box
            component='img'
            src={'https:' + props.state.Weather.condition.icon}
            sx={{ height: '150px', width: '150px', mt: 5 }}
          />
          <BottomData Weather={props.state.Weather} />
        </Box>
      )}
    </Box>
  );
}
interface Istate {
  main: any;
}

const MapStateToProps = (state: Istate) => {
  return {
    state: state.main,
  };
};

export default compose(
  connect(MapStateToProps, { GetWeather, GetWeatherByIP })
)(WeatherMainCard);

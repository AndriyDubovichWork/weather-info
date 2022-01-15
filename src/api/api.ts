import React from 'react';
import axios from 'axios';

interface GetWeatherProps {
  IP: string;
}

export const api = {
  GetIP: () => {
    return axios
      .get('https://geolocation-db.com/json/')
      .then((response) => console.log(response));
  },
  GetWeather: async (IP: GetWeatherProps) => {
    return await axios
      .request({
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: { q: IP },
        headers: {
          'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
          'x-rapidapi-key':
            '933c98fa7amshe2840a4a213dfadp15a53ajsn8629f35eaef5',
        },
      })
      .then((response) => response);
  },
};

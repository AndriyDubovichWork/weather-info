import React from 'react';
import preloader from '../../assets/images/preloader.svg';
import style from './preloader.module.css';

const Preloader = () => {
  return (
    <div className={style.proloader}>
      <img alt='' src={preloader} />
    </div>
  );
};
export default Preloader;

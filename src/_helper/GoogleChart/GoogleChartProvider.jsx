import Context from './index';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { GooglechartApi } from '../../api';

const GoogleChartProvider = (props) => {
  const [googleChart, setGoogleChart] = useState([]);

  useEffect(() => {
    const getChartData = async () => {
      try {
        await axios.get(GooglechartApi).then((resp) => {
          setGoogleChart(resp.data);
        });
      } catch (error) {
        console.log('cancelled', error);
      }
    };
    getChartData();
  }, [setGoogleChart]);

  return (
    <Context.Provider
      value={{
        ...props,
        googleChart,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default GoogleChartProvider;
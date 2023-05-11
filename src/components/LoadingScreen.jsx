import React from 'react';
import { Triangle } from 'react-loader-spinner';

const LoadingScreen = () => (
  <div className="loading-screen">
    <Triangle
      height="100"
      width="100"
      color="#000000"
      ariaLabel="triangle-loading"
      visible={true}
    />
  </div>
);

export default LoadingScreen;

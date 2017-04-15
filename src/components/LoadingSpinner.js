import React from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';

const LoadingSpinner = () => (
  <RefreshIndicator
    size={50}
    left={0}
    top={0}
    loadingColor="#FF9800"
    status="loading"
    style={{ display: 'inline-block', margin: 50, position: 'relative' }}
  />
);

export default LoadingSpinner;

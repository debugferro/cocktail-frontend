import React from 'react';

import '../../load_spinner.css';

function LoadSpinner() {
  return (
    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
  );
}

export default LoadSpinner;

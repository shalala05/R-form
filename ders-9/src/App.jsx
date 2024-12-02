import React from 'react';
import CustomButton from './Button.jsx';

const App = () => {
  return (
    <div>
      <CustomButton
        text="Default Button"
        warnMessage="This is a warning message!"
        hint="Hover for a hint!"
      />
    </div>
  );
};

export default App;

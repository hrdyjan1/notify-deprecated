import React from 'react';
import {App} from './components/custom/App';
import {UserProvider} from './contexts/user';

function AppContainer() {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
}

export default AppContainer;

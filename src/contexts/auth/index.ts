import React from 'react';

import Context from './context';

export const useAuth = () => {
  const admin = React.useContext(Context);

  if (!admin) {
    throw new Error('useUI must be used within UIProvider');
  }

  return admin;
};

import React from 'react';
import {isNotDefined} from './basic';

function createCtx<A>() {
  const ctx = React.createContext<A | undefined>(undefined);
  function useCtx() {
    const c = React.useContext(ctx);
    if (isNotDefined(c)) {
      throw new Error('useCtx must be inside a Provider with a value');
    }
    return c;
  }
  return [useCtx, ctx.Provider] as const;
}

export {createCtx};

import React, { FunctionComponent, useEffect } from 'react';

const CountStateContext = React.createContext(null);
const CountUpdaterContext = React.createContext(null);

const CountProvider: FunctionComponent = ({ children }) => {
  const [count, setCount] = React.useState(0);
  useEffect(() => console.log('asd'), [setCount]);
  return (
    <CountStateContext.Provider value={count}>
      <CountUpdaterContext.Provider value={{ setCount }}>{children}</CountUpdaterContext.Provider>
    </CountStateContext.Provider>
  );
};

const useCountState = (): React.Context<number> => {
  const countState = React.useContext(CountStateContext);
  if (typeof countState === undefined) {
    throw new Error('useCountState must be used within a CountProvider');
  }
  return countState;
};

const useCountUpdater = () => {
  const { setCount } = React.useContext(CountUpdaterContext);
  if (typeof setCount === undefined) {
    throw new Error('useCountUpdater must be used within a CountProvider');
  }
  const increment = React.useCallback(() => {
    setCount((c: number) => c + 1);
    console.log('setCount');
  }, [setCount]);
  return increment;
};

export { CountProvider, useCountState, useCountUpdater };

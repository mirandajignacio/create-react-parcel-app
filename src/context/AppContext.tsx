import React, { FunctionComponent, useEffect } from 'react';

const CountStateContext = React.createContext(0);
const CountUpdaterContext = React.createContext({
  setCount: (f: (v: number) => number) => {}
});

const CountProvider: FunctionComponent = props => {
  const [count, setCount] = React.useState(0);
  useEffect(() => console.log('asd'), [setCount]);
  return (
    <CountStateContext.Provider value={count}>
      <CountUpdaterContext.Provider value={{ setCount }}>
        {props.children}
      </CountUpdaterContext.Provider>
    </CountStateContext.Provider>
  );
};

function useCountState() {
  const countState = React.useContext(CountStateContext);
  if (typeof countState === undefined) {
    throw new Error('useCountState must be used within a CountProvider');
  }
  return countState;
}

function useCountUpdater() {
  const { setCount } = React.useContext(CountUpdaterContext);
  if (typeof setCount === undefined) {
    throw new Error('useCountUpdater must be used within a CountProvider');
  }
  const increment = React.useCallback(() => {
    setCount((c: number) => c + 1);
    console.log('setCount');
  }, [setCount]);
  return increment;
}

export { CountProvider, useCountState, useCountUpdater };

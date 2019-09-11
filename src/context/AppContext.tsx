import React, { FunctionComponent } from 'react';

const AppStateContext = React.createContext({});
const AppUpdaterContext = React.createContext({});

// const AppUpdaterContext = React.createContext<() => void>(() => {});

// const AppUpdaterContext = React.createContext({
//   setCount: (f: (v: number) => number) => {}
// });

const AppProvider: FunctionComponent = props => {
  const [count, setCount] = React.useState(0);
  return (
    <AppStateContext.Provider value={count}>
      <AppUpdaterContext.Provider value={{ setCount }}>
        {props.children}
      </AppUpdaterContext.Provider>
    </AppStateContext.Provider>
  );
};

function useCountState() {
  const countState = React.useContext(AppStateContext);
  if (typeof countState === undefined) {
    throw new Error('useCountState must be used within a CountProvider');
  }
  return countState;
}

function useCountUpdater() {
  const { setCount } = React.useContext(AppUpdaterContext);
  if (typeof setCount === undefined) {
    throw new Error('useCountUpdater must be used within a CountProvider');
  }
  const increment = React.useCallback(() => {
    setCount((c: number) => c + 1);
  }, [setCount]);
  return increment;
}

export { AppProvider, useCountState, useCountUpdater };

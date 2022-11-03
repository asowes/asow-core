import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { combineReducers } from "@reduxjs/toolkit";

import { reducers, store } from "@asow/core/redux";

interface AppProps {
  Component: any;
  extraReducer: { [name: string]: {} };
}

const App = (props: AppProps) => {
  // const _theme = extendTheme({ ...theme });

  const { Component, extraReducer } = props;
  const _reducers = combineReducers({
    ...reducers,
    ...extraReducer,
  });

  store.replaceReducer(_reducers);

  return (
    <React.Fragment>
      <ReduxProvider store={store}>
        <Component />
      </ReduxProvider>
    </React.Fragment>
  );
};

export default App;

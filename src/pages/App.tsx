import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { combineReducers } from "@reduxjs/toolkit";

import { reducers, store } from "@asow/core/redux";

const theme = {
  breakpoints: {
    base: "0px",
    sm: "375px",
    md: "640px",
    lg: "1024px",
    xl: "1440px",
  },
};

interface AppProps {
  Component: any;
  extraReducer?: { [name: string]: {} };
}

const App = (props: AppProps) => {
  const _theme = extendTheme({ ...theme });

  const { Component, extraReducer } = props;
  const _reducers = combineReducers({
    ...reducers,
    ...extraReducer,
  });

  store.replaceReducer(_reducers);

  return (
    <React.Fragment>
      <ChakraProvider theme={_theme}>
        <ReduxProvider store={store}>
          <Component />
        </ReduxProvider>
      </ChakraProvider>
    </React.Fragment>
  );
};

export default App;

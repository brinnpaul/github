import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'

import store from './store';
import Display from './display'

const App = () => {
  return (
    <Provider store={store}>
      <Display />
    </Provider>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));
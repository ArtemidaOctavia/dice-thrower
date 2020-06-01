import React from 'react';
import './App.css';
import {MainContainer} from "./components/main/MainContainer";
import {Provider} from "react-redux";
import {store} from "./redux/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <MainContainer/>
      </Provider>
    </div>
  );
}

export default App;

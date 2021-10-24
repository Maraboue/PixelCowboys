import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
import { Provider } from "react-redux";
import "./styles/reset.css";
import "./styles/theme.css";

import Mint from './components/Mint';

ReactDOM.render(

  <BrowserRouter>
  <Provider store={store}>
    <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/mint" component={Mint}/>
    </Switch>
  </Provider>,
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

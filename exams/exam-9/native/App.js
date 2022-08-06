import React, { Component } from "react";
import { AppLoading } from "expo";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import thunk from "redux-thunk";
import rootReducer from "./store/reducers/rootReducer";
import Contacts from "./pages/Contacts";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Provider store={store}>
        <Contacts />
      </Provider>
    );
  }
}

import React from "react";
import { Provider } from "react-redux";
import store from "../src/store";
import Bai2 from "../src/bai2";  // Ensure the component name is capitalized
import Bai3 from "../src/bai3";
import Stack_Navigation from "../src/Stack";
export default function Index() {
  return (
    <Provider store={store}>
        
      <Stack_Navigation/>
    </Provider>
  );
}

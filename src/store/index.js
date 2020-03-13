import { createStore } from "redux";

import routReducer from "./modules/routReducer";

const enhancer = process.env.NODE_ENV === "development"
    ? console.tron.createEnhancer()
    : null;

const store = createStore(routReducer, enhancer);

export default store;
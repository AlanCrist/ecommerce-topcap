import { createStore } from "redux";

import routReducer from "./modules/routReducer";

const store = createStore(routReducer);

export default store;
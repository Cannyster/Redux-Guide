<<<<<<< HEAD
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./root-reducer";
import logger from "redux-logger";

const store = createStore(rootReducer, applyMiddleware(logger));
=======
import { createStore } from "redux";

import rootReducer from "./root-reducer";

const store = createStore(rootReducer);
>>>>>>> c8df265bba97759761fbeb2d33cbe8012a166f00

export default store;

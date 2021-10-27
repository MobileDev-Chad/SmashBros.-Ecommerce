import {createStore} from "redux"
import rootReducers from "./src/redux/reducer"

const store = createStore(rootReducers);

export default store;
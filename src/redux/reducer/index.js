import addItem from "./addItem"
import {combineReducers} from 'redux';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducers = combineReducers({
    addItem,
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['addItem']
}

export default persistReducer(persistConfig, rootReducers) ;
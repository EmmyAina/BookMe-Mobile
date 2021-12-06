import { createStore, combineReducers } from 'redux'
import {reducer} from "../reducers/index"

const rootReducer = combineReducers({
	reducers: reducer
})

const configStore = () => createStore(rootReducer);

export default configStore;
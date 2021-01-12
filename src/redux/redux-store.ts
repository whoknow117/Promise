import {combineReducers, createStore, Store} from "redux";
import {addReviewReducer} from "./addReview-reducer";
import {ActionTypes} from "../types/types";

export type StateReducersType = ReturnType<typeof reducers>

let reducers = combineReducers({
    reviews: addReviewReducer
})


export type RootStateType = Store<StateReducersType,ActionTypes >


let store = createStore(reducers)


export default store;
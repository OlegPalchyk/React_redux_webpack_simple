import {createStore, applyMiddleware, combineReducers, compose} from "redux";
import reduxReset from "redux-reset";
import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";
import {routerReducer} from "react-router-redux";
import data from "../reducers/page_two_data";
const logger = createLogger();
const rootReducer = combineReducers({
    data,
    routing: routerReducer

});

const initialState = {};

export default function configureStore() {
    let store;

    if (module.hot) {
        store = createStore(
            rootReducer,
            initialState,
            compose(
                applyMiddleware(thunkMiddleware, logger,),
                reduxReset(),
                window.devToolsExtension ? window.devToolsExtension() : f => f
            )
        );
    } else {
        store = createStore(
            rootReducer,
            initialState,
            compose(applyMiddleware(thunkMiddleware), reduxReset(), f => f),

        );
    }

    return store;
}
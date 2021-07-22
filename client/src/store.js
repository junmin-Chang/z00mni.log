import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
const persistConfig = {
    key: 'root',
    storage,
    whitelist:["auth"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const initialState = {};

const middleware = [thunk];
export default function configureStore() {
    const store = createStore(persistedReducer, initialState, compose(
        applyMiddleware(...middleware),
    ))
    const persistor = persistStore(store);
    return { store, persistor }
}


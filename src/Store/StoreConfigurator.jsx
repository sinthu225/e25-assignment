import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import reducers from '../Reducers/Index';

import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage,
};


// const rfConfig = {}; // optional redux-firestore Config Options
const rootReducer = (state, action) => {
    return reducers(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

//Store Creation
export default () => {
    const store = createStore(
        persistedReducer,
        // REDUX DEVTOOL for CHROME
        composeEnhancers(
            applyMiddleware(
                thunk //.withExtraArgument(getFirebase)
            ),
            // reactReduxFirebase(firebase, rrfConfig),
            // reduxFirestore(firebase, rfConfig), 
        )
    );

    // const rrfProps = {
    //     firebase,
    //     config: rrfConfig,
    //     dispatch: store.dispatch,
    //     createFirestoreInstance // <- needed if using firestore
    // };

    const persistor = persistStore(store);
    return { store, persistor };
};

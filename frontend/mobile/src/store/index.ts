import { Store, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import { RootState, rootReducer } from 'ducks';
import { AsyncStorage } from 'react-native';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'local'],
};

export function configureStore(
  initialState?: RootState
): { store: Store<RootState>; persistor: any } {
  let middleware = applyMiddleware(thunk);

  const persistedReducer = persistReducer(persistConfig as any, rootReducer);

  const store = createStore(persistedReducer as any, initialState || {}, middleware) as Store<
    RootState
  >;

  if (module.hot) {
    module.hot.accept('ducks', () => {
      const nextReducer = require('ducks').default;
      store.replaceReducer(nextReducer);
    });
  }

  let persistor = persistStore(store);
  //persistor.purge();
  return { store, persistor };
}

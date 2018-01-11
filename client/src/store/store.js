import { applyMiddleware, createStore } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import rootReducer from '../reducers';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';

// create middlewares
const middleware = applyMiddleware(promise(),thunk, logger);

// state management: start the app with the current state in localStr
const persistedState = loadState();

const store = createStore(rootReducer, persistedState, middleware);

// save the state anytime we have a change in the store
// add lodash #throttle to prevent overuse of an expensive ...
// ... JSON #stringify method in the saveState fn.
store.subscribe(throttle(() => {
	saveState({ 
		// pass specific object to limit scope of state saved
		// e.g. not save state of a visibility filter
		todos: store.getState().todos
	});
	// limits the store update to just 1x second
}, 1000));

export default store;

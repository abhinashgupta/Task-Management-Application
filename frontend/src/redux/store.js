import { combineReducers, createStore , applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { tasksReducers } from './reducers/tasksReducers';
import { tabReducer } from './reducers/tabReducer';

const reducer = combineReducers({
    tasks: tasksReducers,
    currentTab : tabReducer
})

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store
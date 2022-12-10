import { createStore } from 'redux'
import data from './reducers/data'

const store = createStore(data)

export default store

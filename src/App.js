import React from 'react'
import './styles.css'
import { Provider } from 'react-redux'
import ListTodo from './ListTodo'
import store from './store'

console.log(store.getState())

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hi</h1>
        <ListTodo />
      </div>
    </Provider>
  )
}

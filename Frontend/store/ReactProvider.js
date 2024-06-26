import { View, Text } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import store from './store'

export default function ReactProvider({children}) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
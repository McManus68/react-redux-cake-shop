import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import CakeContainer from './components/CakeContainer'
import HooksCakeContainer from './components/HooksCakeContainer'
import NewCakeContainer from './components/NewCakeContainer'
import IceCreamContainer from './components/IceCreamContainer'
import UserContainer from './components/UserContainer'

import './App.css'

function App() {
  return (
    <Provider store={store}>
      <div className='app'>
        <UserContainer />
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  )
}

export default App

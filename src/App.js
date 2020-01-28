import React from 'react'
import {Route, Switch} from 'react-router-dom'
import AllServices from './components/AllServices'
import FirstStep from './components/FirstStep'
import SecondStep from './components/SecondStep'
import ThirdStep from './components/ThirdStep'
import FinalResult from './components/FinalResult'

const App = () => {
  return (
    <div className='App'>
        <Switch>
          <Route exact component={FirstStep} path='/:parent' />
          <Route exact component={SecondStep} path='/:parent/:child' />
          <Route exact component={ThirdStep} path='/:parent/:child/:child' />
          <Route exact component={FinalResult} path='/:parent/:child/:child/:final' />
          <Route exact component={AllServices} path='/' />
        </Switch>
    </div>
  )
}

export default App

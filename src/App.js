import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Footer from './Components/Footer'
import Home from './Pages/Home'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

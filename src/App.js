import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import ResultPage from './Pages/ResultPage'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/result/:searchTerm" component={ResultPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

import React from 'react'
import Quiz from './components/Quiz'
import "./App.css"
import Login from './Login/Login'
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <>
    <div className="heading-txt">
      <p className="heading-txt">Mental Health Survey</p>
      </div>
      <Login />
      {/* <Quiz /> */}
    </>
  )
}

export default App
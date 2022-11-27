import React, { Component } from 'react'
import Navbar from './.components/Navbar'
import News from './.components/News'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />

          <Routes>
            <Route  path='/business' element={<News key='business' category = 'business' /> } /> 
            <Route  path='/' element={<News key='general'category = 'general' /> } />
            <Route  path='/Entertainment' element={<News key='Entertainment'category = 'Entertainment' /> } />
            <Route  path='/Health' element={<News key='Health'category = 'Health' /> } />
            <Route  path='/Science' element={<News key='Science'category = 'Science' /> } />
            <Route  path='/Sports' element={<News key='Sports'category = 'Sports' /> } />
            <Route  path='/Technology' element={<News key='Technology'category = 'Technology' /> } /> 
          </Routes>
          
      </Router>
      
      </div >
    )
  }
}

import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'
// import './app.css'

export default class App extends Component {
    render() {
        return (
            <div >
               <Search/>
               <List/>
            </div>
        )
    }
}

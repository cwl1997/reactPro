import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

export default class App extends Component {
    render() {
        return (
            <div>
                <h2>React router demo</h2>
                <div>                    
                    <div>
                        {/* react中靠路由链接切换组件 */}
                        <Link to="/about">About</Link>
                        <Link to="/home">Home</Link>                                        
                    </div>
                    <div>
                        {/* 注册路由 */}
                        <Route path="/about" component={About}/>
                        <Route path="/home" component={Home}/>
                    </div>                   
                </div>                             
            </div>
        )   
    }
}

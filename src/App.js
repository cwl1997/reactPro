import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
  getData=()=>{
    axios.get('/api1/student').then(
      response => {console.log('成功了',response.data)},
      error =>{console.log('失败',error)}
    )
  }
  getData2=()=>{
    axios.get('/api2/student').then(
      response => {console.log('成功了',response.data)},
      error =>{console.log('失败',error)}
    )
  }
  render() {
    return (
      <div>
          <button onClick={this.getData}>点我获取数据</button>
          <button onClick={this.getData2}>点我获取数据2</button>
      </div>
    )
  }
}

// import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react'
// import PropTypes from 'prop-types'
// import Hello from './components/Hello'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> 1231and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


// 创建并暴漏App组件
export default class App extends Component{
  // 状态在哪里,操作状态的方法就在那里

  // 对接受的props进行:类型,必要性的限制
//   static PropTypes = {
//     todos:PropTypes.arrar.isRequired,
//     updateTodo:PropTypes.func.isRequired
// }

  // 初始化数据
  state = {todos:[
    {id:'001',name:'吃饭',done:true},
    {id:'002',name:'睡觉',done:true},
    {id:'003',name:'打代码',done:false},
    {id:'004',name:'逛街',done:false}
  ]}

  // addtodo 用于添加一个todo,接收的参数是todo的对象
  addTodo = (todoObj)=>{
    console.log('app',todoObj)
    // 获取袁todos
    const {todos} = this.state
    // 追加一个todo
    const newTodos = [todoObj,...todos]
    // 更新状态
    this.setState({todos:newTodos})
  }

  // updteTodo
  updateTodo = (id,done)=>{
    // 获取状态中的todos
    const {todos} = this.state
    const newTodos = todos.map(todoObj=>{
      if(todoObj.id ===id) return {...todoObj,done}
      else return todoObj
    })
    this.setState({todos:newTodos})
  }

  // deletetodo 用于删除一个todo
  deleteTodo = (id)=>{
    // 获取原来的todos
    const {todos} = this.state
    const newTodos = todos.filter(todoObj=>{
      return todoObj.id !== id
    })
    this.setState({todos:newTodos})
  }

  // 全选
  checkAllTodo = (done)=>{
    const {todos} = this.state
    const newTodos = todos.map((todoObj)=>{
      return {...todoObj,done}
    })
    this.setState({todos:newTodos})
  }

  // 清除所有完成的 
  clearAllDone = ()=>{
    const {todos} = this.state
    const newTodos = todos.filter((todoObj)=>{
      return !todoObj.done 
    })
    this.setState({todos:newTodos})
  }

  render(){
    const {todos} = this.state
    return (
      <div className="todo-container">
          <div className="todo-wrap">
            <Header addTodo={this.addTodo}/>
            <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
            <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone = {this.clearAllDone}/>
          </div>          
      </div>
    );
  }
}


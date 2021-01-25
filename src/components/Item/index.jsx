import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
    
    state={mouse:false}//鼠标移入移出

    // 鼠标移入移出的回调
    handleMouse = (flag)=>{
        return ()=>{
            // console.log(flag)
            this.setState({mouse:flag})
        }
    }

    // 勾选,取消的回调
    handleCheck = (id)=>{
        return (event)=>{
            // console.log(id,event.target.checked)
            this.props.updateTodo(id,event.target.checked)
        }
    }

    render() {
        const {id, name ,done} = this.props
        const {mouse} = this.state
        return (
            <li style={{backgroundColor:mouse ? '#ddd':'white'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
                <label>
                    <input type="checkbox" onChange={this.handleCheck(id)} defaultChecked={done}/>
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" style={{display:mouse?'block':'none'}}>删除</button>
            </li>
        )
    }
}

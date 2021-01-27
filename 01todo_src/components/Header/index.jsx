import React, { Component } from 'react'
// import propTypes from 'prop-types'
import {nanoid} from 'nanoid'
import './index.css'

export default class Haeder extends Component {

    // 对接受的props进行:类型,必要性的限制
    // static propTypes = {
    //     addTodo:propTypes.func.isRequired
    // }

    handleKeyUp = (event)=>{
        // 结构赋值获取keyCode,target
        const {keyCode,target} = event
        // 判断是否是回车键
        if(keyCode !== 13) return
        console.log(target.value)
        // 添加的todo名字不能为空
        if(target.value.trim() === ''){
            alert('输入不能为空')
            return
        }
        // 准备好一个todo对象
        const todoObj = {id:nanoid(),name:target.value,done:false}
        // 将todoObj传递给App
        this.props.addTodo(todoObj)
        // 清空value
        target.value = ''
    }

    render() {
        return (
            <div className="todo-header">
                <input type="text" onKeyUp={this.handleKeyUp} placeholder="请输入你的任务名称。按回车键确认"/>
            </div>
        )
    }
}

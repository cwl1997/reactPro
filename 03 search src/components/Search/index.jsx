import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
    search = ()=>{
        // 获取用户输入(连续解构赋值加重命名)
        const {keyWordElement:{value:keyWord}} = this
        console.log(keyWord)
        // 发送用户请求
        axios.get(`https://api.github.com/search/user?q=${keyWord}`).then(
            response =>{console.log('成功了',response.data)},
            error => {console.log('失败了',error)}
        )

    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users </h3>
                <div>
                    <input ref={c => this.keyWordElement = c} type="text" placeholder="输入进行搜索"/>&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}

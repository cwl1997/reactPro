import React, { Component } from 'react'
import PubSub from 'pubsub-js'

export default class List extends Component {

    state = {
        users:[],
        isFirst:true,
        isLoading:false,
        err:''
    }

    componentDidMount(){
        this.token = PubSub.subscribe('news',(msg,data)=>{
            console.log('list',data)
            this.setState(data)
        })
    }

    componentWillUnmount(){
        PubSub.unsubscribe(this.token)
    }

    render() {
        const {users,isFirst,isLoading,err } = this.state
        return (            
            <div className="row">
                {
                    isFirst ? <h2>欢迎使用</h2>:
                    isLoading ? <h2>Loading</h2>:
                    err ? <h2> {err}</h2>:
                    users.map(userObj=>{
                        return (
                            <div key={userObj.id} className="card">
                                <a rel="noreferrer" href={userObj.html_url} target="_blank">
                                        <img src={userObj.avatar_url} alt="head_portrait" style={{width:'100px'}}/>
                                </a>
                                <p className="card-text">{userObj.login}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

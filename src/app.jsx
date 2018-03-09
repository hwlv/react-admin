import React from 'react';
import ReactDOM from 'react-dom';
// import './app.css'
import './index.scss'
// ReactDOM.render(
//     <h1>Hello, world!</h1>,
//     document.getElementById('root')
// );
let name = 'jack';
let flag = true;
let names = ['jack', 'tom', 'lucy'];
let jsx = (
    <div>
        {/*{变量}*/}
        <p>i am {name}</p>
        {/*{判断}*/}
        {
            flag ? <p>i am {name}</p> : <p>i am not {name}</p>
        }
        {/*{循环}*/}
        {
            names.map((name, index) =>
                <p key={index}>hello i am {name}</p>
            )
        }
    </div>
);

// 组件
function Compenent() {
    return <h1>i am rosen</h1>
}
class App extends React.Component {
    render(){
        return(
            <div className="" >
                <h1>app</h1>
                <hr/>
                <ES6Componet/>
            </div>
        )
    }
}
class Title extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
           <h1>{this.props.title}</h1>
        )
    }
}
class ES6Componet extends React.Component {
    constructor(props){
        super(props);
        this.state={
            name:'hwlv',
            age:10
        }
        this.handleClick=this.handleClick.bind(this);
    }
    handleClick(){
        this.setState({
            age:this.state.age+1
        })
    }
    handleClick2(){
        this.setState({
            age:this.state.age+1
        })
    }
    onValueChange(e){
        this.setState({
            age:e.target.value
        })
    }
    render() {
        return(
            <div>
                <h1> i am  {this.state.name},i am {this.props.name}</h1>
                <h1>{this.state.age}</h1>
                <button onClick={this.handleClick}>改变age(这种事件绑定还要绑定this)</button>
                <button onClick={(e)=>{
                    this.handleClick2(e)
                }}>改变age2(箭头函数)</button>
                <input type="text" onChange={(e)=>{
                    this.onValueChange(e)
                }}/>
            </div>
        )
    }
}

ReactDOM.render(
    <App name="para"/>,
    document.getElementById('app')
)
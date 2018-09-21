// create your App component here
import React, {Component} from 'react'
import ExampleComponent from './components/ExampleComponent';
import Button from './components/Button'
import Greeting from './components/Greeting'

export default class App extends Component{

    state={ data: [] }

    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
        .then(res=>res.json())
        .then(data => this.setState({data: data})  )
    }

    render(){
        return(
            <div>
                <Button />
                <ExampleComponent />
                <Greeting />
            </div>

        )
    }
}
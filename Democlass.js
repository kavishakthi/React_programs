import React ,{Component} from 'react'

class Democlass extends Component
{
    render()
    {
        return <h1>{this.props.name } is {this.props.value} </h1>
    }
}

export default Democlass
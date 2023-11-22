import React, {Component, useState} from "react"

 class ClassState extends Component{
     constructor(){
         super()
         this.state = {
             value : 'Welcome'
         }
     }
     ChangeMsg(){
         this.setState(
             {
                 value: 'Hello All !!'
             }
         )
     }
     render(){
         return (
             <div>
                 <h1>{this.state.value}</h1>
                 {/* for binding an event use arrow fn  */}
                 <button onClick={()=> this.ChangeMsg()}> Class Change State </button>
             </div>
         )
     }
 }

// using functional Component

// function ClassState(){
//     const[value, Changevalue] = useState('Welcome')

//     return(
//        <div>
//         <h1>{value}</h1>
//         <button onClick={()=>Changevalue('Hello All')}>Click This</button>
//        </div>
//     )
// }
        

export default ClassState;
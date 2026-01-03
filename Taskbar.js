import React, { Component } from 'react'
import './Task.css'

export class Task extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      
       input:'',
       priority:'low',
       tasks:[]
    }
  }

  handleSubmit=event=>{

     event.preventDefault();
     const{input,priority}=this.state;
      const newTask={
        input:this.state.input,
        priority,
        isComplete:false,
        id:Date.now(),
        Date:new Date().toLocaleDateString()
    };
     this.setState(prevState=>({
      tasks:[...prevState.tasks,newTask],
      input:'',
      priority:'low'
     }));
    
  };

  handleTaskChange=(event)=>{
    this.setState({
       input:event.target.value
    })
  }

  handlePriorityChange=(event)=>{
    this.setState({
      priority:event.target.value
    })
  }

  deleteTask=(id)=>{
   this.setState({
    tasks:this.state.tasks.filter(task=> task.id!== id)
   })
    // this.setState({tasks:updatedTasks});
  };
   
  render() {

     const{input,priority}=this.state
    return (
      <div className='con'>
      <header>
        <h1>✓ Todo Master</h1>
          <div className='app'>
            <button className='theme-btn'>Dark</button>
            <button className='theme-btn'>Light</button>
            <button className='theme-btn'>Vibrant</button>
          </div>
      </header>

      <div className='cont'>
        <div className='main'>
          <div className='input' >
           <form >
             <input  type='text'  placeholder='Add a new task ?' value={this.state.text} onChange={this.handleTaskChange}></input>
              <select value={this.state.priority} onChange={this.handlePriorityChange}>
                <option value='low'>Low</option>
             <option value='medium'>Medium</option>
             <option value='high'> High </option>
              </select>
              <button onClick={this.handleSubmit} >Add Task</button>
           </form>
          </div>
         
           <div className="filters">
                <button className="filter-btn active" data-filter="all">All (<span id="count-all">0</span>)</button>
                <button className="filter-btn" data-filter="active">Active (<span id="count-active">0</span>)</button>
                <button className="filter-btn" data-filter="done">Done (<span id="count-done">0</span>)</button>
            </div>
                   
             
            <div className="taskList" id="taskList">
              {this.state.tasks.map((task,index)=>(
                 <div className='task-list' key={index}>
                 <span className='task-text'>{task.input}</span>
                 <span className={`priority  ${task.priority}`}>{task.priority}</span>
                 <span className='date'>{task.Date}</span>
                 <span className='delete' onClick={()=>this.deleteTask(task.id)}>🗑️</span>
               </div>
              ))}

              </div>
            
            
             {/* {this.state.tasks === 0 && (
              <div className="message">
                No tasks yet. Add one to get started!
              </div>
             )} */}
              </div>
    
      </div>
  
   </div> 
    )      
  }
}


export default Task

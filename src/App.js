import React, { Component } from 'react';
import AddTodos from './components/AddTodos'
import uuid from 'uuid'
import FilterTodos from './components/FilterTodos'
import UncompletedTodos from './components/UncompletedTodos'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import All from './components/All'
import Active from './components/Active'
import Completed from './components/Completed'

class App extends Component {
	state = {
		todos: []
		        
	}
  addTodos = (text) =>{
   let newTodo = {
      id: uuid.v4(),
      text,
      completed: false
   }
   this.setState({
    todos: this.state.todos.concat(newTodo)
   })

  }

  deleteTodos = (id) =>{
    let todos = this.state.todos.filter(todo => todo.id !== id)
    this.setState({
      todos
    })
  }
   

  completeTodo = (id) =>{
    this.setState({
      todos: this.state.todos.map(todo =>{
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
    })
    
    
  }
   

  render() {
     
    return (
  <Router>
   
      <div className="container">
      
    <Navbar />
      
          <Route exact path = '/' render = {(props)=>
                     <React.Fragment> <FilterTodos
                        deleteTodos = {this.deleteTodos}
                        completeTodo = {this.completeTodo}
                        filterTodos = {this.state.todos}
                          
               />
                <UncompletedTodos todos = {this.state.todos}/>
                 <AddTodos 
    addTodos = {this.addTodos}
    />
               </React.Fragment> }
      />
        <Route path = '/active' render = {(props)=>
          <Active 
          todos = {this.state.todos}
          completeTodo = {this.completeTodo}
          />
        }
        />
        <Route path = '/completed' render = {(props)=>
          <Completed todos = {this.state.todos}
          deleteTodos = {this.deleteTodos}/>
        }
        />
      
      
		 
        
      </div>
  </Router>
    );
  }
}

export default App;

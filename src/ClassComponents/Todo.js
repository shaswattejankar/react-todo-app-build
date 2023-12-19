import React, { Component } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

export class Todo extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
                todolist : []
            }

        this.updatetodolist = this.updatetodolist.bind(this);
        
    }

    updatetodolist(todoText, id){
        this.setState({
            todolist: [...this.state.todolist,{
                id: id,
                task : todoText, 
            }]
        });
    }

    

    render() {
    return (
        <div className='container justify-content-center'>
            <h2 className='text-center'>Todo App</h2>
            <TodoList todolist={this.state.todolist} />
            <AddTodo update={this.updatetodolist}/>
        </div>
    )
    }
}

export default Todo;
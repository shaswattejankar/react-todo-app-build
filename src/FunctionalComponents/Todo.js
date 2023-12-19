import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';


const Todo = () => {
    const [todolist, setTodoList] = useState([]);
    

    // we'll use the Date.now() to give a UniqueID to each element in the array of objects i.e todolist
    // this will help us when Deleting the items    
    const updateTodoList = ( todoText ) =>{
        setTodoList( 
            [...todolist,{
                id: Date.now(),
                task : todoText,
                status :1,
            }]
        );
    }

    const markedDone = (id) =>{
        //Updating state wrt to this id
        // 1-done, 2-done, 3-delete
        let x = 2
        const temp = todolist.map( (el)=>{
            if(el.id === id){
                if(el.status === 2)
                    x = 1
                return {...el, status:x}
            }else{
                return el;
            }
            
        });
        setTodoList(temp);
    }

    const deletedItem = (id) =>{
        const temp = todolist.filter( (el)=>{
            return(el.id!==id)
        });
        setTodoList(temp);
    }
    
    return (
        <div className='container justify-content-center'>
            <h2 className='text-center'>Todo App</h2>
            <TodoList todolist={todolist} markAsDone={markedDone} deleteItem ={deletedItem} />
            <AddTodo update={updateTodoList}/>
        </div>
    );
}

export default Todo


// Class components for Todo.js

// export class Todo extends Component {
//     constructor(props) {
//         super(props)
        
//         this.state = {
//                 todolist : []
//             }

//         this.updatetodolist = this.updatetodolist.bind(this);
        
//     }

//     updatetodolist(todoText){
//         this.setState({
//             todolist: [...this.state.todolist,{
//                 task : todoText, 
//             }]
//         });
//     }

    

//     render() {
//     return (
        // <div className='container justify-content-center'>
        //     <h2 className='text-center'>Todo App</h2>
        //     <TodoList todolist={this.state.todolist} />
        //     <AddTodo update={this.updatetodolist}/>
        // </div>
//     )
//     }
// }

// export default Todo;
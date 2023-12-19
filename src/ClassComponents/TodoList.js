//import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

export class TodoList  extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
            todolist: [ {
                id:0,
                task:'run',
            }]
        }

        // this.deleteItem = this.deleteItem.bind(this);
    }

    // deleteItem(){
    //     this.setState({
    //         todolist: this.state.todolist.filter((obj) => {
    //           return obj.id !== id
    //         })
    //     });
    // }


    render() {
        return (
        <div className='container col-sm-7 mb-3 text-center table-container'>
            <Table striped bordered hover>
        <thead>
            <tr>
            <th>id</th>
            <th>Task</th>
            </tr>
        </thead>
        <tbody>
            {(this.props.todolist).map( ( ele )=>{
                return(
                    <tr key={ele.id} >
                        <td>{ele.id}</td>
                        <td>
                            {ele.task}
                        </td>
                        <td>
                        {/* <Button onClick={this.deleteItem(ele)} variant="outline-danger">Delete</Button> */}
                        </td>
                    </tr>
                )
            })}
        </tbody>
        </Table>
        </div>
        )
    }
}

export default TodoList
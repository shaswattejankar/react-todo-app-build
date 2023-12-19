//import Button from 'react-bootstrap/Button';
import React from 'react';
import Table from 'react-bootstrap/Table';

export const TodoList = ({todolist, markAsDone, deleteItem}) => {
    const onDone = (id) => {
        markAsDone(id);
    }

    const onDelete = (id) =>{
        deleteItem(id);
    }

    return (
        <div className='container col-sm-7 mb-3 text-center table-container'>
                <Table striped bordered hover>
            <thead> 
                <tr>
                <th className='id-col'>id</th>
                <th>Task</th>
                <th className='act-col'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {(todolist).map( ( ele , key )=>{
                    return(
                        <tr className={ele.status===2?'markDone':''}>
                            <td>{key+1}</td>
                            <td>
                                {ele.task}
                            </td>
                            <td>
                                <button onClick={()=>{onDone(ele.id)}} className='btn btn-outline-success btn-sm check-btn'>
                                    done
                                </button>
                                <button onClick={()=>{onDelete(ele.id)}} className='btn btn-outline-danger btn-sm delete-btn'>
                                    delete
                                </button>
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


export default TodoList




// Class compnents :: --

// export class TodoList  extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//             todolist: [ {  } ]
//         }

//         // this.deleteItem = this.deleteItem.bind(this);
//     }

//     // deleteItem(){
//     //     this.setState({
//     //         todolist: this.state.todolist.filter((obj) => {
//     //           return obj.id !== id
//     //         })
//     //     });
//     // }


//     render() {
//         return (
        // <div className='container col-sm-7 mb-3 text-center table-container'>
        //     <Table striped bordered hover>
        // <thead>
        //     <tr>
        //     <th>id</th>
        //     <th>Task</th>
        //     </tr>
        // </thead>
        // <tbody>
        //     {(this.props.todolist).map( ( ele )=>{
        //         return(
        //             <tr key={ele.id} >
        //                 <td>{ele.id}</td>
        //                 <td>
        //                     {ele.task}
        //                 </td>
        //                 <td>
        //                 {/* <Button onClick={this.deleteItem(ele)} variant="outline-danger">Delete</Button> */}
        //                 </td>
        //             </tr>
        //         )
        //     })}
        // </tbody>
        // </Table>
        // </div>
//         )
//     }
// }

// export default TodoList
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export class AddTodo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
            task:'',
            id:0,
        }

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onClickFunc = this.onClickFunc.bind(this);
        this.clearAll = this.clearAll.bind(this);
    }

    onChangeHandler(event){
        this.setState({
            task : event.target.value
        });
    }
    
    onClickFunc(e){
        this.setState({
            id: this.state.id+1
        }) 
        this.props.update(this.state.task, this.state.id);
        this.setState({
            task:''
        })
    }

    clearAll(){
        this.setState({
            task : ' ',
            id: 0,
        });
        
    }

    render() {
        return (
        <div className='container col-sm-8 inp-container'>
            <InputGroup className="mb-3">
            <Form.Control
            placeholder="Type you task here..."
            aria-label="task"
            aria-describedby="basic-addon2"
            value={this.state.task}
            id="input"
            onChange={this.onChangeHandler}
            />
            <Button onClick={this.onClickFunc}  variant="outline-secondary" id="button-addon2">
                Add Task
            </Button>

        </InputGroup>
        <div className='d-flex justify-content-center'>
            <Button onClick={this.clearAll} variant="outline-danger">Delete all</Button>
        </div>          
        </div>
        )
    }
}

export default AddTodo
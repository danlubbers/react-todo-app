import React, {Component} from 'react';
import './TodoInput.css';

export default class TodoInput extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    handleChange() {
        this.setstate({});
    }

    addTodo(todo) {
        this.setState({});
    }

    render() {
        return (
            <div>
                <input type="text" value="" onChange={this.handleChange} />
                <button className="btn btn=primary" onClick={_=> (this.state.value)}>Submit</button>
            </div>
        );
    }
}
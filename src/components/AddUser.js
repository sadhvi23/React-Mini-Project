import React, { Component } from 'react';

class AddUser extends Component {

    state = {
        name: null,
        age: null,
        isEditing: false
    }

    handleSubmit= (e) => {
        e.preventDefault();
        this.props.addUser(this.state);
        e.target.reset();
    }

    updateState = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input name="name" autoComplete="off" type="text" placeholder="Enter the name" required onChange={this.updateState} />
                    </div>
                    <div>
                        <input name="age" autoComplete="off" type="number" placeholder="Enter the age" required onChange={this.updateState} />
                    </div>
                    <div>
                        <input type="submit" value=" Add +"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddUser;
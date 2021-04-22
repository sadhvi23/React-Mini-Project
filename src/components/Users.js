import React, {Component} from 'react';

class Users extends Component {

    // Call Update User method of app.js
    handleUpdate = () => {
        this.props.updateUser(this.indexNum, this.name.value, this.age.value)
    }

    render() {
        const {allUsers, editUser, deleteUser} = this.props

        const usersList = allUsers.map((user, index) => {
            return user.isEditing === true ? (
                <tr>
                    <td> <input type="text" ref={(val) => {this.name = val}} required defaultValue={user.name} /></td>
                    <td><input type="number" ref={(val) => {this.age = val}} required defaultValue={user.age} /></td>
                    <td>
                        <input type="button" value="update" onClick={this.handleUpdate} ref={() => {this.indexNum = index}}/>
                    </td>
                </tr>
            ) : (
                <tr>
                    <td>{user.name}</td>
                    <td>{user.age}</td>
                    <button onClick = { () => editUser(index)}>Edit</button> | <button onClick={ () => deleteUser(index) }>Delete</button>
                </tr>
            )
        })
         
        // Return CRUD operation headers and data
        return (
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {usersList}
                </tbody>
            </table>
        )
    }
}

export default Users;
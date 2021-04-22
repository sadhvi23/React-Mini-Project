import React, {Component} from 'react'
// import Table from './components/Table'
// import Form from './components/Form'
import Users from './components/Users'
import AddUser from './components/AddUser'

class App extends Component {

    // Default data
    state = {
        users: [
            { name: "ABC", age: 17, isEditing:false },
            { name: "ABC1", age: 18, isEditing:false },
            { name: "ABC2", age: 19, isEditing:false }
        ]
    }

    // Create a user and add new user to users array
    addUser = (newUser) => {
        let users = [ ...this.state.users, newUser]
        this.setState({
            users
        });
    }

    // Edit user and set isediting true with the help of index i
    editUser = (i) => {
        let users = this.state.users
        users[i].isEditing = true;
        this.setState({
            users
        });
    }

    // Update users attributes
    updateUser = (i, name, age) => {
        let users = this.state.users
        users[i].name = name;
        users[i].age = age;
        users[i].isEditing = false;
        this.setState({
            users
        });
    }

    // Delete user using index as i
    deleteUser = (i) => {
        let users = this.state.users.filter((u, index) => {
            return index !== i
        })
        this.setState({
            users
        });
    }

    render() {
        return(
            <div className="container">
                <h2>CRUD OPERATIONS</h2>
                <Users allUsers={this.state.users} editUser={this.editUser} updateUser={this.updateUser} deleteUser={this.deleteUser} />
                <AddUser addUser={this.addUser} />
            </div>
        )
    }


    // Code used for Form.js and Table.js
    // Remove and render character data
    // removeCharacter = (index) => {
    //     const {characters} = this.state
    //     this.setState({
    //         characters: characters.filter((character, i) => {
    //             return i !== index
    //         })
    //     })
    // }

    // handleSubmit = (character) => {
    //     this.setState({characters: [...this.state.characters, character]})
    // }

    // render() {
    //     const {characters} = this.state 
    //     return (
    //         <div className="container">
    //             <Table characterData={characters}  removeCharacter={this.removeCharacter}/>
    //             <Form handleSubmit={this.handleSubmit} />
    //         </div>
    //     )
    // }
}

export default App
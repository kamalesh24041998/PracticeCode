import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Hooks from './components/Hooks';

function App() {
  const [state, setState] = useState({ users: [], name: '', email: '', editId: null });

  useEffect(() => {
    async function fetchUsers() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setState(prevState => ({ ...prevState, users: response.data }));
    }
    fetchUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = { id: state.editId || state.users.length + 1, name: state.name, email: state.email };

    try {
      if (state.editId) {
        // PUT request to update user
        await axios.put(`https://jsonplaceholder.typicode.com/users/${state.editId}`, newUser);

        // Update state manually
        setState(prevState => ({
          ...prevState,
          users: prevState.users.map(user => user.id === state.editId ? { ...user, ...newUser } : user),
          name: '',
          email: '',
          editId: null
        }));
      } else {
        // POST request to add new user
        const response = await axios.post('https://jsonplaceholder.typicode.com/users', newUser);
        
        setState(prevState => ({
          ...prevState,
          users: [...prevState.users, { ...response.data, id: newUser.id }],
          name: '',
          email: ''
        }));
      }
    } catch (error) {
      console.error('Error processing user:', error);
    }
  };

  const handleEdit = (user) => {
    setState(prevState => ({
      ...prevState,
      name: user.name,
      email: user.email,
      editId: user.id
    }));
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      setState(prevState => ({
        ...prevState,
        users: prevState.users.filter(user => user.id !== id)
      }));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <>
      <h2>User Management</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Enter Name" 
          value={state.name} 
          onChange={(e) => setState(prevState => ({ ...prevState, name: e.target.value }))} 
          required 
        />
        <input 
          type="email" 
          placeholder="Enter Email" 
          value={state.email} 
          onChange={(e) => setState(prevState => ({ ...prevState, email: e.target.value }))} 
          required 
        />
        <button>{state.editId ? 'Update User' : 'Add User'}</button>
      </form>

      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {state.users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleEdit(user)}>Edit</button>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Hooks/>
    </>
  );
}

export default App;

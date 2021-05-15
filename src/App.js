import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const [users, setUser] = useState([]);
  const getUserData = (user) => {
    setUser((prevUser) => {
      return [user, ...prevUser];
    });
  };
  return (
    <div>
      <AddUser onAddUser={getUserData} />
      <UserList users={users} />
    </div>
  );
}

export default App;

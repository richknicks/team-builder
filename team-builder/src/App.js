import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import FormCard from './components/FormCard';


function App() {
  const [team, setTeam]=useState([{
    name:"",
    email:"",
    role:""
  }]);
  const addNewMember = team => {
    const newMember = {
      name: team.name,
      email: team.email,
      role: team.role
    };
    setTeam([...team, newMember]);
  };
  return (
    <div className="App">
      <FormCard addNewMember={addNewMember}/>
      <Form team={team}/>
     
    </div>
  );
}

export default App;

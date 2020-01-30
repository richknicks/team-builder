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
  const addNewMember = person => {
    const newMember = {
      name: person.name,
      email: person.email,
      role: person.role
    };
    setTeam([...team, newMember]);
  };
  return (
    <div className="App">
      <Form addNewMember={addNewMember} />
      <FormCard team={team}/>
      
      
     
    </div>
  );
}

export default App;

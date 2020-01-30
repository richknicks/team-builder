import React, { useState } from 'react';
import styled from 'styled-components';

const FormDiv = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
width: 35%;
`;
const FormCard = (props) => {
    console.log('test', props)
    
    const [team, setTeam] = useState({
        name: "",
        email: "",
        role:""
      });
     
      const handleChanges = event => {
        setTeam({ ...team, [event.target.name]: event.target.value });
        console.log(team);
      };
      const submitForm = event => {
        event.preventDefault();
        props.addNewMember(team);
        setTeam({ name: "", email: "", role:"" });
      };

return(

    <FormDiv onSubmit={submitForm}>
        <label htmlFor="title">Team Member:</label>
        <input name="name" onChange={handleChanges}/>
        <label htmlFor="title">Member Email:</label>
        <input name="email" onChange={handleChanges}/>
        <label htmlFor="title">Member Role:</label>
        <select name="role" onChange={handleChanges}>
            <option >Please Select</option>
            <option >Full Stack Developer</option>
            <option >IOS</option>
            <option >Android</option>
            <option >Data Scientist</option>
        </select>
        <button type="submit">Add Team Member</button>
        </FormDiv>
)};

export default FormCard
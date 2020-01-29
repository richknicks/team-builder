import React, { useState } from "react";

const FormCard = props => {
    const [team, setTeam] = useState({
        name: "",
        email: "",
        role:""
      })};
      const handleChanges = event => {
        setTeam({ ...team, [event.target.team]: event.target.value });
        console.log(team);
      };
      const submitForm = event => {
        event.preventDefault();
        props.addNewMember(team);
        setTeam({ name: "", email: "", role:"" });
      };

return(
    <form onSubmit={submitForm}>
        <label htmlFor="title">Team Member:</label>
        <input type="text" onChange={handleChanges}/>
        <label htmlFor="title">Member Email:</label>
        <input type="text" onChange={handleChanges}/>
        <label htmlFor="title">Member Role:</label>
        <input type="text" onChange={handleChanges}/>
        </form>
)

export default FormCard
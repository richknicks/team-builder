import React from 'react';


const Form = (props) => {
    
return(
    
<div className="team-list">

{props.team.map(team =>
    <div className="team">
<p>  {team.name} </p>
<p>  {team.email} </p>
<p>  {team.role} </p>
</div>
)}

</div>
)};
export default Form

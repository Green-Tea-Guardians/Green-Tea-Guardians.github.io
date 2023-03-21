import React, { useState } from 'react';


function CreateGroup(props) {
    const [groupName, setGroupName] = useState('');
    const [groupDescription, setGroupDescription] = useState('');
  
    function handleGroupNameChange(event) {
      setGroupName(event.target.value);
    }
  
    function handleGroupDescriptionChange(event) {
      setGroupDescription(event.target.value);
    }
  
    function handleSubmit(event) {
      event.preventDefault();
  
      const newGroup = {
        name: groupName,
        description: groupDescription,
      };
  
      props.onCreateGroup(newGroup);
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Group Name:
          <input type="text" value={groupName} onChange={handleGroupNameChange} />
        </label>
        <label>
          Group Description:
          <textarea value={groupDescription} onChange={handleGroupDescriptionChange} />
        </label>
        <button type="submit">Create Group</button>
      </form>
    );
  }
  
  export default CreateGroup 
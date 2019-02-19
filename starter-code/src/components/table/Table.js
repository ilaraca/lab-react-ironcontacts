import React from 'react';

const Table = (props) => { 
  return props.actors.map ((contact) => {
    return (   
      <tr>
        <th><img width='100' src={contact.pictureUrl} alt =""/></th>
        <th>{contact.name}</th>
        <th>{contact.popularity}</th>
      </tr>
    );
  });
}

export default Table;
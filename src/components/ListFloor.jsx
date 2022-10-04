import React from 'react'
import Room from './Room';

const ListFloor = ({data}) => {
    
  return (
    <div>
        <table>
            <tr>
        <th>{data.name}</th>
        </tr>
        {data.children.map(room => ( 
            <tr> 
                <td>
                    <ul key={room.name}>
                    <Room  room={room} />
                    </ul>
                </td>
            </tr>
        ))}
        </table>
    </div>
  )
}

export default ListFloor
import React from 'react'
import ListFloor from './ListFloor';

const ListBuilding = ({data}) => {
  return (
    <div>
        <h1>Occupation du bâtiment : {data.name}</h1>
        {
            data.children.map(floors => (
                <ListFloor key={floors.name} data={floors} />
            ))//on passe l'étage en parametre pour recuperer les pièces se trouvant à une étage.
        }
    </div>
  )
}

export default ListBuilding